// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:
/* The purpose of validateCred() is to return true when an array contains digits of a valid credit card number and false when it is invalid. This function should NOT mutate the values of the original array. */
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

    return faultyComps;
}


/*Test */
console.log(validateCred(valid2));
console.log(validateCred(invalid2));
console.log(idInvalidCardCompanies(batch));
console.log(findInvalidCards(batch));


