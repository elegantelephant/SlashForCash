var FruitNinja = FruitNinja || {};

FruitNinja.Bomb = function (game_state, name, position, properties) {
    "use strict";
    FruitNinja.Cuttable.call(this, game_state, name, position, properties);
    
    this.body.setSize(20, 20);
};

FruitNinja.Bomb.prototype = Object.create(FruitNinja.Cuttable.prototype);
FruitNinja.Bomb.prototype.constructor = FruitNinja.Bomb;

FruitNinja.Bomb.prototype.cut = function () {
    "use strict";
    FruitNinja.Cuttable.prototype.cut.call(this);
    // if a bomb is cut, the player lose a life
    this.game_state.prefabs.lives.die();
    this.kill();
};