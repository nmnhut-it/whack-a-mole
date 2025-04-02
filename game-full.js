// Simplified Whack-a-Mole Game Implementation

// Constants
const GAME_TIME = 60; // Game duration in seconds
const MOLE_COUNT = 6;  // Number of moles/holes in the game
const MOLE_SPAWN_MIN_TIME = 0.8;  // Minimum time between mole spawns (seconds)
const MOLE_SPAWN_MAX_TIME = 2.0;  // Maximum time between mole spawns (seconds)
const MOLE_STAY_MIN_TIME = 0.5;   // Minimum time a mole stays up (seconds)
const MOLE_STAY_MAX_TIME = 1.5;   // Maximum time a mole stays up (seconds)

// Main game layer
var GameLayer = cc.Layer.extend({
    // Game properties
    score: 0,
    timeRemaining: GAME_TIME,
    whales: [],
    holePositions: [
        // These are the hole positions based on the background image
        {x: 146, y: 304}, // top-left
        {x: 512, y: 304}, // top-center
        {x: 878, y: 304}, // top-right
        {x: 146, y: 590}, // bottom-left
        {x: 512, y: 590}, // bottom-center
        {x: 878, y: 590}  // bottom-right
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
        for (var i = 0; i < this.holePositions.length; i++) {
            var position = this.holePositions[i];
            const mappedPosition = cc.p(position.x, cc.winSize.height - position.y);
            position = mappedPosition; 
            // Create a whale sprite
            var whale = new cc.Sprite(res.whale);
            
            // Scale whale to appropriate size
            whale.setScale(Math.random()*(0.25-0.15)+0.15);
            whale.setAnchorPoint(0.5,0.5);
            // Position whale below the hole (hidden initially)
            whale.setPosition(position.x, position.y -50);
            whale.setVisible(false);
            whale.active = false;
            whale.holeIndex = i;
            
            // Add whale to the scene
            this.addChild(whale, 2);
            this.whales.push(whale);
        }
    },
    
    // Initialize UI elements
    initUI: function() {
        // Score display
        var scoreText = new cc.LabelTTF("Score: 0", "Arial", 30);
        scoreText.setPosition(120, this.winSize.height - 400);
        scoreText.setColor(cc.color(0, 0, 0));
        this.addChild(scoreText, 10);
        this.scoreLabel = scoreText;
        
        // Timer display
        var timerText = new cc.LabelTTF("Time: " + GAME_TIME, "Arial", 30);
        timerText.setPosition(this.winSize.width - 120, this.winSize.height  - 400);
        timerText.setColor(cc.color(0, 0, 0));
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
        var hit = false;
        
        // Check each whale
        for (var i = 0; i < this.whales.length; i++) {
            var whale = this.whales[i];
            
            // If whale is active and hit
            if (whale.active && this.isPointInSprite(position, whale)) {
                // Add to score
                this.score += 10;
                this.scoreLabel.setString("Score: " + this.score);
                
                // Create score popup animation
                this.createScorePopup(position, "+10");
                
                // Hide whale immediately
                this.hideWhale(whale);
                
                hit = true;
                break;
            }
        }
        
        return hit;
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
        if (!this.gameActive) return;
        
        // Find all inactive whales
        var availableWhales = this.whales.filter(whale => !whale.active);
        
        // If no whales available, return
        if (availableWhales.length === 0) return;
        
        // Select random whale
        var randomIndex = Math.floor(Math.random() * availableWhales.length);
        var whale = availableWhales[randomIndex];
        var holePosition = this.holePositions[whale.holeIndex];
        
        // Position whale at hole position but below
        whale.setPosition(holePosition.x, holePosition.y -200);
        whale.setVisible(true);
        const scale =whale.getScale(); 
        whale.setScale(0.01); 
        // Animate whale appearing
        var moveUp = cc.moveTo(0.2, cc.p(holePosition.x, holePosition.y-100));
        var scaleTo = cc.scaleTo(0.2,scale); 
        var enableHit = cc.callFunc(function() {
            whale.active = true;
        });
        
        whale.runAction(cc.sequence(cc.spawn(moveUp, scaleTo), enableHit));
        
        // Schedule whale to disappear
        var stayTime = Math.random() * (MOLE_STAY_MAX_TIME - MOLE_STAY_MIN_TIME) + MOLE_STAY_MIN_TIME;
        this.scheduleOnce(function() {
            if (whale.active) {
                this.hideWhale(whale);
            }
        }.bind(this), stayTime);
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
        // Create semi-transparent background
        var dimLayer = new cc.LayerColor(cc.color(0, 0, 0, 150));
        this.addChild(dimLayer, 20);
        
        // Game over text
        var gameOverText = new cc.LabelTTF("Game Over", "Arial Bold", 60);
        gameOverText.setPosition(this.winSize.width / 2, this.winSize.height / 2 + 50);
        gameOverText.setColor(cc.color(255, 50, 50));
        dimLayer.addChild(gameOverText);
        
        // Final score text
        var finalScoreText = new cc.LabelTTF("Final Score: " + this.score, "Arial", 40);
        finalScoreText.setPosition(this.winSize.width / 2, this.winSize.height / 2 - 20);
        finalScoreText.setColor(cc.color(255, 255, 255));
        dimLayer.addChild(finalScoreText);
        
        // Restart button text
        var restartButton = new cc.LabelTTF("Tap to Restart", "Arial", 30);
        restartButton.setPosition(this.winSize.width / 2, this.winSize.height / 2 - 100);
        restartButton.setColor(cc.color(255, 255, 0));
        dimLayer.addChild(restartButton);
        
        // Add touch event to restart
        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            onTouchBegan: function() {
                cc.director.runScene(new GameScene());
                return true;
            }
        }, dimLayer);
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