const { Polygon } = require('./polygonModel');
const { Flight } = require('./flightModel');

async function processFlight(flightData, polygonId) {
  const polygon = await Polygon.getPolygonById(polygonId);
  if (!polygon) {
    throw new Error(`Polygon with id ${polygonId} not found`);
  }

  const flight = new Flight(
    null,
    polygonId,
    flightData.departure_airport,
    flightData.arrival_airport,
    flightData.departure_time,
    flightData.arrival_time
  );

  await Flight.create(flight);
  return flight;
}

async function getFlightById(id) {
  return await Flight.findById(id);
}

async function getAllFlights() {
  return await Flight.findAll();
}

module.exports = { processFlight, getFlightById, getAllFlights };