const { createPolygon, getPolygons } = require('../services/polygonService');

async function polygonPOST(req, res) {
  try {
    const coordinates = req.body.coordinates;
    const polygonId = await createPolygon(coordinates);
    res.status(201).send({ id: polygonId });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Failed to create polygon' });
  }
}

module.exports = { polygonPOST };