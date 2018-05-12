/*************************************************************************************************
                              INTERMEDIATE ALGORITHM SCRIPTING: CODECAMP 
                              CODED BY CHARLES ZEPP
*************************************************************************************************/

/*
WHEREFORE ART THO?

Make a function that looks through an array of objects (first argument) and returns an array of all objects 
that have matching property and value pairs (second argument). Each property and value pair of the source 
object has to be present in the object from the collection if it is to be included in the returned array
*/
function whatIsInAName(collection, source) {
  // goes through collection and compares to source
  var arr = collection.filter(function(item){
    
    //for loop to loop through and compare each source item with collection item
    for( var i in source){
      
      //if source item does not equal collection item return false, keep looping
      if(source[i] != item[i]){
        return false;
      }
    }
    
    //return true when item equals source item
    return true;
  });
  
  // Only change code above this line
  return arr;
}

//test
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

/*
SEARCH AND REPLACE

Perform a search and replace on the sentence using the arguments provided and return the new sentence.
*/
function myReplace(str, before, after) {
  
  //gets the index of searched item
  var index = str.indexOf(before);
  
  //if searched item is Uppercase then replacement should also be Uppercase
  if(before[0] === before[0].toUpperCase()){
    
    //id searched item is Upper than convert replacement to uppercase and then replace
        after = after.replace(after[0], after[0].toUpperCase());
      }
  
  //replace searched item with replacement
  str = str.replace(before, after);
  
  return str;
}

//test
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

/*
PIG LATIN

Translate the provided string to pig latin.
Pig Latin takes the first consonant (or consonant cluster) of an English word, 
moves it to the end of the word and suffixes an "ay".
*/
function translatePigLatin(str) {
  
  var regex = /[aeiou]/gi;//regex for vowels
  var pigLatinStr = '';
  
  //if string starts with vowel
  if(str[0].match(regex)){
    
    // string stays with addition of 'way'
    pigLatinStr = str + 'way';
    
  } else { // if string doesnt start with vowel
    
    //finds the index of the first vowel
    var vowel = str.indexOf(str.match(regex)[0]);
    
    //string before vowel is added to end and then 'ay' is added to that
    pigLatinStr = str.substr(vowel) + str.substr(0, vowel) + 'ay';
  }
  
  return pigLatinStr;
}

//test
translatePigLatin("california");
translatePigLatin("eight"); 

/*
BASE PAIRS

The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
*/
function pairElement(str) {
 
 //map of element pairs 
 var basePairs = {A: 'T', T: 'A', C: 'G', G: 'C'};
 var arr = str.split('');
 
  arr.forEach(function(element, index){
    
    //goes through each char in string and adds its correct element using basePair map
    arr[index] = [element, basePairs[element]];
  });
  
  return arr;
}

//test
pairElement("GCG");
//retuns  [["G", "C"], ["C","G"],["G", "C"]]


/*
MISSING LETTER 

Find the missing letter in the passed letter range and return it.
*/
function fearNotLetter(str) {
  
  //loops through each char in string
  for(var i = 0; i < str.length; i++){
    
    //assigns each char code to asccii 
    var ascii = str.charCodeAt(i);
    
    //then checks if there is no iteration in char code
    // which means there is a missing letter
    if (ascii !== str.charCodeAt(0) + i){
      
      //returns said missing letter and converts ascii to char 
      return String.fromCharCode(ascii - 1);
    }
  } // end for
  
   return undefined;// returns undefined all letters a present in range
}

fearNotLetter("abce");
fearNotLetter("bcd");

/*
BOO WHO

Check if a value is classified as a boolean primitive. Return true or false.
*/
function booWho(bool) {
  //checks if parameter is of the boolean type
  return typeof bool === 'boolean';
}

booWho(true); //true
booWho("false"); //false b/c it is a string

/*
SORTED UNION

Write a function that takes two or more arrays and returns a new array of unique values
in the order of the original provided arrays.
*/
function uniteUnique(arr) {
  
  var finalArr = [];
  
  //puts argumnets in an array
  var args = Array.prototype.slice.call(arguments);
  
  
  finalArr = 
    
    //reduce function flattens array
    args.reduce(function(a, b){
    
      //use filter array to prevent duplicates
      return a.concat(b.filter(function(item){
        
          //returns item if not in array/ prevents duplicates
          return a.indexOf(item) === -1;
        
        }));//end filter
    });//end reduce
  
  return finalArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
//returns [1, 3, 2, 5, 4]

/*
HTML ENTITIES 

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/
function convertHTML(str) { 
  
  //use regex and replace method for each entitie on str
    str = str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
  
  return str;
}

convertHTML("Sixty > twelve"); //returns   Sixty &​gt; twelve
convertHTML('Stuff in "quotation marks"'); //returns   Stuff in &​quot;quotation marks&​quot;

/*
SPINAL TAP CASE

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes
*/
function spinalCase(str) {
  
  return str.split(/\s+|_+|(?=[A-Z])/).join('-').toLowerCase();
  
  //  \s+ spaces
  //  \_+ underscores
  //  ?=[A-Z] ptr followed by an UpperCase
}

spinalCase('This Is Spinal Tap');
//returns this-is-spinal-tap

/*
SUM ALL ODD FIBONACCI NUMBERS

Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
*/
function sumFibs(num) {
  
  //initial vaules 
  var prev = 0;
  var curr = 1;
  
  // varible to return
  var odds = 0;
  
  //while current value is less than or equal to given number
  while (curr <= num){
    
    // if current value is not even
    if (curr % 2 !== 0){
      //add to odd # sum
      odds += curr;
    }
    
    //else current value equals current + previous
    curr += prev;
    // and previous is current - previous
    prev = curr - prev;
  }
  
  return odds;
}

sumFibs(4); // returns 5

/*
FIBONACCI SEQUENCE
*/
// returns an array of fibonacci sequence of given number n
var fibonacci = function(n){

    if (n === 1){
        return [0, 1];

    } else {
        //var s = most recent #
        var s = fibonacci(n - 1);

        //adds recent # to previous # and returns it
        s.push(s[s.length -1] + s[s.length -2]);
        return s;
    }
};
console.log(fibonacci(8)); // returns array of fib sequence

/*
SUM ALL PRIMES

Sum all the prime numbers up to and including the provided number
*/
function sumPrimes(num) {

  if (num === 1){
      return 0;
  }

  //if not prime
  if(isPrime(num) === false){
    //check nect number down from max
      return sumPrimes(num -1);
  }

  // if number is prime
  if(isPrime(num) === true){
    //add that number to the next prime number through recursice call
      return num + sumPrimes(num -1);
  }
}

//checks if number inputed is prime or not
function isPrime(){

 for (var i = 2; i <= num; i++){

     if(num % i === 0 && num != i){
       return false;
     }
 }//for
   return true;
}//isPrime func

 sumPrimes(10);

/*
FINDERS KEEPERS

Create a function that looks through an array (first argument)
and returns the first element in the array that passes a truth test (second argument).
*/

function findElement(arr, func) {
  
  //filter arr using the a func(2nd parameter)
  var filter = arr.filter(func);
  
  return filter[0];//return the first element to pass truth test
}

findElement([1, 3, 5, 8, 9, 10], function(num){ return num % 2 === 0; });

/*
DROP IT

Drop the elements of an array (first argument)
starting from the front, until the predicate (second argument) returns true.

The second argument, func, is a function you'll use to test the first elements 
of the array to decide if you should drop it or not.
*/
function dropElements(arr, func) {
  
  while(arr.length > 0 && !func(arr[0])){
    arr.shift();
  }
  
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });






