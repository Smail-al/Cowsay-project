const information = require('./information');
console.log(`Hi, my name is ${information.name} and I'm a ${information.campus} student`);


const cowsay = require ("cowsay");
console.log (cowsay.say( { 
    text : "Nice to meet you !", 
    e : "oO" , 
    T : "U " 
} ) ) ;