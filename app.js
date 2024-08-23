const express = require('express');
const app = express();
const router = require('./routes/api');
const { Polygon } = require('./models/polygonModel');

app.use(express.json());
app.use('/api', router);

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db.sqlite', (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Connected to the SQLite database.');
    Polygon.createTable(db);
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});