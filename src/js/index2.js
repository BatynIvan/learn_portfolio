// let name = 'Ivan';
// let this1;
// this1 = name;
// alert(this1);

// let userName = prompt('Як вас звати?');
// alert(userName);

// function ask(question, yes, no) {
//   if(confirm(question)) yes()
//   else no();
// }
// function showOk() {
//   alert('Ви погодились.');
// }
// function showCancel() {
//   alert('Ви скасували виконання.');
// }
// ask('Ви згодні?', showOk, showCancel);

// let sum = (a, b) => a + b;
// alert(sum(1, 2));

// let user = {};
//   user.name = "Ivan",
//   user.surname = "Smit"
//   user.name = "Petro";
// delete user.name;
// console.log(user.name);

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// let sum = 0;
// for (let key in salaries) {
//   sum += salaries[key];
// }
// console.log(sum);

// const user = {
//   name: 'Іван',
//   age: 30,
//   addres: 'Uzhhorod',
// };
// const user1 = JSON.parse(JSON.stringify(user));
// user1.addres = 'Sasovo';
// // if (user === user1) {
// console.log('lsls');
// }
/* user1.addres = 'Uzhhorod'; */
// console.log(user.addres === user1.addres);
// const obj = {};
// const obj1 = {};
// const obj2 = {
//   a: 'Uzhhorod',
// };
/* console.log(obj === obj1); */

// let menu = {
//   width: 200,
//   height: 300,
//   title: 'Моє меню',
// };
// multiplyNumeric(menu);
// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] == 'number') {
//       obj[key] *= 2;
//     }
//     console.log(obj[key]);
//   }
// };

// let calculator = {
//   read() {
//     this.a = +prompt('Введіть a?', 0);
//     this.b = +prompt('Введіть b?', 0);
//   },

//   sum() {
//     return this.a + this.b;
//   },

//   mul() {
//     return this.a * this.b;
//   },
// };

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

// const user = {
//   name: 'Ivan',
//   secondName: 'Batyn',
//   address: 'Uzhhorod',
// };
// console.log(user);

// for (let key in user) {
//   console.log(key + ' : ' + user[key]);
// }
// let this1 = 'Ivan';
// this1 = 123;
// const key = 'name';
// const this1 = {};
// // this1.name = 'Ivan';
// this1[key] = 'Ivan';
// this1['go'] = function(){};
// console.log(this1);


function User(name, secondName, address) {
  // {}
  this.name = name;
  this.secondName = secondName;
  this.address = address;
  this.say = function() {
    console.log('Hello ' + this.name);
  }
  this.printAll = function() {
    // console.log(this.name);
    // console.log(this.secondName);
    // console.log(this.address);
    for (const key in this) {
      if (typeof this[key] !== 'function') {
        console.log(key + ' : ' + this[key], typeof this[key]);
      }
    }
  }
};
const user1 = new User('Ivan', 'Batyn', 'Uzhhorod');
user1.printAll();
const user2 = new User('Misha', 'Chovban', 'Sasovo');
user2.printAll();