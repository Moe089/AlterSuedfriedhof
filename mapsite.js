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


function initializeMap() {
    // Karte initialisieren
    map = L.map('map').setView([48.128042323092785, 11.565685880884974], 16);

    // OpenStreetMap-Tiles hinzufügen
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Marker-Layer definieren
    const baseLayers = {
        "Berühmtheiten-Ansicht": markers.layer1,
        "Grabstein-Ansicht": markers.layer2,
        "Gesteins-Ansicht": markers.layer3
    };

    // Variable zum Speichern des aktiven Layers
    let activeLayer = null;

    // Funktion zum Umschalten des Layers (immer nur einer sichtbar)
    function switchLayer(newLayer) {
        if (activeLayer && map.hasLayer(activeLayer)) {
            map.removeLayer(activeLayer);
        }
        map.addLayer(newLayer);
        activeLayer = newLayer;
    }

    // Layer-Control mit den Basiskarten hinzufügen
    const layerControl = L.control.layers(baseLayers, null, {
        collapsed: false
    }).addTo(map);

    // Standard-Layer setzen
    map.addLayer(markers.layer2); // sorgt dafür, dass er im Control korrekt als aktiv angezeigt wird
    activeLayer = markers.layer2;

    // Wenn Layer im Control gewechselt wird
    map.on('baselayerchange', function(e) {
        switchLayer(e.layer);
    });

    // Styles für Marker und Cluster
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

    // Marker für alle Layer erstellen (falls erforderlich)
    createMarkersForAllLayers();
}


// Die createCustomMarker Funktion bleibt gleich

function createMarkersForAllLayers() {
    // Standard-Layer (aktuelle Fotos)
    createCustomMarker(48.130472380841496, 11.56624671866165, 
        "./Fotos/personen/Adolf-Schlagintweit.png", "Grab Adolf Schlaginweit", markers.layer1,
        function() { showRouteForPerson("Adolf Schlagintweit", "street"); });

        createCustomMarker(48.13068516226951, 11.566287799253821, 
            "./Fotos/personen/Albert.png", "Grab Joseph Albert", markers.layer1,
            function() { showRouteForPerson("Albert", "street"); });
    
    createCustomMarker(48.12944686673255, 11.566483691300379, 
        "./Fotos/personen/a-senefelder.png", "Grab Alois Senefelder", markers.layer1,
        function() { showRouteForPerson("Alois Senefelder", "street"); });

    createCustomMarker(48.1306902208633, 11.566399154097912, 
        "./Fotos/personen/Straub_Johann_Baptist.png", "Grab Johann Baptist Straub", markers.layer1);

    createCustomMarker(48.13020766844287, 11.566064541718118, 
        "./Fotos/personen/arnold-zenetti.png", "Grab Arnold Zenetti", markers.layer1,
        function() { showRouteForPerson("Arnold Zenetti", "street"); });

    createCustomMarker(48.12873435697092, 11.564917402621731, 
        "./Fotos/personen/franz-kobell.png", "Grab Franz Kobell", markers.layer1,
        function() { showRouteForPerson("Franz Kobell", "street"); });

    createCustomMarker(48.127449022632554, 11.565760706995862, 
        "./Fotos/personen/hiltensperger.png", "Grab Hiltensperger", markers.layer1,
                function() { showRouteForPerson("Hiltensperger", "street"); });

    createCustomMarker(48.12743727512269, 11.564098247394769, 
        "./Fotos/personen/Nussbaum.png", "Grab Nußbaum", markers.layer1,
        function() { showRouteForPerson("Nußbaum", "street"); });

        
    createCustomMarker(48.12700316519899, 11.566071173222651, 
        "./Fotos/personen/Ohm.png", "Grab Georg Simon Ohm", markers.layer1,
        function() { showRouteForPerson("Ohm", "street"); });

    createCustomMarker(48.12698081942048, 11.563986286801328, 
        "./Fotos/personen/reichenbach.png", "Grab Georg von Reichenbach", markers.layer1,
        function() { showRouteForPerson("Reichenbach", "street"); });

    createCustomMarker(48.12698081942040, 11.563986286801323, 
        "./Fotos/personen/fraunhofer.png", "Grab Josef von Fraunhofer", markers.layer1,
        function() { showRouteForPerson("Fraunhofer", "street"); });


    createCustomMarker(48.12672470001926, 11.56502006855112, 
        "./Fotos/personen/Ett.png", "Grab Kaspar Ett", markers.layer1,
        function() { showRouteForPerson("Ett", "street"); });

    createCustomMarker(48.12639776149005, 11.563853220116723, 
        "./Fotos/personen/klenze.png", "Grab Leo von Klenze", markers.layer1,
        function() { showRouteForPerson("Klenze", "street"); });

    createCustomMarker(48.12634445037332, 11.56402371512982, 
        "./Fotos/personen/gaertner.png", "Grab Friedrich Gärtner", markers.layer1,
        function() { showRouteForPerson("Gärtner", "street"); });


    createCustomMarker(48.12620534820462, 11.564485442813355, 
        "./Fotos/personen/Schwanthaler.png", "Grab Ludwig Schwanthaler", markers.layer1,
        function() { showRouteForPerson("Schwanthaler", "street"); });

    createCustomMarker(48.129704045499714, 11.565643056407898, 
        "./Fotos/personen/knorr.png", "Grab Julius Knorr", markers.layer1,
        function() { showRouteForPerson("Knorr", "street"); });


    createCustomMarker(48.12565715788182, 11.564285682286432, 
        "./Fotos/personen/Seydel.png", "Grab Max von Seydel", markers.layer1);

    createCustomMarker(48.1258026473096, 11.5634057639785, 
        "./Fotos/personen/siebold.png", "Grab Philipp Balthasar von Siebold", markers.layer1,
        function() { showRouteForPerson("Siebold", "street"); });

    createCustomMarker(48.12493912256356, 11.563330775765484, 
        "./Fotos/personen/Liebig.png", "Grab Justus von Liebig", markers.layer1,
        function() { showRouteForPerson("Liebig", "street"); });

createCustomMarker(48.130066, 11.565872, 
    "./Fotos/personen/Ferdinand_von_Miller.png", 
    "Grab Ferdinand von Miller", 
    markers.layer1,
    function() { showStreetForPerson("Ferdinand von Miller"); }
);

        createCustomMarker(48.130472380841496, 11.56624671866165, 
            "./Fotos/grabstein/grab-schlagintweit.png", "Grab Adolf Schlaginweit", markers.layer2);
            createCustomMarker(48.13068516226951, 11.566287799253821, 
                "./Fotos/grabstein/.png", "Grab Joseph Albert", markers.layer2);
        createCustomMarker(48.12944686673255, 11.566483691300379, 
            "./Fotos/grabstein/grab_senefelder.png", "Grab Alois Senefelder", markers.layer2);
        createCustomMarker(48.1306902208633, 11.566399154097912, 
            "./Fotos/grabstein/straub_grab.png", "Grab Johann Baptist Straub", markers.layer2);
        createCustomMarker(48.13020766844287, 11.566064541718118, 
            "./Fotos/grabstein/zenetti.png", "Grab Arnold Zenetti", markers.layer2);
        createCustomMarker(48.130066, 11.565872, 
            "./Fotos/personen/Ferdinand_von_Miller.png", "Grab Ferdinand von Miller", markers.layer2);
        createCustomMarker(48.12873435697092, 11.564917402621731, 
            "./Fotos/grabstein/kobell.png", "Grab Franz Kobell", markers.layer2);
        createCustomMarker(48.127449022632554, 11.565760706995862, 
            "./Fotos/grabstein/hiltensperger.png", "Grab Hiltensperger", markers.layer2);
        createCustomMarker(48.12743727512269, 11.564098247394769, 
            "./Fotos/grabstein/nussbaum.png", "Grab Nußbaum", markers.layer2);
        createCustomMarker(48.12700316519899, 11.566071173222651, 
            "./Fotos/grabstein/ohm_grab.png", "Grab Georg Simon Ohm", markers.layer2);
        createCustomMarker(48.12698081942048, 11.563986286801328, 
            "./Fotos/grabstein/reichenbach.png", "Grab Georg von Reichenbach", markers.layer2);
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
        createCustomMarker(48.129704045499714, 11.565643056407898, 
            "./Fotos/grabstein/knorr.png", "Grab Julius Knorr", markers.layer2);
        createCustomMarker(48.12565715788182, 11.564285682286432, 
            "./Fotos/grabstein/seydel.png", "Grab Max von Seydel", markers.layer2);
        createCustomMarker(48.1258026473096, 11.5634057639785, 
            "./Fotos/grabstein/siebold_grab.png", "Grab Philipp Balthasar von Siebold", markers.layer2);
        createCustomMarker(48.12493912256356, 11.563330775765484, 
            "./Fotos/grabstein/liebig_grab.png", "Grab Justus von Liebig", markers.layer2);

            createCustomMarker(48.127449022632554, 11.565760706995862, 
                "./Fotos/gestein/schwedisch_schwarz.png", "Grab Hiltensperger", markers.layer3);



                createMasterMarker(
                    48.13068516226951, 11.566287799253821, 
                    
                    "albert",
                    markers.layer3
                );
                
                createMaterialMarker(
                    48.13068516226951, 11.566287799253821,
                    "./Fotos/gestein/zenetti_bronze_bueste.png",
                    "Stein - weißer Marmor (Carrara)",
                    markers.layer3,
                    "albert",
                    "carrara-marmor"
                );
                createMaterialMarker(
                    48.13068516226951, 11.566287799253821,
                    "./Fotos/gestein/zenetti_bronze_scheibe.png",
                    "Säulen - Ochsenkopf-Proterobas",
                    markers.layer3,
                    "albert",
                    "ochsenkopf-proterobas"
                );
                createMaterialMarker(
                    48.13068516226951, 11.566287799253821,
                    "./Fotos/gestein/zenetti_nummulitenkalk.png",
                    "Sockel - Muschelkalk",
                    markers.layer3,
                    "albert",
                    "muschelkalk"
                );
                
           
                createMaterialMarker(
                    48.13068516226951, 11.566287799253821,
                    "./Fotos/gestein/zenetti_nummulitenkalk.png",
                    "Büste - weißer Marmor (Carrara)",
                    markers.layer3,
                    "albert",
                    "carrara-marmor"
                );
                
                createMaterialMarker(
                    48.13068516226951, 11.566287799253821,
                    "./Fotos/gestein/zenetti_bronze_scheibe.png",
                    "Schalen - Donau-Kalke",
                    markers.layer3,
                    "albert",
                    "Schalen"
                );


          


            

                createMasterMarker(
                    48.13020766844287, 11.566064541718118, 
                    
                    "zenetti",
                    markers.layer3
                );
                
                createMaterialMarker(
                    48.13020766844287, 11.566064541718118,
                    "./Fotos/gestein/zenetti_bronze_bueste.png",
                    "Zenetti Grabstein - Bronzebüste",
                    markers.layer3,
                    "zenetti",
                    "bronze_bueste"
                );
                
                createMaterialMarker(
                    48.13020766844287, 11.566064541718118,
                    "./Fotos/gestein/zenetti_nummulitenkalk.png",
                    "Zenetti Grabstein - Enzenauer Nummulitenkalk",
                    markers.layer3,
                    "zenetti",
                    "nummulitenkalk"
                );
                
                createMaterialMarker(
                    48.13020766844287, 11.566064541718118,
                    "./Fotos/gestein/zenetti_bronze_scheibe.png",
                    "Zenetti Grabstein - Bronzestrahlenscheibe",
                    markers.layer3,
                    "zenetti",
                    "bronze_scheibe"
                );
            




               
                createMasterMarker(
                    48.12944686673255, 11.566483691300379,
                    "senefelder",
                    markers.layer3
                );
                
                createMaterialMarker(
                    48.12944686673255, 11.566483691300379,
                    "./Fotos/gestein/senefelder_sandstein.png",
                    "Senefelder Grabstein - Kelheimer Kalk",
                    markers.layer3,
                    "senefelder",
                    "kelheimer-kalkstein"
                );
                
                createMaterialMarker(
                    48.12944686673255, 11.566483691300379,
                    "./Fotos/gestein/senefelder_bronze_relief.png",
                    "Sockel - Kalktuff",
                    markers.layer3,
                    "senefelder",
                    "kalktuff"
                );

                createMaterialMarker(
                    48.12944686673255, 11.566483691300379,
                    "./Fotos/gestein/senefelder_bronze_relief.png",
                    "Schriftplatte: Solnhofener Kalk",
                    markers.layer3,
                    "senefelder",
                    "bronze_relief"
                );



                
         
                createMasterMarker(
                    48.130066, 11.565872,
                    "miller",
                    markers.layer3
                );
                
                createMaterialMarker(
                    48.130066, 11.565872,
                    "./Fotos/gestein/senefelder_sandstein.png",
                    "Ferdinand von Miller - Adneter Marmor",
                    markers.layer3,
                    "miller",
                    "adneter-marmor"
                );

                createMaterialMarker(
                    48.130066, 11.565872,
                    "./Fotos/gestein/senefelder_sandstein.png",
                    "Ferdinand von Miller - Eisen",
                    markers.layer3,
                    "miller",
                    "eisen"
                );



              
                 createMasterMarker(
                    48.12743727512269, 11.564098247394769,
                    "nußbaum",
                    markers.layer3
                );
                
                createMaterialMarker(
                    48.12743727512269, 11.564098247394769,
                    "./Fotos/gestein/senefelder_sandstein.png",
                    "Pult - Carrara-Marmor",
                    markers.layer3,
                    "nußbaum",
                    "carrara-marmor"
                );

                createMaterialMarker(
                    48.12743727512269, 11.564098247394769,
                    "./Fotos/gestein/senefelder_sandstein.png",
                    "Schriftplatte - Carrara-Marmor",
                    markers.layer3,
                    "nußbaum",
                    "carrara-marmor"
                );

                createMaterialMarker(
                    48.12743727512269, 11.564098247394769,
                    "./Fotos/gestein/senefelder_sandstein.png",
                    "Postament - roter Knollenkalk (adneter Marmor)",
                    markers.layer3,
                    "nußbaum",
                    "adneter-marmor"
                );

                createMaterialMarker(
                    48.12743727512269, 11.564098247394769,
                    "./Fotos/gestein/senefelder_sandstein.png",
                    "Sockel - grauer Granit",
                    markers.layer3,
                    "nußbaum",
                    "grauer-granit"
                );


               
  
        





               
                  createMasterMarker(
                    48.12698081942048, 11.563986286801328,
                    "reichenbach",
                    markers.layer3
                );
                
                createMaterialMarker(
                    48.12698081942048, 11.563986286801328,
                    "./Fotos/gestein/senefelder_sandstein.png",
                    "Unterteil - Rosenheimer-Kalk",
                    markers.layer3,
                    "reichenbach",
                    "rosenheimer-kalk"
                );

                createMaterialMarker(
                    48.12698081942048, 11.563986286801328,
                    "./Fotos/gestein/senefelder_sandstein.png",
                    "Oberteil - eventuell Muschelkalk?",
                    markers.layer3,
                    "reichenbach",
                    "alpiner-muschelkalk"
                );





                createMasterMarker(
                    48.12662178701753, 11.564084435041343,
                    "fraunhofer",
                    markers.layer3
                );
                
                createMaterialMarker(
                    48.12662178701753, 11.564084435041343,
                    "./Fotos/gestein/senefelder_sandstein.png",
                    "Stein - Muschelkalk",
                    markers.layer3,
                    "fraunhofer",
                    "muschelkalk"
                );

          


                createMasterMarker(
                    48.12672470001926, 11.56502006855112,
                    "ett",
                    markers.layer3
                );
                
                createMaterialMarker(
                    48.12672470001926, 11.56502006855112,
                    "./Fotos/gestein/senefelder_sandstein.png",
                    "Stein - Kalktuff",
                    markers.layer3,
                    "ett",
                    "kalktuff"
                );

                createMaterialMarker(
                    48.12672470001926, 11.56502006855112,
                    "./Fotos/gestein/senefelder_sandstein.png",
                    "Relief - Carrara Marmor",
                    markers.layer3,
                    "ett",
                    "carrara-marmor"
                );

                createMaterialMarker(
                    48.12672470001926, 11.56502006855112,
                    "./Fotos/gestein/senefelder_sandstein.png",
                    "Schriftplatte - Eisen",
                    markers.layer3,
                    "ett",
                    "eisen"
                );
                
                
            
    
}
function createMasterMarker(lat, lng, personId, layerGroup) {
    if (!graveMaterials[personId]) return null;

    const config = graveMaterials[personId];
    
    const masterIcon = L.divIcon({
        className: "master-marker",
        html: `
            <div class="master-marker-container" title="Materialauswahl öffnen">
                <img src="${config.imageUrl}" alt="${config.name}" class="master-marker-image">
            </div>
        `,
        iconSize: [40, 40],
        iconAnchor: [20, 20]
    });

    const marker = L.marker([lat, lng], { 
        icon: masterIcon,
        zIndexOffset: 1000,
        personId: personId
    });

    const materialButtons = Object.entries(config.materials).map(([key, name]) => 
        `<button onclick="showMaterialGroup('${personId}', '${key}')" 
                ${key === config.defaultMaterial ? 'class="active"' : ''}>
            ${name}
        </button>`
    ).join('');

    marker.bindPopup(`
        <div class="custom-popup">
            <h3>${config.name}</h3>
            <img src="${config.imageUrl}" alt="${config.name}" class="popup-grave-image">
            <p>Dieser Grabstein enthält mehrere Materialien:</p>
            <div class="material-group">
                ${materialButtons}
            </div>
        </div>
    `);

    marker.addTo(layerGroup);
    return marker;
}

// Modifizierte Funktion zum Anzeigen von Materialgruppen
function showMaterialGroup(personId, materialKey) {
    if (!graveMaterials[personId]) return;
    
    // Alle Popups schließen
    map.closePopup();
    
    // Alle Marker dieser Gruppe finden und aktualisieren
    markers.layer3.eachLayer(function(marker) {
        if (marker.options.personId === personId) {
            const isActive = marker.getPopup().getContent().includes(materialKey);
            marker.setOpacity(isActive ? 1 : 0.3);
            marker.setZIndexOffset(isActive ? 500 : 0);
            
            // Popup für das aktive Material öffnen
            if (isActive) marker.openPopup();
        }
    });
}

function createMaterialMarker(lat, lng, imageUrl, popupText, layerGroup, personId, materialKey) {
    const customIcon = L.divIcon({
        className: "custom-marker-rock",
        html: `<div class="marker-container-rock">
                 <img src="${imageUrl}" class="marker-rock-image">
               </div>`,
        iconSize: [40, 40],
        iconAnchor: [20, 40]
    });

    const marker = L.marker([lat, lng], { 
        icon: customIcon,
        personId: personId,
        materialKey: materialKey
    });

    marker.bindPopup(`
        <div class="custom-popup">
            <h3>${popupText}</h3>
            <div class="material-popup-actions">
                <button onclick="showMaterialGroup('${personId}', '${materialKey}')">
                    Zurück zur Materialauswahl
                </button>
                <button onclick="navigateToRockEntry('${materialKey}')">
                    Zum Gesteinseintrag
                </button>
            </div>
        </div>
    `);

    marker.setOpacity(0.3);
    marker.addTo(layerGroup);
    return marker;
}

function navigateToRockEntry(rockId) {
    map.closePopup();
    showSection('gestein', rockId);
    
    const rockItem = document.querySelector(`#gesteinListe li[data-stein="${rockId}"]`);
    if (rockItem) {
        rockItem.click();
        rockItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

// In den Event-Listenern für die Navigation:
document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href').substring(1);
        showSection(sectionId);
    });
});
const graveMaterials = {
    "zenetti": {
        name: "Arnold Zenetti Grabstein",
        imageUrl: "./Fotos/grabstein/zenetti.png", 
        materials: {
            "bronze_bueste": "Bronzebüste",
            "nummulitenkalk": "Enzenauer Nummulitenkalk",
            "bronze_scheibe": "Bronzestrahlenscheibe"
        },
        defaultMaterial: "nummulitenkalk"
    },
    "senefelder": {
        name: "Alois Senefelder Grabstein",
        imageUrl: "./Fotos/grabstein/grab_senefelder.png", 
        materials: {
            "stein": "Kelheimer-Kalk",
            "sockel": "Kalktuff",
            "schriftplatte": "solnhofener-kalk"
        },
      
    },
      "albert": {
        name: "Joseph Albert Grabstein",
        imageUrl: "./Fotos/grabstein/grab_senefelder.png", 
        materials: {
            "Stein": "weißer Marmor (Carrara)",
            "Sockel": "Muschelkalk",
            "ochsenkopf-proterobas": "Ochsenkopf-Proterobas",
            "Büste": "weißer Marmor (Carrara)",
            "Schalen": "Donau-Kalk"
        },
     
    },
    "miller": {
        name: "Ferdinand-von-Miller",
        imageUrl: "./Fotos/grabstein/grab_senefelder.png", 
        materials: {
            "Stein": "Adneter-Marmor",
            "Relief": "Bronze",
            
        },
      
    },
    "nußbaum": {
        name: "Johannes-Nepomuk-Nußbaum",
        imageUrl: "./Fotos/grabstein/nussbaum.png", 
        materials: {
            "Pult": "weißer Marmor (Carrara)",
            "Schriftplatte": "weißer Marmor (Carrara)",
            "Postament": "roter Knollenkalk (Adneter Marmor)",
            "Sockel": "grauer Granit (bayerischer Wald)",
            
        },
      
    },

    "reichenbach": {
        name: "Georg-von-Reichenbach",
        imageUrl: "./Fotos/grabstein/reichenbach.png", 
        materials: {
            "Unterteil": "Rosenheimer-Kalk",
            "Oberteil": "eventuell alpiner Muschelkalk?",
          
            
        },
      
    },

    "fraunhofer": {
        name: "Josef-von-Fraunhofer",
        imageUrl: "./Fotos/grabstein/fraunhofer_grab.png", 
        materials: {
            "Stein": "Muschelkalk",
            
          
            
        },
      
    },

    "ett": {
        name: "Kaspar-Ett",
        imageUrl: "./Fotos/grabstein/grab_ett.png", 
        materials: {
            "Stein": "Kalktuff",
            "Relief": "Carrara Marmor",
            "Schriftplatte": "Eisen"
            
          
            
        },
      
    }

};



let currentStreetLine = null;
let currentPlacePolygon = null;
let currentGraveMarker = null;

const placeCoordinates = [
    [48.15244574579241, 11.552817414003815],
    [48.152241745410535, 11.5533243543809468],
    [48.15149733296533, 11.55250895801694],
    [48.1517854340804, 11.551967152238447],
    [48.15244574579241, 11.552817414003815] 
];

function showRouteForPerson(personName, option = 'street') {
    if (currentStreetLine) map.removeLayer(currentStreetLine);
    if (currentPlacePolygon) map.removeLayer(currentPlacePolygon);

    if (option === 'street') {
        let streetCoordinates;
        
        if (personName === "Ferdinand von Miller") {
            streetCoordinates = [
                [47.97991089157703, 11.330707190063688],
                [47.97458333581848, 11.32629461311394],
                [47.96929919383274, 11.324324712680896],
                [47.966538212441506, 11.322696261662403]
            ];
        } else if (personName === "Adolf Schlagintweit") {
            streetCoordinates = [
                [48.162853152836945, 11.52016205217528], 
                [48.16081356637253, 11.521245664663356]
            ];
        }
        else if (personName === "Arnold Zenetti") {
            streetCoordinates = [
                [48.1267356556472, 11.552831661519427], 
                [48.125306800254094, 11.5543287859356],
                [48.1243951171281, 11.556062298322525],
                [48.12267690112926, 11.559292935177188]
            ];
        }
        else if (personName === "Alois Senefelder") {
            streetCoordinates = [
                [48.1392264594373, 11.56021592414931], 
                [48.13743630839093, 11.560030921409288]
                
            ];
        }
        else if (personName === "Franz Kobell") {
            streetCoordinates = [
                [48.130035340755484, 11.55373265001483], 
                [48.12950185252094, 11.5537755653605],
                [48.12897551977134, 11.554322736017747], 
                [48.12873204429369, 11.554864542256789],
                [48.12863178934972, 11.555637018478787]
            
                
            ];
        }

        else if (personName === "Hiltensperger") {
            streetCoordinates = [
                [48.15510806937828, 11.565470962825726], 
                [48.15563212217405, 11.565766875874328],
                [48.156011070622725, 11.565730972715503], 
                [48.15932352918137, 11.56660090218888],
                [48.16018000353318, 11.566854781187578],

                [48.16171363655203, 11.566619945397054], 
                [48.16335052317648, 11.56633644723077],
                [48.16452954825371, 11.566259427860611], 
                [48.16778195518455, 11.566792676592074],
            
                
            ];
        }

        else if (personName === "Ohm") {
            streetCoordinates = [
                [48.15433154120981, 11.583165108715777], 
                [48.153911158943004, 11.585220211921413],
                [48.153256693332054, 11.587576061937632]
             
            
                
            ];
        }

        else if (personName === "Ett") {
            streetCoordinates = [
                [48.13961942662383, 11.571155601778008], 
                [48.13865518681146, 11.570651628851456]
             
            
                
            ];
        }

        
        else if (personName === "Nußbaum") {
            streetCoordinates = [
                [48.133595691144045, 11.565450044412033], 
                [48.13283753975958, 11.55864075540423]
             
            
                
            ];
        }

        else if (personName === "Reichenbach") {
            streetCoordinates = [
                [48.12847447188867, 11.57556438317284], 
                [48.131367473327316, 11.57600426543619],
                [48.132041085039084, 11.576098717981186],
                [48.134425509150695, 11.576388396544855]
             
            
                
            ];
        }
        else if (personName === "Gärtner") {
            streetCoordinates = [
                [48.13146550119677, 11.575859579377882], 
                [48.131460283574775, 11.576169675738157],
                [48.13160289838525, 11.57640159654542],
                [48.13170898963371, 11.576427655063092],
                [48.13188638762502, 11.576328632695944],
                [48.13196812963046, 11.576049806556874], 
                [48.1318933443965, 11.575765768714271],
                [48.13171246803155, 11.575651111236521],
                [48.13163942162667, 11.575674563902423],
                [48.13146550119677, 11.575859579377882]
             
            
                
            ];
        }

        else if (personName === "Klenze") {
            streetCoordinates = [
                [48.125121263727245, 11.570995678181921], 
                [48.12555577480738, 11.570505386408342],
                [48.12632198200324, 11.569950966423555],
                [48.128307325925036, 11.570375907744749],
                [48.12837287848954, 11.57072456138463],
                [48.131531230348834, 11.575721720337167], 
                [48.13192790028992, 11.576359017298254],
                [48.133753498200136, 11.579409449441332],
                [48.133896867015, 11.579516859023835]
             
            
                
            ];
        }

        else if (personName === "Schwanthaler") {
            streetCoordinates = [
                [48.13767166736252, 11.540758638708473], 
                [48.13790103976961, 11.545498981616259],
                [48.13754922632627, 11.549640781661301],
                [48.13745127474912, 11.565199390404677]
             
                
            ];
        }

        else if (personName === "Siebold") {
            streetCoordinates = [
                [48.12358004462661, 11.592768692972191], 
                [48.126217824039266, 11.592779651740765]
               
             
                
            ];
        }

        else if (personName === "Liebig") {
            streetCoordinates = [
                [48.14148647015191, 11.586364650323691], 
                [48.140421353442306, 11.593724133499105]
               
             
                
            ];
        }

        else if (personName === "Knorr") {
            streetCoordinates = [
                [48.17821178521453, 11.573005360051651], 
                [48.179062159673805, 11.573297857014795],
                [48.19653877392962, 11.571967897816977],
                [48.19725626551728, 11.572049796965452],
                [48.200208217243805, 11.573518895557056],
                [48.20114500125839, 11.57361545507828]
               
             
                
            ];
        }

        else if (personName === "Fraunhofer") {
            streetCoordinates = [
                [48.12792072380718, 11.576177792372247], 
                [48.12847241681036, 11.575427281205265],
                [48.1312913943617, 11.571631307580311]
             
                
            ];
        }

        currentStreetLine = L.polyline(streetCoordinates, {
            color: 'blue',
            weight: 5,
            opacity: 0.7
        }).addTo(map).bindPopup(`
            <div class="custom-popup">
                <button class="show-street-btn" onclick="showRouteForPerson('${personName}', 'grave')">
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
                <button class="show-street-btn" onclick="showRouteForPerson('${personName}', 'grave')">
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

function createCustomMarker(lat, lng, imageUrl, popupText, layerGroup, onClick, groupId = null) {
    let customIcon;

    if (layerGroup === markers.layer3) {
        customIcon = L.divIcon({
            className: "custom-marker-rock",
            html: `<div class="marker-container-rock">
                     <img src="${imageUrl}" class="marker-rock-image">
                   </div>`,
            iconSize: [40, 40],
            iconAnchor: [20, 40]
        });
    } 
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

    if (popupText.includes("Georg von Reichenbach")) {
        marker.bindPopup(`
            <div class="custom-popup">
                <h3>${popupText}</h3>
                <button class="ar-btn" onclick="launchAR(
                    ['reichenbach_links/reichenbach_links', 'reichenbach_mitte/reichenbach_mitte', 'reichenbach_rechts/reichenbach_rechts'],
                    'fraunhofer'
                )">AR starten</button>
                 <button class="show-street-btn" onclick="showRouteForPerson('Reichenbach', 'street')">
                        Straße anzeigen
                    </button>
            </div>
        `);
    }
    else if (popupText.includes("Ferdinand von Miller")) {
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
        currentGraveMarker = marker;
    } 
    else if (popupText.includes("Adolf Schlaginweit")) {
        marker.bindPopup(`
            <div class="custom-popup">
                <h3>${popupText}</h3>
                <button class="show-street-btn" onclick="showRouteForPerson('Adolf Schlagintweit', 'street')">
                    Straße anzeigen
                </button>
              
            </div>
        `);
        currentGraveMarker = marker;
    }
    else if (popupText.includes("Arnold Zenetti")) {
        marker.bindPopup(`
            <div class="custom-popup">
                <h3>${popupText}</h3>
                <button class="show-street-btn" onclick="showRouteForPerson('Arnold Zenetti', 'street')">
                    Straße anzeigen
                </button>
              
            </div>
        `);
        currentGraveMarker = marker;
    }

    else if (popupText.includes("Alois Senefelder")) {
        marker.bindPopup(`
            <div class="custom-popup">
                <h3>${popupText}</h3>
                <button class="show-street-btn" onclick="showRouteForPerson('Alois Senefelder', 'street')">
                    Straße anzeigen
                </button>
              
            </div>
        `);

        currentGraveMarker = marker;
    }

    else if (popupText.includes("Franz Kobell")) {
        marker.bindPopup(`
            <div class="custom-popup">
                <h3>${popupText}</h3>
                <button class="show-street-btn" onclick="showRouteForPerson('Franz Kobell', 'street')">
                    Straße anzeigen
                </button>
              
            </div>
        `);

        currentGraveMarker = marker;
    }

    else if (popupText.includes("Hiltensperger")) {
        marker.bindPopup(`
            <div class="custom-popup">
                <h3>${popupText}</h3>
                <button class="show-street-btn" onclick="showRouteForPerson('Hiltensperger', 'street')">
                    Straße anzeigen
                </button>
              
            </div>
        `);

        currentGraveMarker = marker;
    }
    
    else if (popupText.includes("Ohm")) {
        marker.bindPopup(`
            <div class="custom-popup">
                <h3>${popupText}</h3>
                <button class="show-street-btn" onclick="showRouteForPerson('Ohm', 'street')">
                    Straße anzeigen
                </button>
              
            </div>
        `);

        currentGraveMarker = marker;
    }

    else if (popupText.includes("Ett")) {
        marker.bindPopup(`
            <div class="custom-popup">
                <h3>${popupText}</h3>
                <button class="show-street-btn" onclick="showRouteForPerson('Ett', 'street')">
                    Straße anzeigen
                </button>
              
            </div>
        `);

        currentGraveMarker = marker;
    }

    else if (popupText.includes("Nußbaum")) {
        marker.bindPopup(`
            <div class="custom-popup">
                <h3>${popupText}</h3>
                <button class="show-street-btn" onclick="showRouteForPerson('Nußbaum', 'street')">
                    Straße anzeigen
                </button>
              
            </div>
        `);

        currentGraveMarker = marker;
    }

    else if (popupText.includes("Reichenbach")) {
        marker.bindPopup(`
            <div class="custom-popup">
                <h3>${popupText}</h3>
                <button class="show-street-btn" onclick="showRouteForPerson('Reichenbach', 'street')">
                    Straße anzeigen
                </button>
              
            </div>
        `);

        currentGraveMarker = marker;
    }


    else if (popupText.includes("Gärtner")) {
        marker.bindPopup(`
            <div class="custom-popup">
                <h3>${popupText}</h3>
                <button class="show-street-btn" onclick="showRouteForPerson('Gärtner', 'street')">
                    Platz anzeigen
                </button>
              
            </div>
        `);

        currentGraveMarker = marker;
    }

    else if (popupText.includes("Klenze")) {
        marker.bindPopup(`
            <div class="custom-popup">
                <h3>${popupText}</h3>
                <button class="show-street-btn" onclick="showRouteForPerson('Klenze', 'street')">
                    Straße anzeigen
                </button>
              
            </div>
        `);

        currentGraveMarker = marker;
    }

    else if (popupText.includes("Schwanthaler")) {
        marker.bindPopup(`
            <div class="custom-popup">
                <h3>${popupText}</h3>
                <button class="show-street-btn" onclick="showRouteForPerson('Schwanthaler', 'street')">
                    Straße anzeigen
                </button>
              
            </div>
        `);

        currentGraveMarker = marker;
    }

    else if (popupText.includes("Siebold")) {
        marker.bindPopup(`
            <div class="custom-popup">
                <h3>${popupText}</h3>
                <button class="show-street-btn" onclick="showRouteForPerson('Siebold', 'street')">
                    Straße anzeigen
                </button>
              
            </div>
        `);

        currentGraveMarker = marker;
    }

    else if (popupText.includes("Liebig")) {
        marker.bindPopup(`
            <div class="custom-popup">
                <h3>${popupText}</h3>
                <button class="show-street-btn" onclick="showRouteForPerson('Liebig', 'street')">
                    Straße anzeigen
                </button>
              
            </div>
        `);

        currentGraveMarker = marker;
    }

    else if (popupText.includes("Knorr")) {
        marker.bindPopup(`
            <div class="custom-popup">
                <h3>${popupText}</h3>
                <button class="show-street-btn" onclick="showRouteForPerson('Knorr', 'street')">
                    Straße anzeigen
                </button>
              
            </div>
        `);

        currentGraveMarker = marker;
    }


    else if (popupText.includes("Fraunhofer")) {
        marker.bindPopup(`
            <div class="custom-popup">
                <h3>${popupText}</h3>
                <button class="show-street-btn" onclick="showRouteForPerson('Fraunhofer', 'street')">
                    Straße anzeigen
                </button>
              
            </div>
        `);

        currentGraveMarker = marker;
    }
    else {
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
console.log('marker ID:', markerId);
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

document.addEventListener('DOMContentLoaded', function() {
    const hash = window.location.hash.substring(1);
    
    if (hash) {
        const parts = hash.split('/');
        if (parts.length > 1) {
            showSection(parts[0], parts[1]);
            
            // Detailansicht nach kurzer Verzögerung laden
            setTimeout(() => {
                if (parts[0] === 'gestein') {
                    showGesteinDetail(parts[1]);
                } else if (parts[0] === 'personen') {
                    showPersonDetail(parts[1]);
                }
            }, 100);
        } else {
            showSection(hash);
        }
    } else {
        showSection('Homepage');
    }
});