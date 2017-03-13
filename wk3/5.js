//bind--1
var person1 = {
    firstname:'Jack',
    lastname:'Lu',
    getFullName: function(){
        var fullname = this.firstname+' '+this.lastname;
        return(fullname);
    }
}

var logName = function(){
    console.log('logged: '+this.getFullName());
}

var logPersonName = logName.bind(person1);
logPersonName();

//bind--2
let greet = function(fn){
    fn();
};
let person2 = {
    name:'Jack',
    hello: function(){
        console.log(`Hello ${this.name}`);
    },
    sayHello: function(){
        greet(this.hello);
    }
};
person2.sayHello();

//bind--3
let greet2 = function(fn){
    fn();
};
let person3 = {
    name:'Jack',
    hello2: function(){
        console.log(`Hello ${this.name}`);
    },
    sayHello2: function(){
        greet2(this.hello.bind(this));
    }
};
person3.sayHello2();

//bind--3
let greet3 = function(fn){
    fn();
};
let newPerson = {
    name:'Jack',
    sayHello: function(){
        greet3(
            ()=>console.log(`Hello ${this.name}`)
        );
    }
};
newPerson.sayHello();
