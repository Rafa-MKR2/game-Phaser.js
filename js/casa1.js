Casa1 = {
    
    create : function(){
        gameMusic.stop();

        gameMusic = game.add.audio('relogioSfx')
        gameMusic.loop=true;
        gameMusic.volume = .2;

        gameMusic.play()

        game.world.setBounds(-100, -100,1200, 1200);

        game.add.tileSprite(0, 0, 800,500, 'homeGround');



       game.physics.startSystem(Phaser.Physics.P2JS);
       game.camera.deadzone = new Phaser.Rectangle(100, 100, 50, 50);


        // Teclado controles
        this.controls = game.input.keyboard.createCursorKeys();
    
          this.maze = [
           [11,4,3,3,12,12,3,3,3,3,3,12,12,3,3,5,6],
           [11,9,7,7,12,12,7,7,7,7,7,12,12,7,7,8,6],
           [11,0,0,0,0,0,16,0,0,0,17,0,0,0,0,0,6],
           [11,0,0,0,0,0,14,13,13,13,15,0,0,0,0,0,6],
           [11,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,6],
           [11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6],
           [11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6],
           [11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6],
           [11,3,3,3,3,3,3,3,0,3,3,3,3,3,3,3,6],
           [11,7,7,7,7,7,7,7,0,7,7,7,7,7,7,7,6]

       ];
   
   


   
   
       // paredes
       this.blocks = game.add.group();
       this.blocks.enableBody = true;
           
           for(var row in this.maze){
               for(var col in this.maze[row]){
                   var tile = this.maze[row][col];
                   
                   var x = col * 50;
                   var y = row * 50;
                   
                   if(tile === 1){
                       
                       var block = this.blocks.create(x,y,'wall');
                           block.body.immovable = true;
   
                   } else
                   if(tile === 2){
                    this.player = game.add.sprite(x, y, 'player');

                       game.physics.arcade.enable(this.player);
                       game.physics.p2.enable(this.player);
                       game.camera.follow(this.player);

   
                       this.player.animations.add('goDown',[0,1,2,3],12,true);
                       this.player.animations.add('goLeft',[4,5,6,7],12,true);
                       this.player.animations.add('goRight',[8,9,10,11],12,true);
                       this.player.animations.add('goUp',[12,13,14,15],12,true);
                       this.player.animations.add('playstop',[16,17,18,19],2,true);
                   } else

                   if(tile === 3){
                    var block = this.blocks.create(x,y,'paredeMadeira_Interior');
                        block.body.immovable = true;
                } 
                else
                if(tile === 4){
                    var block = this.blocks.create(x,y,'paredeMadeira_curvaEsquerda');
                        block.body.immovable = true;
                } 
                else
                if(tile === 5){
                    var block = this.blocks.create(x,y,'paredeMadeira_curvaDireita');
                        block.body.immovable = true;
                } 
                else
                if(tile === 6){
                    var block = this.blocks.create(x,y,'paredeMadeira_Direita');
                        block.body.immovable = true;
                } 
                else
                if(tile === 7){
                    var block = this.blocks.create(x,y,'paredeMadeira_baixar');
                        block.body.immovable = true;
                } 
                else
                if(tile === 8){
                    var block = this.blocks.create(x,y,'paredeMadeira_curvaDireitaBaixa');
                        block.body.immovable = true;
                } 
                else
                if(tile === 9){
                    var block = this.blocks.create(x,y,'paredeMadeira_curvaEsquerdaBaixa');
                        block.body.immovable = true;
                } 
                else
                if(tile === 10){
                    var block = this.blocks.create(x,y,'curvaParedeEsquerda');
                        block.body.immovable = true;
                } 
                else
                if(tile === 11){
                    var block = this.blocks.create(x,y,'paredeMadeira_Esquerda');
                        block.body.immovable = true;
                } 
                else
                if(tile === 12){
                     game.add.sprite(x,y,'escada2Andar');
                } 

                // Moveis da sala
                else
                if(tile === 13){
                    var block = this.blocks.create(x,y,'Balcao');
                    block.body.immovable = true;
                   
                } 
                else
                if(tile === 14){
                    var block = this.blocks.create(x,y,'balcaoLateralEsquerdo');
                    block.body.immovable = true;

                    var book = game.add.sprite(x+40,y+10,'saveBook')
                        book.animations.add('pagination',[0,1,2,3,4,5,6,7,8],3,true);
                        book.play('pagination')
                        book.anchor.set(.5)


                    var relogio = game.add.sprite(450,50,'relogioDeParede');
                        relogio.animations.add('clock',[0,1,2,3],5,true);
                        relogio.play('clock')
                        relogio.anchor.set(.5)

                    // Moveis estaticos 
                    


                     game.add.sprite(80,100,'barrilMovel').anchor.set(.5);
                     game.add.sprite(120,100,'barril').anchor.set(.5) 
                     game.add.sprite(150,100,'barril').anchor.set(.5) 
                     game.add.sprite(185,48,'cortinaEsquerda').anchor.set(.5) 
                     game.add.sprite(310,48,'cortinaDireita').anchor.set(.5) 

                    // game.add.sprite(535,48,'cortinaEsquerda').anchor.set(.5) 
                    //game.add.sprite(660,48,'cortinaDireita').anchor.set(.5) 
                     game.add.sprite(600,49,'cortinaEstendida').anchor.set(.5) 


                     var mesa = this.blocks.create(150,250,'mesaComum');
                         mesa.body.immovable = true;
                         mesa.anchor.set(.5)
                         
                    var cadeiraMesa = this.blocks.create(150,190,'cadeira') 
                        cadeiraMesa.body.immovable = true;
                        cadeiraMesa.anchor.set(.5)
                    

                     game.add.sprite(180,100,'barril').anchor.set(.5) 

                     game.add.sprite(400,100,'grupoDeArmario').anchor.set(.5) 
                     game.add.sprite(470,130,'cadeira').anchor.set(.5) 

                     game.add.sprite(750,100,'saco_Movel').anchor.set(.5) 
                     game.add.sprite(780,100,'caixote_movel').anchor.set(.5) 

                    var npc = game.add.sprite(425,130,'npc_Balcao');
                        npc.animations.add('anime',[0,1,2],1,true);
                        npc.play('anime')
                        npc.anchor.set(.5)

                } 
                else
                if(tile === 15){
                    var block = this.blocks.create(x,y,'balcaoLateralDireito');
                    block.body.immovable = true;
                } 
                else
                if(tile === 16){
                    var block = this.blocks.create(x,y,'balcaoVerticalEsquerdo');
                    block.body.immovable = true;
                } 
                else
                if(tile === 17){
                    var block = this.blocks.create(x,y,'balcaoVerticalDireito');
                    block.body.immovable = true;
                } 
              
           }
        }




       // this.dialogue = game.add.sprite(50,10,'dialogue');
       // this.dialogue.fixedToCamera = true;
       // this.dialogue.anchor.set(.5) 


    },
    update : function(){
    
        game.physics.arcade.collide(this.player,this.blocks);

        this.player.body.velocity.x = 0;
        this.player.body.velocity.y = 0;
 
 

           // DIRECIONAL WASD OPCIONAL
           this.W = game.input.keyboard.addKey(Phaser.Keyboard.W);
           this.A = game.input.keyboard.addKey(Phaser.Keyboard.A);
           this.S = game.input.keyboard.addKey(Phaser.Keyboard.S);
           this.D = game.input.keyboard.addKey(Phaser.Keyboard.D); 
   

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
               }
   
          
          if(this.player.body.velocity.x === 0 && this.player.body.velocity.y === 0){
           this.player.animations.stop();
          }
    },

    player : function(){

    }
}