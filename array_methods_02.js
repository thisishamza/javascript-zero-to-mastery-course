// sort method 
// ASCII TABLE 
//char : ascii value


// '0' : 48
// '1' : 49
// '2' : 50
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57


// ':' : 58
// ';' : 59
// '<' : 60
// '=' : 61
// '>' : 62
// '?' : 63
// '@' : 64


// 'A' : 65
// 'B' : 66
// 'C' : 67
// 'D' : 68
// 'E' : 69
// 'F' : 70
// 'G' : 71
// 'H' : 72
// 'I' : 73
// 'J' : 74
// 'K' : 75
// 'L' : 76
// 'M' : 77
// 'N' : 78
// 'O' : 79
// 'P' : 80
// 'Q' : 81
// 'R' : 82
// 'S' : 83
// 'T' : 84
// 'U' : 85
// 'V' : 86
// 'W' : 87
// 'X' : 88
// 'Y' : 89
// 'Z' : 90



// '[' : 91
// '\' : 92
// ']' : 93
// '^' : 94
// '_' : 95
// '`' : 96



// 'a' : 97
// 'b' : 98
// 'c' : 99
// 'd' : 100
// 'e' : 101
// 'f' : 102
// 'g' : 103
// 'h' : 104
// 'i' : 105
// 'j' : 106
// 'k' : 107
// 'l' : 108
// 'm' : 109
// 'n' : 110
// 'o' : 111
// 'p' : 112
// 'q' : 113
// 'r' : 114
// 's' : 115
// 't' : 116
// 'u' : 117
// 'v' : 118
// 'w' : 119
// 'x' : 120
// 'y' : 121
// 'z' : 122
// '{' : 123
// '|' : 124
// '}' : 125

//sort
5,9,1200,488,3000

//sort method in javascript
//sort method will mutate the original string

const numbers=[5,9,334,22,25]
numbers.sort(); //this will change the numbers arrays
console.log(numbers); 

/* 
javascript does not sort them considering them number but instead it
consider them strings then sort them, string as sorted on the basis of
ASCII code of first character
*/
const userName = ['hamza','ahmed','bilal']
userName.sort(); //will be sorted as expected based on ASCII of first character

//if you want sort method to sort numbers then you can
//sort method can take a callback function
const numbers = [5,9,334,22,25]
numbers.sort((a,b)=>{
    return a=b;
})

// a - b ----> positive then b, a
// a - b ----> negative then a, b

numbers.sort((a,b) => {a-b});    //for ascending sort
numbers.sort((a,b) => {b-a});    //for descending sort
 
//real world example

const products = [
    {productId:1,prductName: 'p1',price:300},
    {productId:3,prductName: 'p2',price:600},
    {productId:3,prductName: 'p3',price:200},
    {productId:4,prductName: 'p4',price:2200},
]

//sort low to high
products.sort((a,b)=>{
    return a.price - b.price
})

//sort high to low
products.sort((a,b)=>{
    return b.price - a.price
})

/*if you dont want sort to mutate products then
 clone products using any method */
const lowToHigh= products.slice(0).sort((a,b)=>{
    return a.price - b.price
})
