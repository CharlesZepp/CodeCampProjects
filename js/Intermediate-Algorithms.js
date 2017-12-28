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

