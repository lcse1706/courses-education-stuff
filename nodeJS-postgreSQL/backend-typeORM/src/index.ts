import 'reflect-metadata';
import { AppDataSource } from './data-source';
import { User } from './entity/User';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(
  cors({
    origin: 'http://localhost:3000', // Adjust to your frontend address
    optionsSuccessStatus: 200,
  })
);
app.use(express.json()); // Handle JSON in requests

// Initialize database and start server
AppDataSource.initialize()
  .then(() => {
    console.log('Database connected successfully');

    // Endpoint: Get all users
    app.get('/users', async (req, res) => {
      try {
        const users = await AppDataSource.manager.find(User);
        res.json(users);
      } catch (err: unknown) {
        if (err instanceof Error) {
          res.status(500).json({ error: err.message });
        } else {
          res.status(500).json({ error: 'Unknown error occurred' });
        }
      }
    });

    // Endpoint: Add new user
    app.post('/users', async (req, res) => {
      const { name, gender, age } = req.body;
      try {
        const user = new User();
        user.name = name;
        user.gender = gender;
        user.age = age;
        await AppDataSource.manager.save(user);
        res.json(user);
      } catch (err: unknown) {
        if (err instanceof Error) {
          res.status(500).json({ error: err.message });
        } else {
          res.status(500).json({ error: 'Unknown error occurred' });
        }
      }
    });

    // Endpoint: Delete user
    app.delete('/users/:id', async (req, res) => {
      const { id } = req.params;
      try {
        await AppDataSource.manager.delete(User, id);
        res.json({ message: 'User deleted' });
      } catch (err: unknown) {
        if (err instanceof Error) {
          res.status(500).json({ error: err.message });
        } else {
          res.status(500).json({ error: 'Unknown error occurred' });
        }
      }
    });

    // Start server
    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(error => console.log(error));
