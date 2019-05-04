
function porcentagem(percent,valor){

    var resultado = (percent / 100 ) * valor;

    return resultado
}

var GameConfig ={
    height : 600,
    width : 960,
    titleFont :  '60px',
    textFont :  '40px'
    
}

if(window.innerHeight<=360 && window.innerWidth<=740){

    GameConfig.height =window.innerHeight;
    GameConfig.width =  window.innerWidth ;
    GameConfig.titleFont = '60px'
    GameConfig.textFont ='40px'

}

var game = new Phaser.Game(GameConfig.width, GameConfig.height, Phaser.CANVAS, 'gamecontainer');


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
