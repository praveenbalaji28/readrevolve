const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = 3000;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'bookexchange',
  password: 'Praveen28*',
  port: 5432,
});

app.use(bodyParser.json());
app.use(cors());

app.post('/submit-book', async (req, res) => {
  try {
    const { bookTitle, bookSubtitle, bookDescription, bookImage } = req.body;
    const client = await pool.connect();
    const result = await client.query('INSERT INTO books (title, subtitle, description, image_url) VALUES ($1, $2, $3, $4)', [bookTitle, bookSubtitle, bookDescription, bookImage]);
    client.release();
    res.status(200).json({ message: 'Book submitted successfully' });
  } catch (error) {
    console.error('Error submitting book:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/getbooks', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM books');
    client.release();
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/book/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM books WHERE id = $1', [id]);
    client.release();
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error fetching book:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
