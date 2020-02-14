"use strict";
exports.__esModule = true;
var message = 'Welcome Back';
console.log(message);
var x = 10;
var y = 20;
var sum;
var title = 'SomeTitle';
var isBeginner = true;
var total = 0;
var name = 'Joe';
var sentence = "\nHello " + name + "\nHow are you today\n";
console.log(sentence);
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ['chirs', 22];
var list3 = ['foo', 23, 'bar', 6, 7, 8];
var list4 = ['foo', 23, 'bar', 6, 7, 8];
var Color;
(function (Color) {
    Color["Red"] = "RED";
    Color["Green"] = "GREEN";
    Color["Blue"] = "BLUE";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
var randomValue = 10;
randomValue = true;
randomValue = 'Puzzo';
var myVariable = 'asdf';
var hasName = function (obj) {
    return !!obj && typeof obj === 'object' && 'name' in obj;
};
if (hasName(myVariable)) {
    console.log('Had Name', myVariable.name);
}
console.log(myVariable.toLowerCase());
myVariable.toUpperCase();
var a;
a = true;
a = 10;
var b = 20;
// b = true <<< Cant do this
b.toFixed();
// a.toFixed() <<< Cant do this
// Union Type
var multiType;
multiType = 20;
multiType = true;
multiType.valueOf();
// Any type
var anyType;
anyType = 20;
anyType = true;
// anyType.valueOf() <<< Cant do this
/* -------------------- Functions -------------------- */
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(5, 10));
add(5, 10).toFixed();
// Optional params
function add2(num1, num2) {
    if (num2) {
        return num1 + num2;
    }
    return num1;
}
console.log(add2(5));
// Default params
function add3(num1, num2) {
    if (num2 === void 0) { num2 = 0; }
    return num1 + num2;
}
console.log(add3(5));
/* -------------------- Interfaces -------------------- */
// V1
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};
fullName(p);
;
function fullName2(person) {
    console.log(person.firstName + " " + person.lastName);
}
fullName2(p);
