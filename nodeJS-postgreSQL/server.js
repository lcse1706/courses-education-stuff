const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

// Inicjalizacja aplikacji Express
const app = express();
app.use(cors());
app.use(express.json());

// Połączenie z bazą danych PostgreSQL
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '123',
  port: 5432,
});

// Endpoint: Pobranie wszystkich użytkowników
app.get('/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Endpoint: Dodanie użytkownika
app.post('/users', async (req, res) => {
  const { name, gender, age } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO users (name, gender, age) VALUES ($1, $2, $3) RETURNING *',
      [name, gender, age]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Endpoint: Usunięcie użytkownika
app.delete('/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM users WHERE id = $1', [id]);
    res.json({ message: 'User deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Uruchomienie serwera
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
