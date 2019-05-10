

Menu={


create:function() {
  game.add.sprite(game.world.centerX,190,'bg')
      .anchor.set(.5)
      
    game.add.text(
      game.world.centerX,
      porcentagem(20,window.innerHeight), 'Noire', {font: GameConfig.titleFont, fill:'#fff'})
      .anchor.set(.5)
    
      this.NewGame =   game.add.button(game.world.centerX, game.world.centerY,'BTNPLAY',null, this, 1,3,2)
      this.NewGame.anchor.set(.5) 

    

      this.option  = game.add.button(game.world.centerX,porcentagem(70,window.innerHeight),'BTNSETTINGS',null, this, 1,3,2)
     this.option.anchor.set(.5)

     this.shadow = game.add.sprite(game.world.centerX,game.world.centerY,'menuAnimation')
     this.shadow.anchor.set(.5)

    
     this.shadow.animations.add('active',[0,1],10,true);
     this.shadow.animations.play('active')
  

    this.menu = [this.NewGame,this.option];
    this.select = 0;


    // Controles Up / Down
    this.up = game.input.keyboard.addKey(Phaser.Keyboard.UP);
    this.up.onDown.add(this.upSeleciona, this);

    this.down = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    this.down.onDown.add(this.downSeleciona, this);

    this.enter = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    this.enter.onDown.add(this.confirmar, this);


  
  if(GameConfig.mobile==true){
    game.add.button(
      porcentagem(70,window.innerWidth),
      porcentagem(70,window.innerHeight), 'buttonA', this.confirmar, this, 4, 2, 0);

      game.add.button(
        porcentagem(85,window.innerWidth),
        porcentagem(70,window.innerHeight), 'buttonB', actionOnClick, this, 1, 1, 0);

     game.add.button(
        porcentagem(10,window.innerWidth),
        porcentagem(50,window.innerHeight), 'buttonUp', this.upSeleciona,this);

     game.add.button(
          porcentagem(15,window.innerWidth),
          porcentagem(65,window.innerHeight), 'buttonRight', actionOnClick,this);
       
     game.add.button(
            porcentagem(3,window.innerWidth),
            porcentagem(65,window.innerHeight), 'buttonLeft', actionOnClick, this);
       
     game.add.button(
              porcentagem(10,window.innerWidth),
              porcentagem(75,window.innerHeight), 'buttonDown',this.downSeleciona, this)
          
    }
    
    function actionOnClick () {

    console.log('teste')
  
  }
   



},

 update: function() {

    this.checked()
  
  
},


    checked : function(){
        this.menu.forEach(item => {
            if(item==this.menu[this.select]){

              this.shadow.x = this.menu[this.select].x
              this.shadow.y = this.menu[this.select].y
            }
        })
    },

    upSeleciona: function(){
      return this.select=this.select-1 <0? this.select=2 : this.select-1;
    },

    downSeleciona: function(){
     return this.select= this.select+1 >1?  this.select=0: this.select+1;
    },

    confirmar : function(){
      var selecione = this.menu[this.select];
      if(selecione== this.NewGame){
      
      
        return game.state.start('stage1');

      }else if(selecione== this.option){
        return game.state.start('options');

      }
    }

}