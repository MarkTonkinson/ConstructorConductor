/*
  Your 3 Users will be the following. 
    0) Tyler, tylermcginnis33@gmail.com, 'iLoveJS'
    1) Cahlan, cahlan@devmounta.in, 'iLoveHashtags'
    2) Lenny, lenny@theLenster.com, 'iLoveLentilSoup'
*/

var User = function(name, email, pw){
  this.name = name;
  this.email = email;
  this.pw = pw;
}

//Create an Array called 'users' that will store all our instances of User.

var users = [];


//Now create and push into your users array 3 seperate instances of User using the data from above in that exact order

var tyler = new User("Tyler", "tylermcginnis33@gmail.com", 'iLoveJS');
users.push(tyler);
console.log('Tyler\'s information is ' , users[0]);
//Console.log all of Tylers information

var cahlan = new User("Cahlan", "cahlan@devmounta.in", "iLoveHashtags");
users.push(cahlan);

var lenny = new User("Lenny", "Lenny@theLenster.com", "iLoveLentilSoup");
users.push(lenny);
console.log('Lenny\'s information is ' , users[2]);
//Now console.log all of Lennys information

  //code here


//Now create another instance of User using your own information and then add that to your users array.

var mark = new User("Mark", "mark@gman.com", 27);
users.push(mark);

//Now loop through your users Array and console.log every users name. 



for (var i = 0; i < users.length; i++) {
  var userName = users[i].name;
  console.log('All my users names are ' , userName);
}





