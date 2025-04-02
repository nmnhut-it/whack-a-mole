// Workshop Test Template for Whack-a-Whale Game
// TODO: Implement your own tests for each game function

// Run all tests by clicking the test button or calling runGameTests()
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

// TODO: Implement a test for the initWhales() function
// This function should verify that:
// - The correct number of whales are created
// - Each whale has the correct properties (active, visible, scale, etc.)
// - The whales are correctly positioned
function testInitWhales() {
    // YOUR TEST CODE HERE
    throw new Error("Test not implemented"); 
    
    
    
    
}

// TODO: Implement a test for the checkWhaleHit() function
// This function should verify that:
// - Hitting an active whale returns true and increases score
// - Missing all whales returns false and doesn't change score
// - The hit whale becomes inactive
function testCheckWhaleHit() {
    // YOUR TEST CODE HERE
    throw new Error("Test not implemented"); 
    
    
    
    
}

// TODO: Implement a test for the spawnWhale() function
// This function should verify that:
// - An inactive whale is selected and made visible
// - The whale is positioned correctly
// - Animation or movement is applied to the whale
function testSpawnWhale() {
    // YOUR TEST CODE HERE
    throw new Error("Test not implemented"); 
    
    
    
    
}

// TODO: Implement a test for the showGameOver() function
// This function should verify that:
// - A game over screen is displayed
// - The final score is shown
// - A restart option is available
function testShowGameOver() {
    // YOUR TEST CODE HERE
    throw new Error("Test not implemented"); 
    
    
    
    
}

// Helper function to create a test environment
function createTestEnvironment() {
    const testScene = new cc.Scene();
    const gameLayer = new GameLayer();
    testScene.addChild(gameLayer);
    return gameLayer;
}

// Add a test button to the page when loaded
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