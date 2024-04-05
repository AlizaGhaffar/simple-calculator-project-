#! /usr/bin/env node

import inquirer from "inquirer";
const answer = await inquirer.prompt([
{message:"Enter first number", type: "number", name:"firstName"},
{message:"enter second number", type: "number", name: "secondName"},

{
    message: "select one of the operator to perform action",
    type: "list",
    name : "operators",
    choices: ["Addition", "Substraction", "Multiplication", "Division"],
}
]);
//condition statement
if(answer.operators=== "Addition"){
    console.log( answer.firstName + answer.secondName);
}
else if (answer.operators=== "Substraction"){
    console.log( answer.firstName - answer.secondName);
}
else if (answer.operators=== "Multiplication"){
    console.log( answer.firstName * answer.secondName);
}
else if (answer.operators=== "Division"){
    console.log( answer.firstName / answer.secondName);

}
else{
    console.log("please select valid operators")
};
