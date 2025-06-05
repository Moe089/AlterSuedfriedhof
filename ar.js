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

window.launchAR = function(latitude, longitude, modelName = 'fraunhofer') {
    const arWindow = window.open('', 'AR_Viewer', `
        width=${window.screen.width},
        height=${window.screen.height},
        fullscreen=yes
    `);
    
    if (!arWindow) {
        alert("Popups wurden blockiert. Bitte erlauben Sie Popups für diese Seite.");
        return;
    }

    const arHTML = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>AR Viewer</title>
        <script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
        <script src="https://raw.githack.com/AR-js-org/AR.js/3.4.2/aframe/build/aframe-ar.js"></script>
        <style>
            body { margin: 0; padding: 0; overflow: hidden; }
            .arjs-loader {
                height: 100%;
                width: 100%;
                position: absolute;
                top: 0;
                left: 0;
                background-color: rgba(0, 0, 0, 0.8);
                z-index: 9999;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                color: white;
            }
            #debug-info {
                position: absolute;
                bottom: 20px;
                left: 20px;
                background: rgba(0,0,0,0.7);
                color: white;
                padding: 10px;
                border-radius: 5px;
                font-family: monospace;
                max-width: 80%;
            }
        </style>
    </head>
    <body>
        <div class="arjs-loader">
            <div>Initialisiere AR...</div>
            <div id="load-status">Lade Ressourcen</div>
        </div>
        
        <a-scene 
            vr-mode-ui="enabled: false"
            embedded
            arjs="sourceType: webcam; debugUIEnabled: true; trackingMethod: best;"
            renderer="logarithmicDepthBuffer: true; precision: medium;"
        >
            <a-assets>
                <a-asset-item 
                    id="model" 
                    src="models/${modelName}.glb"
                    crossorigin="anonymous"
                ></a-asset-item>
            </a-assets>
            
            <a-entity
                id="ar-model"
                gltf-model="#model"
                scale="0.5 0.5 0.5"
                gps-entity-place="latitude: ${latitude}; longitude: ${longitude};"
                rotation="0 180 0"
            ></a-entity>
            
            <a-camera gps-camera rotation-reader></a-camera>
        </a-scene>
        
        <div id="debug-info">
            <div>Debug Information:</div>
            <div id="model-status">Modell: Wird geladen...</div>
            <div id="gps-status">GPS: Initialisierung...</div>
            <div id="camera-status">Kamera: Wird gestartet...</div>
        </div>

        <script>
            // Debug-Elemente
            const loadStatus = document.getElementById('load-status');
            const modelStatus = document.getElementById('model-status');
            const gpsStatus = document.getElementById('gps-status');
            const cameraStatus = document.getElementById('camera-status');
            
            // Modell-Lade-Status überwachen
            document.querySelector('a-scene').addEventListener('loaded', function() {
                loadStatus.textContent = "Szene geladen";
                
                const model = document.getElementById('ar-model');
                model.addEventListener('model-loaded', function() {
                    modelStatus.textContent = "Modell erfolgreich geladen";
                    console.log("Modell geladen:", model.getAttribute('gltf-model'));
                });
                
                model.addEventListener('model-error', function() {
                    modelStatus.innerHTML = "<span style='color:red'>Fehler beim Laden des Modells</span>";
                    console.error("Modell konnte nicht geladen werden");
                });
            });
            
            // GPS-Status überwachen
            if (navigator.geolocation) {
                navigator.geolocation.watchPosition(
                    function(pos) {
                        gpsStatus.innerHTML = \`
                            GPS: Aktiv<br>
                            Breite: \${pos.coords.latitude.toFixed(6)}<br>
                            Länge: \${pos.coords.longitude.toFixed(6)}<br>
                            Genauigkeit: \${Math.round(pos.coords.accuracy)}m
                        \`;
                    },
                    function(err) {
                        gpsStatus.innerHTML = \`
                            <span style="color:red">GPS-Fehler: \${err.message}</span>
                        \`;
                    },
                    { enableHighAccuracy: true, timeout: 10000 }
                );
            }
            
            // Kamera-Status
            async function initCamera() {
                try {
                    const stream = await navigator.mediaDevices.getUserMedia({
                        video: {
                            facingMode: 'environment',
                            width: { ideal: 1280 },
                            height: { ideal: 720 }
                        }
                    });
                    cameraStatus.textContent = "Kamera: Aktiv";
                    
                    // Ladebildschirm ausblenden wenn alles bereit
                    setTimeout(() => {
                        document.querySelector('.arjs-loader').style.display = 'none';
                    }, 2000);
                    
                } catch (err) {
                    cameraStatus.innerHTML = \`
                        <span style="color:red">Kamera-Fehler: \${err.message}</span>
                    \`;
                }
            }
            
            initCamera();
        </script>
    </body>
    </html>
    `;

    arWindow.document.write(arHTML);
    arWindow.document.close();
    arWindow.focus();
};