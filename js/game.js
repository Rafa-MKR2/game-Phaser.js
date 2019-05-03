
console.log(window.innerHeight)


var game = new Phaser.Game(960, 600, Phaser.CANVAS, 'gamecontainer');

// musica golbal
var music;

document.querySelector('#gamecontainer').style.cursor = 'crosshair';

    game.state.add('LoadingState',Loading)
    game.state.add('menu',Menu)
    game.state.add('recordes',Recordes)
    game.state.add('options',Options)

     game.state.add('stage1',Stage1)

    // inicia carregamento
    game.state.start("LoadingState")
