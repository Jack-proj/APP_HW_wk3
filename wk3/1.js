//push
let a = ["1","2"];
console.log(a);
a.push('3');
console.log(a);

//slice
let b = ['zero','one','two','three'];
let sliced = b.slice(1,3);
console.log(b);
console.log(sliced);

//foreach
var colors = ['red','green','blue'];
colors.forEach(
    (color)=>console.log(color)
);

//use forEach to add HTML elements
$(document).ready(function(){
  colors.forEach(
    (color)=>$('body').append(`<div>${color}</div>`)
  );
});

//map--1
var number = [1,2,3];
var doublenumbers;
doublenumbers = [];
doublenumbers = number.map(
    (number)=>number*2
);
console.log(doublenumbers);

//map--2
var cars = [
    {model:'Buick',price:'cheap'},
    {model:'BMW',price:'expensive'}
];

var prices = cars.map((car)=>car.price);
console.log(prices);

//spread operator--1
let array1 = [1,2,3];
let array2 = [4,5,6];
let array3 = [array1,array2];
console.log(array3);
let array4 = [...array1,...array2];
console.log(array4);

//spread operator--2
function adder(base, ...numbers){
    numbers.forEach(
        (number)=>console.log(base + number)
    );
}
adder(3,5,7,1);
