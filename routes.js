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
    heroTag: '6 Tage · ~385 km · ~5.700 Hm',
    breadcrumb: 'Bled → Vršič → Trenta → Soča → Goriška Brda → Vipava → Cerknica → Bled',
    days: 6, km: 385, hm: '5.700',
    introText: '~385 km und ~5.700 Höhenmeter auf 6 Tage. Tag 1 endet im Triglav-Nationalpark — zwei volle Tage im NP. Kein Tag über 75 km (außer dem Rückweg Tag 6, für den ein optionaler Shuttle ab Grahovo möglich ist).',
    stages: [
      {
        day: 1, title: 'Bled → Vršič-Pass → Trenta (Na Logu)',
        km: 57, hm: 1350,
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
        km: 52, hm: 480,
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
        km: 58, hm: 950,
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
        km: 55, hm: 620,
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
        km: 72, hm: 1050,
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
        km: 91, hm: 1250,
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
    heroTag: '5 Tage · ~315 km · ~4.930 Hm',
    breadcrumb: 'Bled → Vršič → Bovec → Tolmin → Vipava → Predjama → Cerknica → Bled',
    days: 5, km: 315, hm: '4.930',
    introText: '~315 km auf 5 gleichmäßige Tage — kein Tag über 75 km. Der aktuelle 110-km-Finaltag entfällt; der Rückweg führt ohne Ljubljana über Bloška planota und Škofja Loka direkt zurück nach Bled.',
    stages: [
      {
        day: 1, title: 'Bled → Vršič-Pass → Bovec',
        km: 73, hm: 1500,
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
        km: 42, hm: 530,
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
        km: 62, hm: 900,
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
        km: 68, hm: 1100,
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
        km: 70, hm: 900,
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
    heroTag: '6 Tage · ~388 km · ~6.380 Hm',
    breadcrumb: 'Bled → Pokljuka → Bohinj → Vršič → Trenta → Kobarid → Brda → Vipava → Crknica → Bled',
    days: 6, km: 388, hm: '6.380',
    introText: '~388 km auf 6 Tage — zwei komplett unterschiedliche Gesichter des Triglav-NP: Tag 1 über Pokljuka und Bohinj (östlicher NP), Tag 2 über den Vršič in den Westen. Die sportlich anspruchsvollste der drei Varianten.',
    stages: [
      {
        day: 1, title: 'Bled → Pokljuka-Plateau → Bohinj-See',
        km: 52, hm: 1100,
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
        km: 65, hm: 1380,
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
        km: 50, hm: 650,
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
        km: 68, hm: 850,
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
        km: 78, hm: 1200,
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
        km: 75, hm: 1200,
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
  }
};

window.ACTIVE_ROUTE = 'v1';
