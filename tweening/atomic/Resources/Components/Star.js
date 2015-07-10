var game = Atomic.game;
var node = self.node;

var TWEEN = require('tween.js');

function start() {
	var sprite2D = node.createComponent("StaticSprite2D");
	sprite2D.sprite = game.getSprite2D("Sprites/star.png");
	sprite2D.blendMode = Atomic.BLEND_ALPHA;
	
    var tween = new TWEEN.Tween({ x: -1, y: -1 })
        .to({ x: 1, y: 1 }, 2000)
        .easing(TWEEN.Easing.Elastic.InOut)
        .onUpdate(function () {
            node.setPosition2D([this.x, this.y]);
        })
        .start(0);
}

function update(timeStep) {	
    TWEEN.update(Atomic.totalTime * 1000);
}
