**Project Goals**

Context: The company that you work for suspects that credit card distributors have been mailing out cards that have invalid numbers. In this project, you have the role of a clerk who checks if credit cards are valid. Every other clerk currently checks using pencil and paper, but you’ll be optimizing the verification process using your knowledge of functions and loops to handle multiple credit cards at a time. Unlike the other clerks, you can spend the rest of your time relaxing!

**Functions Include**:

_ValidateCred()_: This function takes that an array as a parameter. The purpose of validateCred() is to return true when an array contains digits of a valid credit card number and false when it is invalid. This function should does mutate the values of the original array, but rather returns a copy of the array that has been modified. To find out if a credit card is valid or not, the Luhm's algorithmn is used.

_FindInvalidCards()_: This function has one parameter for a nested array of credit card numbers. The role of findInvalidCards() is to check through the nested array for which numbers are invalid, and return another nested array of invalid cards.

_IdInvalidCardCompanies()_: This function  has one parameter for a nested array of invalid numbers and it returns an array of companies that issued the invalid credit card numbers in the parameter array. The returned array do not contain any duplicates at all. It simply returns an array of companies that have mailed out cards with invalid numbers. Invalid card numbers are matched to companies by their first digit.

Currently, there are 4 accepted companies which each have unique first digits. The following table shows which digit is unique to which company. This is used in the function too:

|First Digit  | Company|  
|-----------| ------- |
| 3  | Amex (American Express)  | 
| 4  | Visa | 
| 5  | MasterCard |  
| 6  | Discover |  

 
