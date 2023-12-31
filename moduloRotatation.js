
// function hello(str, amt){
//     let blank = "";
//     let rotated = "";
//     let random = (str.length-amt)%(str.length)

//     for(let i = random; i < str.length; i++){
//         rotated += str[i];
//     }
//     for(let j = 0; j <random; j++ ){
//         blank += str[j];
//     } return rotated + blank;
//
// console.log(hello(str, 30));

//  solution #2
const str = "Hello World";
const rotateAmnt1 = 0;
const expected1 = "Hello World";

const rotateAmnt2 = 1;
const expected2 = "dHello Worl";

const rotateAmnt3 = 2;
const expected3 = "ldHello Wor";

const rotateAmnt4 = 4;
const expected4 = "orldHello W";

const rotateAmnt5 = 13;
const expected5 = "ldHello Wor";
function rotateStr(str, amnt) {
    let temp = '';

    for (var i = 0; i < str.length; i++){
        let newIndex = (str.length-(amnt%str.length)+i)%str.length;
        temp += str[newIndex];
    }

    return temp
}


console.log(rotateStr(str, 13));
console.log(rotateStr(str, 0));
console.log(rotateStr(str, 2));
console.log(rotateStr(str, 4));


/* 
    String: Rotate String

    Create a standalone function that accepts a string and an integer,
    and rotates the characters in the string to the right by that given
    integer amount.
*/


/* 
Explanation: this is 2 more than the length so it ends up being the same
as rotating it 2 characters because after rotating every letter it gets back
to the original position.
*/

/**
 * Rotates a given string's characters to the right by the given amount,
 * wrapping characters to the beginning.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @param {number} amnt The amount of characters in the given str to rotate to the
 *    right.
 * @returns {string} The string rotated by the given amount.
 */
function rotateStr(str, amnt) {
    // Get Coffee. ☕
    // Build a for loop to itterate through the letters.
    // Use ammount to check which letter to start with. (To start pushing to a result/rotatedstring variable)
    // Using ammount to start a loop?
    // If we use the ammount subtracted by the length, we'll find the start of our rotation. 
    // Taking the values after the ammount index and removing them/appending them to the original string minus the values at the end.

    // We'll need variables for the rotated String, and possibly temps to hold our removed values.

}

/*****************************************************************************/


/* 
    Create the function isRotation(str1,str2) that
    returns whether the second string is a rotation of the first.
*/

const strA1 = "ABCD";
const strB1 = "CDAB";
// Explanation: if you start from A in the 2nd string, the letters are in the same order, just rotated
const expected6 = true;

const strA2 = "ABCD";
const strB2 = "CDBA";
// Explanation: all same letters in 2nd string, but out of order
const expected7 = false;

const strA3 = "ABCD";
const strB3 = "BCDAB";
// Explanation: same letters in correct order but there is an extra letter.
const expected8 = false;

/**
 * Determines whether the second string is a rotated version of the first.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean} Whether the second string is a rotated version of the 1st.
 */
function isRotation(s1, s2) {

}

/*****************************************************************************/