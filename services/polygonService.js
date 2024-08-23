const { Polygon } = require('./models/polygonModel');

let db;

async function createPolygon(coordinates) {
  if (!db) {
    const sqlite = require('sqlite3').verbose();
    db = new sqlite.Database('db.sqlite', (err) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log('Connected to the SQLite database.');
      }
    });
    await Polygon.createTable(db);
  }
  const polygon = new Polygon(null, coordinates);
  await Polygon.create(db, polygon);
  return polygon.id;
}

async function getPolygons() {
  if (!db) {
    const sqlite = require('sqlite3').verbose();
    db = new sqlite.Database('db.sqlite', (err) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log('Connected to the SQLite database.');
      }
    });
    await Polygon.createTable(db);
  }
  return await Polygon.get(db);
}

module.exports = { createPolygon, getPolygons };