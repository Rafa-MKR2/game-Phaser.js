Options = {
    create:function() {
        // Reseta game.word
        game.world.setBounds(0, 0,GameConfig.width, GameConfig.height);

        var bg = game.add.sprite(
            game.world.centerX, 
            GameConfig.mobile ? 190 : game.world.centerY,'bg'); 
       bg.anchor.set(.5);
       bg.fixedToCamera=true;
 
    game.add.text(game.world.centerX,20, 'Game Option', {font:GameConfig.titleFont, fill:'#fff'})
    .anchor.set(.5)

    game.add.sprite(game.world.centerX,game.world.centerY,'settingsBG').anchor.set(.5)

     game.add.text(100,540, 'Selecionar = Cima/ Baixo ', {font:'15px ', fill:'#fff'});
     game.add.text(400,540, 'trocar = Esquerda/ Direita ', {font:'15px ', fill:'#fff'});

     game.add.text(700,540, 'confirmar = ENTER ', {font:'15px ', fill:'#fff'});






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
        

    this.enter = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    this.enter.onDown.add(this.voltarAoMenu, this);

    },
   
    update: function() {



    },
    voltarAoMenu: function(){
        return game.state.start('menu');

    }
}