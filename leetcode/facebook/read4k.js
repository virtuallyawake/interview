/*
Given a class which reads from a file in chunks of 4k, give a class which can satisfy requests for arbitrary amounts of data
4KReader

var filename = 'myfile.txt';
var reader = new 4KReader(filename);
// Returns 4K of data
var start = 0; // position of first byte
var data = reader.read(start);

// What I would like
var myArbitraryReader = new ArbitraryReader('filename');
// param: length in bytes
var arbitraryData = myArbitraryReader.read(start, 200);

var ArbitraryReader = function(filename) {
  this.filename = filename;
  this.4Kreader = new 4KReader(this.filename);

  var readLessThan4K = function(start, length)  {
    var data = 4Kreader.read(start);                                                                                                 
    return data.slice(start, start + length);  
  }

  this.read = function(start, length) {
    if (length < 4000) {
      return readLessThan4K(start, length);
    } else {
      var result = [];
      var counter = 0;
      while (length - counter > 4000) {
        var data = 4Kreader.read(counter, 4000);
	result.push(data);
	counter += 4000;
      }
      if (length - counter < 4000) {
        var data = readLessThan4K(counter, length-counter);
        result.push(data);
      }
      return result;
    }
  }
}
*/

