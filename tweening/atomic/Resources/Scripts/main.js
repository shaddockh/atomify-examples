// This script is the main entry point of the game
require("AtomicGame");

// Register the vendor scripts.  This will allow them to be accessible through the Atomic require calls
Atomic.script('vendor');

Atomic.game.init(start, update);
Atomic.totalTime = 0;

// called at the start of play
function start() {
    var game = Atomic.game;

    // create a 2D scene
    game.createScene2D();

    // Add the star component
    var node = game.scene.createChild("Star");
    node.createJSComponent("Star");
}

// called per frame
function update(timeStep) {
    Atomic.totalTime += timeStep;
}
