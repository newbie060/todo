//console.log("HELLO WORLD");
//const shoes= ['nike', 'vans', 'newbalance'];
//console.log(shoes[2]); 
// const numbers = [1,2,3,4,5,6]
//slice: used to create a copy of portion of array
// const newNumbers = numbers.slice(0,5)
// console.log(newNumbers)

//splice: used to replace the elements of array
// numbers.splice(2,1,100,101)
// console.log(numbers)

//split: used to split the text into array elements
// const text = "I love Pokhara"
// console.log(text.split(' '))

// const languauge =['c','c++','php']
// languauge.splice(1,1,'js')
// console.log(languauge)

// const characters = ['m','a','n','i','s','h']
// characters.splice(0,6,13,1,14,9,19,8)
// console.log(characters)

//object
// const me = {
//     name: "Pooja",
//     age: 10,
//     address: "Airport"
// }
// //Object.freeze(me)
// console.log(me.name)
// me.college="PNC"
// console.log(me)
// console.log(Object.keys(me))
// console.log(Object.values(me))

//day 4
//conditional statements
// const isRaining = true
// if(isRaining){
//     console.log('Take umbrella')
// }else{
//     console.log("Donot take umbrella")
// }

// //ternary operator
// isRaining?console.log("Take Umbrella") : console.log("Donot take umbrella");

// //short circuit
// isRaining && console.log("Take Umbrella")
// isRaining || console.log("Take umbrella")

// const temperature = 30
// if(temperature>30) {
//     console.log("Hot")
// } else if(temperature>25) {
//     console.log("Mild")
// } else{
//     console.log("Cold")
// }


// const numbers = [1,2,3,4,5,6]
// // for(var i=0;i<6;i++){
// //     console.log(numbers[i])
// // }
// for(let number of numbers){
//     console.log(number)
// }
// const names = ["aaisha","pooja","anisha"]
// for(var name of names){
//     console.log(name)
// }
// function add(a,b){
//     console.log(a+b)
// }
// add(1,2)
// add(5,6)

// //named regular function
// const add =function(a,b){
//     console.log(a+b)
// }
// //arrow function
// const add =(a,b)=>{
//     console.log(a+b)
// }

// //anonymous arrow function

// const numbers = [1,2,3,4,5]
// //high order functions
// numbers.forEach(function(number){
//         console.log(number)
// })

// const people = [
//     {
//         firstName: "Pooja",
//         lastName: "Gurung"
//     },
//     {
//         firstName : "Suja",
//         lastName : "Gurung"
//     }
// ]
// const data = people.map(function(person){
//     return {
//             firstName : person.firstName,
//             lastName : person.lastName,
//             fullName : person.firstName + person.lastName
//     }
// })
// console.log(data)

// const products = [
//     {
//         name : "Apple",
//         price : 200,
//         qnt : 4
//     },
//     {
//         name: "Orange",
//         price: 300,
//         qnt: 2
//     },
//     {
//         name: "Banana",
//         price: 400,
//         qnt: 3
//     }
// ]
// const newProducts = products.map(function(fruit){
//     return {
//         ...fruit,
//         total : fruit.price * fruit.qnt
//     }
// })
// console.log(newProducts)

// const nums = [1,2,3,4,5]
// const squares = nums.map(function(num){
//     return {
//         ...num,
//         square : num * num
//     }
// })
// console.log(squares)

// const numbers = [1,2,3,4,5,6,7,8,9,10]

// const even = numbers.filter(function(num){
//     return num % 2 == 0
// })
// console.log(even)

// const books = [
//     {
//         title : "dacey",
//         year : 2023
//     },
//     {
//         title : "sassy",
//         year : 2024
//     },
//     {
//         title : "cute",
//         year: 2025
//     },
// ]
// const newBook = books.filter(function(book){
//     return book.year>2000
// })
// console.log(newBook)

// const files = ["app.js","a.c","index.html","style.css"]
// const result = files.filter(function(file){
//     return file.endsWith(".js")
// })
// console.log(result)

//reduce hof 

const numbers = [1,2,3,4,5]
const sum = numbers.reduce(function(accumulator,num){
    return num + accumulator
},0)

console.log(sum)

const myCart = [
    {
        product : "Apple",
        price : 200,
        qty : 2
    },
    {
        product : "Orange",
        price : 400,
        qty : 4
    },
    {
        product : "Pineapple",
        price : 300,
        qty : 3
    }
]
//total qty, total price
const output = myCart.reduce(function(accumulator,item){
    accumulator.totalQty += item.qty 
    accumulator.totalPrice += item.price * item.qty
    return accumulator
},{totalQty : 0, totalPrice : 0})
console.log(output)

const students = [
    {
        name : "Manish", 
        marks : 700, 
        status : "pass"
    },
    {
        name : "Anish", 
        marks : 900, 
        status : "pass"
    },
    {
        name : "Pranjal", 
        marks : 400, 
        status : "fail"
    },
    {
        name : "Aashish", 
        marks : 200, 
        status : "fail"
    }
]
const result = students.filter(function(student){
      return student.marks>300 && student.name.endsWith("sh") && student.status == "pass"
})
console.log(result)
