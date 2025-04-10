

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

function showSection(sectionId) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active-section');
    });

    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.add('active-section');
    }

    if (sectionId === 'karte') {
        if (!mapInitialized) {
            initializeMap();
            mapInitialized = true; 
        } else {
            setTimeout(() => {
                map.invalidateSize();
            }, 0);
        }
    }

    document.querySelectorAll('.nav__link').forEach(link => {
        link.classList.remove('active-link');
    });

    const activeLink = document.querySelector(`.nav__link[href="#${sectionId}"]`);
    if (activeLink) {
        activeLink.classList.add('active-link');
    }
}

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
        /* Anpassungen für Cluster */
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

// Initialisierung
showSection('home');

const gesteineDaten = {
    "tegernseer-marmor": {
        name: "Tegernseer Marmor"
    },
    "kehlheimer-kalkstein": {
        name: "Kehlheimer Kalkstein"
    },
    "rosenheimer-granit": {
        name: "Rosenheimer Granit"
    },
    "nummulitenkalk": {
        name: "Nummulitenkalk"
    },
    "rillenkarren": {
        name: "Rillenkarren"
    },
    "kobellit": {
        name: "Kobellit"
    },
    "molassesandstein": {
        name: "Molassesandstein"
    },
    "getigerter-schilfsandstein": {
        name: "Getigerter Schilfsandstein"
    },
    "eklogit": {
        name: "Eklogit"
    },
    "carrara-marmor": {
        name: "Carrara Marmor"
    },
    "gelber-sandstein": {
        name: "Gelber Sandstein"
    },
    "kirchheimer-muschelkalk": {
        name: "Kirchheimer Muschelkalk"
    },
    "kösseine-granit": {
        name: "Kösseine-Granit"
    },
    "ochsenkopf-proterobas":{
        name: "Ochsenkopf Proterobas"
    },
    "diabas":{
        name: "Diabas",
    },
    "untersberger-marmor":{
        name: "Untersberger Marmor"
    },
    "schwarz-schwedisch-basalt":{
        name: "schwarz-schwedisch Basalt",
        bild: "./Fotos/gestein/schwedisch_schwarz.png"
    },
    "serpentinit":{
        name: "Serpentinit"
    },
    "kalktuff":{
        name: "Kalktuff"
    },
    "riffkalk":{
        name: "Riffkalk"
    },
    "redwezit":{
        name: "Redwezit"
    },
    "lechbrucker-molassesandstein":{
        name: "Lechbrucker Molassesandstein"
    },
    "jurakalk-grau":{
        name: "Jurakalk Grau"
    },
    "lithothammnienkalk":{
        name: "Lithothammnienkalk"
    },
    "hohenschwangauer-kalk":{
        name: "Hohenschwangauer Kalk"
    },
    "diorit":{
        name: "Diorit"
    },
    "högler-sandstein":{
        name: "Högler Sandstein"
    },
    "forellen-sandstein":{
        name: "Forellen Sandstein"
    },
    "plattensandstein":{
        name: "Plattensandstein"
    },
    "larvikit":{
        name: "Larvikit"
    },
    "zoeblitzer-serpentinit":{
        name: "Zöblitzer Serpentinit"
    },
    "ruhpoldinger-marmor":{
        name: "Ruhpoldinger Marmor"
    },
    "untersberger-ruhpoldinger":{
        name: "Untersberger Ruhpoldinger"
    },
    "nero portoro":{
        name: "Nero Portoro"
    },
    "adneter-marmor":{
        name: "Adneter Marmor"
    },
    "hierlatzkalk-crinoiden-Schuttkalk-mit-seelilien-stielgliedern":{
        name: "Hierlatzkalk (Crinoiden-Schuttkalk) mit Seelilien-Stielgliedern"
    }



};


const personenDaten = {
    "adolf-schlaginweit": {
        name: "Adolf Schlaginweit",
        beschreibung: "Adolf Schlaginweit war ein deutscher Naturforscher und Entdecker.",
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
        items.forEach(i => i.classList.remove('active'));
        this.classList.add('active');
        
        const steinId = this.getAttribute('data-stein');
        detailsContainer.innerHTML = `
          <div class="details-content">
            <h2>${this.textContent}</h2>
            <p>Details zu ${this.textContent} werden hier angezeigt.</p>
          </div>
        `;
      });
    });
    
    if (items.length > 0) {
      items[0].click();
    }
  });

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

