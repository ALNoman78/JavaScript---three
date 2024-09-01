/*Subtask-1:

Find all the odd numbers from 61 to 100.

 */


/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

/*programming hero*/

// sub-task 01

let odd = 61

while(odd <= 100){
    console.log(odd);
    if (odd % 3 === 0) {
        console.log("This is odd number", odd);
    }
    odd++
}

// sub task 02

let x = 78

while(x <= 100){
    console.log(x)
    if(x % 2 === 0){
        console.log("This is even number", x)
    }
    x++
}