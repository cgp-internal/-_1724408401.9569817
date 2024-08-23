let map;
let polygonLayers = [];

document.addEventListener("DOMContentLoaded", () => {
  const mapDiv = document.getElementById("map");
  map = L.map(mapDiv).setView([51.505, -0.09], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
    subdomains: ["a", "b", "c"],
  }).addTo(map);

  map.on("dblclick", (e) => {
    const latlng = [e.latlng.lat, e.latlng.lng];
    drawPolygon(latlng);
  });
});

function drawPolygon(latlng) {
  const polygon = L.polygon([latlng], {
    color: "red",
    weight: 3,
    opacity: 0.5,
  }).addTo(map);

  polygonLayers.push(polygon);

  const polygonData = polygon.getLatLngs()[0].map((latlng) => [latlng.lat, latlng.lng]);

  sendPolygonToBackend(polygonData);
}

function sendPolygonToBackend(polygonData) {
  fetch("/api/polygon", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ polygon: polygonData }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}