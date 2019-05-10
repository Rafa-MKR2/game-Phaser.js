var loadingMusic;
Loading = {
   preload: function() {

     

    loadingMusic = game.add.audio('loading')
    loadingMusic.loop = true;
    loadingMusic.volume = .6;
    loadingMusic.play();


    game.add.sprite(game.world.centerX,190,'bg')
    .anchor.set(.5)

   game.add.sprite(game.world.centerX,100, 'progressBar')
    .anchor.set(.5)

    var loadingBar = game.add.sprite(game.world.centerX,100, 'loadingBar')
    loadingBar.anchor.set(.5)

    game.add.sprite(game.world.centerX, 200, 'loadText')
    .anchor.set(.5)


    game.load.setPreloadSprite(loadingBar)

     
        
        game.load.audio('welcome', './sfx/Kim Lightyear - Braindead.mp3');
        game.load.audio('oneshot', './sfx/oneShot.mp3');
        game.load.audio('reload', './sfx/9mm Clip Load.mp3');

     
        game.load.audio('explosionStart', './sfx/synthetic_explosion_1.mp3');

        
        game.load.spritesheet('buttonA', 'image/controles/flatDark35.png', 80, 80);
        game.load.spritesheet('buttonB', 'image/controles/flatDark36.png', 80, 80);

        game.load.spritesheet('buttonUp', 'image/controles/flatDark02.png', 80, 80);
        game.load.spritesheet('buttonRight', 'image/controles/flatDark05.png', 80, 80);
        game.load.spritesheet('buttonLeft', 'image/controles/flatDark04.png', 80, 80);
        game.load.spritesheet('buttonDown', 'image/controles/flatDark09.png', 80, 80);

        game.load.spritesheet('menuAnimation','image/Mainmenu/shadowTeste2.png',200,48);

        game.load.spritesheet('block','image/block.png', 50,50);

        game.load.spritesheet('telhado','image/telhado.png', 50,50);
        game.load.spritesheet('paredeAlta','image/parede.png', 50,50);
        game.load.spritesheet('paredeMadeira','image/paredeMadeira.png', 50,50);
        game.load.spritesheet('door1','image/door1.png', 50,50);
        game.load.spritesheet('ammo','image/ammo.png', 48,28);

        game.load.spritesheet('player','image/play.png',31.50,48.5);

        game.load.spritesheet('blood','image/blood.png',57,57);

        game.load.spritesheet('zumbie1','image/zombie05.png', 32,48);
        game.load.spritesheet('zumbie2','image/zombie06.png', 32,48);
        game.load.spritesheet('zumbie3','image/zombie08.png', 32,48);

        game.load.image('settingsBG','image/Settings/SettingsBG.png')

        game.load.image('BTNPLAY','image/Mainmenu/BTNPLAY.png');
        game.load.image('BTNSETTINGS','image/Mainmenu/BTNSETTINGS.png');

        game.load.image('shadowMenu','image/Mainmenu/ButtonBGshadowTeste.png');
        game.load.image('shadowMenu2','image/Mainmenu/shadowTeste2.png');

        game.load.image('noite','image/noite.png');

        game.load.image('background','image/bg.png');
        game.load.image('bullet', 'image/bullet.png');
        game.load.image('villagerGround','image/vilageground.png');

    

    
    
    },
    
    create: function() {
    
   
     
        // chama menu
          setTimeout(function(){
            game.state.start("menu")
            loadingMusic.stop();


          },1500)
      
    }
}
