/*
Problem 1:
Write a function that takes a string as input and returns a new string with the first letter of each word capitalized.

Example:
Input: "hello world"
Output: "Hello World

Problem 2:
Write a function that takes a string as input and returns the reverse of the string, maintaining the case of each character.

Example:
Input: "Hello World"
Output: "dlroW olleH"

Write a function that takes a string as input and returns the number of occurrences of each character in the string as an object.

Example:
Input: "hello"
Output: { h: 1, e: 1, l: 2, o: 1 }

Write a function that generate the username of the user based on Firstname, Middlename and Lastname
Input - ankit Dilipji Jain
Output - ADJ

Write a function that takes an array of numbers as input and returns a new array with all the even numbers removed.

Example:
Input: [1, 2, 3, 4, 5, 6]
Output: [1, 3, 5]

Problem :
Write a function that takes an array of strings as input and returns a new array with only the strings that have a 
length greater than or equal to 5.

Example:
Input: ["apple", "banana", "grape", "orange", "kiwi"]
Output: ["apple", "banana", "orange"]

Write a function that takes an array of numbers as input and returns a new array with only the unique elements (remove duplicates).

Example:
Input: [1, 2, 2, 3, 4, 4, 5]
Output: [1, 2, 3, 4, 5]
*/
/*Problem 1:
Write a function that takes a string as input and returns a new string with the first letter of each word capitalized.

Example:
Input: "hello world"
Output: "Hello World*/
/*let text = "hello world welcome to salesforce";
console.log(text);
let textarray = text.split(" ");
console.log(textarray);*/
/*let t1 = textarray[0].split("");
let t2 = textarray[1].split("");
console.log(t1, t2);
let tt1 = t1[0].toUpperCase() + t1.slice(1).join("");
let tt2 = t2[0].toUpperCase() + t2.slice(1).join("");
console.log(tt1, tt2);*/
//let result = textarray[0][0].toUpperCase() + textarray[0].slice(1) + " " + textarray[1][0].toUpperCase() + textarray[1].slice(1);
//console.log("Result: ", result);
let text = "hello world";
console.log(text);
/*let capitalizeFirstLetter = (inputstring) => {
    let stringarray = inputstring.split(" ");
    let stringmap = stringarray.map((curritem) => curritem[0].toUpperCase() + curritem.slice(1));
    let resultString = stringmap.join(" ");
    console.log(stringarray);
    console.log(stringmap);
    console.log(resultString);
};*/
let capitalizeFirstLetter = (inputstring) => {
    let result = inputstring.split(" ").map(curritem => curritem[0].toUpperCase()+curritem.slice(1)).join(" ");
    console.log(result);
};
capitalizeFirstLetter(text);

/*Problem 2:
Write a function that takes a string as input and returns the reverse of the string, maintaining the case of each character.

Example:
Input: "Hello World"
Output: "dlroW olleH"*/
let reverseString = (input) => {
    /*let revarray = input.split("");
    console.log(revarray);
    let revrev = revarray.reverse();
    console.log(revrev);
    let result = revrev.join("");
    console.log(result);*/
    let result = input.split("").reverse().join("");
    console.log(result);
};
reverseString(text);

/*Problem3:
Write a function that takes a string as input and returns the number of occurrences of each character in the string as an object.

Example:
Input: "hello"
Output: { h: 1, e: 1, l: 2, o: 1 }*/
const countCharacter = (input) => {
    let inputArray = input.split("");
    console.log(inputArray);
    let output = {};
    for(let curritem of inputArray){
        if(output.hasOwnProperty(curritem)){
            output[curritem] = output[curritem] + 1;
        }
        else{
            output[curritem] = 1;
        }
    }
    console.log(output);
};
countCharacter("hello");

/*Problem 4:
Write a function that generate the username of the user based on Firstname, Middlename and Lastname
Input - ankit Dilipji Jain
Output - ADJ*/
let userName = (inputStr) => {
    console.log(inputStr);
    let userArray = inputStr.split(" ");
    let resultUser = userArray[0][0].toUpperCase()+userArray[1][0].toUpperCase()+userArray[2][0].toUpperCase();
    console.log(resultUser);
};
userName("priya devi ashok");

/*Problem 5:
Write a function that takes an array of numbers as input and returns a new array with all the even numbers removed.

Example:
Input: [1, 2, 3, 4, 5, 6]
Output: [1, 3, 5]*/
let removeEvenNumber = (input) => {
    console.log(input);
    let oddOutput = [];
    for(let curritem of input){
        //console.log(curritem);
        if(curritem%2!==0){
            oddOutput.push(curritem);
        }
    }
    console.log(oddOutput);
};
removeEvenNumber([1, 2, 3, 4, 5, 6]);

/*Problem 6 :
Write a function that takes an array of strings as input and returns a new array with only the strings that have a 
length greater than or equal to 5.

Example:
Input: ["apple", "banana", "grape", "orange", "kiwi"]
Output: ["apple", "banana", "orange"]*/
let greaterString = (input) => {
    console.log(input);
    let resultArray = [];
    for( let curritem of input){
        //console.log(curritem);
        if(curritem.length >= 5){
            resultArray.push(curritem);
        }
    }
    console.log(resultArray);
};
greaterString(["apple", "banana", "grape", "orange", "kiwi"]);

/*Problem 7:
Write a function that takes an array of numbers as input and returns a new array with only the unique elements (remove duplicates).

Example:
Input: [1, 2, 2, 3, 4, 4, 5]
Output: [1, 2, 3, 4, 5]*/
let removeDuplicate = (input) => {
    console.log(input);
    let result = [...new Set(input)];
    console.log(result);
};
removeDuplicate([1, 2, 2, 3, 4, 4, 5]);
