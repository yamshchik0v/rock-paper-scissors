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
      console.log(variant)
      this.render.createStory(variant, player)
      this.render.createStory('scissors', computer)
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
      this.player.append(this.createElement('div', 'side-title', '', 'Player'));
      this.computer.append(this.createElement('div', 'side-title', '', 'Computer'));

      this.sides.append(this.computer, this.versus, this.player)
      // this.sides.append(this.player, this.versus, this.computer)
      
      this.app.append(this.title);
      this.app.append(this.choiceBlock);
      this.app.append(this.sides);
      
   }

   createElement( eName, eClass, eID, eInnerText ) {
      const elem = document.createElement( eName );
      if ( eClass ) elem.classList.add(eClass);
      if ( eID ) elem.id = eID;
      if ( eInnerText ) elem.innerText = eInnerText;
      return elem
   }

   createStory(variant, side) {
      let emoji = '';
      if ( variant === 'rock' )  emoji = '✊🏼';
      if ( variant === 'paper' )  emoji = '✋🏼';
      if ( variant === 'scissors' )  emoji = '✌🏼';
      Array.from(side.children).forEach(e => e.classList.remove('history-current'))
      let currentElem = this.createElement('div', 'history', '' , emoji);
      currentElem.classList.add('history-current');
      side.firstElementChild.after(currentElem)
      
      
   }
}

new RockPaperScissors(new Render());
