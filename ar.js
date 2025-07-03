// AR-Starter-Funktion mit neuem Fenster
/*
window.launchAR = function(markerUrls = ['default'], modelName = 'fraunhofer') {
    // Neues Fenster erstellen
    const arWindow = window.open('', 'AR_Viewer', `
        width=${window.screen.width},
        height=${window.screen.height},
        fullscreen=yes
    `);
    
    if (!arWindow) {
        alert("Popups wurden blockiert. Bitte erlauben Sie Popups für diese Seite.");
        return;
    }

    // HTML für das AR-Fenster
    const arHTML = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>AR Viewer</title>
        <script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
        <script src="https://cdn.jsdelivr.net/gh/AR-js-org/AR.js@3.4.2/aframe/build/aframe-ar-nft.min.js"></script>
        <style>
            body { 
                margin: 0; 
                padding: 0; 
                overflow: hidden;
                font-family: Arial;
            }
            #ar-container {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
            }
            #ar-ui {
                position: absolute;
                top: 10px;
                left: 10px;
                z-index: 1000;
                color: white;
                background: rgba(0,0,0,0.5);
                padding: 10px;
                border-radius: 5px;
            }
            #close-btn {
                background: #fff;
                color: #000;
                border: none;
                padding: 8px 15px;
                border-radius: 4px;
                cursor: pointer;
                font-size: 14px;
            }
        </style>
    </head>
    <body>
        <div id="ar-container">
            <a-scene 
                vr-mode-ui="enabled: false"
                embedded
                arjs="sourceType: webcam; debugUIEnabled: true; trackingMethod: best;"
                renderer="logarithmicDepthBuffer: true; precision: medium;"
            >
                <a-assets>
                    <a-asset-item id="ar-model" src="models/${modelName}.glb"></a-asset-item>
                </a-assets>
                
                ${markerUrls.map(url => `
                    <a-nft
                        type="nft"
                        url="marker/${url}"
                        smooth="true"
                        smoothCount="10"
                        smoothTolerance="0.01"
                        smoothThreshold="5"
                    >
                        <a-entity 
                            gltf-model="#ar-model"
                            scale="0.05 0.05 0.05"
                            position="0 0.5 0"
                            rotation="0 180 0"
                        ></a-entity>
                    </a-nft>
                `).join('')}
                
                <a-entity camera></a-entity>
            </a-scene>
            
            <div id="ar-ui">
                <button id="close-btn">Zurück</button>
                <div id="status">Initialisiere AR...</div>
            </div>
        </div>

        <script>
            // Status-Element
            const statusEl = document.getElementById('status');
            
            // Schließen-Button
            document.getElementById('close-btn').addEventListener('click', function() {
                window.close();
            });
            
            // Kamera-Initialisierung
            async function initCamera() {
                try {
                    statusEl.textContent = "Starte Kamera...";
                    
                    const stream = await navigator.mediaDevices.getUserMedia({
                        video: {
                            facingMode: 'environment',
                            width: { ideal: 1280 },
                            height: { ideal: 720 }
                        }
                    });
                    
                    statusEl.textContent = "Kamera aktiv. Marker zeigen.";
                    
                    // Stream beenden beim Schließen
                    window.addEventListener('beforeunload', function() {
                        stream.getTracks().forEach(track => track.stop());
                    });
                    
                } catch (err) {
                    statusEl.innerHTML = \`
                        <div style="color: red;">
                            Kamera-Fehler: \${err.message}
                            <div style="font-size: 0.8em;">
                                Bitte:<br>
                                - HTTPS verwenden<br>
                                - Kamera erlauben<br>
                                - Andere Kamera-Apps schließen
                            </div>
                        </div>
                    \`;
                }
            }
            
            // Szene geladen
            document.querySelector('a-scene').addEventListener('loaded', function() {
                initCamera();
            });
        </script>
    </body>
    </html>
    `;

    // HTML in das neue Fenster schreiben
    arWindow.document.write(arHTML);
    arWindow.document.close();
    
    // Fokus auf das neue Fenster
    arWindow.focus();
};
*/

// Hilfsfunktion zum Vorladen von Modellen
function preloadModel(modelName) {
    return new Promise((resolve, reject) => {
        const loader = new THREE.GLTFLoader();
        loader.load(`models/${modelName}.glb`, resolve, null, reject);
    });
}

// Haupt-AR-Funktion
window.launchAR = async function(models) {
    try {
        // Alle Modelle vorladen
        await Promise.all(models.map(model => preloadModel(model.modelName)));
        
        // AR-Fenster öffnen
        const arWindow = window.open('', 'AR_Viewer', `
            width=${window.screen.width},
            height=${window.screen.height},
            fullscreen=yes
        `);
        
        if (!arWindow) {
            throw new Error("Popups wurden blockiert. Bitte erlauben Sie Popups für diese Seite.");
        }

        // AR-HTML-Inhalt
        const arHTML = `<!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>AR Viewer</title>
            <meta name="viewport" content="width=device-width, user-scalable=no">
            <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
            <script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
            <script src="https://cdn.jsdelivr.net/gh/AR-js-org/AR.js@master/aframe/build/aframe-ar.min.js"></script>
            <script src="https://unpkg.com/aframe-look-at-component@0.8.0/dist/aframe-look-at-component.min.js"></script>
            <style>
                body { margin: 0; overflow: hidden; }
                #loading {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: #000;
                    color: #fff;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 1000;
                }
                #error-message {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: rgba(0,0,0,0.8);
                    color: white;
                    padding: 20px;
                    border-radius: 10px;
                    text-align: center;
                    max-width: 80%;
                    display: none;
                    z-index: 1001;
                }
            </style>
        </head>
        <body>
            <div id="loading">AR wird geladen...</div>
            <div id="error-message"></div>

            <a-scene 
                vr-mode-ui="enabled: false"
                embedded
                arjs="sourceType: webcam; debugUIEnabled: false;"
                renderer="logarithmicDepthBuffer: true;"
                gps-camera="simulateLatitude: 0; simulateLongitude: 0;"
            >
                <a-assets>
                    ${models.map(model => `
                        <a-asset-item id="model-${model.id}" src="models/${model.modelName}.glb"></a-asset-item>
                    `).join('')}
                </a-assets>
                
                <!-- Lichtquellen -->
                <a-entity light="type: ambient; color: #FFF; intensity: 0.8"></a-entity>
                <a-entity light="type: directional; color: #FFF; intensity: 0.5" position="-1 1 1"></a-entity>
                
                <!-- 3D-Modelle -->
                ${models.map(model => `
                    <a-entity
                        id="entity-${model.id}"
                        gltf-model="#model-${model.id}"
                        scale="${model.scale || '1 1 1'}"
                        gps-entity-place="
                            latitude: ${model.latitude};
                            longitude: ${model.longitude};
                            altitude: ${model.altitude || 0};
                        "
                        look-at="[gps-camera]"
                        visible="false"
                    ></a-entity>
                `).join('')}
                
                <!-- Kamera -->
                <a-camera 
                    gps-camera 
                    position="0 1.6 0"
                    look-controls="enabled: true"
                ></a-camera>
            </a-scene>

            <script>
                // Fehlerbehandlung
                function showError(message) {
                    document.getElementById('loading').style.display = 'none';
                    const errorEl = document.getElementById('error-message');
                    errorEl.innerHTML = message;
                    errorEl.style.display = 'block';
                    console.error(message);
                }

                // Entfernungsberechnung
                function calculateDistance(lat1, lon1, lat2, lon2) {
                    const R = 6371e3;
                    const φ1 = lat1 * Math.PI/180;
                    const φ2 = lat2 * Math.PI/180;
                    const Δφ = (lat2-lat1) * Math.PI/180;
                    const Δλ = (lon2-lon1) * Math.PI/180;
                    
                    const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
                              Math.cos(φ1) * Math.cos(φ2) *
                              Math.sin(Δλ/2) * Math.sin(Δλ/2);
                    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
                }

                // Sichtbarkeit der Modelle aktualisieren
                function updateVisibleModels() {
                    const camera = document.querySelector('[gps-camera]');
                    if (!camera || !camera.components['gps-camera']) return;
                    
                    const camPos = camera.components['gps-camera'].currentCoords;
                    if (!camPos) return;
                    
                    ${models.map(model => `
                        const dist${model.id} = calculateDistance(
                            camPos.latitude, 
                            camPos.longitude, 
                            ${model.latitude}, 
                            ${model.longitude}
                        );
                        const entity${model.id} = document.getElementById('entity-${model.id}');
                        if (entity${model.id}) {
                            entity${model.id}.setAttribute('visible', dist${model.id} <= ${model.radius || 10});
                        }
                    `).join('')}
                }

                // Szene initialisieren
                document.querySelector('a-scene').addEventListener('loaded', function() {
                    document.getElementById('loading').style.display = 'none';
                    
                    // Modell-Ladeevents
                    ${models.map(model => `
                        document.getElementById('entity-${model.id}').addEventListener('model-loaded', function() {
                            console.log('Modell ${model.id} geladen');
                        });
                    `).join('')}
                    
                    // GPS-Positionsupdates
                    document.querySelector('a-scene').addEventListener('gps-camera-update-position', function() {
                        updateVisibleModels();
                    });
                    
                    // Regelmäßige Updates
                    setInterval(updateVisibleModels, 1000);
                });

                // Fehlerbehandlung für die Szene
                document.querySelector('a-scene').addEventListener('error', function(event) {
                    showError('AR-Szene Fehler: ' + (event.detail || 'Unbekannter Fehler'));
                });

                // WebGL-Unterstützung prüfen
                if (!AFRAME.utils.device.checkWebGLSupport()) {
                    showError('Ihr Gerät unterstützt keine WebGL/AR-Funktionen. Bitte verwenden Sie ein modernes Smartphone.');
                }
            </script>
        </body>
        </html>`;

        arWindow.document.write(arHTML);
        arWindow.document.close();
        
    } catch (error) {
        console.error("AR initialization error:", error);
        alert("Fehler beim Starten der AR-Ansicht: " + error.message);
    }
};
