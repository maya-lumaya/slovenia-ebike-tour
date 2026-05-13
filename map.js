var _map;
var _routeLayers = [];
var DAY_COLORS = ['#dc2626', '#0ea5e9', '#8b5cf6', '#d97706', '#0d7a5f', '#16a34a'];

function _clearMap() {
  _routeLayers.forEach(function (l) { _map.removeLayer(l); });
  _routeLayers = [];
}

function _smallDot(color) {
  return L.divIcon({
    className: '',
    html: '<div style="background:' + color + ';width:8px;height:8px;border-radius:50%;border:2px solid white;box-shadow:0 1px 3px rgba(0,0,0,0.3)"></div>',
    iconSize: [8, 8], iconAnchor: [4, 4]
  });
}

function _nightDot(color) {
  return L.divIcon({
    className: '',
    html: '<div style="background:' + color + ';width:18px;height:18px;border-radius:50%;border:3px solid white;box-shadow:0 2px 6px rgba(0,0,0,0.35)"></div>',
    iconSize: [18, 18], iconAnchor: [9, 9]
  });
}

function _startDot() {
  return L.divIcon({
    className: '',
    html: '<div style="background:#0d7a5f;width:22px;height:22px;border-radius:50%;border:3px solid white;box-shadow:0 2px 6px rgba(0,0,0,0.4)"></div>',
    iconSize: [22, 22], iconAnchor: [11, 11]
  });
}

function _renderRoute(route) {
  _clearMap();

  // Draw each stage as a colored polyline
  route.stages.forEach(function (stage, i) {
    var color = DAY_COLORS[i] || DAY_COLORS[DAY_COLORS.length - 1];
    var latlngs = stage.waypoints.map(function (w) { return [w.lat, w.lng]; });
    var line = L.polyline(latlngs, { color: color, weight: 4, opacity: 0.85 }).addTo(_map);
    _routeLayers.push(line);

    // Small waypoint dots
    stage.waypoints.forEach(function (w) {
      var m = L.marker([w.lat, w.lng], { icon: _smallDot(color) })
        .bindPopup('<strong>' + w.name + '</strong><br><em>Tag ' + (i + 1) + '</em>')
        .addTo(_map);
      _routeLayers.push(m);
    });
  });

  // Overnight markers
  route.nights.forEach(function (night, i) {
    var color = DAY_COLORS[i] || DAY_COLORS[DAY_COLORS.length - 1];
    var acc = night.accommodations[0];
    var popup = '<strong>' + night.title + '</strong><br>' +
      '<a href="' + acc.website + '" target="_blank">' + acc.name + '</a><br>' +
      '<small>' + acc.price + '</small>';
    var m = L.marker([night.lat, night.lng], { icon: _nightDot(color) })
      .bindPopup(popup)
      .addTo(_map);
    _routeLayers.push(m);
  });

  // Bled start/end marker
  var bled = L.marker([46.3683, 14.1146], { icon: _startDot() })
    .bindPopup('<strong>Start / Ziel — Bled</strong><br><small>Parkplatz P03</small>')
    .addTo(_map);
  _routeLayers.push(bled);
}

window.updateMapVariant = function (versionId) {
  var route = window.ROUTES[versionId];
  if (route) { _renderRoute(route); }
};

document.addEventListener('DOMContentLoaded', function () {
  _map = L.map('map').setView([46.15, 13.9], 9);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
    maxZoom: 17
  }).addTo(_map);

  var route = window.ROUTES[window.ACTIVE_ROUTE || 'v1'];
  if (route) { _renderRoute(route); }
});
