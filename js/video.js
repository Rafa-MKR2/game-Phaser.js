
var button;
var sprite;

function create() {

    sprite = game.add.sprite(game.world.centerX, game.world.centerY, 'dragon');
    sprite.anchor.set(0.5);

    game.stage.backgroundColor = '#000';

    // Stretch to fill
    game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;

    // Keep original size
    // game.scale.fullScreenScaleMode = Phaser.ScaleManager.NO_SCALE;

    // Maintain aspect ratio
    // game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;

    button = game.add.button(game.world.centerX - 95, 500, 'button', actionOnClick, this, 2, 1, 0);
    button.visible = false;

    game.scale.onFullScreenChange.add(onFullScreenChange, this);

    game.input.onDown.add(gofull, this);

}

function onFullScreenChange(scale) {

    if (scale.isFullScreen)
    {
        button.visible = true;
    }
    else
    {
        button.visible = false;
    }

}

function gofull() {

    game.scale.startFullScreen();

}

function actionOnClick () {

    sprite.tint = Math.random() * 0xFFFFFF;

}

function update() {

}

function render () {

    if (game.scale.isFullScreen)
    {
        game.debug.text('ESC to leave fullscreen', 270, 16);
    }
    else
    {
        game.debug.text('Click / Tap to go fullscreen', 270, 16);
    }

}