//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

var Person = function(name, age){
	this.name = name;
	this.age = age;
}


//Now create three instances of Person with data you make up

var mark = new Person("Mark", 27);
var whitney = new Person("Whitney", 24);
var caleb = new Person("Caleb", 22);


//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

Person.prototype.sayName = function(){
	alert("The user's name is " + this.name)
};
