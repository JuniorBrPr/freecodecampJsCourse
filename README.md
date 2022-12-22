# JavaScript Algorithms and Data Structures
## Description
A set of excersises made for the [Freecodecamp.org](https://freecodecamp.org "Freecodecamp's Homepage") JavaScript Algorithms and Data Structures certificate.


## Certificate
[Link to certificate](https://freecodecamp.org/certification/ottertummys/javascript-algorithms-and-data-structures)

## Projects

* ### Cash Register
  This function calculates the change due from a cash transaction and determines the denominations of the change.

  #### Usage
  To use the function, call `checkCashRegister(price, cash, cid)`, where:

    `price`: the cost of the item being purchased.
    `cash`:the amount of cash being given by the customer.
    `cid`: an array of the available denominations in the cash register and their corresponding values.

  The function will return an object with two properties:

    `status`: a string representing the status of the transaction. It can be "OPEN" if the cash register has sufficient funds to give the change, "CLOSED" if the cash register has exactly the amount needed for the change, or "INSUFFICIENT_FUNDS" if the cash register does not have enough funds to give the change.
    `change`: an array of the denominations and their corresponding values for the change. It will be an empty array if the status is "INSUFFICIENT_FUNDS".

  Example
    ```javascript
    checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
    // returns {status: "OPEN", change: [["QUARTER", 0.5]]}

    checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
    // returns {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}

    checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
    // returns {status: "INSUFFICIENT_FUNDS", change: []}
    ```

* ### Palindrome Checker
    This function checks if a given string is a palindrome, which means it reads the same forwards and backwards.

  #### Usage
    To use the function, call palindrome(str), where str is the string you want to check. The function will return a boolean value: 
    true if the string is a palindrome, and false if it is not.

  #### Example:

    ```javascript
    palindrome("eye"); // returns true
    palindrome("racecar"); // returns true
    palindrome("hello"); // returns false
    ```

* ### Roman Numeral Converter
    This function converts a given number to its equivalent Roman numeral representation.

  #### Usage
    To use the function, call convertToRoman(num), where num is the number you want to convert. The function will return a string containing the Roman numeral representation of the input number.

  #### Example

    ```javascript
    convertToRoman(1); // returns "I"
    convertToRoman(4); // returns "IV"
    convertToRoman(999); // returns "CMXCIX"
    ```
  
* ### Caesar Cipher
    This function applies a Caesar cipher to a given string, shifting the letters by 13 places.

  #### Usage
    To use the function, call rot13(str), where str is the string you want to cipher. The function will return a string containing the ciphered version of the input string.

  #### Example

    ```javascript
    rot13("HELLO"); // returns "URYYB"
    rot13("URYYB"); // returns "HELLO"
    ```
  
* ### Telephone Number Validator
    This function checks if a given string is a valid telephone number.

  #### Usage
    To use the function, call telephoneCheck(str), where str is the string you want to check. The function will return a boolean value: true if the string is a valid telephone number, and false if it is not.

  #### Example

    ```javascript
    telephoneCheck("555-555-5555"); // returns true
    telephoneCheck("(555)555-5555"); // returns true
    telephoneCheck("1 555-555-5555"); // returns true
    telephoneCheck("5555555555"); // returns true
    telephoneCheck("555-5555"); // returns false
    ```

