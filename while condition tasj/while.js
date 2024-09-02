// let num = 0;

// while (num <= 40) {
//     console.log(num)
//     num += 4;
// }

let sum =  0;

for (let num = 4; num <= 40; num+=4) {
    if(num % 4 === 0){
        console.log("$ table is ", num);
        sum += num;
    }
}
console.log("4 table sum is", sum)