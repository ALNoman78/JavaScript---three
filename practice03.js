

/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */



// sub-task 01

let x = 81;
let sum = 0;
while( x <= 131){
    // console.log(x)
    if( x % 3 === 0){
        console.log("81 to 131 all odd number", x)
    }
    sum += x;
    x++;
}
console.log("The sum of 81 to 131 odd number sum", sum)
// sub-task 02

let y = 206

while(y <= 311){
    // console.log(y)
    if(y % 2 === 0){
        console.log("206 to 311 even number", y)
    }
    y++
    sum += y
}
console.log("The sum of 206 to 311 all even number sum", sum)