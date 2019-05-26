/*
Find out if a string has all unique characters
Input: a string
Output: true/false depending on if it has all unique characters

Example:
"anna"  => false
"daniel" => true
*/

function hasAllUniqueCharacters(str) {
  var array = str.split("");
  var table = {};
  for (var i=0; i<array.length; i++) {
    var char = array[i];
    if (table[char])
      return false;
    else
      table[char] = 1;
  }

  return true;
}

console.log(hasAllUniqueCharacters("anna"));
console.log(hasAllUniqueCharacters("daniela"));
