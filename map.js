document.addEventListener('DOMContentLoaded', function () {
  var map = L.map('map').setView([46.15, 14.0], 9);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
    maxZoom: 17
  }).addTo(map);

  var stops = [
    { name: 'Bled',          lat: 46.3683, lng: 14.1146, day: 'Start / Ziel' },
    { name: 'Kranjska Gora',  lat: 46.4844, lng: 13.7856, day: 'Tag 1' },
    { name: 'Vršič-Pass',    lat: 46.4333, lng: 13.7436, day: 'Tag 1' },
    { name: 'Bovec',          lat: 46.3381, lng: 13.5519, day: 'Tag 1 Ziel' },
    { name: 'Kobarid',        lat: 46.2481, lng: 13.5794, day: 'Tag 2' },
    { name: 'Tolmin',         lat: 46.1831, lng: 13.7331, day: 'Tag 2 Ziel' },
    { name: 'Nova Gorica',    lat: 45.9558, lng: 13.6422, day: 'Tag 3' },
    { name: 'Ajdovščina',    lat: 45.8872, lng: 13.9094, day: 'Tag 3 Ziel' },
    { name: 'Predjama',       lat: 45.8153, lng: 14.1269, day: 'Tag 4' },
    { name: 'Cerknica',       lat: 45.7953, lng: 14.3619, day: 'Tag 4 Ziel' },
    { name: 'Ljubljana',      lat: 46.0569, lng: 14.5058, day: 'Tag 5' }
  ];

  var colors = {
    'Tag 1': '#dc2626',
    'Tag 2': '#0ea5e9',
    'Tag 3': '#8b5cf6',
    'Tag 4': '#d97706',
    'Tag 5': '#0d7a5f'
  };

  var segments = [
    { coords: [stops[0], stops[1], stops[2], stops[3]], color: colors['Tag 1'] },
    { coords: [stops[3], stops[4], stops[5]],           color: colors['Tag 2'] },
    { coords: [stops[5], stops[6], stops[7]],           color: colors['Tag 3'] },
    { coords: [stops[7], stops[8], stops[9]],           color: colors['Tag 4'] },
    { coords: [stops[9], stops[10], stops[0]],          color: colors['Tag 5'] }
  ];

  segments.forEach(function (seg) {
    var latlngs = seg.coords.map(function (s) { return [s.lat, s.lng]; });
    L.polyline(latlngs, { color: seg.color, weight: 4, opacity: 0.8 }).addTo(map);
  });

  stops.forEach(function (s) {
    var dayTag = s.day.replace(/ Ziel/, '').replace('Start / Ziel', 'Start');
    var markerColor = colors[dayTag] || '#0d7a5f';

    var icon = L.divIcon({
      className: 'custom-marker',
      html: '<div style="background:' + markerColor + ';width:14px;height:14px;border-radius:50%;border:3px solid white;box-shadow:0 1px 4px rgba(0,0,0,0.3)"></div>',
      iconSize: [14, 14],
      iconAnchor: [7, 7]
    });

    L.marker([s.lat, s.lng], { icon: icon })
      .bindPopup('<strong>' + s.name + '</strong><br>' + s.day)
      .addTo(map);
  });
});
