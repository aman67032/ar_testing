// Preload plant models
const plantModels = {
    basil: 'https://cdn.glitch.global/your-path/basil.glb',
    mint: 'https://cdn.glitch.global/your-path/mint.glb'
};

let currentPlant = plantModels.basil;

function addPlant() {
    const scene = document.querySelector('#plants-container');
    
    // Create AR entity
    const plant = document.createElement('a-entity');
    plant.setAttribute('gltf-model', currentPlant);
    plant.setAttribute('scale', '0.5 0.5 0.5');
    plant.setAttribute('gps-entity-place', {
        latitude: 0, // Will be updated by GPS
        longitude: 0
    });
    
    scene.appendChild(plant);
}

// Basic plane detection
document.querySelector('#ar-scene').addEventListener('arjs-plane-detected', (ev) => {
    console.log('Plane detected', ev.detail);
});

// Handle device orientation
window.addEventListener('deviceorientation', (e) => {
    // Add advanced orientation handling if time permits
});

plant.setAttribute('gps-entity-place', {
    latitude: yourLatitude,
    longitude: yourLongitude
});

// Get real coordinates
if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(pos => {
        console.log('GPS:', pos.coords.latitude, pos.coords.longitude);
    });
}
