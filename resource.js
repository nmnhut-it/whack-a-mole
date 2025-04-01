// Simplified resource.js for Whack-a-Mole game

// Define resource directories
var res = {
    // Background image
    background: "resource/background.png",
    
    // Whale (used as the mole)
    whale: "resource/whale.png"
};

// Combine all resources into one array for preloading
var g_resources = [];

// Add resources to the preload array
for (var i in res) {
    g_resources.push(res[i]);
}

// Function to check if a resource exists
function resourceExists(resourcePath) {
    var xhr = new XMLHttpRequest();
    xhr.open('HEAD', resourcePath, false);
    try {
        xhr.send();
        return xhr.status != 404;
    } catch (e) {
        return false;
    }
}