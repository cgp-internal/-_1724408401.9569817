const sqlite3 = require('sqlite3').verbose();

class Flight {
    constructor(id, polygon_id, departure_airport, arrival_airport, departure_time, arrival_time) {
        this.id = id;
        this.polygon_id = polygon_id;
        this.departure_airport = departure_airport;
        this.arrival_airport = arrival_airport;
        this.departure_time = departure_time;
        this.arrival_time = arrival_time;
    }

    static async createTable() {
        const db = new sqlite3.Database('db.sqlite');
        await db.run(`
            CREATE TABLE IF NOT EXISTS flights (
                id INTEGER PRIMARY KEY,
                polygon_id INTEGER,
                departure_airport TEXT,
                arrival_airport TEXT,
                departure_time TEXT,
                arrival_time TEXT,
                FOREIGN KEY (polygon_id) REFERENCES polygons (id)
            );
        `);
        db.close();
    }

    static async findAll() {
        const db = new sqlite3.Database('db.sqlite');
        const flights = await db.all(`SELECT * FROM flights`);
        db.close();
        return flights.map((flight) => new Flight(flight.id, flight.polygon_id, flight.departure_airport, flight.arrival_airport, flight.departure_time, flight.arrival_time));
    }

    static async findById(id) {
        const db = new sqlite3.Database('db.sqlite');
        const flight = await db.get(`SELECT * FROM flights WHERE id = ?`, id);
        db.close();
        if (flight) {
            return new Flight(flight.id, flight.polygon_id, flight.departure_airport, flight.arrival_airport, flight.departure_time, flight.arrival_time);
        } else {
            return null;
        }
    }

    static async create(flight) {
        const db = new sqlite3.Database('db.sqlite');
        await db.run(`
            INSERT INTO flights (polygon_id, departure_airport, arrival_airport, departure_time, arrival_time)
            VALUES (?, ?, ?, ?, ?);
        `, flight.polygon_id, flight.departure_airport, flight.arrival_airport, flight.departure_time, flight.arrival_time);
        db.close();
    }

    static async update(flight) {
        const db = new sqlite3.Database('db.sqlite');
        await db.run(`
            UPDATE flights
            SET polygon_id = ?, departure_airport = ?, arrival_airport = ?, departure_time = ?, arrival_time = ?
            WHERE id = ?;
        `, flight.polygon_id, flight.departure_airport, flight.arrival_airport, flight.departure_time, flight.arrival_time, flight.id);
        db.close();
    }

    static async delete(id) {
        const db = new sqlite3.Database('db.sqlite');
        await db.run(`DELETE FROM flights WHERE id = ?`, id);
        db.close();
    }
}

module.exports = { Flight };