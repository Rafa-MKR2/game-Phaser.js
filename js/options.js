Options = {
    create:function() {

    game.add.text(320,20, 'Opções de Jogo', {font:'40px ', fill:'#fff'});


    game.add.text(350,220, 'Musica : |||||||||||||||||||||||||', {font:'20px ', fill:'#fff'});
    game.add.text(350,270, 'Sons : |||||||||||||||||||||||||', {font:'20px ', fill:'#fff'});
    game.add.text(350,320, 'Video : |||||||||||||||||||||||||', {font:'20px ', fill:'#fff'});



     game.add.text(100,540, 'Selecionar = Cima/ Baixo ', {font:'15px ', fill:'#fff'});
     game.add.text(400,540, 'trocar = Esquerda/ Direita ', {font:'15px ', fill:'#fff'});

     game.add.text(700,540, 'confirmar = ENTER ', {font:'15px ', fill:'#fff'});

    this.enter = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    this.enter.onDown.add(this.voltarAoMenu, this);

    },
    option: function() {

        if (pointer.y < 100)
        {
            music.mute = false;
        }
        else if (pointer.y < 300)
        {
            music.volume += 0.1;
        }
        else
        {
            music.volume -= 0.1;
        }
    
    },
    update: function() {



    },
    voltarAoMenu: function(){
        return game.state.start('menu');

    }
}