class RockPaperScissors {
   constructor (render) {
      this.render = render;
      this.variants = [ this.render.rock, this.render.paper, this.render.scissors ];
      this.playerSide = this.render.player;
      this.computerSide = this.render.computer;

      this.variants.forEach(variant => {
         variant.addEventListener('click', (e) => {
            const playerChoice = e.target
            this.play(playerChoice)
         })
      })
   }
   
   play(variant) {
      const computerVariant = this.computer();
      let playerVariantIndex = this.variants.indexOf( variant );
      let computerVariandIndex = this.variants.indexOf( computerVariant )
      console.log(`my index: ${this.variants.indexOf( variant )} | computer's index ${this.variants.indexOf(computerVariant)} `);
      
      this.render.createStory( variant.id, player )
      this.render.createStory( computerVariant.id, computer )

      const result = this.winner( playerVariantIndex, computerVariandIndex );
      
      this.showResult( result )
   }

   computer() {
      function getRandom (arr) {
         return Math.floor(Math.random() * arr.length)
      }
      return this.variants[getRandom(this.variants)]
   }

   winner(playerVariantIndex, computerVariantIndex) {
      const resultMatrix = 
         [
            ['draw' , 'win'  , 'loss'],
            ['loss' , 'draw' , 'win' ],
            ['win'  , 'loss' , 'draw']
         ] // outcome of events matrix  🗿 ✂️ 🧻 
      
      return resultMatrix[computerVariantIndex][playerVariantIndex]
   }

   showResult( gameResult ) {
      const resultElem = this.render.result;
      resultElem.innerText = gameResult;

      resultElem.style.color = 'LightSlateGray'
      if ( gameResult === 'win' ) resultElem.style.color = 'SeaGreen'
      if ( gameResult == 'loss' ) resultElem.style.color = 'Crimson'
      
      return resultElem
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

      this.sides.append(this.computer, this.versus, this.player);

      this.result = this.createElement('section', 'result', '', 'tap any arm to start')


      this.app.append(this.title);
      this.app.append(this.choiceBlock);
      this.app.append(this.result);
      this.app.append(this.sides);
      
   }

   createElement( eName, eClass, eID, eInnerText ) {
      const elem = document.createElement( eName );
      if ( eClass ) elem.classList.add(eClass);
      if ( eID ) elem.id = eID;
      if ( eInnerText ) elem.innerText = eInnerText;
      return elem;
   }

   createStory(variant, side) {
      let emoji = '';
      if ( variant === 'rock' ) emoji = this.rock.textContent;
      if ( variant === 'paper' ) emoji = this.paper.textContent;
      if ( variant === 'scissors' ) emoji = this.scissors.textContent;

      const childrenArr = Array.from(side.children)
      if (childrenArr.length >= 7 ) {
         console.log('codition true')
         childrenArr[childrenArr.length - 1].remove()
         childrenArr.pop()
      }
      childrenArr.forEach(e => e.classList.remove('history-current'));

      let currentElem = this.createElement('div', 'history', '' , emoji);
      currentElem.classList.add('history-current');

      side.firstElementChild.after(currentElem);
   }
}

new RockPaperScissors(new Render());
