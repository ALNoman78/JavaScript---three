let sum = 0;
for(let i = 1; i <= 100; i++){
    sum += i;
    console.log(sum)
    if(i % 2 === 0){
        console.log("This is even number", i)
    }
}

// new function

// even number
for (let x = 0; x < 10; x = x + 2) {
    console.log("This is new even",x);
}

// odd number
for (let x = 1; x < 10; x += 2) {
    console.log(x);
}