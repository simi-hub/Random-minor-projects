/*
Author: Sinmi
Date: Sometime in May, 2023 
*/

/* if confused about what this program does, briefly glance through the ReadMe file in the same directory that this main.js is. Dont wanna rewrite again ~lol~
 */

const _ = {

    /*This method modifies a given number to be within certain bounds
    It takes 3 parameters: num, upperbound and lowerbound, and modfifies num
    based on the bounds.*/
    clamp(num, lower, upper){
        let clampedNum = 0;

        /*Use of ternary operators. This helps with practice*/
        clampedNum = (num < lower) ? lower :
                     (num > upper) ? upper :
                     num
        
        return clampedNum;
    },

    /* This boolean method checks if the parameter number is between the range of start and end. It does this by testing the return value of the clamp method. i.e clamp(). if end value is not provided, start value is set to 0 and end value becomes the start value. It also checks to verify that end value is larger than start. if this is not true, both values are swapped.*/
    inRange(num, start, end) {
        let valid = false;

        /*Verifying valid parameters*/
        if (typeof end === "undefined") {
            end = start;
            start = 0;
        }

        /* Swappping if start value > end value*/
        else if (start > end) {
            let temp = start;
            start = end;
            end = temp;
        }

        /*Now we check if num falls in the range of start and end*/
        valid = (start <= num && num < end)          

        return valid;
    },

    /* Similar to the word method in lodash library. However, this simply
    splits the string and returns an array of each individual word
    in the string. This is achieved using built in string method*/
    words(string) {
        return string.split(' ');
    },

    /* This method takes two arguments: a string and a length. It adds spaces evenly to both sides of the string to make it reach the desired length.Extra padding is added to the end of the string if an odd amount of padding is required to reach the specified length. */
    pad(str, strlen) {
        let paddedStr = '';

        /* Checking the length of string to know whether padding is rewuired or not*/
        if (strlen < str.length)
            paddedStr = str;
        
        else {
            let startPadLen = Math.floor((strlen - str.length) / 2);
            let endPadLen = strlen - str.length - startPadLen;
            
            /* Now that we have figured out where to pad, and how much character to pad by at start and end, we do padding below. We also concatenate the given string after padding at the start*/
            paddedStr = ' '.repeat(startPadLen) + str + ' '.repeat(endPadLen);
        
        }

        return paddedStr       
    },

    /* This method takes two arguments: an object and a key. It checks to see if the provided object contains a value at the specified key. has() will return true if the object contains a value at the key and will return false if not. */
    has(object, key) {
        /* Checks if key is an actual valid key in object */
        let flag = (key in object);
        
        return flag;
    },

    /* This method takes one argument: an object. It iterates through each key / value pair in the provided object and swaps the key and value.*/
    invert(object) {
        const invertedObject = {};

        /* Getting all the keys that are currently in object */
        let objectKeys = Object.keys(object);

        /*Getting all the corresponding values currently in object */
        let objectValues = Object.values(object);

        /* Populating our inverted object. Here we use values from parameter object as keys in our inverted object */
        for (let i = 0; i < objectKeys.length; i++)
            invertedObject[objectValues[i]] = objectKeys[i];
            
        return invertedObject;
    },

    /* This method takes two arguments: an object and a predicate function — a function that returns a boolean value. It iterates through each key / value pair in the provided object and calls the predicate function with the value. It also returns the first key that has a value that returns a truthy value from the predicate function. This method returns undefined if no values return truthy values from the predicate function. */
    findKey(object, predicate) {
        let found;
        let objectKeys = Object.keys(object);

        /* Iterating through object keys. Observe the terminating conditions */
        for (let i = 0; i < objectKeys.length &&
                                        typeof (found) === 'undefined'; i++){

            /*Gets the value of current key at each iteration */
            let value = object[objectKeys[i]];
            
            /* Checks if predicate returns a truthy value */
            if (predicate(value))
                found = objectKeys[i]
        }

        return found;
    },

    /*This method works on arrays. It akes two arguments: an array and a number representing the number of items to drop from the beginning of the array. It returns a new array which contains the elements from the original array, excluding the specified number of elements from the beginning of the array.
    If the number of elements to drop is unspecified, the method drops one element.*/
    drop(array, num) {
        let result = {};

        /* Checks if num was undefined, using splice, it simoly returns every element after index 1, in the array */
        if (typeof (num) === 'undefined')
            result = array.splice(1);
        
        /* Else, it uses splice to return all elements from the 'num_th' index to the end of the array. Since we are working with zero indexing, it goes up to array.length - 1  */
        else
            result = array.splice(num);
        
        return result;
    },

    /*This method takes two arguments: an array and a predicate function.
    The supplied predicate function takes three arguments: the current element, the current element index, and the whole array. It creates a new copy of the supplied array, dropping elements from the beginning of the array until an element causes the predicate function to return a falsy value */
    dropWhile(array, predicate) {
        let result = {};
        let flag = true;

        // /*Iterating through array, observe that we are looking for the falsy value that predicate can return*/
        let start = array.findIndex((element, index, array) =>
                            !predicate(element, index, array));

        /*Result now contains values from original array, starting from 'start' index to end of array */
        result = this.drop(array, start);

        return result;  
    },

    /*chunk() takes two arguments: an array and a size. It breaks up the supplied array into arrays of the specified size. It also returns an array containing all of the previously-created array chunks in the order of the original array. If the array can’t be broken up evenly, the last chunk will be smaller than the specified size. If no size is supplied to the method, the size is set to 1. */
    chunk(array, size) {
        let result = []
        let i = 0;
        
        /* Checks if size is givem, if not, it sets it to 1 */
        if (typeof (size) === 'undefined')
            size = 1;
        
        /*Iterates array.length number of times */
        while (i < array.length) {
            /* Creates a chunk of the array with length of 'size' */
            let subArr = new Array(size);

            /*Stores the value of each index at that array chunk */
            subArr = array.slice(i, i + size);

            /*Could have used unshift, but order matters here */
            result.push(subArr);

            /*Increase iterator by szie */
            i += size;
        }
        
        return result;
    }

};


module.exports = _;