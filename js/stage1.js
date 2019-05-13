

Stage1 = {



    create: function() {
   
        loadingMusic.stop();
   var music =  game.add.audio('welcome')
       music.loop = true;
       music.volume = .1;
       music.play();

    
       this.player;

       // Teclado controles
       this.controls = game.input.keyboard.createCursorKeys();
   
        
   
       

       game.world.setBounds(0, 0,2000, 2000);
       game.add.tileSprite(0, 0, 2000, 2000, 'villagerGround');
   
       this.P = game.input.keyboard.addKey(Phaser.Keyboard.P); 
       this.P.onDown.add(this.pause, this);

      

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
           [3,3,3,3,3,3,3,3,3,3,0,0,5,5,5,5,5,5,5,5,5,1],
           [3,3,3,3,3,3,3,3,3,3,10,10,8,8,4,11,4,4,8,8,4],
           [3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0],
           [1,3,3,3,3,3,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,1],
           [1,5,5,5,5,5,5,5,5,5,0,0,0,0,0,0,0,0,0,0,0,1],
           [1,4,4,9,4,4,9,6,4,4,0,0,0,0,0,0,0,0,0,0,0,1],
           [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
           [1,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
           [1,0,0,0,0,0,0,0,0,7,7,7,7,7,7,7,7,7,0,0,0,1],
           [1,0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,0,0,0,1],
           [1,0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,0,0,0,1],
           [1,0,0,0,0,0,0,0,0,5,5,5,5,5,5,5,5,5,0,0,0,1],
           [1,0,0,0,0,0,0,0,0,4,8,4,6,4,8,4,8,4,0,0,0,1],
           [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
           [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
           [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
           [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
           [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
           [7,7,7,7,7,7,7,7,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
           [3,3,3,3,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
           [3,3,3,3,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
           [3,3,3,5,5,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
           [3,3,3,8,8,5,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
           [5,5,5,13,12,14,11,14,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
           [4,4,4,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
           [1,0,0,0,0,0,0,0,0,7,7,7,7,7,7,7,7,7,0,0,0,1],
           [1,0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,0,0,0,1],
           [1,0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,0,0,0,1],
           [1,0,0,0,0,0,0,0,0,5,5,5,5,5,5,5,5,5,0,0,0,1],
           [1,0,0,0,0,0,0,0,0,4,8,4,6,4,8,4,8,4,0,0,0,1],
           [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
           [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
           [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
           [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
           [1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1]
         
       ];
   
   


   
   
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
                   if(tile === 7){
                    var telhadoAlto = this.blocks.create(x,y,'telhadoAlto');
                    telhadoAlto.body.immovable = true;
                   }else
                   if(tile === 3){
                    var telhado = this.blocks.create(x,y,'telhado');
                        telhado.body.immovable = true;

                   }else
                   if(tile === 4){
                    var ParedeVelha_baixa = this.blocks.create(x,y,'ParedeVelha_baixa');
                    ParedeVelha_baixa.body.immovable = true;
                   }else
                   if(tile === 5){
                    var ParedeVelha_alto = this.blocks.create(x,y,'ParedeVelha_alto');
                    ParedeVelha_alto.body.immovable = true;
                   }else

                   if(tile === 6){
                    var door = this.blocks.create(x,y,'door1');
                    door.body.immovable = true;
                   }
                   if(tile === 8){
                    var ParedeVelha_Janela = this.blocks.create(x,y,'ParedeVelha_Janela');
                    ParedeVelha_Janela.body.immovable = true;
                   }else
                   if(tile === 9){
                    var ParedeVelha_Janela_luz = this.blocks.create(x,y,'ParedeVelha_Janela_luz');
                    ParedeVelha_Janela_luz.body.immovable = true;
                   }
                  
                   else
                   if(tile === 10){
                    var velhoCercado = this.blocks.create(x,y,'velhoCercado');
                    velhoCercado.body.immovable = true;
                   }
                   else
                   if(tile === 11){
                    var door2 = this.blocks.create(x,y,'door2');
                    door2.body.immovable = true;
                   }
                   else
                   if(tile === 12){
                    var barril = this.blocks.create(x,y,'barril');
                    barril.body.immovable = true;
                   }
                   else
                   if(tile === 13){
                    var barrilComplemento = this.blocks.create(x,y,'conjuntoDeBarril');
                    barrilComplemento.body.immovable = true;
                   }
                   if(tile === 14){
                    var animacaoJanela = this.blocks.create(x,y,'JanelaPiscando_animacao');
                    animacaoJanela.animations.add('active',[0,1],1,true);
                    animacaoJanela.animations.play('active')
                    animacaoJanela.body.immovable = true;
                   }
               }
           }
   

           
           if(GameConfig.mobile==true){
           this.btnA = game.add.button(
                        porcentagem(70,window.innerWidth),
                        porcentagem(70,window.innerHeight), 'buttonA',null, this, 1, 0, 2);
                        this.btnA.fixedToCamera=true;

            this.btnB = game.add.button(
                        porcentagem(85,window.innerWidth),
                        porcentagem(70,window.innerHeight), 'buttonB',  function(){
                        }, this,4, 3, 5);
                        this.btnB.fixedToCamera=true;

            
            this.pauseButton = game.add.button(
                        porcentagem(55,window.innerWidth),
                        porcentagem(85,window.innerHeight), 'pause', this.pause, this,4, 3, 5);
                        this.pauseButton.anchor.set(.5)
                        this.pauseButton.fixedToCamera=true;
        
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

          
            
                    
                 
      
        
        // Puase menu Background
        this.pauseBg =  game.add.image(
            porcentagem(50,window.innerWidth),
            porcentagem(40,window.innerHeight), 'pauseBg');
           this.pauseBg.anchor.set(.5)
           this.pauseBg.visible =false;
           this.pauseBg.fixedToCamera=true;


        // Botao Menu Puase 
        this.pauseBtnMenu = game.add.button(
            porcentagem(50,window.innerWidth),
            porcentagem(35,window.innerHeight), 'menuPausedBtn', function(){
                game.paused=false;
                music.stop();
                loadingMusic.play();
                game.state.start('menu',true,false)
            },this);
        this.pauseBtnMenu.anchor.set(.5)
        this.pauseBtnMenu.fixedToCamera=true;
        this.pauseBtnMenu.visible=false;


     
        this.pauseBtnSettings = game.add.button(
            porcentagem(50,window.innerWidth),
            porcentagem(50,window.innerHeight), 'settingPausedBtn', null,this);
        this.pauseBtnSettings.anchor.set(.5)
        this.pauseBtnSettings.fixedToCamera=true;
        this.pauseBtnSettings.visible=false;
   },
   
    update: function() {

    
      
      

       this.player.body.velocity.x = 0;
       this.player.body.velocity.y = 0;

       game.physics.arcade.collide(this.player,this.blocks);

         this.p1 = game.physics.arcade.overlap(this.player,this.enemy1.animation, this.damageControll,null, this);
         this.p2 = game.physics.arcade.overlap(this.player,this.enemy2.animation, this.damageControll,null, this);
         this.p3 = game.physics.arcade.overlap(this.player,this.enemy3.animation,this.damageControll,null, this);


        // DIRECIONAL WASD OPCIONAL
        this.W = game.input.keyboard.addKey(Phaser.Keyboard.W);
        this.A = game.input.keyboard.addKey(Phaser.Keyboard.A);
        this.S = game.input.keyboard.addKey(Phaser.Keyboard.S);
        this.D = game.input.keyboard.addKey(Phaser.Keyboard.D); 

    

    this.moveEnemy(this.enemy1.animation)   
    this.moveEnemy(this.enemy2.animation)   
    this.moveEnemy(this.enemy3.animation)   


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
        this.pauseBg.visible =false;
        this.pauseBtnMenu.visible =false;
        this.pauseBtnSettings.visible =false;

    }else if(game.paused==false){
        game.paused=true;
        this.pauseBg.visible =true;
        this.pauseBtnMenu.visible =true;
        this.pauseBtnSettings.visible =true;

        return;
    }
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
            if(this.maze[enemyRow][enemyCol -1]  < 2 &&
                this.enemy.direction !== 'RIGHT' &&
                this.player.x < this.enemy.x){
                    
                 validPath.push('LEFT');
             }
    
             if(this.maze[enemyRow][enemyCol +1] < 2 &&
                this.enemy.direction !== 'LEFT' &&
                this.player.x > this.enemy.x){
    
                     validPath.push('RIGHT');
              }
         
             if(this.maze[enemyRow - 1][enemyCol]  < 2 &&
                this.enemy.direction !== 'DOWN' &&
                this.player.y < this.enemy.y){
    
                 validPath.push('UP');
             }
         
    
             if(this.maze[enemyRow + 1][enemyCol]  < 2 &&
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
           this.enemy.y+400 > this.player.y &&
           this.player.x <1100 && this.player.y < 1050
          ){
            Perserguir()
            console.log('perseguindo vc '+  this.enemy.directio)

         
        }else{
            patrulhandoArea()
            console.log('patrulhando area....')

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

damageControll: function(){
  console.log('pego pelo zumbie')
},

mensager : function(){
   

},

render: function() {
   
   
     //  game.debug.cameraInfo(game.camera, 32, 32);
       game.debug.spriteCoords(this.player, 32, 500);

   }
   
   }