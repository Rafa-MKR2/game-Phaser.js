

Menu={


create:function() {

    game.add.text(
      game.world.centerX,
      porcentagem(20,window.innerHeight), 'Midnight Shadow', {font: GameConfig.titleFont, fill:'#fff'})
      .anchor.set(.5)

      

    this.NewGame = game.add.text(
      porcentagem(35,window.innerWidth),
      porcentagem(35,window.innerHeight)
      , 'Novo Game', {font: GameConfig.textFont, fill:'#fff'});
    
      this.record = game.add.text(
      porcentagem(35,window.innerWidth),
      porcentagem(50,window.innerHeight),
     'Recordes', {font: GameConfig.textFont, fill:'#fff'});

    this.option = game.add.text(
      porcentagem(35,window.innerWidth),
      porcentagem(65,window.innerHeight),
     'Options', {font: GameConfig.textFont, fill:'#fff'});

    this.menu = [this.NewGame,this.record,this.option];
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

                this.menu[this.select].fill = 'red';
            }else{
            item.fill = '#fff'

            }
        })
    },

    upSeleciona: function(){
      return this.select=this.select-1 <0? this.select=2 : this.select-1;
    },

    downSeleciona: function(){
     return this.select= this.select+1 >2?  this.select=0: this.select+1;
    },

    confirmar : function(){
      var selecione = this.menu[this.select].text;
      if(selecione=='Novo Game'){
      
      
        return game.state.start('stage1');

      }else if(selecione=='Recordes'){
      
        return game.state.start('recordes')

      }else if(selecione=='Options'){
        return game.state.start('options');

      }
    }

}