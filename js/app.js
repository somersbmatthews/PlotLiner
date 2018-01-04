
// constant that stores the length of the line to be displayed
const wordsPerLine = 50;
const wordsPerPage = 600;
const pageCounter = 1;
let counter = 0;
// test text string
let testString = "Jack and Jill newline Went up the hill newline To fetch a pail of water newline Jack fell down newline And broke his crown, newline And Jill came tumbling after newline";


// class that makes pages

// class that is a factory for pages (page class above)
// class PageMaker {
//   // constructor for the PageMaker factory that stores the name of the book, and allows for rawText to be parsed into pages
//   constructor(bookName, rawText){
//     // name of the book
//     this.bookName = bookName;
//     // stores raw text
//     this.rawText = rawText;
//     // stores pages in an array of large strings to be later parsed into lines in the page class variable: lineArray
//     this.pages = [];
//
//   }
const pageMaker = {
  // function that makes a page
 pageGenerator: function(rawText){
    // variable newPage stores the instantiation of the Page class in the PageMaker Factory
  //  const newPage = new Page(bookName, this.pages.length);
      // do...while loop that scans the text and makes it into pages
      let arrayOfAllWords = rawText.split(" ")
      let finalArray = [];

      for(let i=1; i<=arrayOfAllWords.length; i++) {
        if(i%wordsPerPage===0){
          arrayOfAllWords.splice((i+1),0,'\p');
        }
      }

      for(let i=0; i<arrayOfAllWords.length; i++){
        if(arrayOfAllWords[i] !== '\p') {
          finalArray.push(arrayOfAllWords[i])

        } else if(arrayOfAllWords[i] == '\p'){
          for(let i=0; i<arrayOfAllWords.length; i++){
          arrayOfAllWords.shift();
          }
        }
        this.pages.push(finalArray)
      }

      // returns the new page that has yet to be parsed into lines

      return finalArray;
  }
}

// class Page extends PageMaker {
//     // constructor for the Page class that stores the name of the book, the page number, the array that stores each line
//     constructor(pageArray, pageNumber, bookName, rawText){
//       super(bookName, rawText)
//       // name of the book
//     //  this.bookName = bookName;
//       // stores page number
//       this.pageNumber = pageNumber;
//       // array that stores every page
//       this.pageArray = pageArray;
//       // stores array of lines
//     }
// }
  // run function that parses the page text into lines
const page = {
 lineGenerator(){
   const arrayOfObjects = [];
  function turnWordsIntoObjects(pageArray){

    let wordObject = {};
       for(let i = 0; i<pageArray.length; i++){
         wordObject.word = pageArray[i];
         wordObject.index = i;
         wordObject.trigger = "";
         arrayOfObjects.push(wordObject);
         wordObject = {};
       }

   }
   turnWordsIntoObjects(this.pageArray)

   let $body = $('body')
   let lineArray = [];
   let $div = $('<div>');
         for(let i =0; i<arrayOfObjects.length; i++){
    console.log(arrayOfObjects, typeof(arrayOfObjects));
           if(arrayOfObjects[i] =="newline"){
             $div = $('<div>');
             i++;
           }

                //print a menu where the word water

              let $span = $('<span>'+arrayOfObjects[i].word+" "+'</span>');

              $body.append($div);
              $div.append($span);

              switch (arrayOfObjects[i].word){
                case 'water':
                  arrayOfObjects[i].trigger = "plotNode1A";
                  let page = new Page();
                  game.decrementHealthBy(100);
                  break;
                case 'parachute':
                  arrayOfObjects[i].trigger = "plotNode1B";
                  let page = new Page(plotNode1B.string);
                  page.lineGenerator()
                }


           }

pageMaker.pageGenerator(testString)

let pageArray = page.lineGenerator(pageArray)




const player = {
  name: 'Jill',
  health: 100,
  // other player attributes
  items: [],
  experience: 0,
  plotNode: 'plotNode1A'
};
$div = $('<div>')
$div.html(player)
$div.appendTo('body')

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
      string: "Jack and Jill, newline Both went up the hill, newLine To fetch a couple of parachutes, newline Jack fell down, newline And pulled his parachute, newline And Jill pulled hers and came floating down after",
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


$plotNode1A = $('#plotNode1A')
$plotNode1B= $('#plotNode1B')


$plotNode1A.on('click', (e)=> {
  const page = new Page(plotNode1A.lineArray);
  page.lineGenerator()

  })

$plotNode1B.on('click', (e)=> {
  const page = new Page(plotNode1B.lineArray);
    page.lineGenerator()

    })
