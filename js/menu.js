

Menu={


create:function() {

    game.add.text(
      porcentagem(15,window.innerWidth),
      porcentagem(10,window.innerHeight), 'Midnight Shadow', {font: GameConfig.titleFont, fill:'#fff'});
      
console.log(porcentagem(10,window.innerWidth))

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
    this.up.onDown.add(up, this);

    this.down = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    this.down.onDown.add(down, this);

    this.enter = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    this.enter.onDown.add(this.confirmar, this);


    game.add.button(200, 500, 'buttonA', actionOnClick, this, 4, 2, 0);
    game.add.button(250, 500, 'buttonB', actionOnClick, this, 5, 5, 0);
    game.add.button(350, 500, 'buttonX', actionOnClick, this, 5, 5, 0);
    game.add.button(400, 500, 'buttonY', actionOnClick, this, 5, 5, 0);


    function actionOnClick () {

    console.log('teste')
  
  }
    function up(){
        this.select = this.select-1;

        if(this.select<0){
            this.select=2;
            return;
         } 
      
    }

    function down(){
        this.select=  this.select+1;

        if(this.select>2) {
            this.select=0;

            return;
        } 


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


confirmar : function(){

  var selecione = this.menu[this.select].text;
  if(selecione=='Novo Game'){
   
    music.pause();
    return game.state.start('stage1');

  }else if(selecione=='Recordes'){
   
    return game.state.start('recordes')

  }else if(selecione=='Options'){
    return game.state.start('options');

  }
}

}