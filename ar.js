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

async function initCamera() {
    try {
        const constraints = {
            video: {
                facingMode: 'environment',
                width: { ideal: 1920 },
                height: { ideal: 1080 }
            }
        };
        
        // iOS spezifische Einstellungen
        if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            constraints.video = {
                facingMode: 'environment',
                width: { min: 1024, ideal: 1280, max: 1920 },
                height: { min: 576, ideal: 720, max: 1080 }
            };
        }
        
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        // Stream für späteres Stoppen speichern
        window.arStream = stream;
        
        window.addEventListener('beforeunload', function() {
            stream.getTracks().forEach(track => track.stop());
        });
    } catch (err) {
        let errorMsg = "Kamera-Fehler: " + err.message;
        
        if (err.name === 'NotAllowedError') {
            errorMsg += "<br><br>Bitte Kamera-Berechtigungen in den Browsereinstellungen erlauben.";
        } else if (err.name === 'NotFoundError' || err.name === 'OverconstrainedError') {
            errorMsg += "<br><br>Keine passende Kamera gefunden. Bitte andere Kamera-Apps schließen.";
        }
        
        if (window.location.protocol !== 'https:') {
            errorMsg += "<br><br>HINWEIS: AR funktioniert nur über HTTPS-Verbindungen!";
        }
        
        showError(errorMsg);
    }
}

function preloadModel(modelName) {
    return new Promise((resolve, reject) => {
        const loader = new THREE.GLTFLoader();
        loader.load(`models/${modelName}.glb`, resolve, null, reject);
    });
}
window.launchAR = async function(latitude, longitude, altitude = 0, radius = 10, modelName = 'fraunhofer') {
    try {
        await preloadModel(modelName);
        
        const arWindow = window.open('', 'AR_Viewer', 
            `width=${window.screen.width},
            height=${window.screen.height},
            fullscreen=yes`
        );
        
        if (!arWindow) throw new Error("Popups were blocked. Please allow popups for this site.");

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
                /* CSS bleibt gleich */
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
                        detectionMode: mono;
                        trackingMethod: best;
                        maxDetectionRate: 30;
                        cameraParametersUrl: https://jeromeetienne.github.io/AR.js/data/data/camera_para.dat;
                    "
                    renderer="logarithmicDepthBuffer: true; precision: high; antialias: true;"
                    gps-camera="
                        gpsMinDistance: ${radius};
                        positionMinAccuracy: 10;
                        minDistance: ${radius * 0.5};
                        maxDistance: ${radius * 2};
                        ${isMobile ? '' : `simulateLatitude: ${latitude}; simulateLongitude: ${longitude}; simulateAltitude: ${altitude};`}
                    "
                >
                    <a-assets timeout="100000">
                        <a-asset-item id="ar-model" src="models/${modelName}.glb"></a-asset-item>
                    </a-assets>
                    
                    <a-entity light="type: ambient; color: #FFF; intensity: 0.8"></a-entity>
                    <a-entity light="type: directional; color: #FFF; intensity: 0.5" position="-1 1 1"></a-entity>
                    
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
                        visible="${!isMobile}"
                        position="0 0 -5"
                        animation="property: position; to: 0 0 -5; dur: 1000; easing: easeInOutQuad"
                    ></a-entity>
                    
                    <a-camera 
                        gps-camera="
                            gpsMinDistance: ${radius};
                            positionMinAccuracy: 10;
                            minDistance: ${radius * 0.5};
                            maxDistance: ${radius * 2};
                        " 
                        rotation-reader
                        look-controls="enabled: true"
                        position="0 1.6 0"
                    ></a-camera>
                </a-scene>
                
                <!-- UI-Elemente bleiben gleich -->
            </div>

            <script>
                // Verbesserte Initialisierung
                var isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
                
                // Verbesserte Kamera-Initialisierung
                async function initCamera() {
                    try {
                        const constraints = {
                            video: {
                                facingMode: 'environment',
                                width: { ideal: 1920 },
                                height: { ideal: 1080 }
                            }
                        };
                        
                        if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
                            constraints.video = {
                                facingMode: 'environment',
                                width: { min: 1024, ideal: 1280, max: 1920 },
                                height: { min: 576, ideal: 720, max: 1080 }
                            };
                        }
                        
                        const stream = await navigator.mediaDevices.getUserMedia(constraints);
                        window.arStream = stream;
                        
                        window.addEventListener('beforeunload', function() {
                            stream.getTracks().forEach(track => track.stop());
                        });
                    } catch (err) {
                        let errorMsg = "Kamera-Fehler: " + err.message;
                        
                        if (err.name === 'NotAllowedError') {
                            errorMsg += "<br><br>Bitte Kamera-Berechtigungen in den Browsereinstellungen erlauben.";
                        } else if (err.name === 'NotFoundError' || err.name === 'OverconstrainedError') {
                            errorMsg += "<br><br>Keine passende Kamera gefunden. Bitte andere Kamera-Apps schließen.";
                        }
                        
                        if (window.location.protocol !== 'https:') {
                            errorMsg += "<br><br>HINWEIS: AR funktioniert nur über HTTPS-Verbindungen!";
                        }
                        
                        showError(errorMsg);
                    }
                }
                
                // Stabilisierungsfunktion für das Modell
                function stabilizeModel() {
                    const model = document.getElementById('model-entity');
                    const scene = document.querySelector('a-scene');
                    
                    if (isMobile) {
                        model.setAttribute('position', '0 0 -2');
                        model.setAttribute('visible', 'true');
                        
                        if (scene.systems.arjs) {
                            const arSystem = scene.systems.arjs;
                            arSystem.context.parameters.trackingParameters.stabilizationRatio = 0.8;
                            arSystem.context._continuousMonitoring = true;
                            arSystem.context._orientationReset = false;
                        }
                    }
                    
                    let lastPosition = null;
                    let stableCount = 0;
                    
                    const checkStability = setInterval(() => {
                        const currentPos = model.getAttribute('position');
                        
                        if (lastPosition && 
                            Math.abs(currentPos.x - lastPosition.x) < 0.01 &&
                            Math.abs(currentPos.y - lastPosition.y) < 0.01 &&
                            Math.abs(currentPos.z - lastPosition.z) < 0.01) {
                            stableCount++;
                            
                            if (stableCount > 5) {
                                model.setAttribute('animation', 'property: position; to: 0 0 -2; dur: 500; easing: easeInOutQuad');
                                clearInterval(checkStability);
                            }
                        } else {
                            stableCount = 0;
                        }
                        
                        lastPosition = {...currentPos};
                    }, 200);
                }
                
                // Scene loaded handler
                document.querySelector('a-scene').addEventListener('loaded', function() {
                    const model = document.getElementById('model-entity');
                    
                    model.addEventListener('model-loaded', function() {
                        document.getElementById('status').textContent = "AR bereit!";
                        stabilizeModel();
                    });
                    
                    // Rest des Codes bleibt gleich
                });
                
                // Rest des Scripts bleibt weitgehend gleich
            </script>
        </body>
        </html>`;

        arWindow.document.write(arHTML);
        arWindow.document.close();
        
    } catch (error) {
        alert("Fehler beim Starten der AR-Ansicht: " + error.message);
        console.error("AR initialization error:", error);
    }
};

function stabilizeModel() {
    const model = document.getElementById('model-entity');
    const scene = document.querySelector('a-scene');
    
    // Stabilisierung für mobile Geräte
    if (isMobile) {
        model.setAttribute('position', '0 0 -2');
        model.setAttribute('visible', 'true');
        
        // AR.js Tracking optimieren
        if (scene.systems.arjs) {
            const arSystem = scene.systems.arjs;
            arSystem.context.parameters.trackingParameters.stabilizationRatio = 0.8;
            arSystem.context._continuousMonitoring = true;
            arSystem.context._orientationReset = false;
        }
    }
    
    // Regelmäßige Positionsupdates
    let lastPosition = null;
    let stableCount = 0;
    
    const checkStability = setInterval(() => {
        const currentPos = model.getAttribute('position');
        
        if (lastPosition && 
            Math.abs(currentPos.x - lastPosition.x) < 0.01 &&
            Math.abs(currentPos.y - lastPosition.y) < 0.01 &&
            Math.abs(currentPos.z - lastPosition.z) < 0.01) {
            stableCount++;
            
            if (stableCount > 5) {
                // Modell ist stabil - Tracking verbessern
                model.setAttribute('animation', 'property: position; to: 0 0 -2; dur: 500; easing: easeInOutQuad');
                clearInterval(checkStability);
            }
        } else {
            stableCount = 0;
        }
        
        lastPosition = {...currentPos};
    }, 200);
}