Recordes = {
    create:function() {

    game.add.text(game.world.centerX,40, 'Recordes', {font:'40px ', fill:'#fff'})
    .anchor.set(.5)

      
     game.add.text(game.world.centerX,120, '1 - Rafael D.Carmo', {font:'20px ', fill:'#FFD700'})
     .anchor.set(.5)
     game.add.text(game.world.centerX,170, '2 - Thiago L. Silva', {font:'20px ', fill:'#C0C0C0'})
     .anchor.set(.5)
     game.add.text(game.world.centerX,220, '3 - Carla Tanara', {font:'20px ', fill:'#B22222'})
     .anchor.set(.5)
     game.add.text(game.world.centerX,270, '4 - Samuel Santos', {font:'20px ', fill:'#fff'})
     .anchor.set(.5)
     game.add.text(game.world.centerX,320, '5 - Danis Souza', {font:'20px ', fill:'#fff'})
     .anchor.set(.5)
     game.add.text(game.world.centerX,370, '6 - Matheus Carmo', {font:'20px ', fill:'#fff'})
     .anchor.set(.5)
     game.add.text(game.world.centerX,420, '7 - Junior F. Castle', {font:'20px ', fill:'#fff'})
     .anchor.set(.5)
     game.add.text(game.world.centerX,470, '8 - Maria Mayara', {font:'20px ', fill:'#fff'})
     .anchor.set(.5)
     game.add.text(game.world.centerX,520, '9 - George Santos', {font:'20px ', fill:'#fff'})
     .anchor.set(.5)

     game.add.text(700,540, 'Voltar = ENTER ', {font:'15px ', fill:'#fff'});

    this.enter = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    this.enter.onDown.add(this.voltarAoMenu, this);



    if(GameConfig.mobile==true){
        game.add.button(
          porcentagem(70,window.innerWidth),
          porcentagem(70,window.innerHeight), 'buttonA', null, this, 4, 2, 0);
    
          game.add.button(
            porcentagem(85,window.innerWidth),
            porcentagem(70,window.innerHeight), 'buttonB', this.voltarAoMenu, this, 1, 1, 0);
    
         game.add.button(
            porcentagem(10,window.innerWidth),
            porcentagem(50,window.innerHeight), 'buttonUp', null,this);
    
         game.add.button(
              porcentagem(15,window.innerWidth),
              porcentagem(65,window.innerHeight), 'buttonRight', null,this);
           
         game.add.button(
                porcentagem(3,window.innerWidth),
                porcentagem(65,window.innerHeight), 'buttonLeft', null, this);
           
         game.add.button(
                  porcentagem(10,window.innerWidth),
                  porcentagem(75,window.innerHeight), 'buttonDown',null, this)
              
        }
        

    },
    update: function() {



    },
    voltarAoMenu: function(){
        return game.state.start('menu');

    }
}