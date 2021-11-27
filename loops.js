// while loop

let i = 0
while (i <= 3) {
    console.log(i);
    i++;
}

for(let i = 0; i < 3; i++) {
    console.log(i);
}


// do while loop
let i=10;
do{
    console.log(i);
    i++;
}while(i<=9);


//break and continue keyword

for (let i = 0; i < 3; i++) {
    if(i===2){
        break;
    }
    console.log(i);
}

for (let i = 0; i < 3; i++) {
    if(i===2){
        continue;
    }
    console.log(i);
}