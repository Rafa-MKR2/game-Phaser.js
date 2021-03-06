
function porcentagem(percent,valor){
 
    var resultado = (percent / 100 ) * valor;

    return resultado
}



var GameConfig ={
    height : 600,
    width : 800,
    titleFont :  '60px superstar',
    textFont :  '40px superstar',

    mobile  : false
    
}



if(window.innerHeight<=360 && window.innerWidth<=740  ||
   window.innerHeight<=360 && window.innerWidth<=640  || 
   window.innerHeight<=384 && window.innerWidth<=640  ||
   window.innerHeight<=427 && window.innerWidth<=980  ||
   window.innerHeight<=414 && window.innerWidth<=736  ||
   window.innerHeight<=540 && window.innerWidth<=975  ||
   window.innerHeight<=970 && window.innerWidth<=540){

    document.querySelector("#gamecontainer").style.padding = "0px"; 
    document.querySelector("#gamecontainer").style.marginLeft = "0px"; 

    GameConfig.height = window.innerHeight;
    GameConfig.width =  window.innerWidth;
    GameConfig.textFont = '20px superstar'
    GameConfig.mobile = true;
}

var game = new Phaser.Game(GameConfig.width, GameConfig.height, Phaser.CANVAS, 'gamecontainer');


    game.state.add('boot',bootState)
    game.state.add('LoadingState',Loading)
    game.state.add('menu',Menu)
    game.state.add('recordes',Recordes)
    game.state.add('options',Options)

    game.state.add('stage1',Stage1)

    game.state.add('casa1',Casa1)


    // inicia carregamento
    game.state.start("boot")
