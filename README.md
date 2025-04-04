# 🐳 Whack-a-Whale Game Workshop 🐳

Welcome to the Whack-a-Whale game workshop, where animal rights activists are definitely NOT invited! In this workshop, you'll implement a simple game using the Cocos2d-js framework, virtually bopping innocent cartoon whales on the head for your entertainment. It's like the classic "Whack-a-Mole" arcade game, but with adorable cetaceans that probably had families, you monster.

## Workshop Overview: The Porpoise of This Exercise

This workshop is designed to help you learn:
- Game development concepts using Cocos2d-js (because apparently JavaScript wasn't confusing enough already)
- Implementation of core game mechanics (a.k.a. how to programmatically abuse digital whales)
- Test-driven development for games (so you can ensure your whale-bopping meets quality standards)
- How to strategically use AI (LLMs) as a learning tool rather than a solution provider

### Advanced Learning Objectives:
- Learn to break problems down into conceptual parts before asking AI for help
- Practice implementing the same functionality in multiple ways to compare approaches
- Develop the skill of extracting useful information from AI without getting complete solutions
- Learn to critically evaluate and improve upon AI-suggested code
- Understand how to use AI to debug and refine your own implementations

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

But wait! There's more! To make this properly challenging:

- For at least one function, you must implement it without directly asking the AI for the complete solution
- For at least one function, you must implement TWO different approaches and compare them
- You must introduce at least one enhancement or feature that wasn't in the original requirements
- Your test code must check edge cases, not just the happy path

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
3. **Plan before coding**: Sketch your implementation strategy on paper or in comments before writing actual code. This will help you identify the concepts you need to learn.
4. **Implement in small chunks**: Don't write the entire function at once. Write 3-5 lines, test them, then add more.
5. **Introduce intentional challenges**: For at least one function, try implementing it with an additional constraint (e.g., "without using a loop" or "using recursion") - even if you ultimately change it back later.
6. After implementing a function, write its corresponding test in `test-game.js` (because one painful task deserves another)
7. **Refactor after it works**: Once you have a working implementation, try to improve it before moving on.
8. Run the test page to verify your implementation works correctly (or to cry, depending on results)

## Working with LLMs (The Art of AI Wrangling)

This workshop challenges you to use Large Language Models (LLMs) like Claude *strategically* to help with your implementation. The goal isn't to get a complete solution in one go, but to learn how to extract knowledge piece by piece to build your understanding.

### How to Ask LLMs for Help (The Hard Way)

1. **Break down the problem first**: Before asking anything, decompose the task into smaller conceptual pieces. For the `initWhales()` function, separate concerns like: sprite creation, positioning, scaling, and property initialization.

2. **Ask conceptual questions before code questions**: Don't ask for complete implementations. Instead:
   - "What properties should a sprite object have in Cocos2d-js?"
   - "How does the anchor point affect sprite positioning in Cocos2d-js?"
   - "What's the difference between setVisible(false) and opacity = 0 for hiding sprites?"

3. **Piecemeal approach**: Get partial information, try to implement yourself, then ask follow-up questions about specific issues:
   - First: "How do I create a basic sprite in Cocos2d-js?"
   - Then implement that part yourself
   - Later: "Now how do I properly add this sprite as a child to the scene?"

4. **Challenge the AI responses**: If the AI gives you a complete solution, actively look for potential issues:
   - "Could this approach cause performance problems with many sprites?"
   - "Is there a cleaner way to handle the random scaling?"
   - "Would this implementation break if the hole positions change?"

### AI Strategy Examples (The Struggle is Real)

#### Wrong Approach (Too Easy):
```
Please implement the initWhales() function for my Whack-a-Mole game.
```

#### Better Approach (Learning-Focused):

First query:
```
I'm working with Cocos2d-js. What exactly is the purpose of the setAnchorPoint() method for sprites, and how does it affect positioning?
```

Follow-up:
```
When creating multiple sprites that need to be at specific positions but initially hidden, what's the best practice in Cocos2d-js? Should I create them all at once or dynamically?
```

Next:
```
For a sprite that needs to animate in and out of a position, would it be better to use setVisible() or opacity changes? How might this affect hit detection?
```

Finally:
```
I'm having trouble with my random scale implementation. I want scales between 0.15 and 0.25, but I'm getting the error: "TypeError: whale.setScale is not a function". Here's my current code:

var scale = Math.random() * 0.1 + 0.15;
whale.setScale = scale;

What am I doing wrong?
```

### Testing Strategy (Making AI Work for You)

First ask about testing concepts:
```
What are the key components I should test in a game object that appears, can be interacted with, and then disappears? I'm not asking for code yet, just the testing strategy.
```

Then get more specific:
```
For testing an animation sequence in Cocos2d-js, how can I verify that actions are being applied correctly? Are there ways to check if a specific action is scheduled on an object?
```

Finally, address specific issues:
```
I'm trying to test my whale.active flag but getting inconsistent results. Sometimes the test passes, sometimes it fails. Could this be related to animation timing? Here's my test code:

// [your problematic test code here]
```

## Testing Your Implementation (Finding Ways to Blame the Framework)

1. After implementing a function in `game.js`, open `test-game.js`
2. Implement the corresponding test function (write code to test code you wrote—it's code-ception!)
3. Open `test-index.html` in your browser (Chrome users will somehow mention they use Chrome)
4. Click on the specific test button or "Run All Tests" (also known as the "Moment of Truth" button)
5. Check the console for test results (and prepare excuses for failures)

Tests should verify that:
- Whales are correctly initialized (not traumatized)
- The hit detection works properly (whale abuse is accurately recorded)
- Whales spawn at the correct positions with proper animations (they look cute before their doom)
- The game over screen displays correctly (whale therapy hotline not included)

## Reference Solutions (Cheating, But We Won't Tell)

If you get stuck, you can peek at the reference implementations:
- `game-full.js` - Complete implementation of the game (a.k.a. "what yours should look like")
- `test-game-full.js` - Complete test suite (more intimidating code)
- `test-index-full.html` - Test page for the complete implementation (in case you break yours)

However, try to implement your own solution first before looking at the reference! Your self-esteem will thank you.

## Tips for Success (or Mitigating Disaster)

1. **Read the existing code**: Understanding the structure will help you write compatible code. Or just stare at it until the panic sets in.
2. **Implement incrementally**: Get one function working before moving to the next. This isn't a buffet—you can't take everything at once.
3. **Test frequently**: Run tests after each implementation to catch issues early. Or to confirm your growing suspicion that you're not cut out for this.
4. **Use the browser console**: Add console.log() statements to debug your code. Write enough and it looks like you're being productive!
5. **AI is a tool, not a solution provider**: Think of the AI as a quirky, sometimes confused colleague who knows a lot about programming concepts but hasn't seen your specific project. You need to guide it, challenge it, and piece together its knowledge to create your own solution.
6. **Introduce deliberate constraints**: When asking AI for help, try giving yourself artificial limitations: "I want to implement this without using a for-loop" or "How would this work if I couldn't use the sprite's position directly?" These constraints force you to understand the underlying concepts.
7. **Debug before asking**: When something doesn't work, spend at least 10 minutes trying to debug it yourself before asking the AI. Then share both your code AND your debugging process.

## Troubleshooting (The "It's Not Working!" Section)

If you encounter issues:
- Check the browser console for error messages (the red text is especially important!)
- Verify that all required resources are loading properly (did you break something already?)
- Compare your implementation with the reference implementation to spot differences (like a really depressing game of spot-the-difference)
- Make sure your test code is correctly identifying the components (it's awkward when your test is what needs testing)
- Try turning it off and on again (the universal IT solution)

## Enjoy! (That's an Order)

Game development is creative and fun! Don't be afraid to experiment with the game mechanics or visuals once you've completed the basic implementation. You might want to try:
- Adding sound effects (sad whale noises?)
- Creating different types of whales (blue whales are worth more points because they're bigger targets)
- Implementing difficulty levels (from "casual whale bopper" to "cetacean nightmare")
- Adding a combo system for consecutive hits (whale families, perhaps?)

Remember, in this game no real whales are harmed, just the self-esteem of developers trying to make it work!

Happy coding, and may your whales be ever boppable! 🐳👆