const sqlite3 = require('sqlite3').verbose();

class Polygon {
  constructor(id, coordinates) {
    this.id = id;
    this.coordinates = coordinates;
  }

  static async createTable(db) {
    await db.run(`
      CREATE TABLE IF NOT EXISTS polygons (
        id INTEGER PRIMARY KEY,
        coordinates TEXT
      );
    `);
  }

  static async create(db, polygon) {
    await db.run(`
      INSERT INTO polygons (id, coordinates) VALUES (?, ?);
    `, polygon.id, JSON.stringify(polygon.coordinates));
  }

  static async get(db) {
    return await db.all(`
      SELECT * FROM polygons;
    `);
  }
}

module.exports = { Polygon };