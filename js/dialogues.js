
           var dialogue = game.add.image( 
            GameConfig.mobile ?
            porcentagem(50,window.innerWidth) : porcentagem(35,window.innerWidth),
        
            porcentagem(15,window.innerHeight),'dialogue')
             dialogue.anchor.set(.5);
             dialogue.fixedToCamera=true;

           var haiku2 = "Aporta estar trancada...";
           var text2 = game.add.text(porcentagem(48,window.innerWidth), 40, haiku2,  { font:'15px superstar',wordWrap: true, wordWrapWidth: dialogue.width,  fill: '#ffffff'});
           text2.lineSpacing = 1;
           text2.setTextBounds(10, 10, dialogue.width, dialogue.height);
           text2.anchor.set(.5);
           text2.fixedToCamera=true;
         