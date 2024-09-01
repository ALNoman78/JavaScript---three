// system to find odd number

// for (let i = 1; i < 10; i+=2) {
//     console.log(i);
// }

// system 2

// for (let x = 1; x < 10; x++) {
//     if(x % 2 === 1){
//         console.log(x)
//     }
// }

// system 3


// for (let x = 1; x < 10; x++) {
//     if(x % 2 !== 0){
//         console.log(x)
//     }
// }

// new 5 modulus 0

// for (let a = 1; a <= 30; a++) {
//     if( a % 5 === 0){
//         console.log(a)
//     }
// }

//  3 / 5 % 0

// for (let a = 1; a <= 30; a++) {
//     if( a % 5 === 0 || a % 3 === 0 ){
//         console.log(a)
//     }
// }

// 1-30 3%0 sum give me the sum of the number divisible by 3

let sum = 0;

for(let m = 1; m <= 30 ; m++){
    if (m % 3 === 0) {
        console.log(m) // print hoar stha shta addition hoite thakbe
        sum += m;
    }
}
console.log("The sum of 1 to 30 and it alway modulus 3", sum)