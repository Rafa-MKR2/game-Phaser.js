
var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'gamecontainer');

var music;

    document.querySelector('#gamecontainer').style.cursor = 'crosshair';

    game.state.add('LoadingState',Loading)
    game.state.add('menu',Menu)

    game.state.add('stage1',Stage1)

    // inicia carregamento
    game.state.start("LoadingState")
