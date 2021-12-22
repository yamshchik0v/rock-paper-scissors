class RockPaperScissors {
   constructor (render) {
      this.render = render;
      this.variants = [ this.render.rock, this.render.paper, this.render.scissors ];
      this.playerSide = this.render.player;
      this.computerSide = this.render.computer;

      this.variants.forEach(variant => {
         variant.addEventListener('click', (e) => {
            const playerChoice = e.target.id
            this.play(playerChoice)
         })
      })
   }
   play(variant) {
      this.render.player.append('\n scissors')
      console.log(variant)
   }
}

class Render {
   constructor () {
      this.app = document.getElementById( 'app' );
      this.title = this.createElement( 'h1', 'title', '', 'Rock Paper Scissors game' );

      this.choiceBlock = this.createElement( 'section', 'choice-block' );
      this.choiceList = this.createElement( 'ul' , 'choice-list' );
      this.rock = this.createElement( 'li' , 'choice-variant', 'rock', '✊🏼' );
      this.paper = this.createElement( 'li' , 'choice-variant' , 'paper', '✋🏼' );
      this.scissors = this.createElement( 'li' , 'choice-variant' , 'scissors', '✌🏼' );

      this.choiceList.append( this.rock, this.paper, this.scissors );
      this.choiceBlock.append( this.choiceList );
      
      
      this.sides = this.createElement('section', 'sides');
      this.player = this.createElement('div', 'player-side', 'player', '');
      this.versus = this.createElement( 'div', 'versus', '', 'VS');
      this.computer = this.createElement('div', 'player-side', 'computer', '');
      this.player.append(this.createElement('div', '', '', 'Player'));
      this.computer.append(this.createElement('div', '', '', 'Computer'));

      this.sides.append(this.player, this.versus, this.computer)
      
      this.app.append(this.title);
      this.app.append(this.choiceBlock);
      this.app.append(this.sides);
      
   }

   createElement( eName, eClass, eID, eInnerText ) {
      const elem = document.createElement( eName );
      if ( eClass ) elem.classList.add( eClass );
      if ( eID ) elem.id = eID;
      if ( eInnerText ) elem.innerText = eInnerText;
      return elem
   }
}

new RockPaperScissors(new Render());
