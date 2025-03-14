// function hello(){
//     console.log("hello");
// }
// hello();

// let age;
// function isAdult(age){
//     if(age >= 18){
//         console.log("adult");
//     }else{
//         console.log("not adult");
//     }
// }

// isAdult(prompt(`enter the age to check adult or not:`));

// function printInfo(name,age=0) {
//     console.log(`${name}'s age is ${age}`);
// }
// printInfo('satya');

// let greet = "hello"; //global scope
//  function changeGreet(){
//     let greet = 'namaste'; //function scope
//     console.log(greet);

//     function innerGreet(){
//         console.log(greet); //lexical scope
//     }

//     innerGreet();
//  }
//  console.log(greet);
//  changeGreet();

function OddOrEvenFactory(request) {
    if(request == 'odd'){
        return function(n){
            console.log(!(n%2 == 0));
        }
    }else if (request=='even') {
        return function(n){
            console.log(n%2 == 0);
        }
    }else{
        console.log("wrong request");
    }
}

let request = "odd";