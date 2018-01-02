class Page {
  constructor(bookName, pageNumber, lineArray){
    this.bookName = bookName;
    this.pageNumber = pageNumber;
    this.lineArray = lineArray;
  }
// run function foo

// di

}

class PageMaker {
  constructor(bookName, str){
    this.bookName = bookName;
    this.str = str;
    this.pages = [];
  }
  pageGenerator(bookName, str){
    const lineArray = [];
    const newPage = new Page(this.bookName, this.pages.length);

      return newPage;
  }
}



// function displayPage(){
//
//
// }
const player = {
  name: 'Jill',
  health: 100,
  // other player attributes
  items: [],
  experience: 0,
  plotNode: 'plotNode1A'
};

const game = {

  start: function(){

  },
  decrementHealthBy: function(decrementer){
    player.health = player.health - decrementer;
    if(player.health <= 0){
      this.death();
    }
    console.log("Jill's health is "+ player.health);
  },
  incrementExperience: function(incrementer){

  },
  addItem: function(item){
    // switch (item){
    //   case
    // }
  },
  death: function(){
    console.log("Jill has died");
  },
  plotSelector: function(){

  },
//  display

}

const plotNode1A = {
  //
  lineArray: ['Jack and Jill', 'Both went up the hill', 'To fetch a pail of water', 'Jack fell down','And broke his crown','And Jill came tumbling after'],
    giveItem: function(choice){
      player.items.push(choice);
      switch (choice) {
        case 'water':
        game.decrementHealthBy(100);
        break;
        case 'parachute':
        player.plotNode = "plotNode1B";
        break

        default: console.log("something is wrong with your code")



      }
    }

}

const plotNode1B = {
      lineArray: ['Jack and Jill', 'Both went up the hill', 'To fetch a couple of parachutes', 'Jack fell down','And pulled his parachute','And Jill pulled hers and came floating down after'],
      lineIterator: function(){
          for(let i=0; i<this.lineArray.length; i++)
          {
            console.log(this.lineArray[i]);
          }
      }
}
let i = 0;
function lineIterator(){
   let node = player.plotNode

    console.log(plotNode1A.lineArray[i]);

  if(i ===2) {
     let choice = prompt("what does Jack fetch, a couple of parachutes 'parachute' or a pail of water 'water'?")

     switch(choice) {
     case 'water':
     console.log("triggered");
       plotNode1A.giveItem('water')
       break;
     case 'parachute':
       plotNode1B.lineIterator()
       break;
       

     }

   }
     i++
}
