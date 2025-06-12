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

window.launchAR = async function(latitude, longitude, altitude = 0, radius = 10, modelName = 'fraunhofer') {
    try {
        await preloadModel(modelName);
        
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
                body { margin: 0; padding: 0; overflow: hidden; font-family: Arial; }
                #ar-ui { position: absolute; top: 10px; left: 10px; z-index: 1000; color: white; background: rgba(0,0,0,0.5); padding: 10px; border-radius: 5px; }
                #close-btn { background: #fff; color: #000; border: none; padding: 8px 15px; border-radius: 4px; cursor: pointer; }
            </style>
        </head>
        <body>
            <a-scene 
                vr-mode-ui="enabled: false"
                embedded
                arjs="
                    sourceType: webcam;
                    debugUIEnabled: false;
                    trackingMethod: best;
                    cameraParametersUrl: https://jeromeetienne.github.io/AR.js/data/data/camera_para.dat;
                "
                renderer="logarithmicDepthBuffer: true; precision: high;"
                gps-camera="
                    gpsMinDistance: ${radius};
                    simulateLatitude: ${latitude};
                    simulateLongitude: ${longitude};
                    simulateAltitude: ${altitude};
                "
            >
                <a-assets>
                    <a-asset-item id="ar-model" src="models/${modelName}.glb"></a-asset-item>
                </a-assets>
                
                <a-entity
                    id="model-entity"
                    gltf-model="#ar-model"
                    scale="1 1 1"
                    gps-entity-place="
                        latitude: ${latitude};
                        longitude: ${longitude};
                        altitude: ${altitude};
                    "
                    look-at="[gps-camera]"
                    rotation="0 180 0"
                    visible="true"
                ></a-entity>
                
                <a-camera gps-camera position="0 1.6 0"></a-camera>
            </a-scene>
            
            <div id="ar-ui">
                <button id="close-btn">Zurück</button>
                <div id="status">Initialisiere AR...</div>
                <div id="distance-info"></div>
            </div>

            <script>
                // Mobile detection
                const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
                
                // Close button
                document.getElementById('close-btn').addEventListener('click', function() {
                    window.close();
                });
                
                // Force GPS positioning on mobile
                if (isMobile) {
                    const scene = document.querySelector('a-scene');
                    scene.addEventListener('loaded', function() {
                        const camera = document.querySelector('[gps-camera]');
                        camera.setAttribute('gps-camera', 'simulatePosition: false');
                        
                        // Override AR.js default behavior
                        const arSystem = scene.systems.arjs || scene.systems['arjs'];
                        if (arSystem) {
                            arSystem.context._orientationControls.freeze = true;
                            arSystem.context._positionControls.freeze = true;
                        }
                    });
                }
                
                // Distance calculation
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
                
                // GPS tracking
                if (navigator.geolocation) {
                    navigator.geolocation.watchPosition(
                        function(position) {
                            const distance = calculateDistance(
                                position.coords.latitude, 
                                position.coords.longitude,
                                ${latitude},
                                ${longitude}
                            );
                            
                            document.getElementById('distance-info').innerHTML = \`
                                Entfernung: \${Math.round(distance)}m
                                \${distance <= ${radius} ? '' : '<br>Bewegen Sie sich näher'}
                            \`;
                        },
                        function(error) {
                            console.error('GPS Error:', error);
                        },
                        { enableHighAccuracy: true, maximumAge: 3000, timeout: 5000 }
                    );
                }
                
                // Model loaded handler
                document.querySelector('a-scene').addEventListener('loaded', function() {
                    document.getElementById('status').textContent = "AR bereit!";
                    document.getElementById('model-entity').addEventListener('model-loaded', function() {
                        console.log('Modell erfolgreich geladen');
                    });
                });
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