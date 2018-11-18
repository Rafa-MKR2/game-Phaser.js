

Loading = {
   preload: function() {
   

        var load =[];
        var cont= 0;
        var txt = game.add.text(550,540,'',{font:'40px ', fill:'#fff' });
        var txtArray = ['L','O','A','D','I','N','G','.','.','.'];
    
    
        var time = setInterval(function(){
            load.push(txtArray[cont]);
            cont++;
            if(cont>txtArray.length){
                cont =0; 
                load=[] 
                txt.text = '';
          }
             txt.text = load.join('');
             return load;
            },500)
        
        game.load.audio('lavender', './sfx/Lavender.ogg'); 
        game.load.audio('welcome', './sfx/Kim Lightyear - Braindead.mp3');
        game.load.audio('oneshot', './sfx/oneShot.mp3');
        game.load.audio('reload', './sfx/9mm Clip Load.mp3');

        game.load.audio('zombiewalker1', './sfx/zombies/zombie-7.wav');
        game.load.audio('zombiewalker2', './sfx/zombies/zombie-8.wav');
        game.load.audio('zombiewalker3', './sfx/zombies/zombie-9.wav');
        game.load.audio('zombiewalker4', './sfx/zombies/zombie-10.wav');
        game.load.audio('zombiewalker5', './sfx/zombies/zombie-11.wav');
        game.load.audio('zombiewalker6', './sfx/zombies/zombie-12.wav');

        game.load.audio('explosionStart', './sfx/synthetic_explosion_1.mp3');


        game.load.spritesheet('rain','image/rain.png', 150,100);
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

        game.load.image('noite','image/noite.png', 50,50);

        game.load.image('background','image/bg.png',50,50);
        game.load.image('bullet', 'image/bullet.png');
        game.load.image('villagerGround','image/vilageground.png', 50,50);

   
    
    
    },
    
    create: function() {
    
    
      
       music =  game.add.audio('lavender')
       music.loop = true;
       music.volume = .5;
       music.play();
    
    
    
        var emitter = game.add.emitter(game.world.centerX, 0, 400);
    
        emitter.width = game.world.width;
        // emitter.angle = 30; // uncomment to set an angle for the rain.
    
        emitter.makeParticles('rain');
    
        emitter.minParticleScale = 0.1;
        emitter.maxParticleScale = 0.5;
    
        emitter.setYSpeed(300, 500);
        emitter.setXSpeed(-5, 5);
    
        emitter.minRotation = 0;
        emitter.maxRotation = 0;
    
        emitter.start(false, 1600, 5, 0);
    
        // chama menu
          setTimeout(function(){
            game.state.start("menu")

          },1500)
      
    }
}
