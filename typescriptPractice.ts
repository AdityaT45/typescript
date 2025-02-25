//🟢🟢 Declare a variable with type string and assign a value.

let a:string="aditya"
console.log(a);



//🟢🟢Create an array of numbers and find the sum of its elements using TypeScript

let arr:number[]=[16,22,33,44,35]

let result=arr.reduce((acc,curr)=>acc=+curr)
console.log(result);


//🟢🟢Define an interface for a User with name, age, and email, then create an object of that type

// interface User{
//     name:string;
//     age:number;
//     email:string;
// }

// let u1:User={
//     name:"adi",
//     age:23,
//     email:"a@gmail.com"
// }

// console.log(u1);


// //🟢🟢Create a type alias for a Product with id, name, price, and category

// type Product={
//     id:number;
//     name:string;
//     price:number;
//     category:string
// }

// let pro1:Product={
//     id:12,
//     name:"iphone",
//     price:60000,
//     category:"mobile"
// }

// console.log(pro1);


//🟢🟢Write a function that takes two numbers and returns their sum, ensuring type safety

// interface Nums{
//     num1:number;
//     num2:number;
// }

// function sum(n:Nums){
//     return n.num1+n.num2
// }

// let nu=sum({num1:12,num2:123})

// console.log(nu);


//🟢🟢Create a function that takes an array of strings and returns an array of their lengths

// interface Arr{
//     arr:string[]
// }

// function ope(arrr:Arr):number[]{
//     return arrr.arr.map(str=>str.length)
// }

// console.log(ope({arr:["apple","banana","papaya"]}))


//🟢🟢Write a generic function that takes an array and returns its first element

// interface Stringdata{
//     str:string[]
// }

// function firstele(s:Stringdata):string |undefined{
//     return s.str.length>0 ? s.str[0] :undefined

// }

// console.log(firstele({str: ["apple", "banana", "cherry"]}));


//🟢🟢Create a union type Employee | Student, then write a function to handle both types differently.


// type Employee={
//     name:string;
//     role:string;
//     salary:number
// }

// type Student={
//     name:string;
//     course:string;
//     fees:string;
// }

// type Person= Employee | Student

// function personInfo(p:Person):string{
//     return `person name is ${p.name} and course is ${p.role}`
// }

// let p1:Person={
//     name:"aditya",
//     role:"dev",
//     salary:234,
   

// }

// console.log(personInfo(p1));


//🟢🟢Create an enum for OrderStatus with values Pending, Shipped, Delivered, and Cancelled

// enum OrderStatus{
//     Pending =`pending order`,
//     Shipped=`shipped order`,
//     Delivered=`delivered order`,
//     Cancelled=`cancelled order`
// }


// let dir=OrderStatus.Cancelled
// console.log(dir);

//🟢🟢Define a tuple [number, string, boolean] and assign values to it.


// let fixarr:[number,string,boolean]=[12,"asd",true]

// console.log(typeof fixarr);



//🟢🟢Write a function greet(person: Person): string that returns "Hello, <name>! You are <age> years old.".
    // interface Person{
    //     name:string;
    //     age:number
    // }

    // function greet(pesron:Person):string{
    //     return `Hello, ${pesron.name} You are ${pesron.age} years old.`
    // }

    // let p1={name:"additya",age:23}

    // console.log(greet(p1));


    //🟢🟢Define an interface MathOperation with a function calculate(a: number, b: number): number.
// Implement Addition and Multiplication functions that match the MathOperation interface.


// interface MathOperation{
//    calculate(a:number,b:number):number;
// }

// const Addition:MathOperation={
//     calculate:(a,b)=>a+b
// }

// const Multiplication:MathOperation={
//     calculate:(a,b)=>a*b
// }

// console.log(Addition.calculate(23,21));


//🟢🟢Create an interface Employee that extends Person and includes position: string.
// Write a function printEmployeeInfo(emp: Employee): string that returns "Employee <name> is a <position>.".

// interface Person{
//     name:string;
//     age:number
// }

// interface Employee extends Person{
//     position:string
// }

// function printEmployeeInfo(emp:Employee):string{
//     return `Employee ${emp.name} is ${emp.position}`
// }


// let emp1:Employee={
//     name:"aditya",
//     age:23,
//     position:"developer"
// }

console.log(printEmployeeInfo(emp1));
