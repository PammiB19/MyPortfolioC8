console.log("Hello World");

let myString = "a2b3c";
console.log(myString); 
console.log(typeof myString);

let myNumVar = 123;
console.log(typeof myNumVar);

console.log(10 + " eggs");
console.log(10 + 5 + " eggs");
console.log("eggs " + 10 + 5);

console.log(5<2)&&(5>3);
console.log(10>3)||(10>11);
console.log(!5>3);


let EC = 1.2; 
if(EC > 1.8){
    console.log("Plant is Dying!");
}else{
    console.log("The plant is healthy!")
}

//Conditional Statement Format
//Console.log to print out on dev tools console
//Alert to print out on the top box
// let age = prompt("Enter your age");
// if(age<18){
//     alert("You are a minor");
// }else if(age<60){
//     alert("You are an adult");
// }else{
//     alert("Damn you're really old");
// }


function introduction(name, age){
    console.log("Hello my name is " + name +
        ". I am " + age + " years old.")
}

introduction("Bob", 71)
introduction("Pammi", 76)

var str = "4678.987";
var intVal = parseInt(str);
console.log(intVal);

var floatVal = parseFloat(str);
console.log(floatVal);

var str = "I love tech class"
console.log(str.toUpperCase());
console.log(str.slice(5,9));
console.log(str.indexOf("c"));

var techClass = ["Sebastian", "Agona", "Karan", "John"];
console.log(techClass[2]);
