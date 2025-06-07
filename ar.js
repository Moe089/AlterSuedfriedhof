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

window.launchAR = function(latitude, longitude, altitude = 0, radius = 10, modelName = 'fraunhofer') {
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
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
        <script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
        <script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></script>
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
            .distance-marker {
                position: absolute;
                width: 20px;
                height: 20px;
                background: rgba(255,255,255,0.7);
                border-radius: 50%;
                transform: translate(-50%, -50%);
                pointer-events: none;
                transition: all 0.3s;
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
                    cameraParametersUrl: 'https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/data/camera_para.dat';
                "
                renderer="logarithmicDepthBuffer: true; precision: high; antialias: true;"
                gps-camera="
                    gpsMinDistance: ${radius};
                    simulateLatitude: ${navigator.userAgent.match(/Mobile/) ? 0 : latitude};
                    simulateLongitude: ${navigator.userAgent.match(/Mobile/) ? 0 : longitude};
                    simulateAltitude: ${altitude};
                "
                mobile-ar-init
            >
                <a-assets>
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
                    ground-aligner="offset: 0;"
                    look-at="[gps-camera]"
                    rotation="0 180 0"
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
        </div>

        <script>
            // Device Detection
            const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
            if (!isMobile) {
                document.getElementById('mobile-hint').style.display = 'none';
            }
            
            // Mobile AR Initialisierung
            AFRAME.registerComponent('mobile-ar-init', {
                init: function() {
                    if (!isMobile) return;
                    
                    this.el.sceneEl.addEventListener('arjs-system-initialized', () => {
                        const arSystem = this.el.sceneEl.systems.arjs;
                        arSystem.context.parameters.trackingParameters.stabilizationRatio = 0.5;
                        arSystem.context._continuousMonitoring = true;
                        
                        // Feature-Punkte anzeigen für besseres Tracking
                        arSystem.context._debugUI.setupDebugMarkers();
                    });
                }
            });
            
            // Position Updater
            AFRAME.registerComponent('position-updater', {
                schema: {
                    minDistance: {type: 'number', default: 10}
                },
                init: function() {
                    this.camera = document.querySelector('[gps-camera]');
                    this.lastPosition = null;
                    this.smoothedPosition = new THREE.Vector3();
                    this.visible = false;
                    
                    // Für Mobile: Feature-Punkte nutzen
                    if (isMobile) {
                        this.el.sceneEl.addEventListener('arjs-video-loaded', () => {
                            this.el.sceneEl.systems.arjs.context._debugUI.setupDebugMarkers();
                        });
                    }
                },
                tick: function() {
                    if (!this.camera || !this.camera.getAttribute('position')) return;
                    
                    const camPos = this.camera.getAttribute('position');
                    if (!camPos.latitude || !camPos.longitude) return;
                    
                    const targetDistance = this.calculateDistance(
                        camPos.latitude, camPos.longitude,
                        ${latitude}, ${longitude}
                    );
                    
                    // Für Mobile: Sichtbarkeit basierend auf Tracking-Status
                    if (isMobile) {
                        const arSystem = this.el.sceneEl.systems.arjs;
                        const isTracking = arSystem && arSystem.context._orientationTracking;
                        
                        if (targetDistance <= this.data.minDistance * 1.5 && isTracking) {
                            if (!this.visible) {
                                this.el.setAttribute('visible', 'true');
                                this.visible = true;
                            }
                            
                            // Sanfte Positionsanpassung
                            const targetPos = this.el.components['gps-entity-place'].currentCoords;
                            if (targetPos) {
                                this.smoothedPosition.lerp(
                                    new THREE.Vector3(targetPos.x, targetPos.y, targetPos.z),
                                    0.1
                                );
                                this.el.setAttribute('position', this.smoothedPosition);
                            }
                        } else {
                            if (this.visible) {
                                this.el.setAttribute('visible', 'false');
                                this.visible = false;
                            }
                        }
                    } 
                    // Für Desktop: Immer sichtbar
                    else {
                        this.el.setAttribute('visible', 'true');
                        const targetPos = this.el.components['gps-entity-place'].currentCoords;
                        if (targetPos) {
                            this.el.setAttribute('position', {
                                x: targetPos.x,
                                y: targetPos.y,
                                z: targetPos.z
                            });
                        }
                    }
                },
                calculateDistance: function(lat1, lon1, lat2, lon2) {
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
            });
            
            // Ground Aligner
            AFRAME.registerComponent('ground-aligner', {
                schema: {
                    offset: {type: 'number', default: 0}
                },
                init: function() {
                    this.groundNormal = new THREE.Vector3(0, 1, 0);
                },
                tick: function() {
                    const object3D = this.el.object3D;
                    if (object3D) {
                        object3D.up.copy(this.groundNormal);
                        object3D.rotation.x = 0;
                        object3D.rotation.z = 0;
                        object3D.position.y = this.data.offset;
                    }
                }
            });
            
            // UI-Elemente
            const statusEl = document.getElementById('status');
            const distanceInfo = document.getElementById('distance-info');
            const positionInfo = document.getElementById('position-info');
            const trackingStatus = document.getElementById('tracking-status');
            
            // Schließen-Button
            document.getElementById('close-btn').addEventListener('click', function() {
                window.close();
            });
            
            // Kamera-Initialisierung
            async function initCamera() {
                try {
                    statusEl.textContent = "Starte Kamera...";
                    
                    const constraints = {
                        video: {
                            facingMode: 'environment',
                            width: { ideal: 1280 },
                            height: { ideal: 720 }
                        }
                    };
                    
                    // Für iOS Geräte spezielle Einstellungen
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
            
            // GPS-Position aktualisieren
            function updatePosition(position) {
                const { latitude, longitude, altitude, accuracy } = position.coords;
                positionInfo.innerHTML = \`
                    Ihre Position:<br>
                    Breite: \${latitude.toFixed(6)}°<br>
                    Länge: \${longitude.toFixed(6)}°<br>
                    Genauigkeit: ~\${Math.round(accuracy)} Meter
                \`;
            }
            
            // GPS-Fehler behandeln
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
                statusEl.innerHTML = \`<div style="color: red;">\${message}</div>\`;
            }
            
            // Szene geladen
            document.querySelector('a-scene').addEventListener('loaded', function() {
                initCamera();
                
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
                    statusEl.innerHTML = '<div style="color: red;">Geolocation wird nicht unterstützt</div>';
                }
                
                // Tracking-Status für Mobile
                if (isMobile) {
                    this.addEventListener('markerFound', () => {
                        trackingStatus.textContent = "Objekt gefunden!";
                        trackingStatus.style.color = "lightgreen";
                    });
                    
                    this.addEventListener('markerLost', () => {
                        trackingStatus.textContent = "Bewegen Sie das Gerät langsamer";
                        trackingStatus.style.color = "orange";
                    });
                }
            });
            
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
                const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
                
                return R * c;
            }
            
            // Regelmäßige Updates
            setInterval(() => {
                const camera = document.querySelector('[gps-camera]');
                if (camera && camera.getAttribute('position')) {
                    const camPos = camera.getAttribute('position');
                    if (camPos.latitude && camPos.longitude) {
                        const distance = calculateDistance(
                            camPos.latitude, 
                            camPos.longitude,
                            ${latitude},
                            ${longitude}
                        );
                        
                        distanceInfo.innerHTML = \`
                            Entfernung: ~\${Math.round(distance)} Meter<br>
                            \${distance <= ${radius} ? 
                                "Sie sind im Zielbereich" : 
                                "Bewegen Sie sich näher"}
                        \`;
                        
                        if (distance <= ${radius}) {
                            distanceInfo.style.color = 'lightgreen';
                        } else {
                            distanceInfo.style.color = 'white';
                        }
                    }
                }
            }, 1000);
        </script>
    </body>
    </html>
    `;

    arWindow.document.write(arHTML);
    arWindow.document.close();
    arWindow.focus();
};