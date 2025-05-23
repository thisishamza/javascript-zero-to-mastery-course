// var x = 1;
// function a() {
//     var y = 2;
//     console.log(x)
// }

function x(){
    for (let i = 1; i <= 5; i++){
        setTimeout(function() {
            console.log(i);
        }, i *1000);
    }
    console.log("hello JS");
}
x();