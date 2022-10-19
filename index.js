// function programming

var currenyOne =100;
var currenyTwo =0;
var currenyRate =1.2;
function converCurrency (amount , rate){
    return amount*rate;
};



var globalVar = 77;

function scopeTest() {
    var localVar = 88;
}

// console.log(localVar);



function meal(animal) {
    animal.food = animal.food + 10;
}

var dog = {
    food: 10
};
meal(dog);
meal(dog);

// console.log(dog.food);

function two() {
    return 2;
}

function one() {
    return 1;
}

function calculate(initialValue, incrementValue) {
    return initialValue() + incrementValue() + incrementValue();
}

console.log(calculate(two, one));

// var result = null;
// console.log(result);

// // T  -2

// try{
//     console.log('Hello');
// }catch(err){
//     console.log('Goodbye');
// };

// // t-3

// var x;
// if( x === null){
//     console.log('null');

// }else if( x === undefined){
//     console.log('undefined');
// }else{
//     console.log("ok");
// }

// // t-4

// throw new Error();
// console.log("hello");


var x ={};


var burger = ["bun", "beef", "lettuce", "tomato sauce", "onion", "bun"];
 console.log(burger[2]);



// var bicycle = {
//     wheels: 2,
//     start: function() {

//     },
//     stop: function() {

//     }
// };


 try{
     throw new Error();
//     console.log("Hello");
// }catch(err){
//     console.log("Goodbye");
// }4");​



var str = 'Hello'
str.match('jello');

try{
    Number(5).toPrecision(300)
}catch(e){
    // console.log("There was an errow");
}