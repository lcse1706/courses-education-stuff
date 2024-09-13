import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

// Endpoint: Get all users
app.get('/users', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Error retrieving users' });
  }
});

// Endpoint: Add new user
app.post('/users', async (req, res) => {
  const { name, gender, age } = req.body;
  try {
    const user = await prisma.user.create({
      data: { name, gender, age },
    });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Error adding user' });
  }
});

// Endpoint: Delete user
app.delete('/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.user.delete({
      where: { id: Number(id) },
    });
    res.json({ message: 'User deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Error deleting user' });
  }
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
