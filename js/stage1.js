

Stage1 = {



    create: function() {
   
      
   var music =  game.add.audio('welcome')
       music.loop = true;
       music.volume = .1;
       music.play();


       var sartSound = game.add.audio('explosionStart');
       sartSound.volume = .1;
       sartSound.play()
      
       game.input.addPointer();
       game.input.addPointer();
       game.input.addPointer();
       game.input.addPointer();
       game.input.addPointer();
       game.input.addPointer();
        
        
       
       this.player;

       this.controls = game.input.keyboard.createCursorKeys();
   
        
   
       this.bullets;
       this.reload = 6;
       this.spriteBullets = [];

       //inventario
       this.ammo = 999;





        // tempo de disparo
       this.fireRate = 1000;
       this.nextFire = 0;
       

       game.world.setBounds(0, 0,2000, 2000);
       game.add.tileSprite(0, 0, 2000, 2000, 'villagerGround');
   
       this.P = game.input.keyboard.addKey(Phaser.Keyboard.P); 
       this.P.onDown.add(this.pause, this);

       this.explosions = game.add.group();
       this.explosions.createMultiple(30, 'blood');
   

        // player e camera
        this.enemy1 = this.EnemyFactory(875,75,'RIGHT', 'zumbie1')
        game.physics.arcade.enable(this.enemy1);

        this.enemy2 = this.EnemyFactory(775,175,'LEFT', 'zumbie2')
        game.physics.arcade.enable(this.enemy2);

        this.enemy3 = this.EnemyFactory(75,775,'DOWN', 'zumbie3')
        game.physics.arcade.enable(this.enemy3);


      

       this.player = game.add.sprite(900, 700, 'player');
       game.add.tileSprite(0, 0, 2000, 2000, 'noite');

  


       game.physics.startSystem(Phaser.Physics.P2JS);
       game.camera.follow(this.player);
       game.camera.deadzone = new Phaser.Rectangle(250, 100, 350, 100);
       
   
       this.maze = [
           [3,3,3,3,3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,1],
           [3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,6,4,4,4,4,4,1],
           [3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,1],
           [1,3,3,3,3,3,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,1],
           [1,5,5,5,5,5,5,5,5,5,0,0,0,0,0,0,0,0,0,0,0,1],
           [1,4,4,4,4,4,4,6,4,4,0,0,0,0,0,0,0,0,0,0,0,1],
           [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
           [1,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
           [1,0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,0,0,0,1],
           [1,0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,0,0,0,1],
           [1,0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,0,0,0,1],
           [1,0,0,0,0,0,0,0,0,5,5,5,5,5,5,5,5,5,0,0,0,1],
           [1,0,0,0,0,0,0,0,0,4,4,4,6,4,4,4,4,4,0,0,0,1],
           [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
           [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
           [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
           [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
           [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
           [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
           [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
           [1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1]
         
       ];
   
   


          

  // Balas
   
  this.bullets = game.add.group();
  this.bullets.enableBody = true;
  this.bullets.physicsBodyType = Phaser.Physics.ARCADE;


  this.bullets.createMultiple(50, 'bullet');
  this.bullets.setAll('checkWorldBounds', true);
  this.bullets.setAll('outOfBoundsKill', true);
  
      
   
   
       // paredes
       this.blocks = game.add.group();
       this.blocks.enableBody = true;

       this.telhado = game.add.group();
   
           
           for(var row in this.maze){
               for(var col in this.maze[row]){
                   var tile = this.maze[row][col];
                   
                   var x = col * 50;
                   var y = row * 50;
                   
                   if(tile === 1){
                       var block = this.blocks.create(x,y,'block');
                           block.body.immovable = true;
   
                   } else
                   if(tile === 2){
   
                       this.player.anchor.set(.5);
                       game.physics.arcade.enable(this.player);
                       game.physics.p2.enable(this.player);
   
                       this.player.animations.add('goDown',[0,1,2,3],12,true);
                       this.player.animations.add('goLeft',[4,5,6,7],12,true);
                       this.player.animations.add('goRight',[8,9,10,11],12,true);
                       this.player.animations.add('goUp',[12,13,14,15],12,true);
                       this.player.animations.add('shotingDown',[16],4,true);
                       this.player.animations.add('shotingLeft',[20],4,true);
                       this.player.animations.add('shotingRight',[24],4,true);
                       this.player.animations.add('shotingUp',[28],4,true);

                   } else
                   if(tile === 3){
                    var telhado = this.blocks.create(x,y,'telhado');
                        telhado.body.immovable = true;

                   }else
                   if(tile === 4){
                    var paredesMadeira = this.blocks.create(x,y,'paredeMadeira');
                        paredesMadeira.body.immovable = true;
                   }else
                   if(tile === 5){
                    var paredeAlta = this.blocks.create(x,y,'paredeAlta');
                        paredeAlta.body.immovable = true;
                   }else
                   if(tile === 6){
                    var door = this.blocks.create(x,y,'door1');
                    door.body.immovable = true;
                   }
               }
           }
   

           this.bulletsCount = game.add.text(130,15,'', {font:'25px ', fill:'#fff'})
           this.bulletsCount.fixedToCamera=true;

           this.pauseText =  game.add.text(330,220,'', {font:'50px ', fill:'#fff'});
           this.pauseText.fixedToCamera=true;



    
    
           
           if(GameConfig.mobile==true){
           this.btnA = game.add.button(
                        porcentagem(70,window.innerWidth),
                        porcentagem(70,window.innerHeight), 'buttonA',null, this, 1, 0, 2);
                        this.btnA.fixedToCamera=true;

            this.btnB = game.add.button(
                        porcentagem(85,window.innerWidth),
                        porcentagem(70,window.innerHeight), 'buttonB', null, this,4, 3, 5);
                        this.btnB.fixedToCamera=true;

        
            this.btnUp = game.add.button(
                        porcentagem(10,window.innerWidth),
                        porcentagem(50,window.innerHeight), 'buttonUp', function(){
                        
                            this.btnUp.onInputDown.add(function(){
                                this.controls.up.isDown =true;
                            }, this);

                            this.btnUp.onInputUp.add(function(){
                                this.controls.up.isDown =false;
                            }, this);
                    
                        },this, 4, 3, 5);
                        this.btnUp.fixedToCamera=true;

        
            this.btnRight = game.add.button(
                        porcentagem(15,window.innerWidth),
                        porcentagem(65,window.innerHeight), 'buttonRight',  
                        function(){
                        
                            this.btnRight.onInputDown.add(function(){
                                this.controls.right.isDown =true;
                            }, this);

                            this.btnRight.onInputUp.add(function(){
                                this.controls.right.isDown =false;
                            }, this);
                    
                        },this,4, 3, 5);
                        this.btnRight.fixedToCamera=true;

               
            this.btnLeft = game.add.button(
                        porcentagem(3,window.innerWidth),
                        porcentagem(65,window.innerHeight), 'buttonLeft', function(){
                        
                            this.btnLeft.onInputDown.add(function(){
                                this.controls.left.isDown =true;
                            }, this);

                            this.btnLeft.onInputUp.add(function(){
                                this.controls.left.isDown =false;
                            }, this);
                    
                        }, this,4, 3, 5);
                        this.btnLeft.fixedToCamera=true;

               
             this.btnDown =  game.add.button(
                        porcentagem(10,window.innerWidth),
                        porcentagem(75,window.innerHeight), 'buttonDown',function(){
                        
                            this.btnDown.onInputDown.add(function(){
                                this.controls.down.isDown =true;
                            }, this);

                            this.btnDown.onInputUp.add(function(){
                                this.controls.down.isDown =false;
                            }, this);
                    
                        }, this,4, 3, 5);
                        this.btnDown.fixedToCamera=true;

                  
            }

          
        
      

    


   },
   
    update: function() {

        this.btnA.onInputOver.add(function(){ }, this);

        this.btnB.onInputOver.add(function(){ }, this);

      


       this.player.body.velocity.x = 0;
       this.player.body.velocity.y = 0;

       game.physics.arcade.collide(this.player,this.blocks);

         this.p1 = game.physics.arcade.overlap(this.bullets,this.enemy1.animation, this.damageControll,null, this);
         this.p2 = game.physics.arcade.overlap(this.bullets,this.enemy2.animation, this.damageControll,null, this);
         this.p3 = game.physics.arcade.overlap(this.bullets,this.enemy3.animation,this.damageControll,null, this);

        this.blood()

        // DIRECIONAL WASD OPCIONAL
        this.W = game.input.keyboard.addKey(Phaser.Keyboard.W);
        this.A = game.input.keyboard.addKey(Phaser.Keyboard.A);
        this.S = game.input.keyboard.addKey(Phaser.Keyboard.S);
        this.D = game.input.keyboard.addKey(Phaser.Keyboard.D); 

    

    this.moveEnemy(this.enemy1.animation)   
    this.moveEnemy(this.enemy2.animation)   
    this.moveEnemy(this.enemy3.animation)   


  
    //impede personagem de andar atirando...
    if(!this.input.mousePointer.isDown){
    
        // player movimento
       if(this.controls.left.isDown &&
         !this.controls.right.isDown ||
         this.A.isDown && !this.D.isDown){

        this.player.body.velocity.x = -200;
        this.player.direction = "left";
      
    } else
    if(this.controls.right.isDown &&
       !this.controls.left.isDown ||
        this.D.isDown && !this.A.isDown){

        this.player.body.velocity.x =200;
        this.player.direction = "right";
    }
    
    if(this.controls.up.isDown &&
      !this.controls.down.isDown ||
      this.W.isDown && !this.S.isDown){

        this.player.body.velocity.y = -200;
        this.player.direction = "up";

    } else
    if(this.controls.down.isDown &&
       !this.controls.up.isDown ||
       this.S.isDown && !this.W.isDown){

        this.player.body.velocity.y = 200;
        this.player.direction = "down";
    }
}
      
   
       switch(this.player.direction){ 
           case "left":
               this.player.animations.play('goLeft'); break;
           case "right":
               this.player.animations.play('goRight'); break;
           case "up":
               this.player.animations.play('goUp'); break;
           case "down":
               this.player.animations.play('goDown'); break;
         case "shotingDown":
               this.player.animations.play('shotingDown'); break;
         case "shotingLeft":
               this.player.animations.play('shotingLeft'); break;
         case "shotingRight":
               this.player.animations.play('shotingRight'); break;
         case "shotingUp":
               this.player.animations.play('shotingUp'); break;
         

      
            }
       
       if(this.player.body.velocity.x === 0 && this.player.body.velocity.y === 0){
           this.player.animations.stop();
       }
   
   },
   pause : function(){

    if(game.paused==true){
        game.paused=false;
        this.pauseText.text = ''

    }else if(game.paused==false){
        game.paused=true;
        this.pauseText.text = 'Pause'
        return;
    }
 },

   // Display bullets
   displayStatus : function(){

    this.spriteBullets.forEach(element => element.destroy());
    this.spriteBullets =[]

    for(var i =0; i<this.reload; i++){
        var pos = 200+(20*i)

        var imagem = game.add.image(pos,15,'ammo');
        imagem.fixedToCamera=true;
        this.spriteBullets.push(imagem)
    }  
},


   //dispara bala do revolve
   fire: function(x,y) {
   
    // atualiza display a cada disparo
    this.displayStatus()


       if(game.time.now >  this.nextFire && this.bullets.countDead() > 0){  
        

   

        if(this.reload>0){
         // remove uma bala 
         this.reload--;

        this.nextFire = game.time.now + this.fireRate;
        var bullet = this.bullets.getFirstDead();
   
           bullet.reset(this.player.x +x , this.player.y + y);
   
           game.physics.arcade.moveToPointer(bullet,4500);
   
           var songShoting = game.add.audio('oneshot');
               songShoting.volume = .2;
               songShoting.play()

        
        }else if(game.time.now >  this.nextFire && this.bullets.countDead() > 0){
            this.nextFire = game.time.now + this.fireRate;
    
            var UpBullets = game.input.keyboard.addKey(Phaser.Keyboard.R);
            UpBullets.onDown.add(this.reloadWeapon, this);
    
        var noBullets = game.add.audio('reload');
        noBullets.volume = .5;
        noBullets.play()
        }
     
      
    }
   
},

   reloadWeapon: function(){

 if(this.reload<6){
    this.bulletsCount.text =this.ammo+' / ';

    this.reload++;
    var reloading = game.add.audio('reload');
    reloading.volume = .7;
    reloading.play()
    this.ammo--;
    // atualiza display das balas
    this.displayStatus()

     }

},

blood :  function(){

    if(this.p1==true){
        this.enemy1.life-=25
        console.log(this.enemy1.life);
        var explosion = this.explosions.getFirstExists(false);
        explosion.reset(this.enemy1.animation.x, this.enemy1.animation.y);
        explosion.play('blood', 10, true, true);
    
        setTimeout(function(){ explosion.kill()},5000)
    }

    if(this.p2==true){
        this.enemy2.life-=25
        console.log(this.enemy1.life);
        var explosion = this.explosions.getFirstExists(false);
        explosion.reset(this.enemy2.animation.x, this.enemy2.animation.y);
        explosion.play('blood', 30, true, true);
        setTimeout(function(){ explosion.kill()},5000)

    }
    if(this.p3==true){
        this.enemy3.life-=25
        console.log(this.enemy1.life);
        var explosion = this.explosions.getFirstExists(false);
        explosion.reset(this.enemy3.animation.x, this.enemy3.animation.y);
        explosion.play('blood', 30, true, true);
        setTimeout(function(){ explosion.kill()},5000)

    }

    return;
},


// Controle de inimigos
	EnemyFactory : function(posX,posY, direction, enemySprite){

		this.enemy = game.add.sprite(posX,posY,enemySprite);
		this.enemy.anchor.set(0.5);
        game.physics.arcade.enable(this.enemy);
        
        
		this.enemy.animations.add('goDown',[0,1,2,3],4,true);
		this.enemy.animations.add('goLeft',[4,5,6,7],12,true);
		this.enemy.animations.add('goRight',[8,9,10,11],4,true);
		this.enemy.animations.add('goUp',[12,13,14,15],4,true);
		
		this.enemy.direction = direction;
        this.enemy.animations.add('kaboom');

        var status = {life: 100, animation:this.enemy}

     
		return status;
	},


moveEnemy: function(enemy){

    this.enemy = enemy;

    if(Math.floor(this.enemy.x -25)%50 === 0 && 
       Math.floor(this.enemy.y -25)%50 === 0){

        var enemyCol = Math.floor(this.enemy.x / 50);
        var enemyRow = Math.floor(this.enemy.y / 50);
        var validPath = [];

        var Perserguir = function(){
            if(this.maze[enemyRow][enemyCol -1]  < 1 &&
                this.enemy.direction !== 'RIGHT' &&
                this.player.x < this.enemy.x){
             
                 validPath.push('LEFT');
             }
    
             if(this.maze[enemyRow][enemyCol +1] < 1 &&
                this.enemy.direction !== 'LEFT' &&
                this.player.x > this.enemy.x){
    
                     validPath.push('RIGHT');
              }
         
             if(this.maze[enemyRow - 1][enemyCol]  < 1 &&
                this.enemy.direction !== 'DOWN' &&
                this.player.y < this.enemy.y){
    
                 validPath.push('UP');
             }
         
    
             if(this.maze[enemyRow + 1][enemyCol]  < 1 &&
                this.enemy.direction !== 'UP' &&
                this.player.y > this.enemy.y){
    
                 validPath.push('DOWN');
             }
         
          }.bind(this)


        
        var patrulhandoArea = function(){
            if(this.maze[enemyRow][enemyCol -1]  < 1 &&
                this.enemy.direction !== 'RIGHT'){
             
                 validPath.push('LEFT');
             }
    
             if(this.maze[enemyRow][enemyCol +1] < 1 &&
                this.enemy.direction !== 'LEFT' ){
    
                     validPath.push('RIGHT');
              }
         
             if(this.maze[enemyRow - 1][enemyCol]  < 1 &&
                this.enemy.direction !== 'DOWN'){
    
                 validPath.push('UP');
             }
         
    
             if(this.maze[enemyRow + 1][enemyCol]  < 1 &&
                this.enemy.direction !== 'UP'){
    
                 validPath.push('DOWN');
             }
         
          }.bind(this)



        // Logica do campo de visao dos inimigos
        if(this.enemy.x-400 < this.player.x && 
           this.enemy.x+400 >  this.player.x &&
           this.enemy.y-400 < this.player.y &&
           this.enemy.y+400 > this.player.y
          ){
            Perserguir()
         
            console.log('perseguindo vc')

        }else{
            patrulhandoArea()
            console.log('patrulhando')

        }

        this.enemy.direction = validPath[Math.floor(Math.random() * validPath.length)];

    }

    switch(this.enemy.direction){
        case 'LEFT':
            this.enemy.x -=2;
                this.enemy.animations.play('goLeft');
                break;
        case 'RIGHT':
            this.enemy.x +=2;
                this.enemy.animations.play('goRight');
                break;
        case 'UP':
            this.enemy.y -=2;
                this.enemy.animations.play('goUp');
                break;
        case 'DOWN':
            this.enemy.y +=2;
                this.enemy.animations.play('goDown');
                break;
        
    }


},

dieZombie : function(zombie){


},

render: function() {
   
   
     //  game.debug.cameraInfo(game.camera, 32, 32);
       game.debug.spriteCoords(this.player, 32, 500);

   }
   
   }