bootState ={
    preload: function(){
        game.load.audio('loading','./sfx/menu/Loading.wav')

        game.load.image('loadText', 'image/Loading/Loading icon.png');
        game.load.image('bg', 'image/Loading/Background2.png');
        game.load.image('progressBar', 'image/Loading/LoadingBarBG.png');
        game.load.image('loadingBar', 'image/Loading/LoadingBar.png');

        

    },
    create: function(){
       // inicia carregamento

    game.state.start("LoadingState")

    }

}