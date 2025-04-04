# 🐳 Whack-a-Whale Game Workshop 🐳

Welcome to the Whack-a-Whale game workshop, where animal rights activists are definitely NOT invited! In this workshop, you'll implement a simple game using the Cocos2d-js framework, virtually bopping innocent cartoon whales on the head for your entertainment. It's like the classic "Whack-a-Mole" arcade game, but with adorable cetaceans that probably had families, you monster.

## Workshop Overview: The Porpoise of This Exercise

This workshop is designed to help you learn:
- Game development concepts using Cocos2d-js (because apparently JavaScript wasn't confusing enough already)
- Implementation of core game mechanics (a.k.a. how to programmatically abuse digital whales)
- Test-driven development for games (so you can ensure your whale-bopping meets quality standards)
- How to leverage AI (LLMs) to assist in coding tasks (because why do work yourself?)

## Project Structure: The Blowhole Architecture

The project consists of the following files:

- `game.js` - Where you'll implement the whale harassment simulator (contains TODOs)
- `test-game.js` - Where you'll write tests to ensure optimal whale-bopping efficiency
- `index.html` - Main game page (as exciting as it sounds)
- `test-index.html` - Test runner page (even less exciting than index.html)
- `resource.js` - Resource management for the game (the file equivalent of the office supplies coordinator)
- `run.js` - A simple Node.js server to run the game (it had one job)

## Your Tasks: The Blubbery Challenge

You need to implement four main functions in `game.js` (no pressure, just the entire game depends on you):

1. `initWhales()` - Summon innocent whale sprites from the digital ocean depths
2. `checkWhaleHit()` - Detect when a player mercilessly taps/clicks on a defenseless whale
3. `spawnWhale()` - Force whales to surface against their will
4. `showGameOver()` - Display the final whale victim count (also known as "score")

For each function you implement, you should also write tests in `test-game.js` because nothing says "fun game development" like unit testing!

## Getting Started: Diving In

### Setting Up (Don't Hold Your Breath)

1. Clone this repository to your local machine (the digital equivalent of "please take this problem home with you")
2. Install Node.js if you haven't already (another dependency, yay!)
3. Run `npm install` to install dependencies (watch as your hard drive fills with node_modules)
4. Start the server with `node run.js` (cross fingers)
5. Open your browser to `http://localhost:3000` to see the game (or a blank screen if something went wrong)
6. Open `http://localhost:3000/test-index.html` to run tests (and face the harsh reality of your code quality)

### Implementation Steps (Whale Deployment Protocol)

1. Open `game.js` in your code editor (any editor will do, but VS Code users will somehow mention they use VS Code)
2. Look for `// TODO EXERCISE` comments that mark where you need to implement code (they're basically passive-aggressive sticky notes)
3. Implement each function one by one (no multitasking allowed; we're not octopi)
4. After implementing a function, write its corresponding test in `test-game.js` (because one painful task deserves another)
5. Run the test page to verify your implementation works correctly (or to cry, depending on results)

## Working with LLMs (Letting the Language Model Do Your Job)

This workshop encourages you to use Large Language Models (LLMs) like Claude to help with your implementation. Here's how to effectively outsource your thinking:

### How to Ask LLMs for Help (Without Sounding Desperate)

1. **Understand the task first**: Read the TODO comments and understand what the function should do. (Yes, reading is required, sorry!)

2. **Ask for specific guidance**: Instead of "HALP PLZ CODE BROKE", try:
   - "Can you explain how to detect collision between a touch point and a sprite in Cocos2d-js? My finger's getting tired from missing these whales."
   - "What's a good way to implement the spawn animation for the whales? I want them to look surprised and betrayed."
   - "How would I structure a test for the checkWhaleHit function without actually harming real whales?"

3. **Share relevant context**: Include the TODO comment and surrounding code to help the AI understand what you're working with. AI isn't psychic... yet.

4. **Iterate and refine**: Get a solution, try it out, then refine with more specific questions if needed. Like "Why isn't this working?" or "Why am I doing a game development workshop when I could be watching