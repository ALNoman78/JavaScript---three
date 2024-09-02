/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */


/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

/*programming hero*/


//find all odds number 61 to 100 using for loop

// for(let x = 61; x <= 100 ; x++){
//     if (x % 2 !== 0) {
//         console.log("61 to 100 odd number is ", x)
//     }
// }

// using while loop find 61 to 100 all odd number

// let num = 61;

// while (num <= 100) {
//     if(num % 2 !== 0){
//         console.log("This odd number using while loops", num)
//     }
//     num++;
// }

// find all even number using for loops 78 to 98

// for(let e = 78 ; e <= 98 ; e++){
//     if(e % 2 === 0){
//         console.log("This is even number using for loops", e)
//     }
// }

// using while loops get even number 78 to 98

let ev = 78;
while(ev <= 98){
    if(ev % 2 === 0){
        console.log("using while loops 78 to 98", ev)
    }
    ev++;
}