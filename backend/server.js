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
  password: 'Pravee28*',
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

    console.log('Book submitted successfully');
    res.status(200).json({ message: 'Book submitted successfully' });
  } catch (error) {
    console.error('Error submitting book:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
