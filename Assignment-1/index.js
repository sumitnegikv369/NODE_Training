const { add, sub, mult, div } = require("./lib/math");
const readline = require("readline-sync");
const fs = require("fs");

const num1 = parseInt(readline.question("Enter First Number: "));
const num2 = parseInt(readline.question("Enter Second Number: "));

const addResult = add(num1, num2);
const subResult = sub(num1, num2);
const multResult = mult(num1, num2);
const divResult = div(num1, num2);

fs.writeFile("solution.csv", `${num1} + ${num2}: ${addResult}\n${num1} - ${num2}: ${subResult}\n${num1} * ${num2}: ${multResult}\n${num1} / ${num2}: ${divResult}\n`, (err) => {
    if (err) throw err;
    console.log('Saved!');
})
