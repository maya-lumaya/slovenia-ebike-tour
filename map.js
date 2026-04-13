document.addEventListener('DOMContentLoaded', function () {
  var map = L.map('map').setView([46.15, 14.0], 9);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
    maxZoom: 17
  }).addTo(map);

  // Route waypoints
  var route = [
    { name: 'Bled',         lat: 46.3683, lng: 14.1146 },
    { name: 'Kranjska Gora', lat: 46.4844, lng: 13.7856 },
    { name: 'Vršič-Pass',   lat: 46.4333, lng: 13.7436 },
    { name: 'Bovec',         lat: 46.3381, lng: 13.5519 },
    { name: 'Kobarid',       lat: 46.2481, lng: 13.5794 },
    { name: 'Tolmin',        lat: 46.1831, lng: 13.7331 },
    { name: 'Nova Gorica',   lat: 45.9558, lng: 13.6422 },
    { name: 'Ajdovscina',    lat: 45.8872, lng: 13.9094 },
    { name: 'Predjama',      lat: 45.8153, lng: 14.1269 },
    { name: 'Cerknica',      lat: 45.7953, lng: 14.3619 },
    { name: 'Ljubljana',     lat: 46.0569, lng: 14.5058 }
  ];

  var colors = {
    'Tag 1': '#dc2626',
    'Tag 2': '#0ea5e9',
    'Tag 3': '#8b5cf6',
    'Tag 4': '#d97706',
    'Tag 5': '#0d7a5f'
  };

  // Route segments per day
  var segments = [
    { pts: [route[0], route[1], route[2], route[3]], color: colors['Tag 1'] },
    { pts: [route[3], route[4], route[5]],           color: colors['Tag 2'] },
    { pts: [route[5], route[6], route[7]],           color: colors['Tag 3'] },
    { pts: [route[7], route[8], route[9]],           color: colors['Tag 4'] },
    { pts: [route[9], route[10], route[0]],          color: colors['Tag 5'] }
  ];

  segments.forEach(function (seg) {
    var latlngs = seg.pts.map(function (s) { return [s.lat, s.lng]; });
    L.polyline(latlngs, { color: seg.color, weight: 4, opacity: 0.8 }).addTo(map);
  });

  // Small route-point markers
  route.forEach(function (r) {
    var icon = L.divIcon({
      className: 'custom-marker',
      html: '<div style="background:#94a3b8;width:8px;height:8px;border-radius:50%;border:2px solid white;box-shadow:0 1px 3px rgba(0,0,0,0.3)"></div>',
      iconSize: [8, 8],
      iconAnchor: [4, 4]
    });
    L.marker([r.lat, r.lng], { icon: icon })
      .bindPopup('<strong>' + r.name + '</strong>')
      .addTo(map);
  });

  // Overnight stops -- researched addresses
  var overnights = [
    {
      name: 'Bled',
      lat: 46.3683, lng: 14.1146,
      label: 'Start / Ziel',
      color: '#0d7a5f'
    },
    {
      name: 'Kmetija Jelincic',
      lat: 46.3745, lng: 13.5523,
      label: 'Nacht 1 -- Dorf Soca<br>174 EUR gesamt, 4 Lagerfeuerstellen',
      color: colors['Tag 1']
    },
    {
      name: 'Turisticna kmetija Pri Kafolu',
      lat: 46.1810, lng: 13.7350,
      label: 'Nacht 2 -- Prapetno/Tolmin<br>ab 125 EUR gesamt, Biohof direkt an der Soca',
      color: colors['Tag 2']
    },
    {
      name: 'Arkade Cigoj / Kmetija Tomazic',
      lat: 45.8910, lng: 13.8800,
      label: 'Nacht 3 -- Vipava-Tal<br>~170-190 EUR gesamt, Weingut-Terrasse',
      color: colors['Tag 3']
    },
    {
      name: 'Tekavca Ograda',
      lat: 45.7770, lng: 14.3780,
      label: 'Nacht 4 -- Lipsenj (Cerknisko jezero)<br>~120-180 EUR gesamt, Grillplatz, direkt am See',
      color: colors['Tag 4']
    }
  ];

  overnights.forEach(function (s) {
    var icon = L.divIcon({
      className: 'custom-marker',
      html: '<div style="background:' + s.color + ';width:18px;height:18px;border-radius:50%;border:3px solid white;box-shadow:0 2px 6px rgba(0,0,0,0.35)"></div>',
      iconSize: [18, 18],
      iconAnchor: [9, 9]
    });
    L.marker([s.lat, s.lng], { icon: icon })
      .bindPopup('<strong>' + s.name + '</strong><br>' + s.label)
      .addTo(map);
  });
});
