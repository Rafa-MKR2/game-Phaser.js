var gameMusic;
Loading = {
   preload: function() {

     

    gameMusic = game.add.audio('loading')
    gameMusic.loop = true;
    gameMusic.volume = .6;
    gameMusic.play();

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
        game.load.audio('portaOpen', './sfx/qubodup-DoorClose03.ogg');
        game.load.audio('bauOpen', './sfx/qubodup-DoorClose01.ogg');

        game.load.audio('relogioSfx', './sfx/clock.ogg');

        // Controle Mobile  
        game.load.spritesheet('buttonA', 'image/controles/flatDark35.png', 80, 80);
        game.load.spritesheet('buttonB', 'image/controles/flatDark36.png', 80, 80);
        game.load.spritesheet('buttonUp', 'image/controles/flatDark02.png', 80, 80);
        game.load.spritesheet('buttonRight', 'image/controles/flatDark05.png', 80, 80);
        game.load.spritesheet('buttonLeft', 'image/controles/flatDark04.png', 80, 80);
        game.load.spritesheet('buttonDown', 'image/controles/flatDark09.png', 80, 80);
        game.load.spritesheet('pause', 'image/controles/flatDark41.png', 80, 80);

        game.load.spritesheet('menuAnimation','image/Mainmenu/shadowTeste2.png',200,48);
        game.load.spritesheet('saveBook','tileset/saveBook.png',33.4,40);
        game.load.spritesheet('block','tileset/CercaMetal.png', 50,50);
        game.load.spritesheet('wall','tileset/muroVelho.png', 50,50);

        //casa tileset home sala 1  
        game.load.spritesheet('paredeMadeira_Interior','tileset/home/paredeMadeira.png', 50,50);
        game.load.spritesheet('paredeMadeira_curvaEsquerda','tileset/home/paredeMadeira_curvaEsquerda.png', 50,50);
        game.load.spritesheet('paredeMadeira_curvaDireita','tileset/home/paredeMadeira_curvaDireita.png', 50,50);
        game.load.spritesheet('paredeMadeira_Esquerda','tileset/home/paredeMadeira_Esquerda.png', 50,50);
        game.load.spritesheet('paredeMadeira_Direita','tileset/home/paredeMadeira_Direita.png', 50,50)
        game.load.spritesheet('paredeMadeira_curvaDireitaBaixa','tileset/home/paredeMadeira_curvaDireitaBaixa.png', 50,50);
        game.load.spritesheet('paredeMadeira_curvaEsquerdaBaixa','tileset/home/paredeMadeira_curvaesquerdaBaixa.png', 50,50);
        game.load.spritesheet('paredeMadeira_baixar','tileset/home/paredeMadeira_baixar.png', 50,50);
        game.load.spritesheet('escada2Andar','tileset/home/escada2Andar.png', 50,50);
        
        //casa tileset home moveis 1  
        game.load.spritesheet('Balcao','tileset/home/Balcao.png', 50,50);
        game.load.spritesheet('balcaoLateralEsquerdo','tileset/home/balcaoLateral.png', 50,50);
        game.load.spritesheet('balcaoLateralDireito','tileset/home/balcaoLateralDireito.png', 50,50);
        game.load.spritesheet('balcaoVerticalEsquerdo','tileset/home/balcaoVerticalEsquerdo.png', 50,50);
        game.load.spritesheet('balcaoVerticalDireito','tileset/home/balcaoVerticalDireito.png', 50,50);
        game.load.spritesheet('relogioDeParede','tileset/home/relogioDeparede.png', 33,40);
        game.load.spritesheet('barrilMovel','tileset/home/barrilMovel.png', 50,50);
        game.load.spritesheet('grupoDeArmario','tileset/home/grupoDeArmario.png', 100,65);
        game.load.spritesheet('saco_Movel','tileset/home/saco_Movel.png', 50,50);
        game.load.spritesheet('caixote_movel','tileset/home/caixote_movel.png', 50,65);
        game.load.spritesheet('cadeira','tileset/home/cadeira.png', 50,65);
        game.load.spritesheet('cortinaEsquerda','tileset/home/cortinaEsquerda.png', 50,100);
        game.load.spritesheet('cortinaDireita','tileset/home/cortinaDireita.png', 50,100);
       
        game.load.spritesheet('cortinaEstendida','tileset/home/cortinaEstendida.png', 200,200);

        game.load.spritesheet('mesaComum','tileset/home/mesaComum.png', 50,100);


        // NPC 
        game.load.spritesheet('npc_Balcao','tileset/home/npc_Balcao.png', 33,50);


        game.load.spritesheet('telhadoAlto','tileset/velhoTelhado_alto.png', 50,50);
        game.load.spritesheet('telhado','tileset/velhoTelhado.png', 50,50);
        game.load.spritesheet('chamine1','tileset/chamine1.png', 50,50);
        game.load.spritesheet('ParedeVelha_alto','tileset/ParedeVelha_alto.png', 50,50);
        game.load.spritesheet('ParedeVelha_baixa','tileset/ParedeVelha_baixa.png', 50,50);
        game.load.spritesheet('door1','tileset/PortaVelha.png', 50,50);
        game.load.spritesheet('door2','tileset/portaVelha_azul.png', 50,50);
        game.load.spritesheet('barril','tileset/barril.png', 50,50);
        game.load.spritesheet('conjuntoDeBarril','tileset/conjuntoDeBarril.png', 50,50);
        game.load.spritesheet('ParedeVelha_Janela','tileset/ParedeVelha_Janela.png', 50,50);
        game.load.spritesheet('ParedeVelha_Janela_luz','tileset/ParedeVelha_Janela_luz.png', 50,50);
        game.load.spritesheet('JanelaPiscando_animacao','tileset/JanelaPiscando_animacao.png', 50,50);
        game.load.spritesheet('liveBau','tileset/liveBau.png', 50,50);

        game.load.spritesheet('velhoCercado','tileset/velhoCercado.png', 50,50);
        game.load.spritesheet('player','tileset/player.png',31.50,48.4);
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
        game.load.image('dialogue','tileset/dialogue.png'); 
        game.load.image('background','image/bg.png');
        game.load.image('villagerGround','tileset/ground.png');
        game.load.image('homeGround','tileset/home/home1_ground.png');

    },
    
    create: function() {
    
   
      game.input.addPointer();
      game.input.addPointer();
      game.input.addPointer();
      game.input.addPointer();
      game.input.addPointer();
     
        // chama menu
          setTimeout(function(){
            gameMusic.stop()
            gameMusic = game.add.audio('menuMusic')
            gameMusic.loop = true;
            gameMusic.volume = .6;
            gameMusic.play();
            game.state.start('menu')


          },500)
      
    }
}
