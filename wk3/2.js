//callback function
function greet(callback){
    console.log('Hello');
    var data = {
        name: 'DTD'
    };
    callback(data);
}

greet(
    data=>{
        console.log('The callback worked');
        console.log(data);
});
