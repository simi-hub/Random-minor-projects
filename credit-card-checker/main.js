/* 
Author: Sinmi
Date: Sometime in May 2023
*/

/* This program is a short program that checks the validity of a credit card number. The entirety of this program is written in main.js because it is quite short. Details of each of this function and what it does, is in the ReadMe file that is in the same directory as main.js. This short program can be useful for websites that have to validate credit card numbers when making purchases. Enjoy!*/


/*The purpose of validateCred() is to return true when an array contains digits of a valid credit card number and false when it is invalid. This function does NOT mutate the values of the original array. */
const validateCred = (arr) => {
    let sum = 0;
    let newArr = [];
    let lastElem = arr.pop(); /*check digit*/

    arr.reverse();

    /* Iterating through current array and doubling and subtracting as necessary */
    for (let i = 0; i < arr.length; i++){
        if (i % 2 == 0)
            newArr[i] = doubleAndSubtract(arr[i]);
        
        else
            newArr[i] = arr[i];
    }
    /* Fixing original array back since it has been modified*/
    arr.reverse();
    arr.push(lastElem);

    /* Addding the preserved check digit back to the array */
    newArr.push(lastElem);


    /* Checking for edge cases*/
    if (newArr.length >= 1)
        sum = newArr.reduce((accumulator, currVal) => accumulator + currVal);
    
    else if (newArr.length == 1)
        sum = newArr[0];

    /*checking modulo*/
    return (sum % 10 == 0)
}

/*Helper function*/
function doubleAndSubtract(num) {
    num *= 2; /*doubles the number*/

    /*if num > 9, 9 is subtracted from num*/
    if (num > 9)
        num -= 9
    
    return num;
}

/*This function is to check through the nested array for which numbers are invalid, and return another nested array of invalid cards.*/ 
const findInvalidCards = (array) => {
    return array.filter(arr => validateCred(arr) == false);
}

/* After finding all the invalid credit card numbers, it’s also necessary to identify the credit card companies that have possibly issued these faulty numbers. Create a function, idInvalidCardCompanies() that has one parameter
for a nested array of invalid numbers and returns an array of companies.*/
const idInvalidCardCompanies = invalidNums => {
    let faultyComps = [];

    for (let i = 0; i < invalidNums.length; i++){
        let currNum = invalidNums[i];

        /*Amex starts with 3 */
        if (currNum[0] == 3) {
            if (!faultyComps.includes("Amex"))
                faultyComps.unshift("Amex");
        }

        /*Visa starts with 4*/
        else if (currNum[0] == 4) {
            if (!faultyComps.includes("Visa"))
                faultyComps.unshift("Visa");
        }

        /*MasterCard with 5*/
        else if (currNum[0] == 5) {
            if (!faultyComps.includes("MasterCard"))
                faultyComps.unshift("MasterCard");
        }

        /* Discover with 6*/
        else if (currNum[0] == 6) {
            if (!faultyComps.includes("Discover"))
                faultyComps.unshift("Discover");
        }

        else
            console.log("Company not found");
            
    }

    return faultyComps.join(' ');
}

module.exports = {validateCred, findInvalidCards, idInvalidCardCompanies};