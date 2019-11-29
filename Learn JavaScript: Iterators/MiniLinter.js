let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

//SPLIT THE STRING INTO INDIVIDUAL WORDS
let storyWords = story.split(' ');

//LOG HOW MANY WORDS THERE ARE IN THIS STORY
console.log('word count = '+storyWords.length);

//FILTER OUT UNNECESSARY WORDS & SAVE THE REMAINING WORDS IN AN ARRAY CALLED BETTERWORDS 
let betterWords = storyWords.filter(words => {
    return words != 'extremely' && words != 'literally' && words != 'actually'; 
});


//FILTER OUT OVERUSED WORDS IN A NEW ARRAY 
let overusedWordsArr = storyWords.filter(words => {
  return words === 'really' || words === 'very'|| words === 'basically';  
});

//& FIND OUT HOW MANY TIMES THEY HAVE USED THEM
console.log('overused words = '+overusedWordsArr.length);


//FIND OUT HOW MANY SENTENCES ARE IN THE PARAGRAPH
let sentences = storyWords.filter(word => {
  let res = []; 
  for(let i=0; i<word.length; i++) {
   res = word[i] === "." || word[i] === "!"; 
  }
  return res;
});
//& COUNT THEM
console.log('sentences = ' +sentences.length);

//LOG THE BETTERWORDS ARRAY TO THE CONSOLE AS A SINGLE STRING
console.log(betterWords.join(' '));



//FOR OVERUSED WORDS, REMOVE IT EVERY OTHER TIME IT APPEARS
for(let i=0; i<storyWords.length; i++) {
  //find the first index of each word 
  let indexOfExtremely = storyWords.indexOf('extremely');
  let indexOfVery = storyWords.indexOf('very');
  let indexOfBasically = storyWords.indexOf('basically');
  
  //keep the first index of overused words and remove the other duplicates
  if(storyWords[i] === 'extremely' && i !=indexOfExtremely ) {
    storyWords.splice(i, 1);
  }
  
  else if(storyWords[i] === 'very' && i !=indexOfVery) {
    storyWords.splice(i, 1);
  }
  
  else if(storyWords[i] === 'basically' && i !=indexOfBasically) {
    storyWords.splice(i, 1);
  }
  
}

//WRITE A FUNCTION THAT FINDS THE WORD THAT APPEARS THE GREATEST NUMBER OF TIMES
let myWords = story.split(" ");

let frequent = frequentNumber = (arr) => {
let counts = {};
let compare = 0;
let mostFrequent;

for(let i=0; i<arr.length; i++) {
  let word = arr[i];
  
  if(counts[word] === undefined) {
    counts[word] = 1;
  } else {
    counts[word] = counts[word] + 1;
  }
  
  if(counts[word] >compare) {
    compare = counts[word];
    mostFrequent = myWords[i];
  }
}

return mostFrequent;
  

}

console.log("THE FREQUENT WORD IS:");
console.log(frequent(myWords));


//REPLACE OVERUSED WORDS WITH RANDOM REPLACEMENT WORDS
function replaceOverusedWords(arr) {
for(let i=0; i<arr.length; i++) {
  if(arr[i]==='really' || arr[i]==='very'|| arr[i]==='basically') {
    let replace = ['verily', 'truthfully',
'truly',
'positively',
'indeed',
'genuinely',
'fairly'];
    let random = Math.floor(Math.random()*replace.length);
    arr[i] = replace[random];

  }
}
  return arr;
}
console.log("REPLACE OVERUSED WORDS WITH RANDOM REPLACEMENT WORDS");
console.log(replaceOverusedWords(myWords).join(" "));







    
  




