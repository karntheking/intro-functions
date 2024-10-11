// PART 1: Declaring and Invoking Functions
function greet (name)
{
    return `Greetings ${name}, hope you are doing well today!`;
}

// call function in consooe
console.log(greet("Dor"));

// PART 2: Working with parameters and Returning Values
function addNumbers (num1, num2)
{
    return num1 + num2;
}

// call function in console
console.log(addNumbers(1,1));
console.log(addNumbers(25,25));
console.log(addNumbers(75,25));

// PART 3: Function Scope
let x = 10; // global variable

function changeValue()
{
    x = 11; // changing global variable
}

// output
console.log(x);
changeValue(); // calling function should change value of x from 10 to 11
console.log(x);

// PART 4: Closure
function outerFunction() {
    let count = 0;

    return function innerFunction() {
        count++;
        return `The count is: ${count}`;
    }
}

const counter = outerFunction(); // creating closure

// output
console.log(counter());
console.log(counter());
console.log(counter());


