//Just like you can add methods to your own constructor, you can also add methods and properties to built in classes in JavaScript like Arrays and Objects.

//Add a reverse method to the String 'class' so that every instance of String can call reverse and reverse itself.

String.prototype.reverse = function(){
  return this.split("").reverse().join("");
}
var test = "this is a test";
test.reverse();

//String is like Array or Object- there is no this.string- in the string obj, "this" is the string
// split takes a string and makes it an array.  Reverse flips an array around= array doesn't need quotes
//join turns it back into a string