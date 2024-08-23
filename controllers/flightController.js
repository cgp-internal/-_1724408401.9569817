const { processFlight } = require('../services/flightService');

async function flightGET(req, res) {
  try {
    const flightData = req.query;
    const polygonId = req.params.polygonId;
    const flight = await processFlight(flightData, polygonId);
    res.status(201).json(flight);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

module.exports = { flightGET };