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

// Globale Variable, um den aktuellen Zustand zu speichern
let previousState = {
    activeSteinId: null,
    activeSection: null
};
// Neue Hilfsfunktion (global verfügbar machen)
window.showOnMapWithId = function(steinId) {
    const stein = gesteineDaten[steinId];
    if (!stein || !stein.koordinaten) {
        alert('Keine Koordinaten verfügbar');
        return;
    }
    
    // Nimm die erste Koordinate als Standardansicht
    const firstCoord = stein.koordinaten[0];
    showOnMap(firstCoord[0], firstCoord[1], stein.name, steinId);
};
function showOnMap(lat, lng, name, steinId) {
    // Aktuellen Zustand speichern
    previousState = {
        activeSteinId: steinId,
        activeSection: 'gestein'
    };
    
    // Zur Karte wechseln
    showSection('karte');
    
    setTimeout(() => {
        if (!mapInitialized) {
            initializeMap();
            mapInitialized = true;
        }

        const stein = gesteineDaten[steinId];
        if (!stein) {
            alert('Gesteinsdaten nicht gefunden!');
            restorePreviousView();
            return;
        }

        // Koordinaten aus den Gesteinsdaten holen oder übergebene Koordinaten verwenden
        let koordinaten = stein.koordinaten || [[lat, lng]];
        
        // Sicherstellen, dass koordinaten ein Array von Arrays ist
        if (!Array.isArray(koordinaten[0])) {
            koordinaten = [koordinaten]; // In Array von Arrays umwandeln
        }

        // Vorherige Marker entfernen
        if (window.tempMarkers) {
            window.tempMarkers.forEach(marker => map.removeLayer(marker));
        }
        window.tempMarkers = [];
        
        // Marker für jede Koordinate erstellen
        koordinaten.forEach((coord, index) => {
            // Sicherstellen, dass die Koordinate gültig ist
            if (!coord || coord.length !== 2 || isNaN(coord[0]) || isNaN(coord[1])) {
                console.error('Ungültige Koordinate:', coord);
                return;
            }
            
            const backButton = `<button class="back-to-item-btn" 
                                  onclick="restorePreviousView()">
                               Zurück zu ${name}
                               </button>`;
            
            const marker = L.marker([coord[0], coord[1]])
                .addTo(map)
                .bindPopup(`<b>Fundort ${index + 1}:</b> ${name}<br>${backButton}`);
            
            window.tempMarkers.push(marker);
        });
        
        // Kartenansicht anpassen
        if (koordinaten.length === 1) {
            // Bei nur einer Koordinate: Zentrieren und zoomen
            map.setView([koordinaten[0][0], koordinaten[0][1]], 12);
        } else if (koordinaten.length > 1) {
            // Bei mehreren Koordinaten: Alle sichtbar machen
            const bounds = L.latLngBounds(koordinaten.map(c => [c[0], c[1]]));
            map.fitBounds(bounds, {padding: [50, 50]});
        }
    }, 300);
}
console.log('Stein ID:', steinId);
console.log('Gesteine Daten:', gesteineDaten);
console.log('Aktueller Stein:', gesteineDaten[steinId]);
function restorePreviousView() {
    // Sicherstellen, dass previousState existiert
    if (!previousState || !previousState.activeSection) {
        showSection('gestein'); // Fallback
        return;
    }
    
    // Zur ursprünglichen Sektion zurückkehren
    showSection(previousState.activeSection);
    
    // Nur wenn wir von der Gesteinssektion kamen
    if (previousState.activeSection === 'gestein' && previousState.activeSteinId) {
        setTimeout(() => {
            const item = document.querySelector(`#gesteinListe li[data-stein="${previousState.activeSteinId}"]`);
            if (item) {
                // Aktive Klasse setzen
                document.querySelectorAll('#gesteinListe li').forEach(li => {
                    li.classList.remove('active');
                });
                item.classList.add('active');
                
                // Klick-Event auslösen (falls nötig)
                if (typeof item.click === 'function') {
                    item.click();
                } else {
                    // Fallback für ältere Browser
                    const event = new MouseEvent('click', {
                        view: window,
                        bubbles: true,
                        cancelable: true
                    });
                    item.dispatchEvent(event);
                }
            }
        }, 100); // Kurze Verzögerung
    }
}

// Initialisierung nach DOM-Load
document.addEventListener('DOMContentLoaded', function() {
    // Back-Button Event (falls vorhanden)
    const backButton = document.getElementById('backButton');
    if (backButton) {
        backButton.addEventListener('click', function() {
            document.querySelectorAll('#gesteinListe li').forEach(li => {
                li.classList.remove('active');
            });
            const detailsContent = document.querySelector('.gestein-details .details-content');
            if (detailsContent) {
                detailsContent.innerHTML = 
                    '<p>Wählen Sie ein Gestein aus der Liste aus, um Details anzuzeigen.</p>';
            }
        });
    }
});