/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */

/*programming hero*/

// Display sum of all the odd numbers from 91 to 129. (using for loop)

let sum = 0;

// for(let i = 91; i <= 129 ; i++){
//     if(i % 2 !== 0 ){
//         console.log("91 to 129 using for loops odds number", i);
//         sum += i;
//     }
// }
// console.log("91 to 129 all odd number sum", sum)


// same thing using while loops

// let num = 91 

// while(num <= 129){
//     if(num % 2 !== 0){
//         console.log(num);
//         sum += num;
//     }
//     num++;
// }
// console.log("The value of sum = ", sum)


//Display sum of all the even numbers from 51 to 85. (using for loops) 

// for(let ev = 51; ev <= 85; ev++){
//     if (ev % 2 === 0) {
//         console.log("using for loops 51 to 85" ,ev)
//         sum += ev;
//     }
// }
// console.log("The sum of 51 to 85 is =", sum)


// same thing using while loops  

let x = 51;
while (x <= 85){
    if (x % 2 === 0) {
        console.log("the value of 51 to 85", x)
        sum += x;
    }
    x++;
}
console.log("The sum of 51 to 85 using for loops =", sum)