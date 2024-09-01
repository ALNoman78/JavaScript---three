// for loop and if break

// for (let x = 1; x < 100; x++) {
//     console.log(x);
//     if( x >= 5){
//         break;
//     }
// }

// decrement

// let num  = 100
// while (num >= 12) {
//     if (num < 70 ) {
//         break;
//     }
//     console.log(num);
//     num--
// }


// continue => skip this iteration

// for (let e = 1; e < 15; e++) {
//     if (e % 2 !== 0) {
//         continue
//     }
//     console.log("continue will skip if condition",e);
// }

// practice 1

// for (let noman = 1; noman <= 50; noman++) {
//     if (noman > 20) {
//         break
//     }
//     console.log(noman);
// }

// practice continue 2

// for (let i = 1; i < 30; i++) {
//     if (i % 3 !== 0) {
//         continue;
//     }
//     console.log(i)
// }

// practice with while

// let n = 0 

// while (n < 40) {
//     n++;
//     if (n > 10) {
//         break;
//     }
//     console.log(n)
// }


// while continue


let n = 0 

while (n < 40) {
    n++;
    if (n % 2 !== 0 ) {
        continue
    }
    console.log(n)
}