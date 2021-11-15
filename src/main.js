import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')



// C#
// string firstname = "Collin";
// number number1 = 5;

// ES5 DECLARATIE VARIABLES
// var firstname = "Collin";
// var name = "Van der Vorst";

// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }

// console.log(i);

// ES6 CONST VS LET 
// let firstname = "Collin";
// firstname = "Krollin";
// console.log(firstname);

// for (let index = 0; index < 10; index++) {
//   console.log(index);
// }

// if (true) {
//   var variable1 = true;
// }

// console.log(index);


// ES5 Concatenation
// var firstname = "collin";
// var lastname = "van der vorst";
// console.log(firstname + " " + lastname);

// ES6 concatenation
// let firstname = "Collin";
// let lastname = "Van der Vorst"
// let fullname = `${firstname} The Big One ${lastname}`;
// console.log(fullname);

// $"{firstname} {lastname}" =>  in C# 

// ES5 
// var person = {
//   firstname: "Collin",
//   name: "Van der Vorst",
//   sayFullname: function() {
//     console.log(this.firstname + " " + this.name);
//   }
// };

// console.log(person.firstname); // Collin
// console.log(person.name); // Van der Vorst
// person.sayFullname(); // Collin Van der Vorst

// ES6 
// let person = {
//   firstname : "Collin",
//   name: "Van der Vorst",
//   sayFullname() {
//     console.log(`${this.firstname} ${this.name}`);
//   }
// }

// console.log(person.firstname); // Collin
// console.log(person.name); // Van der Vorst
// person.sayFullname(); // Collin Van der Vorst


// ES5 
// let person = {
//   firstname: "Collin",
//   name: "Van der Vorst",
//   sayFullname() {
//     console.log(this.firstname + " " + this.name);
//   }
// };

// console.log(person.firstname); // Collin
// console.log(person.name); // Van der Vorst
// person.sayFullname(); // Collin Van der Vorst

// let getFullname = person.sayFullname.bind(person);
// getFullname();


// ES5 
// var person = {
//   firstname: "Collin",
//   name: "Van der Vorst",
//   sayFullnameAfter10seconds: function () {
//     var self = this;

//     setTimeout(function() {
//       console.log(self.firstname + " " + self.name);
//     }, 2000);
//   }
// }

// person.sayFullnameAfter10seconds();


// ES6
// const person = {
//   firstname: "Collin",
//   name: "Van der Vorst",
//   sayFullnameAfter10seconds() {
//     setTimeout(() => {
//       console.log(this.firstname + " " + this.name);
//     }, 2000);
//   }
// }

// person.sayFullnameAfter10seconds();



// ES5 function 
// var square = function (number) {
//   return number * number;
// };

// console.log(square(5));

// ES6 function
// const square = (number) => {
//   return number * number;
// };

// const square = number => {
//   return number * number;
// }; // wanneer 1 parameter hoeft de haakjes niet 

// const square = number => number * number;

// console.log(square(5));


// ES5 mapping
// ["red" , "green", "blue"]
// ["1.red", "2.green", "3.blue"]

// var colors = ["red", "green", "blue"];
// var newColors = [];

// for (var i = 0 ; i < colors.length; i++) {
//   newColors.push((i + 1) + "." + colors[i]);
// }

// console.log(newColors);

// ES6
// const colors = ["red", "green", "blue"];
// const newColors = colors.map((color, index) =>  `${index + 1}. ${color}`);

// console.log(newColors);

// ES5 Object destructuring 
// var person = {
//   firstname: "collin",
//   familyname: "van der vorst"
// };

// var firstname = person.firstname;
// var familyname = person.familyname;

// ES6
// const person = {
//   firstname: "collin",
//   familyname: "van der vorst"
// };

// const { firstname: voornaam, familyname } = person;
// console.log(voornaam, familyname);

// const colors = ["blue", "green", "red"];
// const [firstColor, secondColor] = colors;

// let person = {
//   firstname: "collin",
//   lastname: "van der vorst"
// };

// let personNew = {
//   ...person,
//   age: 30
// };

// console.log(personNew);

// OO 
// var user1 = {
//   firstname: "Collin",
//   lastname: "Van der Vorst",
//   getFullname: function() {
//     console.log(this.firstname + this.lastname);
//   }
// }

// var user2 = {
//   firstname: "Brad",
//   lastname: "Pitt",
//   getFullname: function() {
//     console.log(this.firstname + this.lastname);
//   }
// }

// user1.getFullname();
// user2.getFullname();

// ES6 Classes
import { User, Teacher } from "./js/classes/User";

let user1 = new User("Collin", "Van der Vorst");
let user2 = new User("Brad", "Pit");

user1.getFullname();
user2.getFullname();

let teacher1 = new Teacher("Collin", "Van der Vorst", "Bachelor");
teacher1.getFullname();
