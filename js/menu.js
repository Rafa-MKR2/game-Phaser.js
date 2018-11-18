Menu={


create:function() {

    var txt = game.add.text(120,100, 'Midnight Shadow', {font:'60px ', fill:'#fff'});


    this.NewGame = game.add.text(300,300, 'New Game', {font:'40px ', fill:'#fff'});
    this.cont = game.add.text(300,350, 'Continue', {font:'40px ', fill:'#fff'});
    this.option = game.add.text(300,400, 'Options', {font:'40px ', fill:'#fff'});

    this.menu = [this.NewGame,this.cont,this.option];
    this.select = 0;


    // Controles Up / Down
    this.up = game.input.keyboard.addKey(Phaser.Keyboard.UP);
    this.up.onDown.add(up, this);

    this.down = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    this.down.onDown.add(down, this);

    this.enter = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    this.enter.onDown.add(this.confirmar, this);

        




    function up(){
        this.select =  this.select-1;

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
  if(selecione=='New Game'){
   
    music.pause();
    return game.state.start('stage1');

  }else if(selecione=='Continue'){
    console.log('continue...')
    return;

  }else if(selecione=='Options'){
    console.log('Options...')
    return;

  }
}

}