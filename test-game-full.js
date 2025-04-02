// Test File for Whack-a-Whale Game Functions (Using Real Implementation)
// This file doesn't mock Cocos2d-js but uses the actual game code

// Load this file after cocos2d-js, resource.js, and the game.js file

// Test runner function - call this to run all tests
function runGameTests() {
    console.log("==== Testing Whack-a-Whale Game Functions ====");
    
    try {
        testInitWhales();
        console.log("✓ initWhales() test passed!");
    } catch (error) {
        console.error("✗ initWhales() test failed:", error.message);
    }
    
    try {
        testCheckWhaleHit();
        console.log("✓ checkWhaleHit() test passed!");
    } catch (error) {
        console.error("✗ checkWhaleHit() test failed:", error.message);
    }
    
    try {
        testSpawnWhale();
        console.log("✓ spawnWhale() test passed!");
    } catch (error) {
        console.error("✗ spawnWhale() test failed:", error.message);
    }
    
    try {
        testShowGameOver();
        console.log("✓ showGameOver() test passed!");
    } catch (error) {
        console.error("✗ showGameOver() test failed:", error.message);
    }
    
    console.log("==== Testing completed ====");
}

// Test for whale initialization
function testInitWhales() {
    // TODO: Copy your initWhales() implementation from the game file
 
    // Create a temporary game layer for testing
    const testScene = new cc.Scene();
    const gameLayer = new GameLayer();
    testScene.addChild(gameLayer);
    
    // Validate the whales array
    if (gameLayer.whales.length !== gameLayer.holePositions.length) {
        throw new Error(`Expected ${gameLayer.holePositions.length} whales, but got ${gameLayer.whales.length}`);
    }
    
    for (let i = 0; i < gameLayer.whales.length; i++) {
        const whale = gameLayer.whales[i];
        
        if (whale.active !== false) {
            throw new Error(`Whale ${i} should start inactive`);
        }
        
        if (whale.visible !== false) {
            throw new Error(`Whale ${i} should start invisible`);
        }
        
        if (whale.holeIndex !== i) {
            throw new Error(`Whale ${i} has incorrect hole index: ${whale.holeIndex}`);
        }
        
        const scale = whale.getScale();
        if (scale < 0.15 || scale > 0.25) {
            throw new Error(`Whale ${i} scale (${scale}) is outside the expected range (0.15-0.25)`);
        }
    }
}

// Test for hit detection
function testCheckWhaleHit() {
    // TODO: Copy your checkWhaleHit() implementation from the game file

  
    // Create a temporary game layer for testing
    const testScene = new cc.Scene();
    const gameLayer = new GameLayer();
    testScene.addChild(gameLayer);
    
    // Set up an active whale for testing
    const whale = gameLayer.whales[0];
    const whalePos = gameLayer.holePositions[0];
    whale.setPosition(whalePos.x, whalePos.y);
    whale.active = true;
    whale.visible = true;
    
    // Test hitting the whale
    const initialScore = gameLayer.score;
    const hitSuccess = gameLayer.checkWhaleHit({
        x: whalePos.x,
        y: whalePos.y
    });
    
    if (!hitSuccess) {
        throw new Error("checkWhaleHit() should return true when hitting an active whale");
    }
    
    if (gameLayer.score !== initialScore + 10) {
        throw new Error(`Score should increase by 10 when hitting a whale. Expected ${initialScore + 10}, got ${gameLayer.score}`);
    }
    
    // Test missing all whales
    gameLayer.score = initialScore;
    gameLayer.whales.forEach(w => {
        w.active = false;
        w.visible = false;
    });
    
    const missResult = gameLayer.checkWhaleHit({
        x: 0,
        y: 0
    });
    
    if (missResult !== false) {
        throw new Error("checkWhaleHit() should return false when not hitting any active whale");
    }
    
    if (gameLayer.score !== initialScore) {
        throw new Error("Score should not change when missing all whales");
    }
}

// Test for whale spawning
function testSpawnWhale() {
    // TODO: Copy your spawnWhale() implementation from the game file

   
    // Create a temporary game layer for testing
    const testScene = new cc.Scene();
    const gameLayer = new GameLayer();
    testScene.addChild(gameLayer);
    
    // Make sure all whales are inactive initially
    gameLayer.whales.forEach(whale => {
        whale.active = false;
        whale.visible = false;
    });
    
    // Call the spawn function
    gameLayer.spawnWhale();
    
    // Check if any whale was set to become visible
    // In a real game, some whales might still be in animation
    // so we'll check if at least one is visible or will be soon
    let anyWhaleActivating = false;
    
    for (let i = 0; i < gameLayer.whales.length; i++) {
        const whale = gameLayer.whales[i];
        if (whale.visible || whale.running) {
            anyWhaleActivating = true;
            break;
        }
    }
    
    if (!anyWhaleActivating) {
        throw new Error("No whale was activated or set to activate by spawnWhale()");
    }
}

// Test for game over screen
function testShowGameOver() {
    // TODO: Copy your showGameOver() implementation from the game file
 
    // Create a temporary game layer for testing
    const testScene = new cc.Scene();
    const gameLayer = new GameLayer();
    testScene.addChild(gameLayer);
    gameLayer.score = 150;
    
    // Get initial child count
    const initialChildCount = gameLayer.children ? gameLayer.children.length : 0;
    
    // Call show game over
    gameLayer.showGameOver();
    
    // Check if new children were added (game over screen elements)
    const newChildCount = gameLayer.children ? gameLayer.children.length : 0;
    
    if (newChildCount <= initialChildCount) {
        throw new Error("No game over elements were added to the scene");
    }
    
    // Check if there's at least one LayerColor (the dimming overlay)
    let hasOverlay = false;
    if (gameLayer.children) {
        for (let i = 0; i < gameLayer.children.length; i++) {
            if (gameLayer.children[i] instanceof cc.LayerColor) {
                hasOverlay = true;
                break;
            }
        }
    }
    
    if (!hasOverlay) {
        throw new Error("No overlay layer found in game over screen");
    }
}

// Run all tests when this file is loaded
window.addEventListener('load', function() {
    // Allow Cocos2d-js and game to initialize first
    setTimeout(runGameTests, 1000);
});

// Add a test button to the page
document.addEventListener('DOMContentLoaded', function() {
    const testButton = document.createElement('button');
    testButton.textContent = 'Run Game Tests';
    testButton.style.position = 'fixed';
    testButton.style.top = '10px';
    testButton.style.right = '10px';
    testButton.style.zIndex = '1000';
    testButton.style.padding = '10px';
    testButton.style.backgroundColor = '#4CAF50';
    testButton.style.color = 'white';
    testButton.style.border = 'none';
    testButton.style.borderRadius = '5px';
    testButton.style.cursor = 'pointer';
    
    testButton.addEventListener('click', function() {
        runGameTests();
    });
    
    document.body.appendChild(testButton);
});