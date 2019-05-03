Recordes = {
    create:function() {

    game.add.text(320,20, 'Recordes', {font:'40px ', fill:'#fff'});

      
     game.add.text(300,120, '1 - Rafael D.Carmo', {font:'20px ', fill:'#FFD700'});
     game.add.text(300,170, '2 - Thiago L. Silva', {font:'20px ', fill:'#C0C0C0'});
     game.add.text(300,220, '3 - Carla Tanara', {font:'20px ', fill:'#B22222'});
     game.add.text(300,270, '4 - Samuel Santos', {font:'20px ', fill:'#fff'});
     game.add.text(300,320, '5 - Danis Souza', {font:'20px ', fill:'#fff'});
     game.add.text(300,370, '6 - Matheus Carmo', {font:'20px ', fill:'#fff'});
     game.add.text(300,420, '7 - Junior F. Castle', {font:'20px ', fill:'#fff'});
     game.add.text(300,470, '8 - Maria Mayara', {font:'20px ', fill:'#fff'});
     game.add.text(300,520, '9 - George Santos', {font:'20px ', fill:'#fff'});

     game.add.text(700,540, 'Voltar = ENTER ', {font:'15px ', fill:'#fff'});

    this.enter = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    this.enter.onDown.add(this.voltarAoMenu, this);

    },
    update: function() {



    },
    voltarAoMenu: function(){
        return game.state.start('menu');

    }
}