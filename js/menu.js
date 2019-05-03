

Menu={


create:function() {

    game.add.text(220,100, 'Midnight Shadow', {font:'60px ', fill:'#fff'});
      


    this.NewGame = game.add.text(400,220, 'Novo Game', {font:'40px ', fill:'#fff'});
    this.record = game.add.text(400,270, 'Recordes', {font:'40px ', fill:'#fff'});
    this.option = game.add.text(400,320, 'Options', {font:'40px ', fill:'#fff'});

    this.menu = [this.NewGame,this.record,this.option];
    this.select = 0;


    // Controles Up / Down
    this.up = game.input.keyboard.addKey(Phaser.Keyboard.UP);
    this.up.onDown.add(up, this);

    this.down = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    this.down.onDown.add(down, this);

    this.enter = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    this.enter.onDown.add(this.confirmar, this);

        

    game.add.button(game.world.centerX - 95, 500, 'button', actionOnClick, this, 5, 5, 0);


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