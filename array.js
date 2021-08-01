var countries =["India","USA","Japan","France"];
var states =new Array("Tamilnadu","Delhi","Mumbai","AP");
console.log(states);
console.log(states.length);
console.log(states[0]);
states[1] = "Telungana"
console.log(states);
console.log(countries.length);
console.log(countries);
var user = ["Pooja","poojakadhir@co.in",3,34,true];
// console.log(user); ---> not a proper structure
user.pop();  //pop out last element
console.log(user);
user.unshift("NEW VALUE"); //a value to be included at beginning
console.log(user);
user.shift("NEW VALUE");
console.log(user);  //to remove value from beginning
console.log(user.indexOf(3));
console.log(Array.from("Pooja"));