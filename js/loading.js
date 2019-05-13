var loadingMusic;
Loading = {
   preload: function() {

     

    loadingMusic = game.add.audio('loading')
    loadingMusic.loop = true;
    loadingMusic.volume = .6;
    loadingMusic.play();

    var bg = game.add.sprite(
      game.world.centerX, 
      GameConfig.mobile ? 190 : game.world.centerY,'bg');
        bg.anchor.set(.5);
        bg.fixedToCamera=true;


   game.add.sprite(game.world.centerX,100, 'progressBar')
    .anchor.set(.5)

    var loadingBar = game.add.sprite(game.world.centerX,100, 'loadingBar')
    loadingBar.anchor.set(.5)

    game.add.sprite(game.world.centerX, 200, 'loadText')
    .anchor.set(.5)


    game.load.setPreloadSprite(loadingBar)

     
        
        game.load.audio('welcome', './sfx/Kim Lightyear - Braindead.mp3');
    
        game.load.audio('menuSfx', './sfx/Menu.ogg');
        game.load.audio('menuMusic', './sfx/Next to You.mp3');

     

        
        game.load.spritesheet('buttonA', 'image/controles/flatDark35.png', 80, 80);
        game.load.spritesheet('buttonB', 'image/controles/flatDark36.png', 80, 80);

        game.load.spritesheet('buttonUp', 'image/controles/flatDark02.png', 80, 80);
        game.load.spritesheet('buttonRight', 'image/controles/flatDark05.png', 80, 80);
        game.load.spritesheet('buttonLeft', 'image/controles/flatDark04.png', 80, 80);
        game.load.spritesheet('buttonDown', 'image/controles/flatDark09.png', 80, 80);
        game.load.spritesheet('pause', 'image/controles/flatDark41.png', 80, 80);

        game.load.spritesheet('menuAnimation','image/Mainmenu/shadowTeste2.png',200,48);

        game.load.spritesheet('block','tileset/CercaMetal.png', 50,50);

        game.load.spritesheet('telhadoAlto','tileset/velhoTelhado_alto.png', 50,50);
        game.load.spritesheet('telhado','tileset/velhoTelhado.png', 50,50);

        game.load.spritesheet('ParedeVelha_alto','tileset/ParedeVelha_alto.png', 50,50);
        game.load.spritesheet('ParedeVelha_baixa','tileset/ParedeVelha_baixa.png', 50,50);
        game.load.spritesheet('door1','tileset/PortaVelha.png', 50,50);
        game.load.spritesheet('door2','tileset/portaVelha_azul.png', 50,50);

        game.load.spritesheet('barril','tileset/barril.png', 50,50);
        game.load.spritesheet('conjuntoDeBarril','tileset/conjuntoDeBarril.png', 50,50);


        game.load.spritesheet('ParedeVelha_Janela','tileset/ParedeVelha_Janela.png', 50,50);
        game.load.spritesheet('ParedeVelha_Janela_luz','tileset/ParedeVelha_Janela_luz.png', 50,50);
        game.load.spritesheet('JanelaPiscando_animacao','tileset/JanelaPiscando_animacao.png', 50,50);

        game.load.spritesheet('velhoCercado','tileset/velhoCercado.png', 50,50);

        game.load.spritesheet('player','image/play.png',31.50,48.5);


        game.load.spritesheet('zumbie1','image/zombie05.png', 32,48);
        game.load.spritesheet('zumbie2','image/zombie06.png', 32,48);
        game.load.spritesheet('zumbie3','image/zombie08.png', 32,48);

        game.load.image('settingsBG','image/Settings/SettingsBG.png')

        game.load.image('BTNPLAY','image/Mainmenu/BTNPLAY.png');
        game.load.image('BTNSETTINGS','image/Mainmenu/BTNSETTINGS.png');

        game.load.image('shadowMenu','image/Mainmenu/ButtonBGshadowTeste.png');
        game.load.image('shadowMenu2','image/Mainmenu/shadowTeste2.png');


        game.load.image('pauseBg','image/Pausemenu/PAUSEPRESET.png');
        game.load.image('menuPausedBtn','image/Pausemenu/BTNMENU.png');
        game.load.image('settingPausedBtn','image/Pausemenu/BTNSETTINGS.png');

        game.load.image('noite','image/noite.png');
        game.load.image('dialogue','image/dialogue.png'); 

        game.load.image('background','image/bg.png');
        game.load.image('villagerGround','tileset/ground.png');

    

    
    
    },
    
    create: function() {
    
   
      game.input.addPointer();
      game.input.addPointer();
      game.input.addPointer();
      game.input.addPointer();
      game.input.addPointer();
     
        // chama menu
          setTimeout(function(){
            loadingMusic.stop()
            loadingMusic = game.add.audio('menuMusic')
            loadingMusic.loop = true;
            loadingMusic.volume = .6;
            loadingMusic.play();
            game.state.start('menu')


          },500)
      
    }
}
