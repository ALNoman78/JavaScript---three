// let number = 1;

// while (number <= 10) {
//   console.log("This number is print because of the condition is true", number);
//   number++;
// }

// let x = 1;

// while (x <= 6) {
//   console.log("Print because of condition true", x);
//   x++;
// }

// let even = 40;

// while (even <= 100) {
//   console.log("This is even number", even);
//   even++;
// }

let num1 = 1;
let sum = 0

while(num1 <= 10){
    console.log(num1)
    sum += num1; // sum = sum + num1 ( 0 + 1) = 1
//                                   (1 + 2) = 3
//                                   (3 + 3) = 6
    console.log("Total value", sum)
    num1++ // this value all last condition
}



// how to print even number using while loop

let x = 1;

while(x <= 100){
    console.log(x)
    if (x % 2 === 0) {
        console.log("even", x);
    } else {
        
    }
    x++
}
