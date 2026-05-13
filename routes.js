window.PARKING = {
  primary: {
    name: 'P03 Centralno parkirišče',
    address: 'Cesta svobode, 4260 Bled (10 Min. Fußweg zum See)',
    cost: '~€140/Woche (€2.50/Std., nur 08:00–20:00 bezahlt)',
    notes: '199 Stellplätze · 6 EV-Lader · unbegrenzte Parkdauer. Für Wochentarif anfragen: parking@bled.si',
    link: 'https://parking.bled.si/en/parking-lots/'
  },
  alt: {
    name: 'Bahnhof Lesce-Bled (5 km von Bled)',
    address: 'Alpska cesta, 4248 Lesce',
    cost: 'Kostenlos oder ~€1–2/Tag',
    notes: 'Inoffizieller Langzeitparkplatz am Bahnhof. Zug nach Bled: 10 Min., häufige Verbindungen.',
    link: 'https://parking.bled.si/en/parking-lots/'
  }
};

window.ROUTES = {

  // ─── V1: TRIGLAV NORD (6 Tage) ─────────────────────────────────────────────
  v1: {
    id: 'v1',
    label: 'Triglav Nord',
    tagline: 'Mehr Zeit im Nationalpark — Vršič genießen, nicht hetzen',
    heroTag: '6 Tage · ~456 km · ~5.700 Hm',
    breadcrumb: 'Bled → Vršič → Trenta → Soča → Goriška Brda → Vipava → Cerknica → Bled',
    days: 6, km: 456, hm: '5.700',
    introText: '~456 km und ~5.700 Höhenmeter auf 6 Tage (verifiziert via Google Maps). Tag 1 endet im Triglav-Nationalpark — zwei volle Tage im NP. Achtung: Tag 6 (Rückweg) ist 139 km — optionaler Shuttle ab Grahovo empfohlen.',
    stages: [
      {
        day: 1, title: 'Bled → Vršič-Pass → Trenta (Na Logu)',
        km: 68, hm: 1350,
        desc: 'Radweg entlang der Sava bis Kranjska Gora, dann der Vršič-Pass mit seinen 50 Kehren. Belohnung: erste Sicht auf die smaragdgrüne Soča und Abstieg ins stille Trenta-Tal — Übernachtung mitten im Nationalpark.',
        highlight: 'Vršič-Pass (1.611 m) · Quelle der Soča (Detour 500 m) · Übernachtung im Triglav-NP',
        waypoints: [
          {name:'Bled',lat:46.3683,lng:14.1146},
          {name:'Kranjska Gora',lat:46.4836,lng:13.7869},
          {name:'Vršič-Pass (1.611 m)',lat:46.4356,lng:13.7445},
          {name:'Izvir Soče',lat:46.3949,lng:13.7433},
          {name:'Na Logu v Trenti',lat:46.3773,lng:13.6931}
        ]
      },
      {
        day: 2, title: 'Trenta → Bovec → Kobarid',
        km: 43, hm: 480,
        desc: 'Fast ausschließlich bergab oder flach entlang der Soča. Boka-Wasserfall (106 m), Velika Korita-Schlucht bei Bovec, Napoleon-Brücke kurz vor Kobarid. Perfekter Erholungstag nach dem Pass.',
        highlight: 'Boka-Wasserfall (Sloweniens höchster) · Velika Korita-Schlucht · Napoleon-Brücke',
        waypoints: [
          {name:'Na Logu v Trenti',lat:46.3773,lng:13.6931},
          {name:'Soča',lat:46.3556,lng:13.6744},
          {name:'Bovec',lat:46.3367,lng:13.5527},
          {name:'Boka-Wasserfall',lat:46.3149,lng:13.5601},
          {name:'Napoleon-Brücke',lat:46.2431,lng:13.5819},
          {name:'Kobarid',lat:46.2486,lng:13.5820}
        ]
      },
      {
        day: 3, title: 'Kobarid → Tolmin → Goriška Brda',
        km: 64, hm: 950,
        desc: 'Flach bis Tolmin, dann Aufstieg in die Weinregion Goriška Brda. Mittelalterliches Šmartno, Rebula-Weinproben, Meerblick. Sloweniens Toskana.',
        highlight: 'Tolminer Schluchten · Šmartno (mittelalterliches Weindorf) · Goriška Brda Weinberge',
        waypoints: [
          {name:'Kobarid',lat:46.2486,lng:13.5820},
          {name:'Tolmin',lat:46.1863,lng:13.7313},
          {name:'Most na Soči',lat:46.1556,lng:13.7249},
          {name:'Šmartno (Brda)',lat:45.9997,lng:13.5505},
          {name:'Dobrovo',lat:45.9958,lng:13.5284}
        ]
      },
      {
        day: 4, title: 'Goriška Brda → Vipava-Tal',
        km: 59, hm: 620,
        desc: 'Abstieg aus den Weinbergen in die Vipava-Ebene, Radweg entlang des Flusses. Kurzer Grenzübertritt nach Gorizia möglich (Kaffee in Italien). Ankunft beim Weingut-Agriturismus.',
        highlight: 'Nova Gorica / Gorizia Grenze · Karstquelle der Vipava · Weingut-Übernachtung',
        waypoints: [
          {name:'Dobrovo',lat:45.9958,lng:13.5284},
          {name:'Nova Gorica',lat:45.9558,lng:13.6422},
          {name:'Vipava',lat:45.8469,lng:13.9611},
          {name:'Črniče / Ajdovščina',lat:45.8815,lng:13.9019}
        ]
      },
      {
        day: 5, title: 'Vipava → Predjama-Burg → Cerknisko jezero',
        km: 82, hm: 1050,
        desc: 'Aufstieg auf das Karstplateau, Predjama Castle direkt in einen 123-m-Felsen gebaut. Rakov Škocjan Naturbögen als verstecktes Highlight vor dem Ziel. Abend am größten intermittierenden See Europas.',
        highlight: 'Predjama Castle · Rakov Škocjan Naturbögen · Cerknisko jezero',
        waypoints: [
          {name:'Ajdovščina',lat:45.8815,lng:13.9019},
          {name:'Razdrto',lat:45.7991,lng:14.0382},
          {name:'Predjama Castle',lat:45.8153,lng:14.1237},
          {name:'Postojna',lat:45.7797,lng:14.2142},
          {name:'Dolenje Jezero',lat:45.7751,lng:14.3870}
        ]
      },
      {
        day: 6, title: 'Cerknisko jezero → Bloška planota → Škofja Loka → Bled',
        km: 139, hm: 1250,
        desc: 'Rückweg über das einsame Bloke-Plateau und ins Selška-Tal. Kein Ljubljana. Tipp: Shuttle ab Grahovo bis Žiri (≈35 km sparen) → dann nur 56 km nach Bled. Škofja Loka als letzter Kulturstopp.',
        highlight: 'Bloška planota · Škofja Loka Altstadt · Sava-Radweg · Shuttle-Option ab Grahovo',
        waypoints: [
          {name:'Dolenje Jezero',lat:45.7751,lng:14.3870},
          {name:'Nova Vas na Blokah',lat:45.7672,lng:14.5067},
          {name:'Žiri',lat:46.0478,lng:14.1085},
          {name:'Škofja Loka',lat:46.1659,lng:14.3042},
          {name:'Radovljica',lat:46.3442,lng:14.1714},
          {name:'Bled',lat:46.3683,lng:14.1146}
        ]
      }
    ],
    nights: [
      {
        title: 'Nacht 1 — Trenta-Tal, Triglav-Nationalpark',
        lat: 46.372, lng: 13.694,
        accommodations: [
          {
            primary: true,
            type: 'Bergcamp · Triglav NP',
            name: 'Kamp Triglav – Apartments',
            website: 'https://kamp-triglav.si/en/',
            booking: 'https://booking.kamp-triglav.si/en/book',
            price: '~€120–180 gesamt · 4–6 Pers. · Apartment',
            desc: 'Direkt am Soča-Fluss im Herzen des Triglav-NP. Apartments für 4–6 Personen, Fluss-Terrasse. Min. 2 Nächte Juli–Aug. — frühzeitig buchen.',
            contact: 'Trenta 18a, 5232 Soča · booking.kamp-triglav.si'
          },
          {
            primary: false,
            type: 'Öko-Kmetija · Triglav NP',
            name: 'Ekološka turistična kmetija Pri Plajerju',
            website: 'https://www.eko-plajer.com/en',
            booking: null,
            price: '~€225–250 gesamt · 5 Pers. · 2 Apartments',
            desc: 'Einer der besten Öko-Bauernhöfe Sloweniens direkt am Soča-Quellfluss. 5 Apartments, Infrarotsauna, außergewöhnliche Biokost. Nur Direktbuchung.',
            contact: 'Trenta 16a · info@eko-plajer.com · +386 41 873 884'
          }
        ]
      },
      {
        title: 'Nacht 2 — Soča-Tal, Kobarid',
        lat: 46.238, lng: 13.592,
        accommodations: [
          {
            primary: true,
            type: 'Öko-Kmetija · Soča-Tal',
            name: 'Ekološka turistična kmetija Žvanč',
            website: 'https://www.ekokmetija-zvanc.si',
            booking: 'https://www.booking.com/hotel/si/turisticna-kmetija-zvanc.html',
            price: '~€100–140 gesamt · 5 Pers.',
            desc: 'Ruhiger Bergbauernhof oberhalb Kobarid mit Grill-Terrasse und Panoramablick. Öko-zertifiziert, hauseigener Käse.',
            contact: 'Drežniške Ravne 30a, Kobarid · kmetija.zvanc@gmail.com · +386 5 384 86 56'
          },
          {
            primary: false,
            type: 'Kmetija #1 Kobarid · Booking 9.3',
            name: 'Turistična kmetija Kranjc',
            website: 'https://www.turizem-kranjc.si/en/',
            booking: 'https://www.booking.com/hotel/si/farm-stay-kranjc.html',
            price: '~€195–260 gesamt · 5 Pers.',
            desc: '#1 Unterkunft Kobarid (9.3/10). Restaurant, Bergblick, ruhiges Drežnica-Dorf oberhalb der Soča-Schlucht.',
            contact: 'Drežnica 22, 5222 Kobarid · über Booking.com'
          }
        ]
      },
      {
        title: 'Nacht 3 — Goriška Brda, Weinregion',
        lat: 45.996, lng: 13.528,
        accommodations: [
          {
            primary: true,
            type: 'Weingut-Kmetija · Goriška Brda',
            name: 'Turistična kmetija Breg',
            website: 'https://turizembreg.com/en/accomodation/',
            booking: null,
            price: '~€250–300 gesamt · 5 Pers.',
            desc: 'Altes Steinhaus in den Brda-Hügeln. 5 Zimmer benannt nach lokalen Früchten, gemeinschaftliche Küche, 200-jährige Eiche. Weinberge und Olivenhain ringsum.',
            contact: 'Breg pri Golem Brdu 3, Dobrovo · info@turizembreg.com · +386 5 304 25 55'
          },
          {
            primary: false,
            type: 'Weingut · E-Bike Laden ✓',
            name: 'Turistična kmetija Štanfel',
            website: 'https://stanfel.si/en/',
            booking: 'https://stanfel.si/en/',
            price: '~€250–300 gesamt · 5 Pers.',
            desc: '9.1/10 Booking (270 Bew.). Antike Einrichtung, Weinkeller-Touren, E-Bike-Lagerung und Laden explizit möglich. 125 m² Gemeinschaftsraum.',
            contact: 'Kojsko, Goriška Brda · stefan@stanfel.si · +386 31 680 297'
          }
        ]
      },
      {
        title: 'Nacht 4 — Vipava-Tal',
        lat: 45.882, lng: 13.904,
        accommodations: [
          {
            primary: true,
            type: 'Weingut · Gault&Millau',
            name: 'Turistična kmetija Arkade Cigoj',
            website: 'https://www.arkade-cigoj.com',
            booking: 'https://www.booking.com/hotel/si/turistiana-kmetija-arkade.html',
            price: '~€160–220 gesamt · 5 Pers. · 3 DZ',
            desc: 'Gault&Millau-gelistetes Agriturismus-Restaurant im Vipava-Tal. Große Sonnenterrasse, Hauswein, traditionelle Vipava-Küche. 3 km flach ab Ajdovščina.',
            contact: 'Črniče 91, 5262 Črniče · arkade.cigoj@siol.net · +386 31 300 400'
          },
          {
            primary: false,
            type: 'Großes Kmetija · Vipava',
            name: 'Turistična kmetija Malovščevo',
            website: 'https://www.malovscevo.si',
            booking: 'https://www.booking.com/hotel/si/farm-stay-malovscevo.html',
            price: '~€190–250 gesamt · 5 Pers.',
            desc: 'Größtes Kmetija im Vipava-Tal — 18 Zimmer, 35 Gäste. Zuverlässige Gruppenkapazität, eigener Wein, Bergblick. 8.8/10 Booking.',
            contact: 'Vitovlje 68, Šempas · info@malovscevo.si · +386 5 307 88 90'
          }
        ]
      },
      {
        title: 'Nacht 5 — Cerknisko jezero',
        lat: 45.777, lng: 14.387,
        accommodations: [
          {
            primary: true,
            type: 'Kmetija · Direkt am See',
            name: 'Tekavča Ograda',
            website: 'https://tekavca-ograda.com/',
            booking: null,
            price: '~€120–180 gesamt · 5 Pers.',
            desc: 'Einzige Unterkunft direkt am Seeufer in Lipsenj. Morgens schaut ihr auf den See. Grillplatz, Bioeier und Hausschinken kaufbar. 4.8/5 TripAdvisor.',
            contact: 'Lipsenj 32, 1384 Grahovo · tekavca.ograda@gmail.com · +386 51 660 892'
          },
          {
            primary: false,
            type: 'Kmetija · Žerovnica',
            name: 'Turistična kmetija Logar',
            website: 'https://www.tk-logar.com/',
            booking: 'https://www.booking.com/hotel/si/turisticna-kmetija-logar.html',
            price: '~€130–180 gesamt · 5 Pers.',
            desc: 'Nachbardorf Žerovnica (2 km). Forum-Apartment für 5, Notranjska-Hausküche, Fahrradverleih.',
            contact: 'Žerovnica 16 · info@tk-logar.com · +386 31 784 232'
          }
        ]
      }
    ]
  },

  // ─── V2: KÜRZERE ETAPPEN (5 Tage) ──────────────────────────────────────────
  v2: {
    id: 'v2',
    label: 'Kürzere Etappen',
    tagline: 'Gleiche Highlights, halbe Qual — kein Tag über 75 km',
    heroTag: '5 Tage · ~440 km · ~4.930 Hm',
    breadcrumb: 'Bled → Vršič → Bovec → Tolmin → Vipava → Predjama → Cerknica → Bled',
    days: 5, km: 440, hm: '4.930',
    introText: '~440 km auf 5 Tage (verifiziert via Google Maps). Achtung: Tag 5 (Rückweg Cerknisko jezero → Bled) ist 140 km — der längste Tag dieser Variante. Shuttle-Option ab Žiri prüfen.',
    stages: [
      {
        day: 1, title: 'Bled → Vršič-Pass → Bovec',
        km: 85, hm: 1500,
        desc: 'Radweg entlang der Sava bis Kranjska Gora, dann der legendäre Vršič-Pass (900 Hm in 12 km). Im Eco-Modus gut machbar. Grandiose Abfahrt durchs Trenta-Tal nach Bovec.',
        highlight: 'Vršič-Pass (1.611 m) · Russische Kapelle · Erste Sicht auf die Soča',
        waypoints: [
          {name:'Bled',lat:46.3683,lng:14.1146},
          {name:'Kranjska Gora',lat:46.4836,lng:13.7869},
          {name:'Vršič-Pass (1.611 m)',lat:46.4356,lng:13.7445},
          {name:'Trenta / Soča-Quelle',lat:46.3949,lng:13.7433},
          {name:'Soča',lat:46.3556,lng:13.6744},
          {name:'Bovec',lat:46.3367,lng:13.5527}
        ]
      },
      {
        day: 2, title: 'Bovec → Kobarid → Tolmin',
        km: 41, hm: 530,
        desc: 'Perfekter Erholungstag. Fast ausschließlich flach entlang der smaragdgrünen Soča. Napoleon-Brücke, WWI-Museum Kobarid (30 Min. Pflicht), Sotočje-Badestelle bei Tolmin.',
        highlight: 'Smaragdgrüne Soča · WWI-Museum Kobarid · Napoleon-Brücke · Sotočje-Badestelle',
        waypoints: [
          {name:'Bovec',lat:46.3367,lng:13.5527},
          {name:'Napoleon-Brücke',lat:46.2431,lng:13.5819},
          {name:'Kobarid',lat:46.2486,lng:13.5820},
          {name:'Tolmin',lat:46.1863,lng:13.7313},
          {name:'Pri Kafolu / Prapetno',lat:46.1810,lng:13.7270}
        ]
      },
      {
        day: 3, title: 'Tolmin → Goriška Brda → Vipava-Tal',
        km: 85, hm: 900,
        desc: 'Soča-Radweg bis Kanal ob Soči, dann hinauf in die Weinberge von Goriška Brda. Šmartno-Weindorf, Dobrovo-Schloss. Abstieg ins Vipava-Tal mit Weingut-Übernachtung.',
        highlight: 'Solkan-Brücke · Šmartno (mittelalterliches Weindorf) · Goriška Brda · Vipava-Tal',
        waypoints: [
          {name:'Tolmin',lat:46.1863,lng:13.7313},
          {name:'Most na Soči',lat:46.1556,lng:13.7249},
          {name:'Kanal ob Soči',lat:45.9970,lng:13.6200},
          {name:'Šmartno (Brda)',lat:45.9997,lng:13.5505},
          {name:'Dobrovo',lat:45.9958,lng:13.5284},
          {name:'Vitovlje / Šempas',lat:45.9160,lng:13.7100}
        ]
      },
      {
        day: 4, title: 'Vipava-Tal → Predjama-Burg → Cerknisko jezero',
        km: 90, hm: 1100,
        desc: 'Vipava-Radweg bis Ajdovščina, Aufstieg aufs Karstplateau. Predjama Castle — Burg direkt in einen 123-m-Felsen gebaut. Rakov Škocjan Naturbögen als verstecktes Highlight. Abend am Cerknisco jezero.',
        highlight: 'Predjama Castle · Rakov Škocjan · Cerknisco jezero',
        waypoints: [
          {name:'Šempas / Vitovlje',lat:45.9160,lng:13.7100},
          {name:'Ajdovščina',lat:45.8873,lng:13.9093},
          {name:'Vipava',lat:45.8469,lng:13.9619},
          {name:'Predjama Castle',lat:45.8158,lng:14.1235},
          {name:'Postojna',lat:45.7797,lng:14.2142},
          {name:'Rakov Škocjan',lat:45.8000,lng:14.3150},
          {name:'Lipsenj / Cerknisko jezero',lat:45.7900,lng:14.3560}
        ]
      },
      {
        day: 5, title: 'Cerknisko jezero → Bloška planota → Škofja Loka → Bled',
        km: 140, hm: 900,
        desc: 'Rückweg über das einsame Bloke-Plateau — stille Hochlandfarmen, null Autos. Žiri, Škofja Loka (perfekt erhaltene Altstadt), dann Sava-Radweg flach zurück nach Bled. Kein Ljubljana. Mission accomplished.',
        highlight: 'Bloška planota · Škofja Loka Altstadt · Sava-Radweg nach Bled',
        waypoints: [
          {name:'Lipsenj',lat:45.7900,lng:14.3560},
          {name:'Nova Vas na Blokah',lat:45.7720,lng:14.5030},
          {name:'Logatec',lat:45.9162,lng:14.2285},
          {name:'Žiri',lat:46.0470,lng:14.1100},
          {name:'Škofja Loka',lat:46.1659,lng:14.3042},
          {name:'Kranj',lat:46.2389,lng:14.3556},
          {name:'Radovljica',lat:46.3427,lng:14.1721},
          {name:'Bled',lat:46.3683,lng:14.1146}
        ]
      }
    ],
    nights: [
      {
        title: 'Nacht 1 — Soča-Tal, Dorf Soča',
        lat: 46.360, lng: 13.677,
        accommodations: [
          {
            primary: true,
            type: 'Turistična kmetija · Soča-Fluss',
            name: 'Kmetija & Kamp Jelinčič',
            website: 'https://kmetijakampjelincic.si/index_en.html',
            booking: null,
            price: '~€135–250 gesamt · 5 Pers. · Apt. oder Kamra',
            desc: 'Arbeitender Schafbauernhof direkt an der Soča, auf der Abstiegsroute. Großes Apartment (4+2) + Kamra-Schlafsaal. Hausgemachter Schafskäse, Forellen-Spezialität. Nur Direktbuchung.',
            contact: 'Soča 50, 5232 Soča · kmetija.kamp.jelincic@gmail.com · +386 31 753 162'
          },
          {
            primary: false,
            type: 'Öko-Kmetija · Trenta NP',
            name: 'Ekološka turistična kmetija Pri Plajerju',
            website: 'https://www.eko-plajer.com/en',
            booking: null,
            price: '~€225–250 gesamt · 5 Pers.',
            desc: 'Zertifizierter Biohof am Soča-Quellfluss (18 km vor Bovec). 5 Apartments, Infrarotsauna, außergewöhnliche Biokost.',
            contact: 'Trenta 16a · info@eko-plajer.com · +386 41 873 884'
          }
        ]
      },
      {
        title: 'Nacht 2 — Soča-Tal, Tolmin',
        lat: 46.181, lng: 13.727,
        accommodations: [
          {
            primary: true,
            type: 'Biokmetija · Prapetno/Tolmin',
            name: 'Turistična kmetija Pri Kafolu',
            website: 'https://tourist-farm-pri-kafolu-villa.slovenia-hotel.com/en/',
            booking: 'https://www.booking.com/hotel/si/turistiana-kmetija-pri-kafolu.html',
            price: '~€300–400 gesamt · 5 Pers. · nur Barzahlung',
            desc: '1,2 km von Tolmin, Pool und Terrasse mit Soča-Blick. Organic-Farm-Küche, Fahrradverleih, 300+ Bewertungen. Achtung: nur Barzahlung.',
            contact: 'Prapetno 15, 5220 Tolmin · über Booking.com'
          },
          {
            primary: false,
            type: 'Öko-Kmetija · Kobarid',
            name: 'Ekološka turistična kmetija Žvanč',
            website: 'https://www.ekokmetija-zvanc.si',
            booking: 'https://www.booking.com/hotel/si/turisticna-kmetija-zvanc.html',
            price: '~€100–140 gesamt · 5 Pers.',
            desc: 'Öko-zertifizierter Bergbauernhof oberhalb Kobarid. Grillterrasse, Bergblick, hauseigener Käse.',
            contact: 'Drežniške Ravne 30a · kmetija.zvanc@gmail.com'
          }
        ]
      },
      {
        title: 'Nacht 3 — Vipava-Tal',
        lat: 45.916, lng: 13.710,
        accommodations: [
          {
            primary: true,
            type: 'Kmetija · 18 Zimmer · Vipava',
            name: 'Turistična kmetija Malovščevo',
            website: 'https://www.malovscevo.si',
            booking: 'https://www.booking.com/hotel/si/farm-stay-malovscevo.html',
            price: '~€190–250 gesamt · 5 Pers.',
            desc: 'Größtes Kmetija im Vipava-Tal — 18 Zimmer, 35 Gäste. Eigener Wein, Bergblick. Direkt auf der Route Brda → Vipava. 8.8/10 Booking.',
            contact: 'Vitovlje 68, Šempas · info@malovscevo.si · +386 5 307 88 90'
          },
          {
            primary: false,
            type: 'Weingut · Brda-Hügel · 9.4',
            name: 'Turistična kmetija Valentinčič Turizem',
            website: 'https://www.valentincic-turizem.si/?lang=en',
            booking: 'https://www.viaslovenia.com/en/tourist-farms/brda/tourist-farm-valentincic--turizem.html',
            price: '~€165–330 gesamt · 5 Pers.',
            desc: '9.4/10. 6 Zimmer + 6 Apartments, Weinkeller, Sauna, Pool. Am Beginn der Brda-Hügel direkt auf der Route.',
            contact: 'Podsabotin 48a, Nova Gorica · uros.valentincic@siol.net · +386 41 651 939'
          }
        ]
      },
      {
        title: 'Nacht 4 — Cerknisko jezero',
        lat: 45.790, lng: 14.356,
        accommodations: [
          {
            primary: true,
            type: 'Kmetija · Direkt am See',
            name: 'Tekavča Ograda',
            website: 'https://tekavca-ograda.com/',
            booking: null,
            price: '~€120–180 gesamt · 5 Pers.',
            desc: 'Einzige Unterkunft direkt am Seeufer. Morgens schaut ihr auf den See. Grillplatz, Bioeier und Hausschinken. 4.8/5 TripAdvisor. Nur Direktbuchung.',
            contact: 'Lipsenj 32, 1384 Grahovo · tekavca.ograda@gmail.com · +386 51 660 892'
          },
          {
            primary: false,
            type: 'Kmetija · Žerovnica',
            name: 'Turistična kmetija Logar',
            website: 'https://www.tk-logar.com/',
            booking: 'https://www.booking.com/hotel/si/turisticna-kmetija-logar.html',
            price: '~€130–180 gesamt · 5 Pers.',
            desc: 'Nachbardorf Žerovnica (2 km). Forum-Apartment für 5, Notranjska-Hausküche, Fahrradverleih.',
            contact: 'Žerovnica 16 · info@tk-logar.com · +386 31 784 232'
          }
        ]
      }
    ]
  },

  // ─── V3: TRIGLAV BOHINJ (6 Tage) ───────────────────────────────────────────
  v3: {
    id: 'v3',
    label: 'Triglav Bohinj',
    tagline: 'Bohinj zuerst — zwei Gesichter des Nationalparks',
    heroTag: '6 Tage · ~559 km · ~6.380 Hm',
    breadcrumb: 'Bled → Pokljuka → Bohinj → Vršič → Trenta → Kobarid → Brda → Vipava → Crknica → Bled',
    days: 6, km: 559, hm: '6.380',
    introText: '~559 km auf 6 Tage (verifiziert via Google Maps) — zwei Gesichter des Triglav-NP: Tag 1 über Pokljuka/Bohinj, Tag 2 über den Vršič. Achtung: Tag 5 (133 km) und Tag 6 (139 km) sind sehr lang — die anspruchsvollste der drei Varianten.',
    stages: [
      {
        day: 1, title: 'Bled → Pokljuka-Plateau → Bohinj-See',
        km: 66, hm: 1100,
        desc: 'Sanfter Einstieg hinauf aufs Pokljuka-Plateau (1.300 m). Biathlon-Stadion Rudno Polje, dann Zajamniki-Alm — eine der fotogensten Almwiesen Sloweniens mit Triglav-Panorama. Abstieg zum smaragdgrünen Bohinj-See.',
        highlight: 'Pokljuka-Plateau · Zajamniki-Alm · Bohinj-See (touristisch ruhiger als Bled)',
        waypoints: [
          {name:'Bled',lat:46.3683,lng:14.1146},
          {name:'Rudno Polje (Biathlon)',lat:46.3470,lng:13.9730},
          {name:'Zajamniki-Alm',lat:46.3180,lng:13.9100},
          {name:'Uskovnica-Hütte (1.154 m)',lat:46.3205,lng:13.9094},
          {name:'Bohinjska Bistrica',lat:46.2713,lng:13.9549},
          {name:'Bohinj-See / Studor',lat:46.2930,lng:13.9800}
        ]
      },
      {
        day: 2, title: 'Bohinj → Vršič-Pass (1.611 m) → Trenta',
        km: 92, hm: 1380,
        desc: 'Der epischste Tag. Von Bohinj über Goreljek nach Kranjska Gora, dann der legendäre Vršič. Quelle der Soča (kurzer Fußweg), Abstieg ins stille Trenta-Tal. Zwei Berge in einem Tag.',
        highlight: 'Vršič-Pass (1.611 m) · Russische Kapelle · Quelle der Soča · Trenta-Tal',
        waypoints: [
          {name:'Bohinjska Bistrica',lat:46.2713,lng:13.9549},
          {name:'Goreljek-Sattel',lat:46.3620,lng:13.9820},
          {name:'Kranjska Gora',lat:46.4836,lng:13.7869},
          {name:'Vršič-Pass (1.611 m)',lat:46.4356,lng:13.7445},
          {name:'Izvir Soče',lat:46.3949,lng:13.7433},
          {name:'Trenta / Soča',lat:46.3699,lng:13.7200}
        ]
      },
      {
        day: 3, title: 'Trenta → Bovec → Kobarid',
        km: 45, hm: 650,
        desc: 'Flussdag entlang der smaragdgrünen Soča. Boka-Wasserfall (106 m, Sloweniens höchster), Velika Korita-Schlucht, Napoleon-Brücke. WWI-Museum Kobarid kurz vor der Unterkunft.',
        highlight: 'Boka-Wasserfall · Bovec Adventure-Hub · Napoleon-Brücke · WWI-Museum',
        waypoints: [
          {name:'Trenta / Soča',lat:46.3699,lng:13.7200},
          {name:'Velika Korita-Schlucht',lat:46.3621,lng:13.7100},
          {name:'Bovec',lat:46.3367,lng:13.5534},
          {name:'Boka-Wasserfall',lat:46.3149,lng:13.5601},
          {name:'Drežnica',lat:46.2820,lng:13.5530},
          {name:'Kobarid',lat:46.2464,lng:13.5771}
        ]
      },
      {
        day: 4, title: 'Kobarid → Tolmin → Goriška Brda',
        km: 86, hm: 850,
        desc: 'Tolminer Schluchten als Detour (absolut empfohlen), flach bis Most na Soči. Aufstieg in die Brda-Weinberge: Dobrovo-Schloss, Rebula-Weinproben. Übernachtung auf preisgekröntem Weingut.',
        highlight: 'Tolminer Schluchten · Most na Soči-Stausee · Goriška Brda Weingüter',
        waypoints: [
          {name:'Kobarid',lat:46.2464,lng:13.5771},
          {name:'Tolmin',lat:46.1855,lng:13.7319},
          {name:'Most na Soči',lat:46.1556,lng:13.7419},
          {name:'Solkan-Brücke',lat:45.9652,lng:13.6453},
          {name:'Dobrovo',lat:45.9947,lng:13.5320},
          {name:'Kojsko / Štekar',lat:45.9810,lng:13.5610}
        ]
      },
      {
        day: 5, title: 'Goriška Brda → Vipava → Predjama → Cerknisco jezero',
        km: 133, hm: 1200,
        desc: 'Längster und vielfältigster Tag. Vipava-Radweg, Aufstieg aufs Nanos-Plateau, Predjama Castle. Rakov Škocjan Naturbögen als verstecktes Highlight. Abend am Cerknisco jezero.',
        highlight: 'Vipava-Tal · Predjama Castle · Rakov Škocjan · Cerknisco jezero',
        waypoints: [
          {name:'Kojsko / Štekar',lat:45.9810,lng:13.5610},
          {name:'Vipava',lat:45.8448,lng:13.9618},
          {name:'Podnanos',lat:45.7986,lng:13.9872},
          {name:'Razdrto',lat:45.7819,lng:14.0100},
          {name:'Predjama Castle',lat:45.8161,lng:14.1229},
          {name:'Postojna',lat:45.7764,lng:14.2148},
          {name:'Rakov Škocjan',lat:45.8000,lng:14.2600},
          {name:'Lipsenj / Cerknisco jezero',lat:45.7800,lng:14.4100}
        ]
      },
      {
        day: 6, title: 'Cerknisco jezero → Bloška planota → Rakitna → Bled',
        km: 139, hm: 1200,
        desc: 'Abschlusstag über das einsame Bloke-Plateau und Rakitna — Forststraßen, null Touristen. Škofja Loka als letzter Kulturstopp, dann Sava-Radweg flach nach Bled. Kein Ljubljana.',
        highlight: 'Bloška planota · Rakitna-Aussicht · Škofja Loka · Heimkehr nach Bled',
        waypoints: [
          {name:'Lipsenj',lat:45.7800,lng:14.4100},
          {name:'Žerovnica',lat:45.7650,lng:14.3750},
          {name:'Bloška planota',lat:45.7720,lng:14.5050},
          {name:'Rakitna',lat:45.9020,lng:14.3580},
          {name:'Škofja Loka',lat:46.1659,lng:14.3042},
          {name:'Radovljica',lat:46.3441,lng:14.1714},
          {name:'Bled',lat:46.3683,lng:14.1146}
        ]
      }
    ],
    nights: [
      {
        title: 'Nacht 1 — Bohinj-Tal, Triglav-Nationalpark',
        lat: 46.293, lng: 13.980,
        accommodations: [
          {
            primary: true,
            type: 'Kmetija · Bohinj-Tal',
            name: "Turistična kmetija Gartner – Pr' Odolneku",
            website: 'https://bohinjgartner.com/',
            booking: 'https://www.booking.com/hotel/si/turisticna-kmetija-gartner.html',
            price: '~€120–160 gesamt · 5 Pers. · Apartment 4+1',
            desc: 'Arbeitender Milchbauernhof mitten im Bohinj-Tal, 1,5 km vom See. Dorf Studor mit traditionellen Heuaufzügen (Kozolci) — eines der meist fotografierten Dörfer Sloweniens.',
            contact: 'Studor v Bohinju 3A · info@bohinjgartner.com · +386 41 205 182'
          },
          {
            primary: false,
            type: 'Berghütte · Pokljuka (1.154 m)',
            name: 'Koča na Uskovnici',
            website: 'https://tdbohinj.si/en/td-accomodation/uskovnica-mountain-hut/',
            booking: null,
            price: '~€110–130 gesamt · 5 Pers. · Halbpension',
            desc: 'Renovierte (2021) Berghütte direkt auf dem Pokljuka-Plateau im Triglav-NP. Direkt auf der Tagesroute. Rustikales Ambiente, ausgezeichnetes Hüttenessen.',
            contact: 'Über TD Bohinj: td.bohinj@siol.net · +386 4 574 60 10'
          }
        ]
      },
      {
        title: 'Nacht 2 — Trenta-Tal, Triglav-Nationalpark',
        lat: 46.369, lng: 13.720,
        accommodations: [
          {
            primary: true,
            type: 'Öko-Kmetija · Triglav NP',
            name: 'Ekološka turistična kmetija Pri Plajerju',
            website: 'https://www.eko-plajer.com/en',
            booking: 'https://ecobnb.com/SI-municipality-of-bovec/farm-house/organic-vacation-farm-pri-plajerju/sNWvl',
            price: '~€225–250 gesamt · 5 Pers. · 2 Apartments',
            desc: 'Bester Öko-Bauernhof Westsloweniens — direkt am Soča-Quellfluss im NP. 5 Apartments, Infrarotsauna, außergewöhnliche Biokost. 3–4 Monate im Voraus buchen.',
            contact: 'Trenta 16a, 5232 Soča · info@eko-plajer.com · +386 41 873 884'
          },
          {
            primary: false,
            type: 'Kmetija · Soča-Fluss',
            name: 'Turistična kmetija Jelinčič',
            website: 'https://kmetijakampjelincic.si/index_en.html',
            booking: null,
            price: '~€135–200 gesamt · 5 Pers.',
            desc: 'Familienbauernhof direkt an der Soča (Haus Nr. 50!). Schafskäse, Forellen-Spezialität. 4 km von Bovec.',
            contact: 'Soča 50, 5232 Soča · kmetija.kamp.jelincic@gmail.com · +386 5 388 95 10'
          }
        ]
      },
      {
        title: 'Nacht 3 — Soča-Tal, Kobarid',
        lat: 46.223, lng: 13.565,
        accommodations: [
          {
            primary: true,
            type: 'Kmetija #1 Kobarid · Booking 9.3',
            name: 'Turistična kmetija Kranjc',
            website: 'https://www.turizem-kranjc.si/en/',
            booking: 'https://www.booking.com/hotel/si/farm-stay-kranjc.html',
            price: '~€195–260 gesamt · 5 Pers.',
            desc: '#1 Unterkunft Kobarid (9.3/10). Restaurant mit lokaler Küche, Bergblick, ruhiges Dorf Drežnica 5 km südlich. Auf der Tagesroute.',
            contact: 'Drežnica 22, 5222 Kobarid · über Booking.com'
          },
          {
            primary: false,
            type: 'Öko-Kmetija · Tolminc-Käse · 9.6',
            name: 'Ekološka turistična kmetija Pri Lovrču',
            website: 'http://www.prilovrcu.si/en/',
            booking: 'https://www.booking.com/hotel/si/ekoloska-turisticna-kmetija-pri-lovrcu.html',
            price: '~€200–250 gesamt · 5 Pers. · 2 Apartments',
            desc: '9.6/10 — außergewöhnliche Qualität. Tolminc-Käse PDO vom Hof. Bergterrasse über dem Soča-Tal, BBQ, Restaurant. In Čadrg (12 km von Kobarid).',
            contact: 'Čadrg 23, 5220 Tolmin · prilovrcu@gmail.com · +386 5 381 11 54'
          }
        ]
      },
      {
        title: 'Nacht 4 — Goriška Brda, Weinregion',
        lat: 45.981, lng: 13.561,
        accommodations: [
          {
            primary: true,
            type: 'Preisgekröntes Weingut · Brda',
            name: 'Kmetija Štekar (Hiša Štekar)',
            website: 'https://www.stekar.si/index-eng.html',
            booking: 'https://www.booking.com/hotel/si/kmetija-stekar.html',
            price: '~€250–350 gesamt · 5 Pers.',
            desc: 'Preisgekröntes Weingut im Herz der Brda-Hügel. Pool, Garten, Weinkeller-Touren (€30/Pers.). 5 Doppelzimmer + 2 Familienzimmer, alles mit eigenem Bad.',
            contact: 'Snežatno 26a, 5211 Kojsko · hisastekar@gmail.com · +38641335320'
          },
          {
            primary: false,
            type: 'Weingut · E-Bike Laden ✓',
            name: 'Turistična kmetija Štanfel',
            website: 'https://stanfel.si/en/',
            booking: 'https://stanfel.si/en/',
            price: '~€250/Nacht · 5 Pers.',
            desc: '9.2 Bewertung. E-Bike-Lagerung und Laden. 125 m² Gemeinschaftsraum. Weinberge ringsum.',
            contact: 'Kojsko · stefan@stanfel.si · +386 31 680 297'
          }
        ]
      },
      {
        title: 'Nacht 5 — Cerknisko jezero',
        lat: 45.780, lng: 14.410,
        accommodations: [
          {
            primary: true,
            type: 'Kmetija · Direkt am See',
            name: 'Tekavča Ograda',
            website: 'https://tekavca-ograda.com/',
            booking: null,
            price: '~€120–180 gesamt · 5 Pers.',
            desc: 'Einzige Unterkunft direkt am Seeufer in Lipsenj. Morgens Seeblick, Grillplatz, Bioeier kaufbar. 4.8/5 TripAdvisor. Notranjski-Nationalpark-gelistet.',
            contact: 'Lipsenj 32, 1384 Grahovo · tekavca.ograda@gmail.com · +386 51 660 892'
          },
          {
            primary: false,
            type: 'Kmetija · Žerovnica',
            name: 'Turistična kmetija Logar',
            website: 'https://www.tk-logar.com/',
            booking: 'https://www.booking.com/hotel/si/turisticna-kmetija-logar.html',
            price: '~€130–180 gesamt · 5 Pers.',
            desc: 'Nachbardorf Žerovnica (3 km). Geschlossene Gruppen bis 15 Pers., Forum-Apartment für 5, traditionelle Hausküche.',
            contact: 'Žerovnica 16 · info@tk-logar.com · +386 31 784 232'
          }
        ]
      }
    ]
  },

  // ─── V4: NP EXTENDED + BOHINJSKA BAHN (6 Tage) ────────────────────────────
  v4: {
    id: 'v4',
    label: 'NP Extended + Bahn',
    tagline: 'Zwei NP-Tage, Wandertag Trenta, Goriška Brda — Heimreise per Bohinjska Bahn',
    heroTag: '6 Tage · ~305 km · ~4.800 Hm · 🚂 Bahn zurück',
    breadcrumb: 'Bled → Pokljuka → Bohinj → Vršič → Trenta (2×) → Kobarid → Brda → 🚂 Bled',
    days: 6, km: 305, hm: '4.800',
    introText: '~305 km und ~4.800 Hm auf 5 Radtage — kein 139-km-Rückweg. Stattdessen Bohinjska Bahn von Nova Gorica pittoresk zurück nach Bled (~2 Std.). Tag 3 ist ein Wandertag im Triglav-NP: Soča-Quellsee, Almpfade, kein Gepäck. E-Bike-Policy Bahn: vor Fahrt bei SŽ klären (Akku-Regelung).',
    stages: [
      {
        day: 1, title: 'Bled → Pokljuka-Plateau → Bohinj-See',
        km: 66, hm: 1100,
        desc: 'Hinauf aufs Pokljuka-Plateau (1.300 m): Biathlon-Stadion Rudno Polje, Zajamniki-Alm mit Triglav-Panorama. Abstieg zum touristisch ruhigeren Bohinj-See — erster NP-Tag ohne Hetze.',
        highlight: 'Pokljuka-Plateau · Zajamniki-Alm · Bohinj-See',
        waypoints: [
          {name:'Bled',lat:46.3683,lng:14.1146},
          {name:'Rudno Polje (Biathlon)',lat:46.3470,lng:13.9730},
          {name:'Zajamniki-Alm',lat:46.3180,lng:13.9100},
          {name:'Uskovnica-Hütte (1.154 m)',lat:46.3205,lng:13.9094},
          {name:'Bohinjska Bistrica',lat:46.2713,lng:13.9549},
          {name:'Bohinj-See / Studor',lat:46.2930,lng:13.9800}
        ]
      },
      {
        day: 2, title: 'Bohinj → Vršič-Pass (1.611 m) → Trenta',
        km: 92, hm: 1380,
        desc: 'Der epischste Tag — und jetzt habt ihr die Zeit, die er verdient. Von Bohinj über Goreljek nach Kranjska Gora, dann die 50 Kehren des Vršič. Quelle der Soča (kurzer Fußweg), Abstieg ins stille Trenta-Tal. Zweiter NP-Tag.',
        highlight: 'Vršič-Pass (1.611 m) · Russische Kapelle · Quelle der Soča · Trenta-Tal',
        waypoints: [
          {name:'Bohinjska Bistrica',lat:46.2713,lng:13.9549},
          {name:'Goreljek-Sattel',lat:46.3620,lng:13.9820},
          {name:'Kranjska Gora',lat:46.4836,lng:13.7869},
          {name:'Vršič-Pass (1.611 m)',lat:46.4356,lng:13.7445},
          {name:'Izvir Soče',lat:46.3949,lng:13.7433},
          {name:'Trenta / Na Logu',lat:46.3773,lng:13.6931}
        ]
      },
      {
        day: 3, title: 'Wandertag — Triglav-NP, Soča-Quellsee & Almpfade',
        km: 20, hm: 500,
        desc: 'Kein Gepäck, kein Ziel. Wanderung zum Soča-Quellsee (9 km Rundweg ab Trenta), Almpfade Richtung Vršič, oder Füße in die Soča. Wer radeln will: Soča-Flussweg bis Bovec und zurück (~40 km, flach). Zweite Nacht im Nationalpark.',
        highlight: 'Soča-Quellsee (Wanderziel) · Triglav-NP Almpfade · Soča-Flussweg optional',
        waypoints: [
          {name:'Trenta / Na Logu',lat:46.3773,lng:13.6931},
          {name:'Izvir Soče (Wanderziel)',lat:46.3949,lng:13.7433},
          {name:'Bovec (optional per Rad)',lat:46.3367,lng:13.5527}
        ]
      },
      {
        day: 4, title: 'Trenta → Bovec → Kobarid',
        km: 45, hm: 650,
        desc: 'Entspannter Flusslauf entlang der smaragdgrünen Soča. Boka-Wasserfall (106 m, Sloweniens höchster), Velika Korita-Schlucht, Napoleon-Brücke. WWI-Museum Kobarid direkt auf der Route.',
        highlight: 'Boka-Wasserfall · Velika Korita-Schlucht · Napoleon-Brücke · WWI-Museum',
        waypoints: [
          {name:'Trenta / Na Logu',lat:46.3773,lng:13.6931},
          {name:'Bovec',lat:46.3367,lng:13.5527},
          {name:'Boka-Wasserfall',lat:46.3149,lng:13.5601},
          {name:'Napoleon-Brücke',lat:46.2431,lng:13.5819},
          {name:'Kobarid',lat:46.2486,lng:13.5820}
        ]
      },
      {
        day: 5, title: 'Kobarid → Tolmin → Goriška Brda',
        km: 64, hm: 950,
        desc: 'Flach bis Tolmin, Most na Soči-Stausee, dann Aufstieg in die Brda-Weinberge. Šmartno (mittelalterliches Weindorf), Dobrovo-Schloss, Rebula-Weinproben. Letzte Nacht — morgen früh Bahn.',
        highlight: 'Most na Soči-Stausee · Šmartno · Dobrovo-Schloss · Goriška Brda',
        waypoints: [
          {name:'Kobarid',lat:46.2486,lng:13.5820},
          {name:'Tolmin',lat:46.1863,lng:13.7313},
          {name:'Most na Soči',lat:46.1556,lng:13.7249},
          {name:'Šmartno (Brda)',lat:45.9997,lng:13.5505},
          {name:'Dobrovo',lat:45.9958,lng:13.5284}
        ]
      },
      {
        day: 6, title: 'Goriška Brda → Nova Gorica → 🚂 Bohinjska Bahn → Bled',
        km: 18, hm: 200,
        desc: 'Kurzer Morgenritt durch die Brda-Hügel nach Nova Gorica Bahnhof (~18 km). Räder in den Zug, Bohinjska Bahn (SŽ): historische Alpenbahnstrecke durch Podbrdo-Tunnel → Most na Soči → Bohinjska Bistrica → Bled Jezero → Lesce-Bled (~2 Std.). Fahrplan: potniski.sz.si · Fahrrad-Supplement: ~€3–5 · E-Bikes: Akku-Policy mit SŽ vorab klären.',
        highlight: '🚂 Bohinjska Bahn (historische Alpenbahn) · Podbrdo-Tunnel · Bled Jezero',
        waypoints: [
          {name:'Dobrovo (Brda)',lat:45.9958,lng:13.5284},
          {name:'Šmartno',lat:45.9997,lng:13.5505},
          {name:'Nova Gorica Bahnhof → 🚂',lat:45.9571,lng:13.6399}
        ]
      }
    ],
    nights: [
      {
        title: 'Nacht 1 — Bohinj-Tal, Triglav-Nationalpark',
        lat: 46.293, lng: 13.980,
        accommodations: [
          {
            primary: true,
            type: 'Kmetija · Bohinj-Tal',
            name: "Turistična kmetija Gartner – Pr' Odolneku",
            website: 'https://bohinjgartner.com/',
            booking: 'https://www.booking.com/hotel/si/turisticna-kmetija-gartner.html',
            price: '~€120–160 gesamt · 5 Pers. · Apartment 4+1',
            desc: 'Arbeitender Milchbauernhof mitten im Bohinj-Tal, 1,5 km vom See. Dorf Studor mit traditionellen Heuaufzügen — eines der meist fotografierten Dörfer Sloweniens.',
            contact: 'Studor v Bohinju 3A · info@bohinjgartner.com · +386 41 205 182'
          },
          {
            primary: false,
            type: 'Berghütte · Pokljuka (1.154 m)',
            name: 'Koča na Uskovnici',
            website: 'https://tdbohinj.si/en/td-accomodation/uskovnica-mountain-hut/',
            booking: null,
            price: '~€110–130 gesamt · 5 Pers. · Halbpension',
            desc: 'Renovierte Berghütte direkt auf dem Pokljuka-Plateau im NP. Rustikales Ambien, ausgezeichnetes Hüttenessen. Auf der Tagesroute.',
            contact: 'Über TD Bohinj: td.bohinj@siol.net · +386 4 574 60 10'
          }
        ]
      },
      {
        title: 'Nacht 2 — Trenta-Tal, Triglav-Nationalpark',
        lat: 46.372, lng: 13.694,
        accommodations: [
          {
            primary: true,
            type: 'Bergcamp · Triglav NP',
            name: 'Kamp Triglav – Apartments',
            website: 'https://kamp-triglav.si/en/',
            booking: 'https://booking.kamp-triglav.si/en/book',
            price: '~€120–180 gesamt · 4–6 Pers. · Apartment',
            desc: 'Direkt am Soča-Fluss im Nationalpark. Apartments für 4–6 Personen. Min. 2 Nächte Juli–Aug. — frühzeitig buchen. Ideal für Wandertag.',
            contact: 'Trenta 18a, 5232 Soča · booking.kamp-triglav.si'
          },
          {
            primary: false,
            type: 'Öko-Kmetija · Triglav NP',
            name: 'Ekološka turistična kmetija Pri Plajerju',
            website: 'https://www.eko-plajer.com/en',
            booking: null,
            price: '~€225–250 gesamt · 5 Pers. · 2 Apartments',
            desc: 'Bester Öko-Bauernhof Westsloweniens — direkt am Soča-Quellfluss. 5 Apartments, Infrarotsauna, Biokost. 2 Nächte buchen für Wandertag möglich.',
            contact: 'Trenta 16a · info@eko-plajer.com · +386 41 873 884'
          }
        ]
      },
      {
        title: 'Nacht 3 — Soča-Tal / Bovec (2. NP-Nacht)',
        lat: 46.360, lng: 13.677,
        accommodations: [
          {
            primary: true,
            type: 'Kmetija · Soča-Fluss',
            name: 'Kmetija & Kamp Jelinčič',
            website: 'https://kmetijakampjelincic.si/index_en.html',
            booking: null,
            price: '~€135–250 gesamt · 5 Pers. · Apt. oder Kamra',
            desc: 'Arbeitender Schafbauernhof direkt an der Soča, 4 km von Bovec — auf der Wandertag-Optimalroute. Großes Apartment (4+2), Hausschafskäse. Nur Direktbuchung.',
            contact: 'Soča 50, 5232 Soča · kmetija.kamp.jelincic@gmail.com · +386 31 753 162'
          },
          {
            primary: false,
            type: 'Öko-Kmetija · Triglav NP',
            name: 'Ekološka turistična kmetija Pri Plajerju',
            website: 'https://www.eko-plajer.com/en',
            booking: null,
            price: '~€225–250 gesamt · 5 Pers.',
            desc: '2. Nacht am selben Ort — ideal wenn der Wandertag in Trenta bleibt und keine Umsiedlung gewünscht.',
            contact: 'Trenta 16a · info@eko-plajer.com · +386 41 873 884'
          }
        ]
      },
      {
        title: 'Nacht 4 — Soča-Tal, Kobarid',
        lat: 46.238, lng: 13.592,
        accommodations: [
          {
            primary: true,
            type: 'Kmetija #1 Kobarid · Booking 9.3',
            name: 'Turistična kmetija Kranjc',
            website: 'https://www.turizem-kranjc.si/en/',
            booking: 'https://www.booking.com/hotel/si/farm-stay-kranjc.html',
            price: '~€195–260 gesamt · 5 Pers.',
            desc: '#1 Unterkunft Kobarid (9.3/10). Restaurant, Bergblick, Dorf Drežnica oberhalb der Soča.',
            contact: 'Drežnica 22, 5222 Kobarid · über Booking.com'
          },
          {
            primary: false,
            type: 'Öko-Kmetija · Kobarid',
            name: 'Ekološka turistična kmetija Žvanč',
            website: 'https://www.ekokmetija-zvanc.si',
            booking: 'https://www.booking.com/hotel/si/turisticna-kmetija-zvanc.html',
            price: '~€100–140 gesamt · 5 Pers.',
            desc: 'Ruhiger Bergbauernhof oberhalb Kobarid, Grill-Terrasse, Panoramablick. Öko-zertifiziert, hauseigener Käse.',
            contact: 'Drežniške Ravne 30a · kmetija.zvanc@gmail.com · +386 5 384 86 56'
          }
        ]
      },
      {
        title: 'Nacht 5 — Goriška Brda, Weinregion',
        lat: 45.996, lng: 13.528,
        accommodations: [
          {
            primary: true,
            type: 'Preisgekröntes Weingut · Brda',
            name: 'Kmetija Štekar (Hiša Štekar)',
            website: 'https://www.stekar.si/index-eng.html',
            booking: 'https://www.booking.com/hotel/si/kmetija-stekar.html',
            price: '~€250–350 gesamt · 5 Pers.',
            desc: 'Preisgekröntes Weingut im Herz der Brda-Hügel. Pool, Weinkeller-Touren (€30/Pers.). Morgen früh 18 km nach Nova Gorica Bahnhof.',
            contact: 'Snežatno 26a, 5211 Kojsko · hisastekar@gmail.com · +38641335320'
          },
          {
            primary: false,
            type: 'Weingut · E-Bike Laden ✓',
            name: 'Turistična kmetija Štanfel',
            website: 'https://stanfel.si/en/',
            booking: 'https://stanfel.si/en/',
            price: '~€250–300 gesamt · 5 Pers.',
            desc: '9.2/10. E-Bike-Lagerung und Laden explizit möglich — ideal vor dem Bahntag. 125 m² Gemeinschaftsraum, Weinberge ringsum.',
            contact: 'Kojsko · stefan@stanfel.si · +386 31 680 297'
          }
        ]
      }
    ]
  },

  // ─── V5: SOČA + BOHINJSKA BAHN (5 Tage) ───────────────────────────────────
  v5: {
    id: 'v5',
    label: 'Soča + Bahn',
    tagline: 'Vršič, Soča-Tal, Goriška Brda — direkter Einstieg, Bahn zurück',
    heroTag: '5 Tage · ~215 km · ~3.700 Hm · 🚂 Bahn zurück',
    breadcrumb: 'Bled → Vršič → Trenta (2×) → Kobarid → Brda → 🚂 Bled',
    days: 5, km: 215, hm: '3.700',
    introText: '~215 km und ~3.700 Hm auf 4 Radtage — kompakter Einstieg direkt über den Vršič. Tag 2 ist ein Wandertag im Triglav-NP (Soča-Quellsee, Almpfade). Rückreise per Bohinjska Bahn von Nova Gorica nach Bled (~2 Std.). Kürzeste Variante — ideal als Ersttoure oder Kurztrip.',
    stages: [
      {
        day: 1, title: 'Bled → Vršič-Pass → Trenta (Na Logu)',
        km: 68, hm: 1350,
        desc: 'Radweg entlang der Sava bis Kranjska Gora, dann der Vršič-Pass mit seinen 50 Kehren. Belohnung: erste Sicht auf die smaragdgrüne Soča und Abstieg ins stille Trenta-Tal — Übernachtung mitten im Nationalpark.',
        highlight: 'Vršič-Pass (1.611 m) · Russische Kapelle · Quelle der Soča · Triglav-NP',
        waypoints: [
          {name:'Bled',lat:46.3683,lng:14.1146},
          {name:'Kranjska Gora',lat:46.4836,lng:13.7869},
          {name:'Vršič-Pass (1.611 m)',lat:46.4356,lng:13.7445},
          {name:'Izvir Soče',lat:46.3949,lng:13.7433},
          {name:'Na Logu v Trenti',lat:46.3773,lng:13.6931}
        ]
      },
      {
        day: 2, title: 'Wandertag — Triglav-NP, Soča-Quellsee & Almpfade',
        km: 20, hm: 500,
        desc: 'Kein Gepäck, kein Ziel. Wanderung zum Soča-Quellsee (9 km Rundweg), Almpfade Richtung Vršič, oder Füße in die Soča. Wer radeln will: Soča-Flussweg bis Bovec und zurück (~40 km, flach). Zweite Nacht im Nationalpark.',
        highlight: 'Soča-Quellsee · Triglav-NP Wanderpfade · Soča-Flussweg optional',
        waypoints: [
          {name:'Trenta / Na Logu',lat:46.3773,lng:13.6931},
          {name:'Izvir Soče (Wanderziel)',lat:46.3949,lng:13.7433},
          {name:'Bovec (optional per Rad)',lat:46.3367,lng:13.5527}
        ]
      },
      {
        day: 3, title: 'Trenta → Bovec → Kobarid',
        km: 45, hm: 650,
        desc: 'Entspannter Flusslauf entlang der smaragdgrünen Soča. Boka-Wasserfall (106 m), Velika Korita-Schlucht, Napoleon-Brücke. WWI-Museum Kobarid kurz vor der Unterkunft.',
        highlight: 'Boka-Wasserfall · Velika Korita-Schlucht · Napoleon-Brücke · WWI-Museum',
        waypoints: [
          {name:'Na Logu v Trenti',lat:46.3773,lng:13.6931},
          {name:'Bovec',lat:46.3367,lng:13.5527},
          {name:'Boka-Wasserfall',lat:46.3149,lng:13.5601},
          {name:'Napoleon-Brücke',lat:46.2431,lng:13.5819},
          {name:'Kobarid',lat:46.2486,lng:13.5820}
        ]
      },
      {
        day: 4, title: 'Kobarid → Tolmin → Goriška Brda',
        km: 64, hm: 950,
        desc: 'Flach bis Tolmin, Most na Soči-Stausee, dann Aufstieg in die Weinberge. Šmartno (mittelalterliches Weindorf), Dobrovo-Schloss, Rebula-Weinproben. Letzte Nacht — morgen früh Bahn nach Hause.',
        highlight: 'Most na Soči-Stausee · Šmartno · Dobrovo-Schloss · Goriška Brda',
        waypoints: [
          {name:'Kobarid',lat:46.2486,lng:13.5820},
          {name:'Tolmin',lat:46.1863,lng:13.7313},
          {name:'Most na Soči',lat:46.1556,lng:13.7249},
          {name:'Šmartno (Brda)',lat:45.9997,lng:13.5505},
          {name:'Dobrovo',lat:45.9958,lng:13.5284}
        ]
      },
      {
        day: 5, title: 'Goriška Brda → Nova Gorica → 🚂 Bohinjska Bahn → Bled',
        km: 18, hm: 200,
        desc: 'Kurzer Morgenritt durch die Brda-Hügel nach Nova Gorica Bahnhof (~18 km). Räder in den Zug, Bohinjska Bahn (SŽ): Podbrdo-Tunnel → Most na Soči → Bohinjska Bistrica → Bled Jezero → Lesce-Bled (~2 Std.). Fahrplan: potniski.sz.si · Supplement: ~€3–5 · E-Bikes: Akku-Policy mit SŽ vorab klären.',
        highlight: '🚂 Bohinjska Bahn · Podbrdo-Tunnel · Bohinjska Bistrica · Bled Jezero',
        waypoints: [
          {name:'Dobrovo (Brda)',lat:45.9958,lng:13.5284},
          {name:'Šmartno',lat:45.9997,lng:13.5505},
          {name:'Nova Gorica Bahnhof → 🚂',lat:45.9571,lng:13.6399}
        ]
      }
    ],
    nights: [
      {
        title: 'Nacht 1 — Trenta-Tal, Triglav-Nationalpark',
        lat: 46.372, lng: 13.694,
        accommodations: [
          {
            primary: true,
            type: 'Bergcamp · Triglav NP',
            name: 'Kamp Triglav – Apartments',
            website: 'https://kamp-triglav.si/en/',
            booking: 'https://booking.kamp-triglav.si/en/book',
            price: '~€120–180 gesamt · 4–6 Pers. · Apartment',
            desc: 'Direkt am Soča-Fluss im Nationalpark. Apartments für 4–6 Personen. Min. 2 Nächte Juli–Aug. frühzeitig buchen — ideal für Wandertag.',
            contact: 'Trenta 18a, 5232 Soča · booking.kamp-triglav.si'
          },
          {
            primary: false,
            type: 'Öko-Kmetija · Triglav NP',
            name: 'Ekološka turistična kmetija Pri Plajerju',
            website: 'https://www.eko-plajer.com/en',
            booking: null,
            price: '~€225–250 gesamt · 5 Pers. · 2 Apartments',
            desc: 'Bester Öko-Bauernhof Westsloweniens — direkt am Soča-Quellfluss. 5 Apartments, Infrarotsauna, Biokost. 2 Nächte buchbar.',
            contact: 'Trenta 16a · info@eko-plajer.com · +386 41 873 884'
          }
        ]
      },
      {
        title: 'Nacht 2 — Soča-Tal / Bovec (2. NP-Nacht)',
        lat: 46.360, lng: 13.677,
        accommodations: [
          {
            primary: true,
            type: 'Kmetija · Soča-Fluss',
            name: 'Kmetija & Kamp Jelinčič',
            website: 'https://kmetijakampjelincic.si/index_en.html',
            booking: null,
            price: '~€135–250 gesamt · 5 Pers. · Apt. oder Kamra',
            desc: 'Schafbauernhof direkt an der Soča, 4 km von Bovec. Großes Apartment (4+2), Hausschafskäse. Auf der Wandertag-Route. Nur Direktbuchung.',
            contact: 'Soča 50, 5232 Soča · kmetija.kamp.jelincic@gmail.com · +386 31 753 162'
          },
          {
            primary: false,
            type: 'Öko-Kmetija · Triglav NP',
            name: 'Ekološka turistična kmetija Pri Plajerju',
            website: 'https://www.eko-plajer.com/en',
            booking: null,
            price: '~€225–250 gesamt · 5 Pers.',
            desc: '2. Nacht am selben Ort — kein Umziehen, ideal wenn Wandertag in Trenta bleibt.',
            contact: 'Trenta 16a · info@eko-plajer.com · +386 41 873 884'
          }
        ]
      },
      {
        title: 'Nacht 3 — Soča-Tal, Kobarid',
        lat: 46.238, lng: 13.592,
        accommodations: [
          {
            primary: true,
            type: 'Kmetija #1 Kobarid · Booking 9.3',
            name: 'Turistična kmetija Kranjc',
            website: 'https://www.turizem-kranjc.si/en/',
            booking: 'https://www.booking.com/hotel/si/farm-stay-kranjc.html',
            price: '~€195–260 gesamt · 5 Pers.',
            desc: '#1 Unterkunft Kobarid (9.3/10). Restaurant, Bergblick, ruhiges Dorf Drežnica.',
            contact: 'Drežnica 22, 5222 Kobarid · über Booking.com'
          },
          {
            primary: false,
            type: 'Öko-Kmetija · Kobarid',
            name: 'Ekološka turistična kmetija Žvanč',
            website: 'https://www.ekokmetija-zvanc.si',
            booking: 'https://www.booking.com/hotel/si/turisticna-kmetija-zvanc.html',
            price: '~€100–140 gesamt · 5 Pers.',
            desc: 'Ruhiger Bergbauernhof oberhalb Kobarid. Grill-Terrasse, Panoramablick, hauseigener Käse.',
            contact: 'Drežniške Ravne 30a · kmetija.zvanc@gmail.com · +386 5 384 86 56'
          }
        ]
      },
      {
        title: 'Nacht 4 — Goriška Brda, Weinregion',
        lat: 45.996, lng: 13.528,
        accommodations: [
          {
            primary: true,
            type: 'Preisgekröntes Weingut · Brda',
            name: 'Kmetija Štekar (Hiša Štekar)',
            website: 'https://www.stekar.si/index-eng.html',
            booking: 'https://www.booking.com/hotel/si/kmetija-stekar.html',
            price: '~€250–350 gesamt · 5 Pers.',
            desc: 'Preisgekröntes Weingut im Herz der Brda-Hügel. Pool, Weinkeller-Touren. Morgen früh 18 km nach Nova Gorica Bahnhof.',
            contact: 'Snežatno 26a, 5211 Kojsko · hisastekar@gmail.com · +38641335320'
          },
          {
            primary: false,
            type: 'Weingut · E-Bike Laden ✓',
            name: 'Turistična kmetija Štanfel',
            website: 'https://stanfel.si/en/',
            booking: 'https://stanfel.si/en/',
            price: '~€250–300 gesamt · 5 Pers.',
            desc: '9.2/10. E-Bike-Laden explizit möglich — ideal vor Bahntag. 125 m² Gemeinschaftsraum.',
            contact: 'Kojsko · stefan@stanfel.si · +386 31 680 297'
          }
        ]
      }
    ]
  },

  v6: {
    id: 'v6',
    label: 'MTB Traverse',
    tagline: 'Julijska Alpe Querung — Kranjska Gora, Vršič, Trenta, Soča, Kobarid',
    heroTag: '4 Tage · ~82 km · ~2.150 Hm · 🚵 Reines MTB',
    breadcrumb: 'Kranjska Gora → Tamar → Vršič (1.611 m) → Trenta → Bovec → 🚵 Soča-Trail → Kobarid',
    days: 4, km: 82, hm: '2.150',
    introText: 'Kein E-Bike — reines MTB auf dem wildesten Korridor Sloweniens. Von Kranjska Gora über den Vršič-Pass (1.611 m) ins stille Trenta-Tal, dann entlang der smaragdgrünen Soča bis Kobarid. Nacht 1 auf dem Pass — Sonnenuntergang über den Julischen Alpen. Tag 2 führt am Ursprung der Soča vorbei (1.388 m). Routing: ORS cycling-mountain-Profil (OpenStreetMap MTB-Daten).',
    stages: [
      {
        day: 1, title: 'Kranjska Gora → Tamar-Tal → Vršič-Pass (1.611 m)',
        km: 16, hm: 1200,
        desc: 'Start in Kranjska Gora, sofort ins Tamar-Tal: 10 km Forststraßen und MTB-Trails unter Jalovec (2.645 m) und Mojstrovka. Ab Planinski dom Tamar (1.108 m) beginnt die Kopfsteinpflaster-Rampe des Vršič — 24 Kehren Nordseite. Schub erlaubt und empfohlen. Oben: Erjavčeva koča (1.525 m), Tičarjev dom (1.620 m), Russische Kapelle, Panorama auf Triglav.',
        highlight: 'Tamar-Tal · Jalovec-Nordwand · Vršič-Kopfsteinpflaster · Russische Kapelle · 1.611 m',
        waypoints: [
          {name:'Kranjska Gora',lat:46.4866,lng:13.7879},
          {name:'Planica / Skisprung',lat:46.4799,lng:13.7292},
          {name:'Planinski dom Tamar (1.108 m)',lat:46.4461,lng:13.7134},
          {name:'Russische Kapelle',lat:46.4431,lng:13.7416},
          {name:'Prelaz Vršič (1.611 m)',lat:46.4348,lng:13.7437},
          {name:'Erjavčeva koča (1.525 m)',lat:46.4355,lng:13.7480},
          {name:'Tičarjev dom (1.620 m)',lat:46.4328,lng:13.7446}
        ]
      },
      {
        day: 2, title: 'Vršič → Izvir Soče (1.388 m) → Dom Trenta',
        km: 18, hm: 220,
        desc: 'Vršič-Südseite: 25 Kehren Schotterpiste, teils MTB-Trail, hinab ins Trenta-Tal. Kurzer Abstecher (1 km Fußweg) zur Soča-Quelle im Fels — Wasser eiskalt, Stille absolut. Weiter talabwärts auf der Soška pot bis Na Logu / Dom Trenta. Nachmittag: Füße in die Soča, Trenta-Schlucht erkunden.',
        highlight: 'Vršič-Südseite Schotter · Izvir Soče (1.388 m) · Soška pot · Stilles Trenta-Tal',
        waypoints: [
          {name:'Tičarjev dom (1.620 m)',lat:46.4328,lng:13.7446},
          {name:'Prelaz Vršič Südseite',lat:46.4348,lng:13.7437},
          {name:'Izvir Soče (1.388 m)',lat:46.4119,lng:13.7241},
          {name:'Koča pri izviru Soče',lat:46.4096,lng:13.7255},
          {name:'Na Logu / Dom Trenta',lat:46.3805,lng:13.7525}
        ]
      },
      {
        day: 3, title: 'Trenta → Soča-Tal → Bovec',
        km: 25, hm: 380,
        desc: 'Soška pot und R-206 durch den Canyon des jungen Flusses — türkisfarbenes Wasser, Kalksteinwände, kein Lärm. Dorf Soča, Srpenica, dann Bovec-Ebene. Nachmittag optional: Bovec Bike Park oder Kanin-Seilbahn auf 2.202 m (MTB-Abstieg). Essen: Martinov Hram oder Restaurant Letni Vrt.',
        highlight: 'Soška pot · Soča-Canyon · Soča-Dorf · Bovec · Kanin 2.202 m (optional)',
        waypoints: [
          {name:'Na Logu / Dom Trenta',lat:46.3805,lng:13.7525},
          {name:'Soča (Dorf)',lat:46.3433,lng:13.6564},
          {name:'Srpenica',lat:46.3210,lng:13.6052},
          {name:'Bovec',lat:46.3364,lng:13.5516},
          {name:'Kanin-Seilbahn (optional, 2.202 m)',lat:46.3580,lng:13.4745}
        ]
      },
      {
        day: 4, title: 'Bovec → Pot ob Soči → Kobarid',
        km: 23, hm: 280,
        desc: 'Der legendäre Soča-Trail: 23 km auf dem "Pot ob Soči" — teils Singletrack direkt am Fluss, teils Schotter, komplett MTB-geeignet. Boka-Wasserfall (106 m, Sloweniens höchster), Velika Korita-Schlucht, Napoleon-Brücke (1750). Endpunkt: Kobarid mit WWI-Museum und Restaurant Hiša Franko (4 km außerhalb, Weltklasse).',
        highlight: 'Soča-Singletrack · Boka-Wasserfall · Napoleon-Brücke · WWI-Museum Kobarid',
        waypoints: [
          {name:'Bovec',lat:46.3364,lng:13.5516},
          {name:'Boka-Wasserfall (106 m)',lat:46.3149,lng:13.5601},
          {name:'Velika Korita-Schlucht',lat:46.2810,lng:13.5650},
          {name:'Napoleon-Brücke',lat:46.2431,lng:13.5819},
          {name:'Kobarid',lat:46.2451,lng:13.5798}
        ]
      }
    ],
    nights: [
      {
        title: 'Nacht 1 — Vršič-Pass (1.525–1.620 m), Triglav-NP',
        lat: 46.4355, lng: 13.7480,
        accommodations: [
          {
            primary: true,
            type: 'Berghütte · Vršič (1.525 m)',
            name: 'Erjavčeva koča na Vršiču',
            website: 'https://www.erjavcevakoca.com/',
            booking: 'https://www.booking.com/hotel/si/erjavceva-koca-vrsic-pass.html',
            price: '~€35–55 p.P. · Halbpension',
            desc: 'Renovierte historische Bergstation direkt am Vršič-Pass (2023 restauriert), auf der Route. Zimmer + Matratzenlager, Hüttenessen, Sonnenuntergang über den Julischen Alpen. Jun–Sep offen. Frühzeitig buchen.',
            contact: 'Vršič · info@erjavcevakoca.com · +386 41 620 015'
          },
          {
            primary: false,
            type: 'Berghütte · Vršič (1.620 m)',
            name: 'Tičarjev dom na Vršiču',
            website: 'https://kraji.eu/slovenija/vrsic_ticarjev_dom/eng',
            booking: 'https://www.booking.com/hotel/si/ticarjev-dom.html',
            price: '~€30–45 p.P.',
            desc: 'Höherliegende Vršič-Hütte direkt am Pass (1.620 m), betrieben von PD Jesenice. Einfacher als Erjavčeva, aber unschlagbare Passlage.',
            contact: 'Vršič · +386 51 327 730'
          }
        ]
      },
      {
        title: 'Nacht 2 — Trenta-Tal (618 m), Triglav-NP',
        lat: 46.3805, lng: 13.7525,
        accommodations: [
          {
            primary: true,
            type: 'Berghütte / Lodge · Trenta-Tal',
            name: 'Dom Trenta — Trenta Lodge Na Logu',
            website: 'https://kraji.eu/slovenija/dom_trenta_na_logu/eng',
            booking: 'https://www.tnp.si/en/visiting-park/information-for-visitors/accommodation/mountain-huts/',
            price: '~€30–50 p.P.',
            desc: 'Berghaus im stillen Trenta-Tal, zugleich TNP-Informationszentrum. Wanderung zur Soča-Quelle (1 km Fußweg) direkt ab Haus. Authentisch, einfach, mitten im Nationalpark. Buchen per Telefon.',
            contact: 'Na Logu v Trenti · +386 5 388 93 30'
          },
          {
            primary: false,
            type: 'Wanderhütte · Soča-Quelle (1.388 m)',
            name: 'Koča pri izviru Soče',
            website: 'https://www.tnp.si/en/visiting-park/information-for-visitors/accommodation/',
            booking: null,
            price: '~€20–30 p.P. · sehr einfach',
            desc: 'Kleine Schutzhütte an der Soča-Quelle (1.388 m) — für Puristen, die auf 1.400 m schlafen wollen. Keine Dusche, Grundversorgung. Telefonische Voranmeldung.',
            contact: 'TNP-Büro: +386 4 578 02 00'
          }
        ]
      },
      {
        title: 'Nacht 3 — Bovec (430 m)',
        lat: 46.3364, lng: 13.5516,
        accommodations: [
          {
            primary: true,
            type: 'Boutique Hotel · MTB-freundlich ✓',
            name: 'Boutique Hotel Dobra Vila Bovec',
            website: 'https://dobra-vila.slovenia-hotel.com/en/',
            booking: 'https://www.booking.com/hotel/si/vila-dobra-vila.html',
            price: '~€120–180 DZ · inkl. Frühstück',
            desc: '#1 Hotel Bovec (TripAdvisor). Historisches Telefonamt, Bike-Lagerraum, Weinkeller, Restaurant mit lokalen Zutaten. Direktbuchung oft günstiger.',
            contact: 'Mala vas 112, 5320 Bovec · welcome@dobra-vila-bovec.si · +386 5 389 64 00'
          },
          {
            primary: false,
            type: 'Apartments · Bovec',
            name: 'Bovec Apartments & Guesthouses',
            website: 'https://www.bovec.org/en/apartments-rooms',
            booking: 'https://www.booking.com/city/si/bovec.en-gb.html',
            price: '~€40–80 p.P.',
            desc: 'Bovec hat viele MTB-freundliche Unterkünfte: Gostišče Sovdat, Apartmaji Prton, Kamp Liza. Übersicht auf bovec.org.',
            contact: 'www.bovec.org/en'
          }
        ]
      }
    ]
  },

  v7: {
    id: 'v7',
    label: 'MTB Soča Loop',
    tagline: 'Wild Loop ab Bovec — Trenta, Vršič, Tamar, Koritnica-Canyon, Kanin',
    heroTag: '4 Tage · ~129 km · ~3.450 Hm · 🚵 Wild Loop',
    breadcrumb: 'Bovec → Trenta → Vršič (1.611 m) → Tamar → Log pod Mangartom → Bovec → 🚵 Kanin → Kobarid',
    days: 4, km: 129, hm: '3.450',
    introText: 'Der härteste der drei MTB-Loops: ab Bovec, mit Nächten auf Passhöhe und im Tamar-Tal. Highlights: Aufstieg Trenta→Vršič (1.200 Hm an einem Tag), Talnacht in Tamar unter Jalovec (2.645 m), Rückweg über Koritnica-Canyon, Abschluss mit Kanin (2.202 m) per Seilbahn. ~3.450 Hm gesamt — vergleichbar einer Alpentour.',
    stages: [
      {
        day: 1, title: 'Bovec → Soča-Tal aufwärts → Na Logu (Trenta)',
        km: 25, hm: 450,
        desc: 'Gemächlicher Einstieg flussaufwärts: Soška pot und R-206 wechseln sich ab. Die Soča wird enger, das Tal stiller. Dorf Soča, Srpenica, dann Na Logu. Nachmittag: Soča-Quelle (1 km Fußweg) oder Kühlung im Fluss. Energiereserven sammeln für den Vršič-Aufstieg morgen.',
        highlight: 'Soča-Tal aufwärts · Soča-Dorf · Srpenica · Na Logu / Dom Trenta',
        waypoints: [
          {name:'Bovec',lat:46.3364,lng:13.5516},
          {name:'Srpenica',lat:46.3210,lng:13.6052},
          {name:'Soča (Dorf)',lat:46.3433,lng:13.6564},
          {name:'Na Logu / Dom Trenta',lat:46.3805,lng:13.7525}
        ]
      },
      {
        day: 2, title: 'Trenta → Vršič-Pass (1.611 m) → Kranjska Gora → Dom Tamar',
        km: 38, hm: 1350,
        desc: 'Der Schlüsseltag: Aufstieg von Na Logu (618 m) auf den Vršič (1.611 m) — Kopfsteinpflaster, Schotter, Schieben. 25 Kehren Nordseite nach Kranjska Gora. Kurze Rast, dann Planica → Tamar-Tal auf Forststraßen. Dom v Tamarju liegt am Talende unter Jalovec (2.645 m). Früh starten!',
        highlight: 'Vršič-Aufstieg (993 Hm) · Russische Kapelle · KG-Abstieg · Tamar-Tal',
        waypoints: [
          {name:'Na Logu / Dom Trenta',lat:46.3805,lng:13.7525},
          {name:'Prelaz Vršič (1.611 m)',lat:46.4348,lng:13.7437},
          {name:'Russische Kapelle',lat:46.4431,lng:13.7416},
          {name:'Kranjska Gora',lat:46.4866,lng:13.7879},
          {name:'Planica / Skisprung',lat:46.4799,lng:13.7292},
          {name:'Dom v Tamarju (1.108 m)',lat:46.4461,lng:13.7134}
        ]
      },
      {
        day: 3, title: 'Dom Tamar → Log pod Mangartom → Koritnica-Canyon → Bovec',
        km: 42, hm: 850,
        desc: 'Loop-Schließung: Tamar → Planica → Rateče, dann Strmec-Sattel nach Log pod Mangartom (820 m) — Ausgangspunkt Mangart-Straße (Sloweniens höchste Fahrstraße, optional). Koritnica-Canyon hinunter nach Bovec: technisch, steinig, beeindruckend. Letzte Nacht in Bovec.',
        highlight: 'Planica · Rateče · Log pod Mangartom · Koritnica-Canyon · Bovec',
        waypoints: [
          {name:'Dom v Tamarju (1.108 m)',lat:46.4461,lng:13.7134},
          {name:'Planica / Skisprung',lat:46.4799,lng:13.7292},
          {name:'Rateče',lat:46.4947,lng:13.7136},
          {name:'Log pod Mangartom (820 m)',lat:46.4020,lng:13.5920},
          {name:'Koritnica-Tal',lat:46.3710,lng:13.5680},
          {name:'Bovec',lat:46.3364,lng:13.5516}
        ]
      },
      {
        day: 4, title: 'Bovec → Kanin (2.202 m) → Pot ob Soči → Kobarid',
        km: 24, hm: 800,
        desc: 'Kanin-Seilbahn auf 2.202 m (Jul–Aug täglich). Oben: Karstplateau, Schneefeldquerung, Adria-Blick. MTB-Abstieg via Loška Koritnica oder Seilbahn zurück. Ab Bovec: Pot ob Soči 23 km nach Kobarid — Singletrack, Boka-Wasserfall, Napoleon-Brücke. Finale bei Hiša Franko (4 km außerhalb Kobarid).',
        highlight: 'Kanin 2.202 m · Soča-Singletrack · Boka-Wasserfall · Napoleon-Brücke · Kobarid',
        waypoints: [
          {name:'Bovec',lat:46.3364,lng:13.5516},
          {name:'Kanin-Seilbahn (2.202 m)',lat:46.3580,lng:13.4745},
          {name:'Boka-Wasserfall (106 m)',lat:46.3149,lng:13.5601},
          {name:'Velika Korita-Schlucht',lat:46.2810,lng:13.5650},
          {name:'Napoleon-Brücke',lat:46.2431,lng:13.5819},
          {name:'Kobarid',lat:46.2451,lng:13.5798}
        ]
      }
    ],
    nights: [
      {
        title: 'Nacht 1 — Trenta-Tal (618 m), Triglav-NP',
        lat: 46.3805, lng: 13.7525,
        accommodations: [
          {
            primary: true,
            type: 'Berghütte / Lodge · Trenta-Tal',
            name: 'Dom Trenta — Trenta Lodge Na Logu',
            website: 'https://kraji.eu/slovenija/dom_trenta_na_logu/eng',
            booking: 'https://www.tnp.si/en/visiting-park/information-for-visitors/accommodation/mountain-huts/',
            price: '~€30–50 p.P.',
            desc: 'Berghaus im stillen Trenta-Tal, TNP-Informationszentrum. Direkt auf der Route. Authentisch, Nationalpark-Atmosphäre pur. Buchen per Telefon.',
            contact: 'Na Logu v Trenti · +386 5 388 93 30'
          },
          {
            primary: false,
            type: 'Wanderhütte · Soča-Quelle',
            name: 'Koča pri izviru Soče',
            website: 'https://www.tnp.si/en/visiting-park/information-for-visitors/accommodation/',
            booking: null,
            price: '~€20–30 p.P.',
            desc: 'Sehr einfache Schutzhütte an der Soča-Quelle (1.388 m) für Puristen. Begrenzte Kapazität, telefonische Voranmeldung.',
            contact: 'TNP-Büro: +386 4 578 02 00'
          }
        ]
      },
      {
        title: 'Nacht 2 — Tamar-Tal (1.108 m)',
        lat: 46.4461, lng: 13.7134,
        accommodations: [
          {
            primary: true,
            type: 'Berghütte · Tamar-Tal',
            name: 'Dom v Tamarju (Planinski dom Tamar)',
            website: 'https://mountainsforeverybody.com/tamar-hut-planinski-dom-tamar',
            booking: 'https://kraji.eu/slovenija/dom_v_tamarju/eng',
            price: '~€25–40 p.P. · Halbpension',
            desc: 'Ganzjährig geöffnete Berghütte am Ende des Tamar-Tals unter der Nordwand von Jalovec (2.645 m). 12 Zimmerplätze + 50 Matratzenlager. Hüttenküche (Jota, Žlikrofi, Strudel). Duschen vorhanden. Frühzeitig buchen.',
            contact: 'Rateče 168 · info@tamar.si · +386 41 378 077'
          }
        ]
      },
      {
        title: 'Nacht 3 — Bovec (430 m)',
        lat: 46.3364, lng: 13.5516,
        accommodations: [
          {
            primary: true,
            type: 'Boutique Hotel · MTB-freundlich ✓',
            name: 'Boutique Hotel Dobra Vila Bovec',
            website: 'https://dobra-vila.slovenia-hotel.com/en/',
            booking: 'https://www.booking.com/hotel/si/vila-dobra-vila.html',
            price: '~€120–180 DZ · inkl. Frühstück',
            desc: '#1 Hotel Bovec (TripAdvisor). Historisches Telefonamt, Bike-Lagerraum, Weinkeller, Restaurant. E-Mail: welcome@dobra-vila-bovec.si.',
            contact: 'Mala vas 112, 5320 Bovec · welcome@dobra-vila-bovec.si · +386 5 389 64 00'
          },
          {
            primary: false,
            type: 'Gästehaus · Bovec-Zentrum',
            name: 'Gostišče Sovdat',
            website: 'https://www.bovec.org/en/apartments-rooms',
            booking: 'https://www.booking.com/city/si/bovec.en-gb.html',
            price: '~€50–80 DZ',
            desc: '3-Sterne B&B im Zentrum Bovec mit Restaurant. Direktbuchung auf bovec.org.',
            contact: 'Bovec · www.bovec.org/en/apartments-rooms'
          }
        ]
      }
    ]
  },

  v8: {
    id: 'v8',
    label: 'MTB Bohinj–Soča',
    tagline: 'Bohinj, Komna-Plateau, Tolmin, Soča-Tal, Kobarid — Traverse Bled bis Bovec',
    heroTag: '4 Tage · ~113 km · ~2.580 Hm · 🚵 Traverse Bled → Bovec',
    breadcrumb: 'Bled → Bohinj → Savica → Dom na Komni (1.520 m) → Tolmin → Soča → Kobarid → 🚵 Bovec',
    days: 4, km: 113, hm: '2.580',
    introText: 'Start Bled, Ende Bovec — vier Tage Querung vom Triglav-NP bis ans Soča-Tal. Tag 2 über das Komna-Plateau (1.520 m): Karstwiesen, Bergseen, kein Motorenlärm. Finale in Kobarid mit Hiša Franko (Chef Ana Roš, World\'s 50 Best). Logistik: Auto in Bovec lassen, Postbus Bovec → Bled (ap-ljubljana.si).',
    stages: [
      {
        day: 1, title: 'Bled → Bohinj-See → Stara Fužina',
        km: 32, hm: 580,
        desc: 'Ab Bled auf MTB-Trails ins Bohinj-Tal: Bohinjska Bistrica, Bohinj-See Südseite (ruhiger als Nordseite). Stara Fužina: kleines Bauerndorf am Ostende des Sees. Savica-Wasserfall (1,5 km Fußweg) optional. Entspannter Auftakt — Energieaufbau für Komna morgen.',
        highlight: 'Bohinj-See Südseite · Stara Fužina · Savica-Wasserfall (optional)',
        waypoints: [
          {name:'Bled',lat:46.3683,lng:14.1146},
          {name:'Bohinjska Bistrica',lat:46.2713,lng:13.9549},
          {name:'Bohinj-See (Ukanc)',lat:46.2710,lng:13.8468},
          {name:'Stara Fužina',lat:46.2878,lng:13.8961},
          {name:'Savica-Wasserfall (optional)',lat:46.2903,lng:13.7837}
        ]
      },
      {
        day: 2, title: 'Savica → Dom na Komni (1.520 m) → Tolmin',
        km: 28, hm: 1100,
        desc: 'Schlüsseltag: Savica-Wasserfall (537 m) auf das Komna-Plateau (1.520 m) — 1.000 Hm Aufstieg auf Forststraße und Fußweg, teils schieben. Oben: Karstwiesen, Dom na Komni (Berghütte, ganzjährig). Abstieg via Bogatinsko sedlo Richtung Westen, optional via Krnsko jezero (Feldsee, 1.385 m) nach Tolmin. Anspruchsvoll.',
        highlight: 'Savica (537 m) · Komna-Plateau (1.520 m) · Dom na Komni · Krnsko jezero optional',
        waypoints: [
          {name:'Savica-Wasserfall (537 m)',lat:46.2903,lng:13.7837},
          {name:'Dom na Komni (1.520 m)',lat:46.2844,lng:13.7733},
          {name:'Bogatinsko sedlo',lat:46.2772,lng:13.7447},
          {name:'Krnsko jezero (optional, 1.385 m)',lat:46.2456,lng:13.7076},
          {name:'Tolmin',lat:46.1845,lng:13.7309}
        ]
      },
      {
        day: 3, title: 'Tolmin → Soča-Tal → Kobarid',
        km: 25, hm: 380,
        desc: 'Soška pot und R-203 flussabwärts nach Kobarid. Tolminska Korita (Klamm, 30 min Fußweg optional). Napoleon-Brücke, Most na Soči-Stausee. Kobarid: WWI-Museum (Hemingway war hier), Restavracija Kotlar. Nacht in Kobarid oder 4 km außerhalb bei Hiša Franko.',
        highlight: 'Soška pot · Tolminska Korita · Napoleon-Brücke · WWI-Museum Kobarid',
        waypoints: [
          {name:'Tolmin',lat:46.1845,lng:13.7309},
          {name:'Tolminska Korita (Klamm)',lat:46.1862,lng:13.7313},
          {name:'Most na Soči',lat:46.1556,lng:13.7249},
          {name:'Napoleon-Brücke',lat:46.2431,lng:13.5819},
          {name:'Kobarid',lat:46.2451,lng:13.5798},
          {name:'Hiša Franko (4 km)',lat:46.2540,lng:13.5490}
        ]
      },
      {
        day: 4, title: 'Kobarid → Pot ob Soči → Bovec',
        km: 28, hm: 520,
        desc: 'Soča flussaufwärts — umgekehrt zu V6 Tag 4, gleich spektakulär: Singletrack, Boka-Wasserfall (von unten), Srpenica. In Bovec: Auto steht. Wer noch Energie hat: Kanin-Seilbahn nachmittags (Jul–Aug). Bus zurück nach Bled: ap-ljubljana.si (~2 Std., mit Fahrrad).',
        highlight: 'Soča-Singletrack aufwärts · Boka-Wasserfall · Srpenica · Bovec (Ziel)',
        waypoints: [
          {name:'Kobarid',lat:46.2451,lng:13.5798},
          {name:'Napoleon-Brücke',lat:46.2431,lng:13.5819},
          {name:'Boka-Wasserfall (106 m)',lat:46.3149,lng:13.5601},
          {name:'Srpenica',lat:46.3210,lng:13.6052},
          {name:'Bovec',lat:46.3364,lng:13.5516}
        ]
      }
    ],
    nights: [
      {
        title: 'Nacht 1 — Stara Fužina, Bohinj-Tal',
        lat: 46.2878, lng: 13.8961,
        accommodations: [
          {
            primary: true,
            type: 'Kmetija · Bohinj-Tal',
            name: "Turistična kmetija Gartner – Pr' Odolneku",
            website: 'https://bohinjgartner.com/',
            booking: 'https://www.booking.com/hotel/si/turisticna-kmetija-gartner.html',
            price: '~€120–160 gesamt · 5 Pers. · Apartment 4+1',
            desc: 'Arbeitender Milchbauernhof im Bohinj-Tal, 1,5 km vom See. Dorf Studor mit traditionellen Heuaufzügen. 10 km von Stara Fužina.',
            contact: 'Studor v Bohinju 3A · info@bohinjgartner.com · +386 41 205 182'
          },
          {
            primary: false,
            type: 'Pension · Stara Fužina',
            name: 'Pension / Apartments Bohinj',
            website: 'https://www.booking.com/city/si/bohinj.en-gb.html',
            booking: 'https://www.booking.com/city/si/bohinj.en-gb.html',
            price: '~€40–70 p.P.',
            desc: 'Mehrere Pensionen und Apartments in Stara Fužina. Buchung über booking.com Suchbegriff "Stara Fužina" oder "Bohinj".',
            contact: 'Tourismusinfo Bohinj: www.bohinj.si'
          }
        ]
      },
      {
        title: 'Nacht 2 — Tolmin (180 m)',
        lat: 46.1845, lng: 13.7309,
        accommodations: [
          {
            primary: true,
            type: 'Apartment · Tolmin-Zentrum',
            name: 'Apartmaji Tmaynka Tolmin',
            website: 'https://apartmaji-tmaynka.slovenia-hotel.com/en/',
            booking: 'https://www.booking.com/city/si/tolmin.html',
            price: '~€64/Nacht · Apartment',
            desc: '1,1 km vom Museum, 10 min Fußweg ins Zentrum. Gute Basis für Soča-Abschnitt. Buchung direkt oder booking.com.',
            contact: 'Tolmin · apartmaji-tmaynka.slovenia-hotel.com'
          },
          {
            primary: false,
            type: 'Unterkunft · Soča-Tal',
            name: 'Accommodation Soča Valley',
            website: 'https://www.soca-valley.com/en/accommodation/',
            booking: 'https://www.booking.com/city/si/tolmin.html',
            price: '~€50–90/Nacht',
            desc: 'Offizielle Unterkunftsliste Soča-Tal mit Pensionen, Apartments und Kmetije in und um Tolmin.',
            contact: 'www.soca-valley.com/en/accommodation/'
          }
        ]
      },
      {
        title: 'Nacht 3 — Kobarid (230 m)',
        lat: 46.2451, lng: 13.5798,
        accommodations: [
          {
            primary: true,
            type: 'Weltklasse-Restaurant & Zimmer',
            name: 'Hiša Franko (5 Zimmer)',
            website: 'https://www.hisafranko.com/en/stay-with-us',
            booking: 'https://www.hisafranko.com/en/stay-with-us',
            price: '~€200–350 DZ · nur mit Restaurantreservierung',
            desc: 'Das berühmteste Restaurant Sloweniens (Chef Ana Roš, World\'s 50 Best). 5 Zimmer exklusiv für Restaurantgäste. 4 km von Kobarid. Einmal im Leben — Monate im Voraus buchen.',
            contact: 'Staro selo 1, 5222 Kobarid · info@hisafranko.com · +386 5 389 41 20'
          },
          {
            primary: false,
            type: 'Gästehaus · Kobarid-Zentrum',
            name: 'Hotel / Gästehaus Kobarid',
            website: 'https://www.booking.com/city/si/kobarid.html',
            booking: 'https://www.booking.com/city/si/kobarid.html',
            price: '~€60–120 DZ',
            desc: 'Kobarid bietet gute Unterkünfte: Guest House Kotlar, Hotel Hvala (direkt am Platz). Buchung über booking.com.',
            contact: 'Tourismusinfo: www.soca-valley.com/en/kobarid/'
          }
        ]
      }
    ]
  }
};

window.ACTIVE_ROUTE = 'v1';
