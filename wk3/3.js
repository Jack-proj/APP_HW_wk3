//object--1
var person = {
    firstname:'Jack',
    lastname:'Lu',
    greet: function(){
        console.log(`Hello,${this.firstname} ${this.lastname}`);
    }
};
person.greet();
console.log(person['firstname']);

//object--2
let name, phone;
let info = {
    name:name,
    phone:phone,
    printInfo:function(){
        console.log(`Name: ${this.name}, Phone: ${this.phone}`);
    }
}
info.name = 'ntue';
info.phone = '1234-5678';
info.printInfo();

//object--3
let name, phone;
let info = {
    name,
    phone,
    printInfo(){
        console.log(`Name: ${this.name}, Phone: ${this.phone}`);
    }
}
info.name = 'ntue';
info.phone = '1234-5678';
info.printInfo();
