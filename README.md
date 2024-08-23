README
================

Getting Started
--------------

1. Clone the repository using `git clone <repository-url>`.
2. Run `bash run.sh` to install Node, initialize a project, and install Express and SQLite.
3. Start the server by running `node app.js` in the terminal.
4. Open a web browser and navigate to `http://localhost:3000` to access the application.

Project Structure
----------------

* `app.js`: Main entry point for the web server application.
* `routes/api.js`: Defines routes for API requests.
* `controllers/polygonController.js` and `controllers/flightController.js`: Handle requests related to polygon drawing and flight processing.
* `services/polygonService.js` and `services/flightService.js`: Contain functions for creating, retrieving, and processing polygons, and processing flight requests.
* `models/polygonModel.js` and `models/flightModel.js`: Define the Polygon and Flight models for database interactions.
* `index.html`: Main entry point for the web application, includes Leaflet.js interactive map and user interface for drawing polygons.
* `public/js/script.js`: Handles client-side map interactions and sends requests to the backend API.
* `public/css/style.css`: Customizes the map and user interface.
* `package.json`: Lists project dependencies and scripts.
* `db.sqlite`: SQLite database for storing polygons and flight requests.

Technology Stack
----------------

* Express.js: Framework for building the web server application.
* Leaflet.js: Library for interactive mapping and drawing polygons on the map.
* SQLite: Database management system for storing polygons and flight requests.

Note: This README file provides basic documentation and a guide on how to run the project. For more information, please refer to the individual file descriptions and associated documentation.