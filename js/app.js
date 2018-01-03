
// constant that stores the length of the line to be displayed
const charactersPerLine = 50;
const wordsPerPage = 600;
// test text string
let testString = "Jack and Jill \n Went up the hill \n To fetch a pail of water \n Jack fell down \n And broke his crown, \n And Jill came tumbling after"


// class that makes pages
class Page {
  // constructor for the Page class that stores the name of the book, the page number, the array that stores each line
  constructor(bookName, pageNumber, lineArray){
    // name of the book
    this.bookName = bookName;
    // stores page number
    this.pageNumber = pageNumber;
    // stores array of lines
    this.lineArray = lineArray;
  }
// run function that parses the page text into lines
lineGenerator(
const lineArray = [];
// di

}
// class that is a factory for pages (page class above)
class PageMaker {
  // constructor for the PageMaker factory that stores the name of the book, and allows for rawText to be parsed into pages
  constructor(bookName, rawText){
    // name of the book
    this.bookName = bookName;
    // stores raw text
    this.rawText = rawText;
    // stores pages in an array of large strings to be later parsed into lines in the page class variable: lineArray
    this.pages = [];
  }
  // function that makes a page
  pageGenerator(bookName, rawText){
    // variable newPage stores the instantiation of the Page class in the PageMaker Factory
    const newPage = new Page(bookName, this.pages.length);
      // do...while loop that scans the text and makes it into pages
      let arrayOfAllWords = rawText.split(" ")
        do {
          for(let i=0; i<arr.length; i++) {
            if(arr[i] == "\n"
          }
        }
        while(


      // returns the new page that has yet to be parsed into lines
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
