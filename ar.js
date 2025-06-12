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

function preloadModel(modelName) {
    return new Promise((resolve, reject) => {
        const loader = new THREE.GLTFLoader();
        loader.load(`models/${modelName}.glb`, resolve, null, reject);
    });
}

// Before launching AR:
async function launchAR() {
    try {
        await preloadModel(modelName);
        // Proceed with AR launch
    } catch (error) {
        alert("Failed to load 3D model: " + error.message);
    }
}


window.launchAR = async function(latitude, longitude, altitude = 0, radius = 10, modelName = 'fraunhofer') {
    try {
        // Preload the model first
        await preloadModel(modelName);
        
        // Open AR window
        const arWindow = window.open('', 'AR_Viewer', `
            width=${window.screen.width},
            height=${window.screen.height},
            fullscreen=yes
        `);
        
        if (!arWindow) {
            throw new Error("Popups were blocked. Please allow popups for this site.");
        }

        const arHTML = `<!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>AR Viewer</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
            <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
            <script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
            <script src="https://cdn.jsdelivr.net/gh/AR-js-org/AR.js@master/aframe/build/aframe-ar.min.js"></script>
            <script src="https://unpkg.com/aframe-look-at-component@0.8.0/dist/aframe-look-at-component.min.js"></script>
            <style>
                body { 
                    margin: 0; 
                    padding: 0; 
                    overflow: hidden;
                    font-family: Arial;
                    -webkit-touch-callout: none;
                    -webkit-user-select: none;
                    user-select: none;
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
                    max-width: 90%;
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
                #distance-info {
                    margin-top: 10px;
                    font-size: 14px;
                }
                #mobile-hint {
                    position: absolute;
                    bottom: 20px;
                    left: 0;
                    right: 0;
                    text-align: center;
                    color: white;
                    background: rgba(0,0,0,0.7);
                    padding: 10px;
                    display: none;
                }
                .error-message {
                    color: red;
                    padding: 20px;
                    background: rgba(0,0,0,0.7);
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    text-align: center;
                    max-width: 80%;
                }
            </style>
        </head>
        <body>
            <div id="ar-container">
                <a-scene 
                    vr-mode-ui="enabled: false"
                    embedded
                    arjs="
                        sourceType: webcam;
                        debugUIEnabled: false;
                        detectionMode: mono_and_matrix;
                        matrixCodeType: 3x3;
                        trackingMethod: best;
                        maxDetectionRate: 30;
                        cameraParametersUrl: https://jeromeetienne.github.io/AR.js/data/data/camera_para.dat;
                    "
                    renderer="logarithmicDepthBuffer: true; precision: high; antialias: true;"
                    gps-camera="
                        gpsMinDistance: ${radius};
                        simulateLatitude: ${isMobile ? 0 : latitude};
                        simulateLongitude: ${isMobile ? 0 : longitude};
                        simulateAltitude: ${altitude};
                    "
                >
                    <a-assets timeout="10000">
                        <a-asset-item id="ar-model" src="models/${modelName}.glb"></a-asset-item>
                    </a-assets>
                    
                    <a-entity
                        gltf-model="#ar-model"
                        scale="0.5 0.5 0.5"
                        gps-entity-place="
                            latitude: ${latitude};
                            longitude: ${longitude};
                            altitude: ${altitude};
                        "
                        position-updater="minDistance: ${radius};"
                        look-at="[gps-camera]"
                        rotation="0 180 0"
                        visible="false"
                    ></a-entity>
                    
                    <a-camera 
                        gps-camera="
                            gpsMinDistance: ${radius};
                            positionMinAccuracy: 10;
                            minDistance: ${radius * 0.5};
                            maxDistance: ${radius * 2};
                        " 
                        rotation-reader
                        look-controls="enabled: false"
                    ></a-camera>
                </a-scene>
                
                <div id="ar-ui">
                    <button id="close-btn">Zurück</button>
                    <div id="status">Initialisiere AR...</div>
                    <div id="distance-info"></div>
                    <div id="position-info"></div>
                </div>
                
                <div id="mobile-hint">
                    <p>Bewegen Sie Ihr Gerät langsam im Kreis, um das Objekt zu finden</p>
                    <div id="tracking-status">Suche nach Oberflächen...</div>
                </div>
                
                <div id="error-container" class="error-message" style="display: none;"></div>
            </div>

            <script>
                // Check if mobile
                var isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
                if (isMobile) {
                    document.getElementById('mobile-hint').style.display = 'block';
                }
                
                // Close button
                document.getElementById('close-btn').addEventListener('click', function() {
                    window.close();
                });
                
                // Error handling
                function showError(message) {
                    const errorContainer = document.getElementById('error-container');
                    errorContainer.innerHTML = message;
                    errorContainer.style.display = 'block';
                    document.getElementById('status').style.display = 'none';
                    console.error(message);
                }
                
                // Scene loaded handler
                document.querySelector('a-scene').addEventListener('loaded', function() {
                    initCamera();
                    initGPS();
                    
                    if (isMobile) {
                        initMobileAR();
                    }
                    
                    // Model loaded handler
                    this.addEventListener('model-loaded', function() {
                        document.getElementById('status').textContent = "AR bereit!";
                    });
                });
                
                // Scene error handler
                document.querySelector('a-scene').addEventListener('error', function(event) {
                    showError("AR-Szene Fehler: " + event.detail);
                });
                
                // Asset error handler
                document.querySelector('a-assets').addEventListener('error', function(event) {
                    showError("Fehler beim Laden des 3D-Modells. Bitte versuchen Sie es später erneut.");
                });
                
                // Camera initialization
                async function initCamera() {
                    try {
                        const constraints = {
                            video: {
                                facingMode: 'environment',
                                width: { ideal: 1280 },
                                height: { ideal: 720 }
                            }
                        };
                        
                        if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
                            constraints.video = {
                                facingMode: 'environment',
                                width: { exact: 1280 },
                                height: { exact: 720 }
                            };
                        }
                        
                        const stream = await navigator.mediaDevices.getUserMedia(constraints);
                        window.addEventListener('beforeunload', function() {
                            stream.getTracks().forEach(track => track.stop());
                        });
                    } catch (err) {
                        showError("Kamera-Fehler: " + err.message + 
                                "<br><br>Bitte:<br>- HTTPS verwenden<br>- Kamera erlauben<br>- Andere Kamera-Apps schließen");
                    }
                }
                
                // GPS initialization
                function initGPS() {
                    if (navigator.geolocation) {
                        navigator.geolocation.watchPosition(
                            updatePosition,
                            handleGpsError,
                            { 
                                enableHighAccuracy: true,
                                maximumAge: 5000,
                                timeout: 10000
                            }
                        );
                    } else {
                        showError("Geolocation wird nicht unterstützt");
                    }
                }
                
                // Mobile AR specific initialization
                function initMobileAR() {
                    const scene = document.querySelector('a-scene');
                    const arSystem = scene.systems.arjs;
                    
                    scene.addEventListener('markerFound', () => {
                        document.getElementById('tracking-status').textContent = "Objekt gefunden!";
                        document.getElementById('tracking-status').style.color = "lightgreen";
                    });
                    
                    scene.addEventListener('markerLost', () => {
                        document.getElementById('tracking-status').textContent = "Bewegen Sie das Gerät langsamer";
                        document.getElementById('tracking-status').style.color = "orange";
                    });
                    
                    if (arSystem) {
                        arSystem.context.parameters.trackingParameters.stabilizationRatio = 0.5;
                        arSystem.context._continuousMonitoring = true;
                    }
                }
                
                // Position updates
                function updatePosition(position) {
                    const { latitude, longitude, accuracy } = position.coords;
                    document.getElementById('position-info').innerHTML = \`
                        Ihre Position:<br>
                        Breite: \${latitude.toFixed(6)}°<br>
                        Länge: \${longitude.toFixed(6)}°<br>
                        Genauigkeit: ~\${Math.round(accuracy)} Meter
                    \`;
                    
                    updateDistance(latitude, longitude);
                }
                
                // GPS error handler
                function handleGpsError(error) {
                    let message = "GPS-Fehler: ";
                    switch(error.code) {
                        case error.PERMISSION_DENIED:
                            message += "Zugriff verweigert. Bitte GPS aktivieren.";
                            break;
                        case error.POSITION_UNAVAILABLE:
                            message += "Position nicht verfügbar.";
                            break;
                        case error.TIMEOUT:
                            message += "Timeout beim Abrufen der Position.";
                            break;
                        default:
                            message += "Unbekannter Fehler.";
                    }
                    showError(message);
                }
                
                // Distance calculation and updates
                function calculateDistance(lat1, lon1, lat2, lon2) {
                    const R = 6371e3;
                    const φ1 = lat1 * Math.PI/180;
                    const φ2 = lat2 * Math.PI/180;
                    const Δφ = (lat2-lat1) * Math.PI/180;
                    const Δλ = (lon2-lon1) * Math.PI/180;
                    
                    const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
                              Math.cos(φ1) * Math.cos(φ2) *
                              Math.sin(Δλ/2) * Math.sin(Δλ/2);
                    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
                    
                    return R * c;
                }
                
                function updateDistance(lat1, lon1) {
                    const distance = calculateDistance(lat1, lon1, ${latitude}, ${longitude});
                    const distanceInfo = document.getElementById('distance-info');
                    
                    distanceInfo.innerHTML = \`
                        Entfernung: ~\${Math.round(distance)} Meter<br>
                        \${distance <= ${radius} ? 
                            "Sie sind im Zielbereich" : 
                            "Bewegen Sie sich näher"}
                    \`;
                    
                    if (distance <= ${radius}) {
                        distanceInfo.style.color = 'lightgreen';
                        // Make model visible when in range
                        document.querySelector('[gltf-model]').setAttribute('visible', 'true');
                    } else {
                        distanceInfo.style.color = 'white';
                        document.querySelector('[gltf-model]').setAttribute('visible', 'false');
                    }
                }
                
                // Regular updates
                setInterval(() => {
                    const camera = document.querySelector('[gps-camera]');
                    if (camera && camera.getAttribute('position')) {
                        const camPos = camera.getAttribute('position');
                        if (camPos.latitude && camPos.longitude) {
                            updateDistance(camPos.latitude, camPos.longitude);
                        }
                    }
                }, 1000);
            </script>
        </body>
        </html>`;

        arWindow.document.write(arHTML);
        arWindow.document.close();
        arWindow.focus();

    } catch (error) {
        alert("Fehler beim Starten der AR-Ansicht: " + error.message);
        console.error("AR initialization error:", error);
    }
};

// Helper function to preload models
async function preloadModel(modelName) {
    return new Promise((resolve, reject) => {
        const loader = new THREE.GLTFLoader();
        loader.load(
            `models/${modelName}.glb`,
            resolve,
            null,
            () => reject(new Error(`Model ${modelName}.glb konnte nicht geladen werden`))
        );
    });
}

// Initialize isMobile variable
if (typeof isMobile === 'undefined') {
    var isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}