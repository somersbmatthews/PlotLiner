
// constant that stores the length of the line to be displayed
const wordsPerLine = 50;
const wordsPerPage = 600;
const pageCounter = 1;

// test text string
let testString = "Jack and Jill newline Went up the hill newline To fetch a pail of water newline Jack fell down newline And broke his crown, newline And Jill came tumbling after newline";

const player = {
  name: 'Jill',
  health: 100,
  // other player attributes
  items: [],
  experience: 0,
  plotNode: 'plotNode'
}

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
  setTimeout(function(){
    $('body').empty();
    $div = $('<div>Jill has Died</div>')
    $('body').append($div)
  },500)
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

        default:
        console.log("something is wrong with your code")
      }




    }

}

const plotNode1B = {
      string: "Jack and Jill, newline Both went up the hill, newline To fetch a couple of parachutes, newline Jack fell down, newline And pulled his parachute, newline And Jill pulled hers and came floating down after."
}
const plotNode2A = {
      string: "Jill has died"
}
const plotNode2B = {
      string: "Jill survived"
}
// class that makes pages
const pageMaker = {
  // function that makes a page
  pageArray: [],
  pages: [],
  spanArray:[],
 pageGenerator: function(rawText){
    // variable newPage stores the instantiation of the Page class in the PageMaker Factory
  //  const newPage = new Page(bookName, this.pages.length);
      // do...while loop that scans the text and makes it into pages
      let arrayOfAllWords = rawText.split(" ")
      let finalArray = [];
      let pageArray = [];
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
        this.pages.push(finalArray);
      }

      // returns the new page that has yet to be parsed into lines

      this.pageArray = finalArray;
  }
}


const page = {
  replacementArray: [],
  arrayOfObjects: [],
  spanArray: [],
  words: [],
  start: function(){
    page.lineGenerator(pageMaker.pageArray);
    page.display();

  },
  continue: function(newText){

    pageMaker.pageGenerator(newText);

    page.lineGenerator();
    page.display();
  },
 lineGenerator: function(){
   let words = [];
   let arrayOfObjects = [];
    let spanArray = [];
    let wordObject = {};
    this.arrayOfObjects = [];
       for(let i = 0; i<pageMaker.pageArray.length; i++){
         wordObject.word = pageMaker.pageArray[i];
         wordObject.index = i;
         wordObject.trigger = "";
         this.arrayOfObjects.push(wordObject);
         wordObject = {};
       }
    //   console.log(this.arrayOfObjects);
         let $body = $('body')
         let lineArray = [];
         let $div = $('<div id="textbox">');
         $body.append($div);
         // console.log(this.arrayOfObjects.length);
         // console.log(this.arrayOfObjects);
            for(let i =0; i<this.arrayOfObjects.length; i++){

            //  console.log(this.arrayOfObjects);
              if(this.arrayOfObjects[i].word != 'newline'){
              // const $span = $('<span></span>');
              // $span.text(sentArray[i])
            //  console.log(this.arrayOfObjects[i]);
            this.words.push(this.arrayOfObjects[i].word);
              this.spanArray.push('<span>' + this.arrayOfObjects[i].word + " " + '</span>')
            } else {
              this.words.push("newline")
              this.spanArray.push('<br>')
            }
          }

        },
display: function(){
// console.log(this.words.length, this.spanArray.length);
      for(let i = 0; i<this.spanArray.length; i++){

        if(this.checkForNode(this.words[i],this.words[i+1],this.words[i+2],this.words[i+3])) {

             let phrase = this.words[i]+' '+this.words[i+1]+' '+this.words[i+2]+' '+this.words[i+3];
           console.log(phrase+" is the check phrase");

              let $spanmenu = $('<span class="dropdown"></span>');


              let $button = $('<button class="dropbtn">'+phrase+'</button>')

            let $div = $('<div class="dropdown-content" </div>');
            // first list item option

            let  $a1 = $('<a href="#"id='+'A'+'>'+phrase+'</a>');
            // second list item option
            let $a2 = $('<a href="#"id='+'B'+'>'+this.replacementArray[0]+'</a>');



              // appends the things to the DOM
              $div.append($a1)
              $div.append($a2)
              // id textbox is the to the only div on the screen
              $($button).append($div)

              $spanmenu.append($button)
              $('#textbox').append($spanmenu)


              i = i+4;
              this.checkChoice(player.plotNode);
        }
        let $span = $(this.spanArray[i])
        $('#textbox').append($span);
      }
      console.log(this.spanArray);
      this.spanArray = [];
      this.words = [];


    },
    checkForNode: function(word1, word2, word3, word4){
      let phrase = word1 +' '+ word2 +' '+ word3 +' '+ word4;

        switch(phrase){
          case "To fetch a pail":
            this.replacementArray = ["To fetch a couple of parachutes"]
            player.plotNode = "plotNode1"
            return true
          break;
          case "a couple of parachutes,":
            console.log("found a couple of parachutes");
            $button = $('<a href="#" id="continue1">Continue</a>');
            $('body').append($button);
            $('#continue1').click(function(){
              player.plotNode = "plotNode2";
              player.choice = "A"
              plotNode = player.plotNode + player.choice + ".string"
              console.log(plotNode);
              console.log("triggered");
            page.continueButton(plotNode)
            })

            break;
          case "Jack picked it up.":
          this.replacementArray = ["To fetch a couple of parachutes"]

          break;


            return false
          default: return false;
        }
    },
    checkChoice: function(plotNode){
        switch (plotNode){
          case "plotNode1A":
          player.plotNode = "plotNode1";
          player.choice = "A";
          //pageMaker.pageGenerator(testString);
          game.decrementHealthBy(100);

          break;
          case "plotNode1B":
           plotNodeChoiceVariable = eval(plotNode + ".string");
          page.continue(plotNodeChoiceVariable);
          console.log("this parachute choice works");
          break;
          case "plotNode2A":
          plotNodeChoiceVariable = eval(plotNode + ".string");
          page.continue(plotNodeChoiceVariable);
          break;
          case "plotNode2B":
          player.plotNode = "plotNode2";
          player.choice = "B";
          plotNodeChoiceVariable = eval(plotNode + ".string");
        //  console.log("this works");
          break;

          default:


        }
    },
    continueButton: function(plotNode){

      setTimeout(function(){
        $('body').empty();
        $div = $('<div>Jill has survived</div>')
        $('body').append($div)
      },500)
    //   switch (plotNode){
    //     case "plotNode1":
    // //    console.log("button1 was triggered");
    //     $('body').empty();
    //       page.continue(plotNode2A.string);
    //
    //   }
    }

}

pageMaker.pageGenerator(testString);

page.start();

$('#A').on('click', (evt)=>{
player.choice = "A";
let plotNodeChoice = player.plotNode + player.choice;
page.checkChoice(plotNodeChoice);
//console.log("chose A");
page.start();
})


$('#B').on('click', choiceB)

function choiceB() {
//   console.log("chose B");
$('body').empty();
//console.log("choice B event listener works");
  setTimeout(function() {
  player.choice = "B";
//console.log(player.plotNode + player.choice);

   page.checkChoice(player.plotNode + player.choice);
   // page.continue(plotNodeChoiceVariable);

 }, 500);
}

//
// $('#C').on('click', choiceC);
//
// function choiceC(){
//
// }
//
// $('#D').on('click', choiceD);
//
// function choiceD(){
//
//
// }
