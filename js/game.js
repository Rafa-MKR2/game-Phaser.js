
function porcentagem(percent,valor){
 
    var resultado = (percent / 100 ) * valor;

    return resultado
}

var GameConfig ={
    height : 600,
    width : 960,
    titleFont :  '60px',
    textFont :  '40px',

    mobile  : false
    
}



if(window.innerHeight<=360 && window.innerWidth<=740  ||
   window.innerHeight<=360 && window.innerWidth<=640  || 
   window.innerHeight<=384 && window.innerWidth<=640  ||
   window.innerHeight<=279 && window.innerWidth<=640  ||
   window.innerHeight<=427 && window.innerWidth<=980 ||
   window.innerHeight<=414 && window.innerWidth<=736){

    GameConfig.height =window.innerHeight;
    GameConfig.width =  window.innerWidth;
    GameConfig.mobile = true;
}

var game = new Phaser.Game(GameConfig.width, GameConfig.height, Phaser.CANVAS, 'gamecontainer');

document.querySelector('#gamecontainer').style.cursor = 'crosshair';

    game.state.add('boot',bootState)
    game.state.add('LoadingState',Loading)
    game.state.add('menu',Menu)
    game.state.add('recordes',Recordes)
    game.state.add('options',Options)

    game.state.add('stage1',Stage1)

    // inicia carregamento
    game.state.start("boot")
