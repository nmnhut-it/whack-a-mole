// Whack-a-Whale Game - Workshop Version
// This file contains TODO exercises for participants to complete

// Constants
let GAME_TIME =  60; // Game duration in seconds
let MOLE_COUNT =  6;  // Number of moles/holes in the game
let MOLE_SPAWN_MIN_TIME =  0.8;  // Minimum time between mole spawns (seconds)
let MOLE_SPAWN_MAX_TIME =  2.0;  // Maximum time between mole spawns (seconds)
let MOLE_STAY_MIN_TIME =  0.5;   // Minimum time a mole stays up (seconds)
let MOLE_STAY_MAX_TIME =  1.5;   // Maximum time a mole stays up (seconds)

// Main game layer
var GameLayer = cc.Layer.extend({
    // Game properties
    score: 0,
    timeRemaining: GAME_TIME,
    whales: [],
    holePositions: [
        // These are the hole positions based on the background image
        {x: 146, y:204},  
        {x: 512, y: 204},  
        {x: 878, y: 204},  
        {x: 146, y: 490},  
        {x: 512, y: 490},  
        {x: 878, y: 490}   
    ],
    scoreLabel: null,
    timerLabel: null,
    gameActive: false,
    
    // Initialize the game
    ctor: function() {
        this._super();
        
        // Get the window size
        this.winSize = cc.winSize;
        
        // Initialize the game components
        this.initBackground(); 
        this.initUI();
        
        // Enable touch/mouse events using cc.eventManager
        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            onTouchBegan: this.onTouchBegan.bind(this)
        }, this);
        
        // Schedule game updates
        this.scheduleUpdate();
        
        // Start the game
        this.startGame();
        
        return true;
    },
    
    // Create background
    initBackground: function() {
        var background = new cc.Sprite(res.background);
        background.setPosition(this.winSize.width / 2, this.winSize.height / 2);
        
        // Scale background to fit screen while maintaining aspect ratio
        var scaleX = this.winSize.width / background.width;
        var scaleY = this.winSize.height / background.height;
        var scale = Math.max(scaleX, scaleY);
        background.setScale(scale);
        
        this.addChild(background, 0);
    },
    
    // Initialize whales (our "moles")
    initWhales: function() {
        // TODO EXERCISE 1: Initialize the whale sprites
        // Loop through the hole positions and create whale sprites
        // Each whale should:
        //  - Use the whale image from resources
        //  - Have a random scale between 0.15 and 0.25
        //  - Be positioned at the hole position but hidden initially
        //  - Have active = false
        //  - Store its holeIndex
        //  - Be added to both the scene and the whales array
        
        // YOUR CODE HERE
        
    },
    
    // Initialize UI elements
    initUI: function() {
        // Score display
        var scoreText = new cc.LabelTTF("Score: 0", "Arial", 30);
        scoreText.setPosition(120, this.winSize.height - 400);
        scoreText.setColor(cc.color(255, 255, 255));
        this.addChild(scoreText, 10);
        this.scoreLabel = scoreText;
        
        // Timer display
        var timerText = new cc.LabelTTF("Time: " + GAME_TIME, "Arial", 30);
        timerText.setPosition(this.winSize.width - 120, this.winSize.height  - 400);
        timerText.setColor(cc.color(255, 255, 255));
        this.addChild(timerText, 10);
        this.timerLabel = timerText;
    },
    
    // Touch event handler
    onTouchBegan: function(touch, event) {
        if (!this.gameActive) return true;
        
        var touchLocation = touch.getLocation();
        this.checkWhaleHit(touchLocation);
        
        return true;
    },
    
    // Check if a whale was hit
    checkWhaleHit: function(position) {
        // TODO EXERCISE 2: Implement whale hit detection
        // This function should:
        //  - Check each whale to see if it was hit by the touch position
        //  - If a whale is hit AND active, increase score and show animation
        //  - Call hideWhale() to hide the whale that was hit
        //  - Increase score by 10 if the whale is hit 
        //  - Return true if a whale was hit, false otherwise
        
        // YOUR CODE HERE
        
        return false; // Change this when implementing the function
    },
    
    // Check if a point is inside a sprite
    isPointInSprite: function(point, sprite) {
        var rect = sprite.getBoundingBox();
        return cc.rectContainsPoint(rect, point);
    },
    
    // Create score popup animation
    createScorePopup: function(position, scoreText) {
        var popup = new cc.LabelTTF(scoreText, "Arial", 24);
        popup.setPosition(position);
        popup.setColor(cc.color(255, 255, 0));
        this.addChild(popup, 10);
        
        // Create popup animation
        var moveUp = cc.moveBy(1, cc.p(0, 50));
        var fadeOut = cc.fadeOut(1);
        var remove = cc.callFunc(function() {
            popup.removeFromParent();
        });
        
        popup.runAction(cc.sequence(cc.spawn(moveUp, fadeOut), remove));
    },
    
    // Start the game
    startGame: function() {
        this.gameActive = true;
        this.score = 0;
        this.timeRemaining = GAME_TIME;
        
        // Reset UI
        this.scoreLabel.setString("Score: 0");
        this.timerLabel.setString("Time: " + this.timeRemaining);
        
        // Schedule timer
        this.schedule(this.updateTimer, 1);
        
        // Schedule whale spawning
        this.scheduleWhaleSpawn();
    },
    
    // Schedule next whale to appear
    scheduleWhaleSpawn: function() {
        if (!this.gameActive) return;
        
        // Schedule next whale after random time
        var delay = Math.random() * (MOLE_SPAWN_MAX_TIME - MOLE_SPAWN_MIN_TIME) + MOLE_SPAWN_MIN_TIME;
        this.scheduleOnce(function() {
            this.spawnWhale();
            this.scheduleWhaleSpawn();
        }.bind(this), delay);
    },
    
    // Update game timer
    updateTimer: function(dt) {
        this.timeRemaining--;
        this.timerLabel.setString("Time: " + this.timeRemaining);
        
        // End game when time runs out
        if (this.timeRemaining <= 0) {
            this.endGame();
        }
    },
    
    // Make a whale appear
    spawnWhale: function() {
        // TODO EXERCISE 3: Implement the whale spawning logic
        // This function should:
        //  - Check if the game is active
        //  - Find available (inactive) whales
        //  - Select a random whale to appear
        //  - Position the whale and make it visible
        //  - Animate the whale appearing (moving up and scaling)
        //  - Set the whale to active state when animation completes
        //  - Schedule the whale to disappear after a random time
        
        // YOUR CODE HERE
        
    },
    
    // Hide a whale
    hideWhale: function(whale) {
        // If whale is already hidden, return
        if (!whale.visible) return;
        
        // Mark whale as inactive
        whale.active = false;
        
        // Get hole position
        var holePosition = this.holePositions[whale.holeIndex];
        
        // Animate whale hiding
        var moveDown = cc.moveTo(0.2, cc.p(holePosition.x, holePosition.y - 100));
        var hide = cc.callFunc(function() {
            whale.setVisible(false);
        });
        
        whale.runAction(cc.sequence(moveDown, hide));
    },
    
    // End the game
    endGame: function() {
        this.gameActive = false;
        
        // Unschedule timers
        this.unschedule(this.updateTimer);
        
        // Hide all whales
        for (var i = 0; i < this.whales.length; i++) {
            this.whales[i].setVisible(false);
            this.whales[i].active = false;
        }
        
        // Display game over screen
        this.showGameOver();
    },
    
    // Show game over screen
    showGameOver: function() {
        // TODO EXERCISE 4: Implement the game over screen
        // This function should:
        //  - Create a semi-transparent overlay
        //  - Show "Game Over" text
        //  - Display the final score
        //  - Add a restart button or text
        //  - Add a touch event listener to restart the game
        
        // YOUR CODE HERE
        
    },
    
    // Update method called every frame
    update: function(dt) {
        // Additional per-frame logic can go here
    }
});

// Game scene
var GameScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new GameLayer();
        this.addChild(layer);
        layer.initWhales();
    }
});

// Make sure the game runs
window.onload = function() {
    cc.game.onStart = function() {
        // Configure the game
        cc.view.adjustViewPort(true);
        cc.view.setDesignResolutionSize(1024, 1024, cc.ResolutionPolicy.SHOW_ALL);
        cc.view.resizeWithBrowserSize(true);
        
        // Load game resources
        cc.LoaderScene.preload(g_resources, function() {
            // Create and run the game scene
            cc.director.runScene(new GameScene());
        }, this);
    };
    
    // Start the game
    cc.game.run();
};