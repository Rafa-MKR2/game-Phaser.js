
Menu={

create:function() {

  // reseta tamanho do game.word
  game.world.setBounds(0, 0,GameConfig.width, GameConfig.height);

  var bg = game.add.sprite(
           game.world.centerX, 
           GameConfig.mobile ? 190 : game.world.centerY,'bg');

      bg.anchor.set(.5);
      bg.fixedToCamera=true;

  this.menuSfx= game.add.audio('menuSfx')


    game.add.text( game.world.centerX ,porcentagem(20,window.innerHeight), 'Noire',
     {font: GameConfig.titleFont, fill:'#fff'})
     .anchor.set(.5)
     .fixedToCamera=true;
    
    this.NewGame = game.add.button( game.world.centerX, game.world.centerY,'BTNPLAY',function(){
      game.state.start('stage1')
  
    }, this, 1,3,2)
    this.NewGame.fixedToCamera=true;
    this.NewGame.anchor.set(.5) 

     this.option = game.add.button(game.world.centerX,game.world.centerY+80,'BTNSETTINGS',function(){
      game.state.start('options') 
     }, this, 1,3,2)
     this.option.fixedToCamera=true;
     this.option.anchor.set(.5)

     this.shadow = game.add.sprite(game.world.centerX,  game.world.centerY,'menuAnimation')
     this.shadow.anchor.set(.5)

    
     this.shadow.animations.add('active',[0,1],8,true);
     this.shadow.animations.play('active')
  
    //Menu container
    this.menu = [this.NewGame,this.option];

    // Armazana o indice do array, no qual item começara animaçao de selecionar
    this.select = 0;


    // Controles Up, Down, Enter -> teclado
    this.up = game.input.keyboard.addKey(Phaser.Keyboard.UP);
    this.up.onDown.add(this.upSeleciona, this);

    this.down = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    this.down.onDown.add(this.downSeleciona, this);

    this.enter = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    this.enter.onDown.add(this.confirmar, this);


  // Controle no modo Mobile so ira aparece caso tela tenha tamanho minimo 
  if(GameConfig.mobile==true){
    game.add.button(
      porcentagem(70,window.innerWidth),
      porcentagem(70,window.innerHeight), 'buttonA', this.confirmar, this, 4, 2, 0);

      game.add.button(
        porcentagem(85,window.innerWidth),
        porcentagem(70,window.innerHeight), 'buttonB', null, this, 1, 1, 0);

     game.add.button(
        porcentagem(10,window.innerWidth),
        porcentagem(50,window.innerHeight), 'buttonUp', this.upSeleciona,this);

     game.add.button(
          porcentagem(15,window.innerWidth),
          porcentagem(65,window.innerHeight), 'buttonRight', null,this);
       
     game.add.button(
            porcentagem(3,window.innerWidth),
            porcentagem(65,window.innerHeight), 'buttonLeft', null, this);
       
     game.add.button(
              porcentagem(10,window.innerWidth),
              porcentagem(75,window.innerHeight), 'buttonDown',this.downSeleciona, this)
          
    }
    
  

},

 update: function() {

    this.checked()
  
  
},


    checked : function(){
      // pega todos itens do menu e atualiza a posiçao da animaçao
        this.menu.forEach(item => {
            if(item==this.menu[this.select]){
              this.shadow.x = this.menu[this.select].x
              this.shadow.y = this.menu[this.select].y
            }
        })
    },

    upSeleciona: function(){
      this.menuSfx.volume=.2
      this.menuSfx.play()
      return this.select=this.select-1 <0? this.select=1 : this.select-1;

    },

    downSeleciona: function(){
      this.menuSfx.volume=.5
      this.menuSfx.play()
     return this.select= this.select+1 >1?  this.select=0: this.select+1;
    },

    confirmar : function(){
      var selecione = this.menu[this.select];

     selecione===this.NewGame ? 
       game.state.start('casa1') : null;
      
      selecione===this.option ? 
        game.state.start('options') : null;
    }

}