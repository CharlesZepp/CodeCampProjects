/*************************************************************************************************
                              BASIC ALGORITHM SCRIPTING: CODECAMP 
                              CODED BY CHARLES ZEPP
*************************************************************************************************/

/*Reverse a String*/
function reverseString(str) {
	var arr = str.split('');
		arr.reverse();

	return arr.join('');
}

/*Factorial Function*/
function factorialize(num) {
  //base 
  	if ( num === 0 || num == 1){
  		return 1;
  	} 
 	 else{ //recusrsion
  		return num * factorialize(num-1);    
 	 }
  return num;
}

/*Palindrome*/
function palindrome(str) {
  // reverses string
  	var rev = str.split('').reverse().join('').toLowerCase();
  		rev = strip(rev);
  //original string
  	var str1 = str.split('').join('').toLowerCase();
  		str1 = strip(str1);
  
  // compares strings
 	 if (str1 !== rev){
  		return false;
 	 } 
 	 else{
  		return true;
 	 }
}

//strips aplhanumeric chars
function strip(x){
	var newStr = x.replace(/[^0-9a-z]/g, '');

	return newStr;
}

/*Finds the longest word in string and returns length*/
function findLongestWord(str) {
	var arr = str.split(" ");
	var result = arr[0];

	for (var i = 0; i < arr.length; i++){
		if (arr[i].length > result.length){
			result = arr[i];
		} 
	}
	return result.length;
}


/*Capitalizes every words first letter*/
function titleCase(str) {
	var arr = str.split(' ');

	for (var i = 0; i < arr.length; i++){
		arr[i] = cap(arr[i]);
	}

	return arr.join(' ').toString();

}

// capatilizes a single string
function cap(x){
	var array = x.toLowerCase().split('');
		array[0] = array[0].toUpperCase();

	return array.join('');

}


/*REturns the largest number in array*/

function largestOfFour(arr) {
  var large = [];
  
  for (var i = 0; i < arr.length; i++){
    large.push(Math.max.apply(Math, arr[i]));
  }
  
  return large;
  
}

//test
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


/*Function to determine whether a string ends with a target */
function confirmEnding(str, target) {
  
  var x = target.length;
  var y = str.length;
  
  var z = str.substring(y, y-x);
  
  if (target === z){
    return true;
  } else {
    return false;
  }
}
//test
confirmEnding("Bastian", "n");

/*Function to trunc a string*/
function truncateString(str, num) {
 var dots = "...";
  
  if (num <= 3){
    str = str.slice(0, num);
    str = str.concat(dots);
    return str;

  } else
    
    if (num < str.length){
      str = str.slice(0, num - dots.length);
      str = str.concat(dots);

      return str;
    } else
  
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);


/*Function seperates arrays into smaller array chunks in another array (multi dime array) */
function chunkArrayInGroups(arr, size) {
  var place = [];
  
    if (arr.length < 0){
      return place;
      
  } else{
      while(arr.length > 0){
       place.push(arr.splice(0, size));
    }
 }
   return place;
}

//test
chunkArrayInGroups(["a", "b", "c", "d"], 2);


/*Checks to see if [1] chars are in [0] chars */
function mutation(arr) {
  
  var x = arr[0].toLowerCase();
  var y = arr[1].toLowerCase();
  
  for (var i = 0; i < y.length; i++){
    if (x.indexOf(y[i]) < 0){
      return false;
    }
  }
  return true; 
}
mutation(["hello", "hey"]);

/*Filters out false values (NaN, "". false, 0 ..etc)*/

function bouncer(arr) {
  return arr.filter(Boolean);
}

/* Function to remove stated numbers in array*/

function destroyer(arr) {
  
  var args = Array.prototype.slice.call(arguments);
  
  for ( var i = 0; i < arr.length; i++){
    for (var j = 0; j < args.length; j++){
      if (arr[i] === args[j]){
        delete arr[i];
      }
    }
  }
  return arr.filter(Boolean);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);//test

/*Function for returning the index of properly inserted number in array*/

function getIndexToIns(arr, num) {
  var count = 0;
  var times = arr.length;

  for (var i =0; i < times; i++){
    if (num >arr[i]){
      count++;
    }
  }
   return count;
}

getIndexToIns([40, 60], 50);

/*Ceasars Cipher*/
function rot13(str) {
  var charArr = [];
  var pattern = /[A-Z]/;
  
  str = str.split("");
  
  for (var x in str){
    if (pattern.test(str[x])){

      // example suppose str[x] in ASCII is 65(A) and finding the remainder from 26 letters(alphabet) will result in the offest value
      // taking this offsetvalue and adding it to the starting value of 65(A) will result in the correct letter with a shift of 13
      charArr.push((str[x].charCodeAt() - 65 + 13) % 26 + 65);
    } else{
       charArr.push(str[x].charCodeAt());
    }
  }
  
  str = String.fromCharCode.apply(String, charArr);
  return str;
}
// Change the inputs below to test
rot13("SERR PBQR PNZC");








