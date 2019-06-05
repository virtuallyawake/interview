/**
 * @param {string} digits
 * @return {string[]}
 */

var appendCharacters = function(str, digit, arr) {
    var characters = getCharacters(digit);
    characters.forEach(function(char) {
        arr.push(str + char);
    });
}
// input: "a", "3"
// output: ["ad", "ae", "af"]

var getCharacters = function(digit) {
    var table = {
        "2": ['a','b','c'],
        "3": ['d', 'e', 'f'],
        "4": ['g', 'h', 'i'],
        "5": ['j', 'k', 'l'],
        "6": ['m', 'n', 'o'],
        "7": ['p', 'q', 'r', 's'],
        "8": ['t', 'u', 'v'],
        "9": ['w', 'x', 'y', 'z']
    };
    return table[digit];  // ["a", "b", "c"]
}

var letterCombinations = function(digits) {
    if (digits.length === 0)
        return [];
    var array = digits.split('');
    var output = getCharacters(array[0]);  // ["a", "b", "c"]
    var tmp = [];    

    for(var i=1; i<array.length; i++) {
        var digit = array[i];
        
        for(var j=0; j<output.length; j++) {
             appendCharacters(output[j], digit, tmp);
        }
        output = tmp;
        tmp = [];
    }
    
    return output;
};
