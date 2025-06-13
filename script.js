
/*
let map;
let mapInitialized = false;
let markers = {
    layer1: L.markerClusterGroup({
        maxClusterRadius: 50 // Erhöhter Radius (Standard: 80)
    }),
    layer2: L.markerClusterGroup({
        maxClusterRadius: 50
    }),
    layer3: L.markerClusterGroup({
        maxClusterRadius: 50
    })
};

function setupTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const triggerOffset = window.innerHeight / 1.2;
    
    function checkTimeline() {
        timelineItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            
            if (itemTop < triggerOffset) {
                item.classList.add('active');
            }
        });
    }
    
    // Initial check
    checkTimeline();
    
    // Check on scroll with debounce
    let isScrolling;
    window.addEventListener('scroll', () => {
        window.clearTimeout(isScrolling);
        isScrolling = setTimeout(checkTimeline, 50);
    }, false);
}
*/

/*
// Ändere die initializeMap Funktion:
function initializeMap() {
    map = L.map('map').setView([48.128042323092785, 11.565685880884974], 16); 

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Layer Control hinzufügen
    const baseLayers = {
        "Berühmtheiten-Ansicht" : markers.layer1,
        "Grabstein-Ansicht": markers.layer2,
        "Gesteins-Ansicht": markers.layer3
    };

    L.control.layers(null, baseLayers, {collapsed: false}).addTo(map);
    
    // Standard-Layer aktivieren
    markers.layer2.addTo(map);

    // Style für die Marker
    const style = document.createElement("style");
    style.innerHTML = `
        .marker-container {
            width: 35px;
            height: 35px;
            border-radius: 50%;
            overflow: hidden;
            border: 2px solid white;
            box-shadow: 0px 0px 5px rgba(0,0,0,0.3);
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .marker-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }
        
        .marker-cluster-small {
            background-color: rgba(181, 226, 140, 0.6);
        }
        .marker-cluster-small div {
            background-color: rgba(110, 204, 57, 0.6);
        }
        .marker-cluster-medium {
            background-color: rgba(241, 211, 87, 0.6);
        }
        .marker-cluster-medium div {
            background-color: rgba(240, 194, 12, 0.6);
        }
        .marker-cluster-large {
            background-color: rgba(253, 156, 115, 0.6);
        }
        .marker-cluster-large div {
            background-color: rgba(241, 128, 23, 0.6);
        }
    `;
    document.head.appendChild(style);

    // Marker für alle Layer erstellen
    createMarkersForAllLayers();
}

// Die createCustomMarker Funktion bleibt gleich

function createMarkersForAllLayers() {
    // Standard-Layer (aktuelle Fotos)
    createCustomMarker(48.130472380841496, 11.56624671866165, 
        "./Fotos/personen/Adolf-Schlagintweit.png", "Grab Adolf Schlaginweit", markers.layer1);
    createCustomMarker(48.12944686673255, 11.566483691300379, 
        "./Fotos/personen/a-senefelder.png", "Grab Alois Senefelder", markers.layer1);
    createCustomMarker(48.1306902208633, 11.566399154097912, 
        "./Fotos/personen/Straub_Johann_Baptist.png", "Grab Johann Baptist Straub", markers.layer1);
    createCustomMarker(48.13020766844287, 11.566064541718118, 
        "./Fotos/personen/arnold-zenetti.png", "Grab Arnold Zenetti", markers.layer1);
   
    createCustomMarker(48.12873435697092, 11.564917402621731, 
        "./Fotos/personen/franz-kobell.png", "Grab Franz Kobell", markers.layer1);
    createCustomMarker(48.127449022632554, 11.565760706995862, 
        "./Fotos/personen/hiltensperger.png", "Grab Hiltensperger", markers.layer1);
    createCustomMarker(48.12743727512269, 11.564098247394769, 
        "./Fotos/personen/Nussbaum.png", "Grab Nussbaum", markers.layer1);
    createCustomMarker(48.12700316519899, 11.566071173222651, 
        "./Fotos/personen/Ohm.png", "Grab Georg Simon Ohm", markers.layer1);
    createCustomMarker(48.12698081942048, 11.563986286801328, 
        "./Fotos/personen/reichenbach.png", "Grab Georg von Reichenbach", markers.layer1);
    createCustomMarker(48.12698081942040, 11.563986286801323, 
        "./Fotos/personen/fraunhofer.png", "Grab Josef von Fraunhofer", markers.layer1);
    createCustomMarker(48.12672470001926, 11.56502006855112, 
        "./Fotos/personen/Ett.png", "Grab Kaspar Ett", markers.layer1);
    createCustomMarker(48.12639776149005, 11.563853220116723, 
        "./Fotos/personen/klenze.png", "Grab Leo von Klenze", markers.layer1);
    createCustomMarker(48.12634445037332, 11.56402371512982, 
        "./Fotos/personen/gaertner.png", "Grab Friedrich Gärtner", markers.layer1);  
    createCustomMarker(48.12620534820462, 11.564485442813355, 
        "./Fotos/personen/Schwanthaler.png", "Grab Ludwig Schwanthaler", markers.layer1);
    createCustomMarker(48.1258485668362, 11.565098877674478, 
        "./Fotos/personen/knorr.png", "Grab Ludwig Knorr", markers.layer1);
    createCustomMarker(48.12565715788182, 11.564285682286432, 
        "./Fotos/personen/Seydel.png", "Grab Max von Seydel", markers.layer1);
    createCustomMarker(48.1258026473096, 11.5634057639785, 
        "./Fotos/personen/siebold.png", "Grab Philipp Balthasar von Siebold", markers.layer1);
    createCustomMarker(48.12493912256356, 11.563330775765484, 
        "./Fotos/personen/Liebig.png", "Grab Justus von Liebig", markers.layer1);
createCustomMarker(48.130066, 11.565872, 
    "./Fotos/personen/Ferdinand_von_Miller.png", 
    "Grab Ferdinand von Miller", 
    markers.layer1,
    function() { showStreetForPerson("Ferdinand von Miller"); }
);

        createCustomMarker(48.130472380841496, 11.56624671866165, 
            "./Fotos/grabstein/grab-schlagintweit.png", "Grab Adolf Schlaginweit", markers.layer2);
        createCustomMarker(48.12944686673255, 11.566483691300379, 
            "./Fotos/grabstein/grab_senefelder.png", "Grab Alois Senefelder", markers.layer2);
        createCustomMarker(48.1306902208633, 11.566399154097912, 
            "./Fotos/grabstein/straub_grab.png", "Grab Johann Baptist Straub", markers.layer2);
        createCustomMarker(48.13020766844287, 11.566064541718118, 
            "./Fotos/grabstein/zenetti.png", "Grab Arnold Zenetti", markers.layer2);
        createCustomMarker(48.130066, 11.565872, 
            "./Fotos/personen/Ferdinand_von_Miller.png", "Grab Ferdinand von Miller", markers.layer2);
        createCustomMarker(48.12873435697092, 11.564917402621731, 
            "./Fotos/personen/franz-kobell.png", "Grab Franz Kobell", markers.layer2);
        createCustomMarker(48.127449022632554, 11.565760706995862, 
            "./Fotos/personen/hiltensperger.png", "Grab Hiltensperger", markers.layer2);
        createCustomMarker(48.12743727512269, 11.564098247394769, 
            "./Fotos/personen/Nussbaum.png", "Grab Nussbaum", markers.layer2);
        createCustomMarker(48.12700316519899, 11.566071173222651, 
            "./Fotos/grabstein/ohm_grab.png", "Grab Georg Simon Ohm", markers.layer2);
        createCustomMarker(48.12698081942048, 11.563986286801328, 
            "./Fotos/personen/reichenbach.png", "Grab Georg von Reichenbach", markers.layer2);
        createCustomMarker(48.12698081942040, 11.563986286801323, 
            "./Fotos/grabstein/fraunhofer_grab.png", "Grab Josef von Fraunhofer", markers.layer2);
        createCustomMarker(48.12672470001926, 11.56502006855112, 
            "./Fotos/grabstein/grab_ett.png", "Grab Kaspar Ett", markers.layer2);
        createCustomMarker(48.12639776149005, 11.563853220116723, 
            "./Fotos/grabstein/grab_klenze.png", "Grab Leo von Klenze", markers.layer2);
        createCustomMarker(48.12634445037332, 11.56402371512982, 
            "./Fotos/grabstein/gaertner_grab.png", "Grab Friedrich Gärtner", markers.layer2);  
        createCustomMarker(48.12620534820462, 11.564485442813355, 
            "./Fotos/grabstein/schwanthaler_grab.png", "Grab Ludwig Schwanthaler", markers.layer2);
        createCustomMarker(48.1258485668362, 11.565098877674478, 
            "./Fotos/personen/knorr.png", "Grab Ludwig Knorr", markers.layer2);
        createCustomMarker(48.12565715788182, 11.564285682286432, 
            "./Fotos/personen/Seydel.png", "Grab Max von Seydel", markers.layer2);
        createCustomMarker(48.1258026473096, 11.5634057639785, 
            "./Fotos/grabstein/siebold_grab.png", "Grab Philipp Balthasar von Siebold", markers.layer2);
        createCustomMarker(48.12493912256356, 11.563330775765484, 
            "./Fotos/grabstein/liebig_grab.png", "Grab Justus von Liebig", markers.layer2);

            createCustomMarker(48.127449022632554, 11.565760706995862, 
                "./Fotos/gestein/schwedisch_schwarz.png", "Grab Hiltensperger", markers.layer3);

                
    
}
// Globale Variablen für aktive Straßenlinie, Platzpolygon und Grabmarker
let currentStreetLine = null;
let currentPlacePolygon = null;
let currentGraveMarker = null;

// Koordinaten für den Platz (als Polygon)
const placeCoordinates = [
    [48.15244574579241, 11.552817414003815],
    [48.152241745410535, 11.5533243543809468],
    [48.15149733296533, 11.55250895801694],
    [48.1517854340804, 11.551967152238447],
    [48.15244574579241, 11.552817414003815] // Schließt den Polygon
];

// Funktion zum Anzeigen der Straße, des Platzes oder Zurückkehren zum Grab
function showRouteForPerson(personName, option = 'street') {
    // Vorherige Layer entfernen
    if (currentStreetLine) map.removeLayer(currentStreetLine);
    if (currentPlacePolygon) map.removeLayer(currentPlacePolygon);

    if (option === 'street') {
        const streetCoordinates = [
            [47.97991089157703, 11.330707190063688],
            [47.97458333581848, 11.32629461311394],
            [47.96929919383274, 11.324324712680896],
            [47.966538212441506, 11.322696261662403]
        ];

        currentStreetLine = L.polyline(streetCoordinates, {
            color: 'blue',
            weight: 5,
            opacity: 0.7
        }).addTo(map).bindPopup(`
            <div class="custom-popup">
                <button class="show-street-btn" onclick="showRouteForPerson('Ferdinand von Miller', 'grave')">
                    Zurück zum Grab
                </button>
            </div>
        `).openPopup();

        map.fitBounds(currentStreetLine.getBounds());

    } else if (option === 'place') {
        currentPlacePolygon = L.polygon(placeCoordinates, {
            color: 'red',
            weight: 3,
            opacity: 0.7,
            fillColor: 'red',
            fillOpacity: 0.3
        }).addTo(map).bindPopup(`
            <div class="custom-popup">
                <button class="show-street-btn" onclick="showRouteForPerson('Ferdinand von Miller', 'grave')">
                    Zurück zum Grab
                </button>
            </div>
        `).openPopup();

        map.fitBounds(currentPlacePolygon.getBounds());

    } else if (option === 'grave' && currentGraveMarker) {
        map.setView(currentGraveMarker.getLatLng(), 16); 
        currentGraveMarker.openPopup();
    }
}

// Marker-Erstellung mit erweiterten Popups
function createCustomMarker(lat, lng, imageUrl, popupText, layerGroup) {
    let customIcon;

    if (layerGroup === markers.layer2) {
        customIcon = L.divIcon({
            className: "custom-marker-grave",
            html: `<img src="${imageUrl}" style="width: 40px; height: auto; display: block;">`, 
            iconSize: [40, 40],
            iconAnchor: [20, 50]
        });
    } else {
        customIcon = L.divIcon({
            className: "custom-marker",
            html: `<div class="marker-container" style="
                        width: 40px; 
                        height: 40px; 
                        border-radius: 50%; 
                        overflow: hidden; 
                        background: white; 
                        display: flex; 
                        align-items: center; 
                        justify-content: center;">
                        <img src="${imageUrl}" style="width: 100%; height: 100%; object-fit: cover;">
                   </div>`,
            iconSize: [40, 40],
            iconAnchor: [20, 40]
        });
    }

    const marker = L.marker([lat, lng], { icon: customIcon });
    
    if (popupText.includes("Ferdinand von Miller")) {
        marker.bindPopup(`
            <div class="custom-popup">
                <h3>${popupText}</h3>
                <button class="show-street-btn" onclick="showRouteForPerson('Ferdinand von Miller', 'street')">
                    Straße anzeigen
                </button>
                <button class="show-street-btn" onclick="showRouteForPerson('Ferdinand von Miller', 'place')">
                    Platz anzeigen
                </button>
            </div>
        `);
        currentGraveMarker = marker; // Speichere den Marker für das Grab
    } else {
        marker.bindPopup(popupText);
    }
    
    marker.addTo(layerGroup);
    return marker;
}

// CSS für Popup-Buttons
const style = document.createElement('style');
style.textContent = `
    .custom-popup {
        text-align: center;
        padding: 10px;
    }
    .custom-popup h3 {
        margin: 0 0 10px 0;
        font-size: 16px;
        color: #333;
    }
    .show-street-btn {
        background-color: #4CAF50;
        border: none;
        color: white;
        padding: 8px 12px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 14px;
        margin: 4px 2px;
        cursor: pointer;
        border-radius: 4px;
        transition: background-color 0.3s;
    }
    .show-street-btn:hover {
        background-color: #45a049;
    }
`;
document.head.appendChild(style);


// Event Listener für Navigation
document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); 
        const sectionId = this.getAttribute('href').substring(1); 
        showSection(sectionId);
    });
});
*/
/*
// Initialisierung
showSection('home');

const gesteineDaten = {
    "tegernseer-marmor": {
        name: "Tegernseer Marmor",
        fundort: "Tegernsee, Bayern",
        koordinaten: [47.67378102710026, 11.74826137299096],
        fundland: "Deutschland",
        bezeichnung: "Kalkstein",
        alter: "Jura",
        gesteinsgruppe: "Sedimentgestein",
        bild: "./Fotos/gestein/Tegernseer_Marmor.png",
        struktur: "brekziös bzw. knollig",
        beschreibung: "Der sogenannte Tegernseer Marmor ist ein polierfähiger, biogener Kalkstein aus dem Oberjura, der in der Umgebung des Tegernsees (Bayern) vorkommt. Petrographisch handelt es sich um einen fein- bis mittelkörnigen Kalkstein mit fossilen Einschlüssen, der durch seine hell- bis blaugraue Farbgebung und hohe Polierfähigkeit geschätzt wird. Im Grabmalbereich findet der Stein seit dem 19. Jahrhundert Anwendung. Er wird für Grabplatten, Stelen und Inschriftentafeln verwendet, da er witterungsbeständig, gut beschriftbar und ästhetisch ansprechend ist."
        },
    "kehlheimer-kalkstein": {
        name: "Kehlheimer Kalkstein",
        fundort: "Neuessing/ Kehlheim, Bayern",
        fundland: "Deutschland",
        bezeichnung: "Kalkstein",
        alter: "Jura",
        gesteinsgruppe: "Sedimentgestein",
        bild: "./Fotos/gestein/kelheimer_kalkstein.png",
        struktur: "weitgehend richtungslos",
        koordinaten: [48.92815148446526, 11.83520637865144] ,
    },
    "rosenheimer-granit": {
        name: "Rosenheimer Granit",
        fundort: "Rohrbach/ Rosenheim, Bayern",
        fundland: "Deutschland",
        bezeichnung: "Kalkstein",
        alter: "Tertiär",
        gesteinsgruppe: "Sedimentgesteine",
        struktur: "brekziös bzw. knollig",
        koordinaten: [47.788089069308334, 12.192795732476736] /*[47.788933846086735, 12.184783826998231],
        bild: "./Fotos/gestein/kelheimer_kalkstein.png",
        beschreibung: "Der Rosenheimer Kalkstein ist eine typische Kalkbrekzie des alpinen Molassebeckens. Entstanden durch Umlagerung von Kalkgeröllen in Flusssystemen des jungen Alpenvorlands. Charakteristisch sind die eingebetteten, bis faustgroßen Kalkknollen in einer kalkigen Matrix. Historisch als Mauerstein und für Fundamentbauten genutzt."
    },
    
        "nummulitenkalk": {
            name: "Nummulitenkalk",
            fundort: "Enzenauer Marmor (Bad Heilbrunn), Sonthofen, Rohrdorf, Reichenhall",
            fundland: "Deutschland (Alpennordrand)",
            bezeichnung: "Enzenauer Marmor / Enzenauer Kalkstein",
            alter: "Alttertiär",
            gesteinsgruppe: "Fossilschuttkalk",
            struktur: "dickbankig, dicht, grau oder rötlich-braun mit Nummuliten, Mollusken, Seeigeln und Kalkalgen",
            koordinaten:   [
                [47.7512, 11.4347],  // Beispiel: Bad Heilbrunn
                [47.5144, 10.2814],  // Beispiel: Sonthofen
                [47.7972, 12.1700]   // Beispiel: Rohrdorf
            ],
            bild: "./Fotos/gestein/kelheimer_kalkstein.png",
            beschreibung: "Ein im Alttertiär abgelagerter Fossilschuttkalk mit charakteristischen Nummuliten-Einschlüssen (münzenförmige Foraminiferen-Gehäuse). Wirtschaftlich bedeutendstes Vorkommen war der Enzenauer Marmor bei Bad Heilbrunn. Rohdichte: 2,72 g/cm³, Druckfestigkeit: 45–136 N/mm². Wurde als Dekorationsmarmor und Mauerstein genutzt, Abbau mittlerweile eingestellt."
        
    },
    "rillenkarren": {
        
            name: "Rillenkarren",
            fundort: "Häufig in Kalksteinregionen (z. B. Alpen, Fränkische Alb, Karstgebiete weltweit)",
            fundland: "Deutschland (Bayern, Schwäbische Alb), Österreich, Schweiz, Kroatien (Karst), globale Karstgebiete",
            bezeichnung: "Karren, Rillenkarren (engl. 'rillenkarst' oder 'solution flutes')",
            alter: "Entstehen über geologisch kurze Zeiträume (Jahrhunderte bis Jahrtausende)",
            gesteinsgruppe: "Karbonatgestein (Kalkstein, Dolomit), seltener auch auf Gips oder Salz",
            struktur: "Parallel verlaufende, rinnenartige Vertiefungen (Rillen) mit scharfen Kanten, typischerweise 1–30 cm tief und breit",
            koordinaten: "Beispiel Fränkische Alb: 49.7° N, 11.4° E (variiert je nach Vorkommen)",
            bild: "Rillenmuster auf freiliegenden Felsflächen, oft in Gruppen angeordnet",
            beschreibung: "Rillenkarren entstehen durch korrosive Verwitterung von Kalkstein durch leicht saures Regenwasser (Kohlensäureverwitterung). Die Rillen folgen oft dem Gefälle und bilden charakteristische lineare Muster. Sie sind ein typisches Merkmal von Karstlandschaften.",
        
    },
    "kobellit": {
        name: "Kobellit",
        fundort: "Schwarzwald (Deutschland), Schneeberg (Sachsen), Boliden (Schweden), Tasna (Bolivien)",
        fundland: "Deutschland, Schweden, Bolivien, Kanada",
        bezeichnung: "Bismut-Sulfosalz-Mineral",
        alter: "Entstanden in hydrothermalen Gängen (meist mesozonal, Alter variiert je nach Lagerstätte)",
        gesteinsgruppe: "Sulfosalze (Sulfosalzmineral)",
        struktur: "Monoklin-prismatische Kristalle, oft nadelig oder faserig, auch massiv",
        koordinaten: "Beispiel Schneeberg: 50.5947° N, 12.5979° E",
        bild: "Bleigrau bis stahlgrau, metallischer Glanz, undurchsichtig",
        beschreibung: "Kobellit (Pb₆CuBi₄S₁₂) ist ein seltenes Mineral der Sulfosalzgruppe, das in Bismut-reichen hydrothermalen Erzgängen vorkommt. Typische Begleitminerale sind Galenit, Tetraedrit und andere Sulfide. Benannt nach dem deutschen Mineralogen Franz von Kobell (1803–1882).",
    },
    "molassesandstein": {
        name: "Molassesandstein",
        fundort: "Alpenvorland (Deutschland, Schweiz, Österreich), Molassebecken",
        fundland: "Deutschland, Schweiz, Österreich",
        bezeichnung: "Sandstein der alpinen Molasse",
        alter: "Oligozän bis Miozän (ca. 30–5 Mio. Jahre)",
        gesteinsgruppe: "Sedimentgestein (klastisches Gestein)",
        struktur: "Fein- bis grobkörnig, oft schräggeschichtet, teils fossilführend",
        koordinaten: "Variabel, z. B. Molassebecken bei München: ~48.1374° N, 11.5755° E",
        bild: "Typisch hellgrau bis gelblich, je nach Eisenoxid-Anteil auch rötlich",
        beschreibung: "Der Molassesandstein entstand durch Ablagerung von Sedimenten aus den aufsteigenden Alpen im Vorlandbecken. Er besteht überwiegend aus Quarzkörnern, oft mit Glimmer- oder Feldspatanteilen. Wichtige Baustein-Ressource (z. B. für historische Gebäude).",
    },
    "getigerter-schilfsandstein": {
        name: "Getigerter Schilfsandstein",
        fundort: "Stuttgart (Deutschland), speziell im Stuttgarter Raum (z.B. Bad Cannstatt), Keuperbergland",
        fundland: "Deutschland (Baden-Württemberg)",
        bezeichnung: "Feinkörniger Sandstein mit tigerartiger Bänderung (Wechsellagerung von hellen und dunklen Schichten)",
        alter: "Obere Trias (Keuper, ca. 220–205 Mio. Jahre)",
        gesteinsgruppe: "Sedimentgestein (Sandstein)",
        struktur: "Dünnbankig, wechselnd tonig-sandige Lagen, typische Wechselschichtung („Tigerung“)",
        koordinaten: "Beispiel Stuttgart-Bad Cannstatt: 48.8039° N, 9.2107° E",
        bild: "Hell- bis dunkelgraue, gelbliche oder rötliche Bänderung, oft mit deutlicher Streifung",
        beschreibung: "Der Getigerte Schilfsandstein ist ein charakteristischer Sandstein des Keupers, der durch rhythmische Ablagerung in flachen Meeres- oder Delta-Bereichen entstand. Die „Tigerung“ entsteht durch Wechsellagerung von tonigen und sandigen Lagen. Wichtiger historischer Baustein (z.B. in Stuttgarter Altbauten).",
    },
   
    "carrara-marmor": {
        name: "Getigerter Schilfsandstein",
        fundort: "Stuttgart (Deutschland), speziell im Stuttgarter Raum (z.B. Bad Cannstatt), Keuperbergland",
        fundland: "Deutschland (Baden-Württemberg)",
        bezeichnung: "Feinkörniger Sandstein mit tigerartiger Bänderung (Wechsellagerung von hellen und dunklen Schichten)",
        alter: "Obere Trias (Keuper, ca. 220–205 Mio. Jahre)",
        gesteinsgruppe: "Sedimentgestein (Sandstein)",
        struktur: "Dünnbankig, wechselnd tonig-sandige Lagen, typische Wechselschichtung („Tigerung“)",
        koordinaten: "Beispiel Stuttgart-Bad Cannstatt: 48.8039° N, 9.2107° E",
        bild: "Hell- bis dunkelgraue, gelbliche oder rötliche Bänderung, oft mit deutlicher Streifung",
        beschreibung: "Der Getigerte Schilfsandstein ist ein charakteristischer Sandstein des Keupers, der durch rhythmische Ablagerung in flachen Meeres- oder Delta-Bereichen entstand. Die „Tigerung“ entsteht durch Wechsellagerung von tonigen und sandigen Lagen. Wichtiger historischer Baustein (z.B. in Stuttgarter Altbauten).",
    },
    "gelber-sandstein": {
        name: "Gelber Sandstein",
        fundort: "Elbsandsteingebirge (Deutschland/Tschechien), Pfälzerwald, Thüringen, Frankreich (Vosges)",
        fundland: "Deutschland, Tschechien, Frankreich, USA (Colorado)",
        bezeichnung: "Eisenoxid-reicher Sandstein (häufig als 'Postaer Sandstein' oder 'Naturgelb' bezeichnet)",
        alter: "Kreidezeit (ca. 100–70 Mio. Jahre, z.B. Elbsandstein = Oberkreide)",
        gesteinsgruppe: "Sedimentgestein (klastischer Sandstein)",
        struktur: "Fein- bis mittelkörnig, quarzdominiert, gebankt oder massig",
        koordinaten: "Elbsandstein-Beispiel: 50.9236° N, 14.0714° E (Posta, Sächsische Schweiz)",
        bild: "Gelblich bis ockerfarben (durch Limonit-Beimengungen), teils mit Schrägschichtung",
        beschreibung: "Gelber Sandstein entsteht durch klastische Ablagerung in Fluss- oder Küstenbereichen. Die Färbung resultiert aus Eisenoxid-Hydraten (Limonit). Wichtiger historischer Baustein für Denkmäler (z.B. Dresdner Frauenkirche) und Bildhauerei. Varianten zeigen unterschiedliche Verwitterungsbeständigkeit.",
    },
    "kirchheimer-muschelkalk": {
        name: "Kirchheimer Muschelkalk",
        fundort: "Kirchheim unter Teck (Baden-Württemberg), Schwäbische Alb",
        fundland: "Deutschland",
        bezeichnung: "Feinkörniger Trochitenkalk (Unterer Muschelkalk)",
        alter: "Trias (Unterer Muschelkalk, ca. 240 Mio. Jahre)",
        gesteinsgruppe: "Sedimentgestein (Karbonatgestein)",
        struktur: "Dicht bis feinkörnig, reich an Trochiten (Encrinus liliiformis-Fossilien), teils bankig",
        koordinaten: "Kirchheim unter Teck: 48.6489° N, 9.4518° E",
        bild: "Hellgrau bis beige, oft mit deutlichen Fossilabdrücken (Seelilienstielglieder)",
        beschreibung: "Der Kirchheimer Muschelkalk ist ein fossilreicher Kalkstein der Unteren Muschelkalk-Formation. Charakteristisch sind massenhafte Vorkommen von Trochiten (Crinoideen-Stielglieder). Wichtiger historischer Baustein für regionale Architektur (z.B. Kirchheimer Altstadt).",
    },
    "kösseine-granit":
    {
        name: "Kösseine-Granit",
        fundort: "Kösseine-Massiv, Fichtelgebirge (Oberfranken, Bayern)",
        fundland: "Deutschland",
        bezeichnung: "Großkörniger Biotitgranit",
        alter: "Spätvariszisch (Oberkarbon, ca. 300–320 Mio. Jahre)",
        gesteinsgruppe: "Magmatisches Gestein (Plutonit)",
        struktur: "Großkörnig, gleichkörnig; typische Fichtelgebirgs-Struktur mit gut ausgebildeten Feldspat-Kristallen",
        koordinaten: "Kösseine-Gipfel: 50.0167° N, 11.9833° E",
        bild: "Hellgrau mit rosa Feldspat-Einsprenglingen, schwarzen Biotitflittern und bläulichem Quarz",
        beschreibung: "Der Kösseine-Granit ist ein typischer Vertreter der Fichtelgebirgsgranite. Charakteristisch sind seine großkörnigen, idiomorphen Kalifeldspäte (bis 5 cm). Wichtiger Naturwerkstein, der seit dem Mittelalter abgebaut wird. Verwendung als Baumaterial (z.B. für Denkmäler) und in der Steinbildhauerei.",
    },
    "ochsenkopf-proterobas":
    {
        name: "Ochsenkopf-Proterobas",
        fundort: "Ochsenkopf-Massiv, Fichtelgebirge (Bayern)",
        fundland: "Deutschland",
        bezeichnung: "Nephelinbasalt (alkalibasaltisches Ganggestein)",
        alter: "Tertiär (ca. 20–25 Mio. Jahre)",
        gesteinsgruppe: "Magmatisches Gestein (Subvulkanit)",
        struktur: "Dicht bis feinkörnig, teilweise porphyrisch mit Olivin-Einsprenglingen",
        koordinaten: "Ochsenkopf-Gipfel: 50.0319° N, 11.8086° E",
        bild: "Dunkelgrau bis schwarz mit grünlichen Olivin-Einsprenglingen, frisch bläulicher Schimmer",
        beschreibung: "Der Ochsenkopf-Proterobas ist ein alkalireicher Basalt, der als Gangfüllung im Fichtelgebirgsgranit auftritt. Charakteristisch ist sein Reichtum an Nephelin und Olivin. Wichtiges geologisches Archiv für die tertiäre Vulkanaktivität in Nordbayern. Verwendung als Schottermaterial und lokaler Naturwerkstein.",
    },
    "diabas":
    {
        name: "Diabas",
        fundort: "Rheinisches Schiefergebirge (Deutschland), Harz, Thüringer Wald, Odenwald; weltweit verbreitet",
        fundland: "Deutschland, Österreich, Schweden, USA, Indien, Australien",
        bezeichnung: "Basaltähnliches Ganggestein (subvulkanisches Äquivalent zu Gabbro)",
        alter: "Meist paläozoisch (z.B. devonisch im Rheinischen Schiefergebirge, ca. 400 Mio. Jahre)",
        gesteinsgruppe: "Magmatisches Gestein (Plutonit/Ganggestein)",
        struktur: "Dicht bis feinkörnig, ophitisch (typische Verzahnung von Plagioklas und Pyroxen)",
        koordinaten: "Beispiel Lahn-Dill-Gebiet: 50.5667° N, 8.5000° E",
        bild: "Dunkelgrau bis schwarzgrün, frisch bläulich schimmernd, verwittert bräunlich",
        beschreibung: "Diabase entstanden durch langsameres Erkalten basaltischer Magmen in der Erdkruste (im Vergleich zu Vulkaniten). Charakteristische Mineralogie: Plagioklas (Labradorit), Augit, ± Olivin, ± Magnetit. Wichtiger Rohstoff für Schotter, Straßenbau und historisch als Mühlstein.",
    },
    "untersberger-marmor":{
        name: "Untersberger Marmor",
        fundort: "Fürstenbrunn / Salzburg Grödig Fürstenbrunn Veitlbruch (seit 1919 nicht mehr betrieben) Hofbruch Neu- und Mittelbruch Mayr-Melnhof-Bruch",
        fundland: "Deutschland",
        bezeichnung: ""

    },
    "schwarz-schwedisch-basalt":{
        name: "schwarz-schwedisch Basalt",
        bild: "./Fotos/gestein/schwedisch_schwarz.png",
        fundort: "Saganäs/ Älmhult"
    },
    "serpentinit":
    {
        name: "Serpentinit",
        fundort: "Zöblitz (Erzgebirge), Hohe Tauern (Österreich), Ligurien (Italien), Kalifornien (USA)",
        fundland: "Deutschland, Österreich, Italien, USA, Russland, Griechenland",
        bezeichnung: "Metamorphes Ultramafitit (Serpentingestein)",
        alter: "Meist paläozoisch bis mesozoisch (z.B. Erzgebirge: ~380 Mio. Jahre)",
        gesteinsgruppe: "Metamorphes Gestein",
        struktur: "Dicht, faserig bis schuppig (Antigorit/Chrysotil-Texturen), oft mit Magnetitadern",
        koordinaten: "Zöblitz-Steinbruch: 50.6581° N, 13.2294° E",
        bild: "Grünlich-schwarz, oft mit seidigem Glanz und netzartigen Adern",
        beschreibung: "Serpentinite entstehen durch Metamorphose von ultramafischen Gesteinen (Peridotit, Dunite) unter hydratisierenden Bedingungen. Hauptminerale: Antigorit, Chrysotil, Lizardit ± Magnetit. Historisch als Zöblitzer Serpentin für Kunstgegenstände genutzt. Heute als Dämmstoff und Dekorstein relevant.",
    },
    "kalktuff":
    {
        name: "Kalktuff",
        fundort: "Karstquellen (z.B. Schwäbische Alb, Fränkische Alb), Flussläufe (Travertin-Terassen von Pamukkale/Türkei), Yellowstone-Nationalpark (USA)",
        fundland: "Deutschland, Türkei, USA, Italien, Island",
        bezeichnung: "Süßwasserkalk (poröser Kalkstein)",
        alter: "Holozän bis Pleistozän (meist < 1 Mio. Jahre alt)",
        gesteinsgruppe: "Sedimentgestein (chemisch-biogenes Karbonat)",
        struktur: "Hochporös (30-60% Hohlräume), schaumig bis blasig, oft mit Pflanzenabdrücken",
        koordinaten: "Beispiel Blaubeuren (Schwäbische Alb): 48.4125° N, 9.7853° E",
        bild: "Cremeweiß bis beige, schwammartige Textur mit sichtbaren Pflanzenstrukturen",
        beschreibung: "Kalktuff entsteht durch chemische Ausfällung von Kalk (CaCO₃) aus kalkgesättigtem Quellwasser, oft begünstigt durch Moose/Algen. Charakteristisch sind eingeschlossene Pflanzenreste und hohe Porosität. Wichtiger historischer Baustein (z.B. Kloster Maulbronn) und Ökosystem für Spezialisten.",
    },
    "riffkalk":
    {
        name: "Riffkalk",
        fundort: "Alpen (Wettersteinkalk), Schwäbische Alb (Massenkalk), Dolomiten (Italien), Devon-Riffe (Eifel)",
        fundland: "Deutschland, Österreich, Italien, USA (Texas), Australien (Great Barrier Reef)",
        bezeichnung: "Biohermer Riffkalk (marine Karbonatablagerung)",
        alter: "Variabel (z.B. Alpen: Trias-Jura, Eifel: Devon, ca. 400–150 Mio. Jahre)",
        gesteinsgruppe: "Sedimentgestein (biogenes Karbonatgestein)",
        struktur: "Massig bis bankig, hochfossilführend (Korallen, Stromatoporen, Schwämme)",
        koordinaten: "Beispiel Allgäuer Alpen: 47.4167° N, 10.2667° E",
        bild: "Hellgrau bis beige, oft mit deutlich sichtbaren Fossilien und Riffstrukturen",
        beschreibung: "Riffkalke entstanden durch die Akkumulation von Riffbildnern (Korallen, Schwämme, Algen) in flachen, tropischen Meeren. Charakteristisch sind eingeschaltete Riffschuttlagen und z.T. dolomitisierte Zonen. Wichtiger Rohstoff für Zementindustrie und als Naturwerkstein (z.B. 'Adneter Marmor').",
    },
    "redwezit":
    {
        name: "Redwitzit",
        fundort: "Redwitz an der Rodach (Oberfranken), Fichtelgebirge, Bayerischer Wald",
        fundland: "Deutschland, Tschechien (Böhmische Masse), Österreich",
        bezeichnung: "Lamprophyr-artiges Ganggestein",
        alter: "Spätvariszisch (Oberkarbon, ca. 300–320 Mio. Jahre)",
        gesteinsgruppe: "Magmatisches Gestein (Ganggestein)",
        struktur: "Porphyrisch mit Einsprenglingen in feinkörniger Grundmasse",
        koordinaten: "Typuslokalität Redwitz: 50.1667° N, 11.2000° E",
        bild: "Dunkelgrau bis schwarzgrün, frisch bläulicher Schimmer",
        beschreibung: "Redwitzit ist ein intermediäres Ganggestein mit mineralogischer Ähnlichkeit zu Lamprophyren. Charakteristische Zusammensetzung: Plagioklas, Hornblende, Biotit ± Quarz. Benannt nach der Ortschaft Redwitz. Wissenschaftlich bedeutend als Zeiger für spätorogene Magmen im Varistikum.",
    },
    "lechbrucker-molassesandstein":
    {
        name: "Lechbrucker Molassesandstein",
        fundort: "Lechbruck am See (Oberbayern), Alpenvorland",
        fundland: "Deutschland (Bayern)",
        bezeichnung: "Fein- bis mittelkörniger, kalkgebundener Sandstein",
        alter: "Oligozän bis Miozän (ca. 30–10 Mio. Jahre)",
        gesteinsgruppe: "Sedimentgestein (Molasse-Becken)",
        struktur: "Gleichkörnig, schwach gebankt, lokal schräggeschichtet",
        koordinaten: "Lechbruck am See: 47.7000° N, 10.8000° E",
        bild: "Hellgrau bis gelblich, teils mit rostfarbenen Eisenoxid-Flecken",
        beschreibung: "Der Lechbrucker Molassesandstein entstand durch Ablagerung von Flusssedimenten im alpinen Vorlandbecken. Charakteristisch ist seine kalkige Bindung und hohe Wetterbeständigkeit. Historisch wichtiger Baustein für Kirchen und Denkmäler im Allgäu. Oft mit fossilen Pflanzenabdrücken (Blattabdrücke) erhalten.",
    },
    "jurakalk-grau":
    {
        name: "Grauer Jurakalk (Braunjura)",
        fundort: "Schwäbische Alb (z.B. Blumberg, Hegau), Fränkische Alb",
        fundland: "Deutschland (Baden-Württemberg, Bayern), Schweiz, Frankreich (Jura-Gebirge)",
        bezeichnung: "Fossilreicher mergeliger Kalkstein",
        alter: "Mittlerer Jura (Dogger, ca. 175–160 Mio. Jahre)",
        gesteinsgruppe: "Sedimentgestein (Karbonatgestein)",
        struktur: "Bankig bis plattig, oft mit Eisenoolith-Lagen und Fossilien (Ammoniten, Belemniten)",
        koordinaten: "Beispiel Blumberg: 47.8406° N, 8.5336° E",
        bild: "Graubraun bis bläulich-grau, verwittert gelblich, typische Eisenoxid-Flecken",
        beschreibung: "Der Graue Jurakalk entstand in flachen Meeresbereichen des Jurameers. Charakteristisch ist sein Wechsel zwischen Kalk- und Mergellagen mit hohem Fossilgehalt. Wirtschaftlich wichtig als Naturwerkstein und Zementrohstoff. Besondere Varietäten enthalten Eisenoolithe („Eisenstein“).",
    },
    "lithothammnienkalk":
        {
            name: "Lithothamnienkalk",
            fundort: "Mittelmeerregion (z.B. Sizilien, Malta), Atlantikküste (Bretagne), Nordsee (Doggerbank)",
            fundland: "Italien, Frankreich, Spanien, Deutschland (Nordsee), Dänemark",
            bezeichnung: "Rotalgenkalk (korallenroter Algenkalk)",
            alter: "Neogen bis Quartär (meist pliozän bis holozän, < 5 Mio. Jahre)",
            gesteinsgruppe: "Sedimentgestein (biogenes Karbonat)",
            struktur: "Feinkörnig, porös bis dicht, oft schaumig mit Algenstrukturen",
            koordinaten: "Beispiel Malta: 35.9042° N, 14.5189° E",
            bild: "Weißlich bis korallenrot, typische stängelige Mikrostruktur",
            beschreibung: "Lithothamnienkalk besteht überwiegend aus den Kalkskeletten krustenbildender Rotalgen (Lithothamnium spp.). Entsteht in flachen Subtidalzonen durch Algenrasen. Wichtiger Rohstoff für Düngemittel (Algenkalk) und als pH-Regulator in der Landwirtschaft. Kommerziell in der Aquaristik verwendet.",
        },
    "hohenschwangauer-kalk":{
        name: "Hohenschwangauer Kalk",
        fundort: "Umgebung Hohenschwangau (Allgäuer Alpen), Pfronten, Schwangau",
        fundland: "Deutschland (Bayern)",
        bezeichnung: "Kalkstein der Allgäu-Decke (Helvetikum)",
        alter: "Kreidezeit bis Paläogen (ca. 100–50 Mio. Jahre)",
        gesteinsgruppe: "Sedimentgestein (Karbonatgestein)",
        struktur: "Bankig bis massig, fein- bis mittelkörnig, teilweise mergelig",
        koordinaten: "Typusgebiet: 47.5578° N, 10.7372° E (Hohenschwangau)",
        bild: "Hellgrau bis bläulich-grau, verwittert gelblich, teils mit Fossilresten",
        beschreibung: "Der Hohenschwangauer Kalk gehört zur Allgäu-Formation der helvetischen Decken. Charakteristisch sind Wechsellagerungen von reinen Kalkbänken und mergeligen Zwischenlagen. Lokal mit Einschaltungen von Flysch-Sedimenten. Wichtiger historischer Baustein für Schlösser (Neuschwanstein) und Kirchenbauten im Allgäu."
    },
    "diorit":{
        name: "Diorit",
        fundort: "Odenwald (Deutschland), Adamello-Massiv (Italien), Sierra Nevada (USA), Cornwall (UK)",
        fundland: "Deutschland, Italien, USA, Großbritannien, Norwegen, Türkei",
        bezeichnung: "Intermediäres Tiefengestein",
        alter: "Meist paläozoisch bis mesozoisch (z.B. Odenwald: 340–320 Mio. Jahre)",
        gesteinsgruppe: "Magmatisches Gestein (Plutonit)",
        struktur: "Gleichkörnig bis porphyrisch, mittel- bis grobkörnig",
        koordinaten: "Beispiel Finkenbach/Odenwald: 49.6833° N, 8.9167° E",
        bild: "Grau bis graugrün, salz-pfeffer-ähnliches Erscheinungsbild",
        beschreibung: "Diorit ist ein quarzarmes Plutonitgestein mit typischer Zusammensetzung aus Plagioklas (50–70%), Hornblende/Biotit (20–40%) und <5% Quarz. Entsteht durch Differentiation basaltischer Magmen. Wichtiger Naturwerkstein seit der Antike (z.B. ägyptische Statuen). Moderne Nutzung als Schotter und Dekorstein."
    },
    "högler-sandstein":{
        name: "Högler Sandstein",
        fundort: "Högl, Bayern",
        struktur: "geadert",
        fundland: "Deutschland",
        bezeichnung: "Sandstein",
        alter: "Tertiär",
        gesteinsgruppe: "Sedimentgesteine",
        bild: "./Fotos/gestein/kelheimer_kalkstein.png",
        beschreibung: "Vom 17. bis ins frühe 20. Jahrhundert wurde der wertvolle Högler Sandstein am Högl (unter anderem im Gemeindegebiet von Piding) abgebaut. Dieser widerstandsfähige Naturstein fand nicht nur bei bedeutenden Salzburger Bauwerken wie der St.-Erhard-Kirche und der Residenz Verwendung, sondern prägte auch das Stadtbild Münchens.\n\nBesonders bemerkenswert:\n• Der Alte Südliche Friedhof in München (gegründet 1563) zeigt an zahlreichen historischen Grabmalen die charakteristische Struktur des Högler Sandsteins\n• Viele der kunstvollen Epitaphe und Denkmäler aus dem 18. und 19. Jahrhundert wurden aus diesem Material gefertigt\n• Der Stein eignete sich ideal für aufwändige Steinmetzarbeiten und widerstand den Witterungseinflüssen\n\nDie wichtigsten Abbaugebiete bei Piding:\n✓ Gschwendtner Bruch (bis 1960er aktiv) - lieferte u.a. Material für die Pidinger Friedhofsmauer\n✓ Schneidergrube (bis 1860 Wetzsteinproduktion)\n✓ Meisterbruch und Dopplerbruch in Nachbargemeinden\n\nSeit 2004 macht die Gemeinde Piding mit dem erschlossenen Gschwendtner Bruch und einer Infotafel diese bedeutende Handwerkstradition erlebbar. Die Spuren des Högler Sandsteins reichen damit von lokalen Bauwerken bis in die Münchner Stadtgeschichte."
    },
    "forellen-sandstein":{
        name: "Forellensandstein",
        fundort: "Nördlicher Schwarzwald (z.B. Bad Liebenzell, Pforzheim), Kraichgau",
        fundland: "Deutschland (Baden-Württemberg)",
        bezeichnung: "Buntsandstein mit charakteristischer Fleckung",
        alter: "Untere Trias (Buntsandstein, ca. 250–240 Mio. Jahre)",
        gesteinsgruppe: "Sedimentgestein (klastischer Sandstein)",
        struktur: "Fein- bis mittelkörnig, gebankt, mit dunklen Eisen-Mangan-Flecken",
        koordinaten: "Typuslokalität Bad Liebenzell: 48.7742° N, 8.7319° E",
        bild: "Hellgelber bis rötlicher Grundton mit dunkelbraunen, forellenartigen Flecken",
        beschreibung: "Der Forellensandstein erhielt seinen Namen durch die charakteristischen, an Fischhaut erinnernden Flecken (Mangan- und Eisenoxid-Ausscheidungen). Entstand in fluviatilen bis äolischen Ablagerungsmilieus. Wichtiger historischer Baustein für Sakralbauten und repräsentative Gebäude in Baden-Württemberg."
    },
    "plattensandstein":
    {
        name: "Plattensandstein",
        fundort: "Süddeutschland (Fränkische Alb, Schwäbische Alb), Thüringen, Sachsen",
        fundland: "Deutschland (Bayern, Baden-Württemberg, Thüringen, Sachsen)",
        bezeichnung: "Dünnbankiger Sandstein mit plattiger Absonderung",
        alter: "Meist Unterer Keuper oder Oberer Buntsandstein (Trias, 250–200 Mio. Jahre)",
        gesteinsgruppe: "Sedimentgestein (klastischer Sandstein)",
        struktur: "Fein- bis mittelkörnig, ausgeprägte plattige Bankung (2–10 cm Schichtdicke)",
        koordinaten: "Beispiel Hassberge (Unterfranken): 50.1500° N, 10.5000° E",
        bild: "Gelblich bis graubraun, deutlich sichtbare Schichtung, oft mit Wellenrippeln",
        beschreibung: "Plattensandsteine entstanden in flachen Meeres- oder Delta-Bereichen mit rhythmischer Sedimentation. Charakteristisch ist die lechte Spaltbarkeit entgelagerten Schichtflächen. Wichtiger historischer Baustein für Dacheindeckungen und Bodenbeläge in Süddeutschland."
    },
    "larvikit":
    {
        name: "Larvikit",
        fundort: "Larvik (Vestfold, Norwegen), Oslo-Graben",
        fundland: "Norwegen, Schweden (begrenzt)",
        bezeichnung: "Monzonitisches Ganggestein",
        alter: "Perm (ca. 290–250 Mio. Jahre)",
        gesteinsgruppe: "Magmatisches Gestein (Plutonit)",
        struktur: "Gleichkörnig bis porphyrisch, mittel- bis grobkörnig",
        koordinaten: "Typuslokalität Larvik: 59.0500° N, 10.0333° E",
        bild: "Dunkelblau-grau mit charakteristischem bläulichem Schimmer ('Blue Pearl'-Effekt)",
        beschreibung: "Larvikit ist ein alkalireiches Ganggestein des Oslo-Grabens, charakterisiert durch seinen hohen Anteil an Anorthoklas-Feldspat (60–70%) und Augit (20–30%). Bekannt für seinen irisierenden Schimmer (Labradoreszenz), der durch Lichtbrechung in den Feldspäten entsteht. Weltweit geschätzter Naturwerkstein für Architektur und Design."
    },
    "zoeblitzer-serpentinit":
    {
        name: "Zöblitzer Serpentinit",
        fundort: "Zöblitz (Erzgebirge, Sachsen), historische Steinbrüche um Marienberg",
        fundland: "Deutschland (Sachsen)",
        bezeichnung: "Metamorphes Olivinit-Gestein (Serpentinisierter Peridotit)",
        alter: "Paläozoikum (variszische Metamorphose, ca. 380–340 Mio. Jahre)",
        gesteinsgruppe: "Metamorphes Gestein (Ultramafitit)",
        struktur: "Dicht bis faserig, grün-schwarze Maserung, typische Magnetitadern",
        koordinaten: "Zöblitz: 50.6581° N, 13.2294° E",
        bild: "Dunkelgrün bis schwarzgrün mit seidigem Glanz, typische Netzzeichnung",
        beschreibung: "Der Zöblitzer Serpentinit entstand durch Metamorphose von Olivin-reichem Mantelgestein. Charakteristisch sind faserige Antigorit- und Chrysotil-Ausbildungen. Historisch berühmt als 'Grüner Stein von Zöblitz' für Kunstgegenstände (Dresdner Grünes Gewölbe). Enthält oft Chromit-Einschlüsse und Magnetitadern."
    },
    "ruhpoldinger-marmor":
    {
        name: "Ruhpoldinger Marmor",
        fundort: "Ruhpolding (Chiemgauer Alpen), Steinbrüche am Zinnkopf und Georgenberg",
        fundland: "Deutschland (Bayern)",
        bezeichnung: "Kalkmarmor der Kalkalpen",
        alter: "Trias bis Jura (ca. 220–150 Mio. Jahre), alpidisch metamorph überprägt",
        gesteinsgruppe: "Metamorphes Gestein (Marmor)",
        struktur: "Gleichkörnig, mittel- bis grobkristallin (Calcitkristalle 1–5 mm)",
        koordinaten: "Zinnkopf-Steinbruch: 47.7500° N, 12.6500° E",
        bild: "Weiß bis hellgrau mit charakteristischen grauen Adern (Graphit-Einschlüsse)",
        beschreibung: "Der Ruhpoldinger Marmor entstand durch Metamorphose von Kalksteinen der Nördlichen Kalkalpen. Charakteristisch sind seine gleichmäßige Textur und gute Polierfähigkeit. Historisch wichtiger Baustein für Kirchen und Denkmäler in Süddeutschland (z.B. Münchener Residenz). Enthält typischerweise Graphitfahnen als Relikte organischen Materials."
    },
    "untersberger-ruhpoldinger":{
        name: "Untersberger Ruhpoldinger"
    },
    "nero-portoro":
    {
        name: "Nero Portoro",
        fundort: "Portovenere (Ligurien, Italien), La Spezia-Provinz",
        fundland: "Italien",
        bezeichnung: "Schwarzer Goldader-Marmor",
        alter: "Unterjura (Toarcium, ca. 180 Mio. Jahre)",
        gesteinsgruppe: "Metamorphes Gestein (Marmor)",
        struktur: "Kompatte schwarze Grundmasse mit goldgelben Calcitadern",
        koordinaten: "Historische Steinbrüche: 44.0500° N, 9.8333° E",
        bild: "Tiefschwarzer Hintergrund mit dramatischen goldgelben Aderungen",
        beschreibung: "Der Nero Portoro entstand durch Metamorphose kalkiger Sedimente mit bituminösen Einlagerungen. Seine charakteristischen Goldadern bestehen aus Calcit mit Eisenoxid-Beimengungen. Seit der Römerzeit begehrter Luxusstein für repräsentative Bauten (Pantheon, Versailles). Heute nur noch limitiert aus wenigen, schwer zugänglichen Küstensteinbrüchen gewinnbar."
    },
    "adneter-marmor":
    {
        name: "Adneter Marmor",
        fundort: "Adnet (Salzburg, Österreich), Steinbrüche im Haunsberggebiet",
        fundland: "Österreich",
        bezeichnung: "Roter Ammonitenkalk",
        alter: "Unterjura (Lias, ca. 200–180 Mio. Jahre)",
        gesteinsgruppe: "Sedimentgestein (biogenes Karbonat)",
        struktur: "Dicht bis feinkörnig, hochfossilführend (Ammoniten, Belemniten)",
        koordinaten: "Hauptsteinbruch: 47.7167° N, 13.1333° E",
        bild: "Tiefrot bis rosa mit weißen Fossilabdrücken und Adern",
        beschreibung: "Der Adneter Marmor ist ein fossilreicher Kalkstein, der durch Eisenoxide rot gefärbt wurde. Berühmt für seine spektakulären Ammoniten-Einschlüsse. Seit dem Mittelalter wichtiger Sakralstein (Salzburger Dom, Wiener Stephansdom). Die typische Rotfärbung entstand durch diagenetische Umwandlung von Pyrit zu Hämatit."
    },
    "hierlatzkalk-crinoiden-Schuttkalk-mit-seelilien-stielgliedern":{
        name: "Hierlatzkalk",
        fundort: "Hierlatz (Dachsteingebirge, Österreich), Nördliche Kalkalpen",
        fundland: "Österreich (Oberösterreich, Steiermark), Deutschland (Bayern)",
        bezeichnung: "Crinoiden-Schuttkalk mit Seelilien-Stielgliedern",
        alter: "Obertrias (Norium, ca. 220–210 Mio. Jahre)",
        gesteinsgruppe: "Sedimentgestein (biogenes Karbonat)",
        struktur: "Grobbankig, stark zertrümmerte Crinoiden-Stielglieder in karbonatischer Matrix",
        koordinaten: "Typuslokalität: 47.5333° N, 13.6333° E",
        bild: "Hellgrau bis beige, mit deutlich sichtbaren runden Stielgliedern (Trochiten) in verschiedenen Größen",
        beschreibung: "Der Hierlatzkalk entstand in flachen Schelfmeeren durch Akkumulation von Crinoiden-Schutt. Charakteristisch sind massenhafte, millimeter- bis zentimetergroße Stielglieder (Trochiten) der Seelilie _Encrinus carnalli_. Wichtiger stratigraphischer Leithorizont in den Nördlichen Kalkalpen. Lokal als Naturwerkstein genutzt."
    }



};

*/
/*
const personenDaten = {
    "adolf-schlaginweit": {
        name: "Adolf Schlaginweit",
        beschreibung: "Adolf Schlaginweit war ein deutscher Naturforscher und Entdecker.Adolf Schlaginweit war ein deutscher Naturforscher und Entdecker",
        geburtsdatum: "09.01.1829",
        sterbedatum: "26.08.1857",
        bild: "./Fotos/personen/Adolf-Schlagintweit.png"
    },
    "friedrich-gärtner": {
        name: "Friedrich Gärtner",
        beschreibung: "Friedrich von Gärtner war ein berühmter Architekt, der viele bekannte Gebäude entworfen hat.",
        geburtsdatum: "10.12.1791",
        sterbedatum: "21.04.1847",
        bild: ".Fotos/personen/gaertner.png"
    },
    "alois-senefelder": {
        name: "Alois Senefelder",
        beschreibung: "Alois Senefelder war der Erfinder der Lithografie.",
        geburtsdatum: "06.11.1771",
        sterbedatum: "26.02.1834",
        bild: "./Fotos/personen/a-senefelder.png"
    },
    "arnold-zenetti": {
        name: "Arnold Zenetti",
        beschreibung: "Arnold Zenetti war ein deutscher Architekt und Stadtplaner.",
        geburtsdatum: "10.07.1824",
        sterbedatum: "05.03.1895",
        bild: "./Fotos/personen/arnold-zenetti.png"
    },
    "ferdinand-von-miller": {
        name: "Ferdinand von Miller",
        beschreibung: "Ferdinand von Miller war ein bedeutender Erzgießer des 19. Jahrhunderts.",
        geburtsdatum: "18.10.1813",
        sterbedatum: "11.02.1887",
        bild: "Fotos/personen/Ferdinand_von_Miller.png"
    },

    "georg-brey": {

        name: "Georg Brey",
        beschreibung: "Ferdinand von Miller war ein bedeutender Erzgießer des 19. Jahrhunderts.",
        geburtsdatum: "18.10.1813",
        sterbedatum: "11.02.1887",
        bild: "Fotos/personen/Ferdinand_von_Miller.png"
    
    },

    "georg-simon-ohm": {
        name: "Georg Simon Ohm",
        beschreibung: "Georg Simon Ohm war ein bedeutender Physiker, bekannt für das Ohmsche Gesetz.",
        geburtsdatum: "16.03.1789",
        sterbedatum: "06.07.1854",
        bild: "Fotos/personen/Ohm.png"
    },
    "georg-von-reichenbach": {
        name: "Georg von Reichenbach",
        beschreibung: "Georg von Reichenbach war ein deutscher Ingenieur und Erfinder.",
        geburtsdatum: "24.08.1771",
        sterbedatum: "21.05.1826",
        bild: "Fotos/personen/reichenbach.png"
    },
    "johannes-nepomuk-nußbaum": {
        name: "Johannes Nepomuk Nußbaum",
        beschreibung: "Johannes Nepomuk Nußbaum war ein deutscher Chirurg.",
        geburtsdatum: "02.09.1829",
        sterbedatum: "31.10.1890",
        bild: "Fotos/personen/Nussbaum.png"
    },
    "josef-von-fraunhofer": {
        name: "Josef von Fraunhofer",
        beschreibung: "Josef von Fraunhofer war ein deutscher Optiker und Physiker.",
        geburtsdatum: "06.03.1787",
        sterbedatum: "07.06.1826",
        bild: "Fotos/personen/fraunhofer.png"
    },
    "justus-von-liebig": {
        name: "Justus von Liebig",
        beschreibung: "Justus von Liebig war ein deutscher Chemiker, bekannt für seine Arbeiten zur Agrarchemie.",
        geburtsdatum: "12.05.1803",
        sterbedatum: "18.04.1873",
        bild: "Fotos/personen/Liebig.png"
    },
    "leo-von-klenze": {
        name: "Leo von Klenze",
        beschreibung: "Leo von Klenze war ein deutscher Architekt, Maler und Schriftsteller.",
        geburtsdatum: "29.02.1784",
        sterbedatum: "27.01.1864",
        bild: "Fotos/personen/klenze.png"
    },
    "ludwig-knorr": {
        name: "Ludwig Knorr",
        beschreibung: "Ludwig Knorr war ein deutscher Chemiker, bekannt für die Knorr-Pyrrol-Synthese.",
        geburtsdatum: "02.12.1859",
        sterbedatum: "04.06.1921",
        bild: "Fotos/personen/knorr.png"
    },
    "ludwig-schwanthaler": {
        name: "Ludwig Schwanthaler",
        beschreibung: "Ludwig Schwanthaler war ein deutscher Bildhauer, bekannt für seine Denkmäler und Skulpturen.",
        geburtsdatum: "26.08.1802",
        sterbedatum: "14.11.1848",
        bild: "Fotos/personen/Schwanthaler.png"
    },
    "max-von-seydel": {
        name: "Max von Seydel",
        beschreibung: "Max von Seydel war ein deutscher Verwaltungsjurist und Hochschullehrer.",
        geburtsdatum: "19.11.1846",
        sterbedatum: "03.10.1901",
        bild: "Fotos/personen/Seydel.png"
    },
    "michael-sager": {
        name: "Michael Sager",
        beschreibung: "Michael Sager war ein deutscher Geologe und Mineraloge.",
        geburtsdatum: "01.06.1783",
        sterbedatum: "19.09.1836",
        bild: "Fotos/personen/"
    },
    "philipp-balthasar-von-siebold": {
        name: "Philipp Balthasar von Siebold",
        beschreibung: "Philipp Balthasar von Siebold war ein deutscher Arzt und Naturforscher, bekannt für seine Arbeiten in Japan.",
        geburtsdatum: "17.02.1796",
        sterbedatum: "18.10.1866",
        bild: "Fotos/personen/siebold.png"
    },
    "kaspar-ett": {
        name: "Kaspar Ett",
        beschreibung: "Kaspar Ett war ein deutscher Komponist und Organist des 19. Jahrhunderts.",
        geburtsdatum: "05.01.1788",
        sterbedatum: "16.05.1847",
        bild: "Fotos/personen/Ett.png"
    },
    "franz-kobell": {
        name: "Franz Kobell",
        beschreibung: "Kaspar Ett war ein deutscher Komponist und Organist des 19. Jahrhunderts.",
        geburtsdatum: "05.01.1788",
        sterbedatum: "16.05.1847",
        bild: "Fotos/personen/franz-kobell.png"

    }
    
};

document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('#gesteinListe li');
    const detailsContainer = document.getElementById('gesteinDetails');
    
    items.forEach(item => {
        item.addEventListener('click', function() {
            // Entferne active-Klasse von allen Items
            items.forEach(i => i.classList.remove('active'));
            // Füge active-Klasse zum geklickten Item hinzu
            this.classList.add('active');
            
            const steinId = this.getAttribute('data-stein');
            const stein = gesteineDaten[steinId];
            
            if (stein) {
                detailsContainer.innerHTML = `
            <div class="details-content">
        <h2>${stein.name}</h2>
        <div class="gestein-info-grid">
            <!-- bestehende Infos ... -->
            <div class="gestein-info-item">
                <span class="gestein-info-label">Fundort:</span>
                <span class="gestein-info-value">${stein.fundort || 'Nicht verfügbar'}
                    ${stein.koordinaten ? `<button class="show-on-map-btn" onclick="showOnMap(${stein.koordinaten[0]}, ${stein.koordinaten[1]}, '${stein.name}')">
                        Auf Karte zeigen
                    </button>` : ''}
                </span>
            </div>
                            <div class="gestein-info-item">
                                <span class="gestein-info-label">Fundland:</span>
                                <span class="gestein-info-value">${stein.fundland || 'Nicht verfügbar'}</span>
                            </div>
                            <div class="gestein-info-item">
                                <span class="gestein-info-label">Bezeichnung:</span>
                                <span class="gestein-info-value">${stein.bezeichnung || 'Nicht verfügbar'}</span>
                            </div>
                            <div class="gestein-info-item">
                                <span class="gestein-info-label">Alter:</span>
                                <span class="gestein-info-value">${stein.alter || 'Nicht verfügbar'}</span>
                            </div>
                            <div class="gestein-info-item">
                                <span class="gestein-info-label">Gesteinsgruppe:</span>
                                <span class="gestein-info-value">${stein.gesteinsgruppe || 'Nicht verfügbar'}</span>
                            </div>
                    
                               <div class="gestein-info-item">
                                <span class="gestein-info-label">Textur:</span>
                                <span class="gestein-info-value">${stein.struktur || 'Nicht verfügbar'}</span>
                            </div>
                        </div>

                                              ${stein.bild ? `
                        <div class="gestein-image-container">
                            <img src="${stein.bild}" alt="${stein.name}" class="gestein-image">
                            <div class="bildunterschrift">${stein.bildunterschrift || 'Gesteinsprobe'}</div>
                               <br>
                               <br>
                        <div class="beschreibung-content">
                            <h3>Beschreibung</h3>
                            <p>${stein.beschreibung || 'Keine Beschreibung verfügbar.'}</p>
                        </div>
                        ` : ''}
                    </div>
                `;
            }
        });
    });
    
    // Erstes Element automatisch auswählen
    if (items.length > 0) {
        items[0].click();
    }
}); 

function showOnMap(lat, lng, name) {
    // Zur Karten-Sektion springen
    showSection('karte');
    
    // Warten bis die Karte sichtbar ist
    setTimeout(() => {
        if (!mapInitialized) {
            initializeMap();
            mapInitialized = true;
        }
        
        // Karte zentrieren und zoomen
        map.setView([lat, lng], 14);
        
        // Temporären Marker anzeigen
        if (window.tempMarker) {
            map.removeLayer(window.tempMarker);
        }
        
        window.tempMarker = L.marker([lat, lng])
            .addTo(map)
            .bindPopup(`<b>Fundort:</b> ${name}`)
            .openPopup();
            
        // Marker nach 10 Sekunden entfernen
        setTimeout(() => {
            if (window.tempMarker) {
                map.removeLayer(window.tempMarker);
                window.tempMarker = null;
            }
        }, 10000);
    }, 300);
}
document.getElementById('personenListe').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        // Entferne active-Klasse von allen Items
        document.querySelectorAll('#personenListe li').forEach(li => {
            li.classList.remove('active');
        });
        
        // Füge active-Klasse zum geklickten Item hinzu
        event.target.classList.add('active');
        
        const personId = event.target.getAttribute('data-person');
        const person = personenDaten[personId];
        if (person) {
            document.getElementById('personenDetails').innerHTML = `
                <h2>${person.name}</h2>
                <div class="person-images">
                    <img src="${person.bild}" alt="Aktuelles Foto">
                </div>
                <p><strong>Lebensdaten:</strong> ${person.geburtsdatum} - ${person.sterbedatum}</p>
                <p>${person.beschreibung}</p>
            `;
        }
    }
});

// Optional: Erstes Element automatisch auswählen
document.querySelector('#personenListe li')?.classList.add('active');

document.getElementById('searchButton').addEventListener('click', () => {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const allItems = document.querySelectorAll('[data-stein], [data-person]');

    allItems.forEach(item => {
        if (item.innerText.toLowerCase().includes(query)) {
            item.scrollIntoView({ behavior: 'smooth' });
            item.style.backgroundColor = 'yellow';
            setTimeout(() => item.style.backgroundColor = '', 2000);
        }
    });
});

*/
function showSection(sectionId, subId = null) {
    // Verstecke alle Sektionen und setze Navigation zurück
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active-section');
    });

    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.add('active-section');
    }

    // Aktualisiere die URL
    if (subId) {
        window.location.hash = `${sectionId}/${subId}`;
    } else {
        window.location.hash = sectionId;
    }

    // Spezielle Handhabung für die Karte
    if (sectionId === 'karte') {
        if (!window.mapInitialized) {
            initializeMap();
            window.mapInitialized = true;
        } else {
            setTimeout(() => {
                map.invalidateSize();
            }, 0);
        }
    }

    // Aktiven Link in der Navigation markieren
    document.querySelectorAll('.nav__link').forEach(link => {
        link.classList.remove('active-link');
    });

    const activeLink = document.querySelector(`.nav__link[href="#${sectionId}"]`);
    if (activeLink) {
        activeLink.classList.add('active-link');
    }

    // ✅ Wenn subId vorhanden ist, direkt Detailansicht laden
    if (subId) {
        if (sectionId === 'personen') {
            setTimeout(() => showPersonDetail(subId), 50);
        } else if (sectionId === 'gestein') {
            setTimeout(() => showGesteinDetail(subId), 50);
        }
    }



    // Zusätzlich: Hash-basierte Detailansicht handhaben
    handleDetailNavigation();
}
function handleDetailNavigation() {
    const hash = window.location.hash.substring(1);
    
    // Direkter Link zu einer Person (#personen/adolf-schlagintweit)
    if (hash.startsWith('personen/')) {
        const personId = hash.split('/')[1];
        setTimeout(() => showPersonDetail(personId), 50);
    }
    // Direkter Link zu einem Gestein (#gestein/tegernseer-marmor)
    else if (hash.startsWith('gestein/')) {
        const steinId = hash.split('/')[1];
        setTimeout(() => showGesteinDetail(steinId), 50);
    }
}
function showPersonDetail(personId) {
    const person = personenDaten[personId];
    if (!person) return;

    const listItem = document.querySelector(`[data-person="${personId}"]`);
    if (listItem) {
        // Aktiviere Listeneintrag
        document.querySelectorAll('#personenListe li').forEach(li => {
            li.classList.remove('active');
        });
        listItem.classList.add('active');
        listItem.scrollIntoView({ block: 'nearest', behavior: 'smooth' });

        // Zeige Details
        document.getElementById('personenDetails').innerHTML = `
            <div class="person-inhalt">
                <div class="person-bild">
                    <img src="${person.bild}" alt="${person.name}">
                </div>
                <div class="person-text">
                    <h2>${person.name}</h2>
                    <p><strong>Lebensdaten:</strong> ${person.geburtsdatum} – ${person.sterbedatum}</p>
                       ${person.grabKoordinaten ? 
                            `<button class="show-grave-btn" onclick="focusOnGraveMarker('${personId}')">
                                Grab auf Karte anzeigen
                            </button>` : 
                            ''}
                    <div class="person-beschreibung">${person.beschreibung}</div>
                </div>
            </div>
        `;
    }
}

function showGesteinDetail(steinId) {
    const stein = gesteineDaten[steinId];
    if (!stein) return;

    const listItem = document.querySelector(`[data-stein="${steinId}"]`);
    if (listItem) {
        // Aktiviere Listeneintrag
        document.querySelectorAll('#gesteinListe li').forEach(li => {
            li.classList.remove('active');
        });
        listItem.classList.add('active');
        listItem.scrollIntoView({ block: 'nearest', behavior: 'smooth' });

        // Zeige vollständige Details (identisch zum Click-Handler)
        document.getElementById('gesteinDetails').innerHTML = `
              <div class="details-content">
                    <h2>${stein.name}</h2>
                    <div class="gestein-info-grid">
                        <div class="gestein-info-item">
                            <span class="gestein-info-label">Fundort:</span>
                            <span class="gestein-info-value">${stein.fundort || 'Nicht verfügbar'}
                                ${stein.koordinaten ? `
                                <button class="show-on-map-btn" 
                                        onclick="window.showOnMapWithId('${steinId}')">
                                    Auf Karte zeigen
                                </button>` : ''}
                            </span>
                        </div>
                            <div class="gestein-info-item">
                                <span class="gestein-info-label">Fundland:</span>
                                <span class="gestein-info-value">${stein.fundland || 'Nicht verfügbar'}</span>
                            </div>
                            <div class="gestein-info-item">
                                <span class="gestein-info-label">Bezeichnung:</span>
                                <span class="gestein-info-value">${stein.bezeichnung || 'Nicht verfügbar'}</span>
                            </div>
                            <div class="gestein-info-item">
                                <span class="gestein-info-label">Alter:</span>
                                <span class="gestein-info-value">${stein.alter || 'Nicht verfügbar'}</span>
                            </div>
                            <div class="gestein-info-item">
                                <span class="gestein-info-label">Gesteinsgruppe:</span>
                                <span class="gestein-info-value">${stein.gesteinsgruppe || 'Nicht verfügbar'}</span>
                            </div>
                    
                               <div class="gestein-info-item">
                                <span class="gestein-info-label">Textur:</span>
                                <span class="gestein-info-value">${stein.struktur || 'Nicht verfügbar'}</span>
                            </div>
                        </div>

                                              ${stein.bild ? `
                        <div class="gestein-image-container">
                            <img src="${stein.bild}" alt="${stein.name}" class="gestein-image">
                            <div class="bildunterschrift">${stein.bildunterschrift || 'Gesteinsbild'}</div>
                               <br>
                               <br>
                        <div class="beschreibung-content">
                            <h3>Beschreibung</h3>
                            <p>${stein.beschreibung || 'Keine Beschreibung verfügbar.'}</p>
                            
                        </div>
                                <br>
                                <br>
                          <div class="hinweis-content">
                            <h3>Hinweis</h3>
                            
                            <p>${stein.hinweis || ''}</p>
                        </div>


                        ` : ''}
                    </div>
                `;
    }
}

document.getElementById('searchButton').addEventListener('click', () => {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    
    // Durchsuche zuerst Personen
    for (const [id, person] of Object.entries(personenDaten)) {
        if (person.name.toLowerCase().includes(query)) {
            showSection('personen');
            window.location.hash = `personen/${id}`;
            return;
        }
    }
    
    // Dann Gesteine
    for (const [id, stein] of Object.entries(gesteineDaten)) {
        if (stein.name.toLowerCase().includes(query)) {
            showSection('gestein');
            window.location.hash = `gestein/${id}`;
            return;
        }
    }
    
    alert('Kein passender Eintrag gefunden');
});

document.addEventListener('DOMContentLoaded', function() {
    const hash = window.location.hash.substring(1);
    const baseSection = hash.split('/')[0] || 'home';
    const subId = hash.split('/')[1] || null;
    showSection(baseSection, subId);
});
window.addEventListener('hashchange', function() {
    const hash = window.location.hash.substring(1);
    const baseSection = hash.split('/')[0] || 'home';
    const subId = hash.split('/')[1] || null;
    showSection(baseSection, subId);
});
// Suchvorschläge Funktion
function showSearchSuggestions(query) {
    const suggestionsContainer = document.getElementById('searchSuggestions');
    suggestionsContainer.innerHTML = '';
    
    if (!query || query.length < 1) {
        suggestionsContainer.style.display = 'none';
        return;
    }

    const lowerQuery = query.toLowerCase();
    const suggestions = [];


    function startsWithAnyWord(text, search) {
        const words = text.toLowerCase().split(/\s+/);
        return words.some(word => word.startsWith(search));
    }

    // Personen durchsuchen - nach einzelnen Wörtern
    for (const [id, person] of Object.entries(personenDaten)) {
        if (startsWithAnyWord(person.name, lowerQuery)) {
            suggestions.push({
                type: 'personen',
                id: id,
                name: person.name,
                displayName: person.name
            });
        }
    }

    for (const [id, stein] of Object.entries(gesteineDaten)) {
        if (startsWithAnyWord(stein.name, lowerQuery)) {
            suggestions.push({
                type: 'gestein',
                id: id,
                name: stein.name,
                displayName: stein.name
            });
        }
    }

    // Vorschläge anzeigen
    if (suggestions.length > 0) {
        suggestions.forEach(item => {
            const suggestionElement = document.createElement('div');
            suggestionElement.className = 'search-suggestion';
            
            const iconClass = item.type === 'personen' ? 'bx bx-user' : 'fas fa-mountain';
            
            suggestionElement.innerHTML = `
                <i class="${iconClass}"></i>
                <span>${item.displayName}</span>
            `;
            
            suggestionElement.addEventListener('click', () => {
                showSection(item.type);
                window.location.hash = `${item.type}/${item.id}`;
                suggestionsContainer.style.display = 'none';
                document.getElementById('searchInput').value = item.name;
            });
            
            suggestionsContainer.appendChild(suggestionElement);
        });
        suggestionsContainer.style.display = 'block';
    } else {
        suggestionsContainer.style.display = 'none';
    }
}
// Event-Listener
document.getElementById('searchInput').addEventListener('input', function(e) {
    showSearchSuggestions(e.target.value);
});

// Bei Klick auf Suchbutton (bestehende Funktion)
document.getElementById('searchButton').addEventListener('click', () => {
    const query = document.getElementById('searchInput').value.trim();
    if (query) {
        // Durchsuche zuerst Personen
        for (const [id, person] of Object.entries(personenDaten)) {
            if (person.name.toLowerCase().includes(query.toLowerCase())) {
                showSection('personen');
                window.location.hash = `personen/${id}`;
                return;
            }
        }
        
        // Dann Gesteine
        for (const [id, stein] of Object.entries(gesteineDaten)) {
            if (stein.name.toLowerCase().includes(query.toLowerCase())) {
                showSection('gestein');
                window.location.hash = `gestein/${id}`;
                return;
            }
        }
        
        alert('Kein passender Eintrag gefunden');
    }
});

// Verstecke Vorschläge beim Klicken außerhalb
document.addEventListener('click', function(e) {
    const searchContainer = document.querySelector('.nav__search');
    if (!searchContainer.contains(e.target)) {
        document.getElementById('searchSuggestions').style.display = 'none';
    }
});

// Für Tastaturnavigation (Pfeiltasten/Enter)
document.getElementById('searchInput').addEventListener('keydown', function(e) {
    const suggestions = document.querySelectorAll('.search-suggestion');
    if (!suggestions.length) return;

    const currentFocus = document.querySelector('.search-suggestion.highlight');
    let index = Array.from(suggestions).indexOf(currentFocus);

    switch(e.key) {
        case 'ArrowDown':
            e.preventDefault();
            if (currentFocus) currentFocus.classList.remove('highlight');
            index = (index + 1) % suggestions.length;
            suggestions[index].classList.add('highlight');
            suggestions[index].scrollIntoView({block: 'nearest'});
            break;
        case 'ArrowUp':
            e.preventDefault();
            if (currentFocus) currentFocus.classList.remove('highlight');
            index = (index - 1 + suggestions.length) % suggestions.length;
            suggestions[index].classList.add('highlight');
            suggestions[index].scrollIntoView({block: 'nearest'});
            break;
        case 'Enter':
            if (currentFocus) {
                e.preventDefault();
                currentFocus.click();
            }
            break;
        case 'Escape':
            document.getElementById('searchSuggestions').style.display = 'none';
            break;
    }
});