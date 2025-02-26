//🟢🟢 Declare a variable with type string and assign a value.

// let a:string="👇👇👇👇👇"
// console.log(a);



//🟢🟢Create an array of numbers and find the sum of its elements using TypeScript

// let arr:number[]=[16,22,33,44,35]

// let result=arr.reduce((acc,curr)=>acc=+curr)
// console.log(result);


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

// console.log(printEmployeeInfo(emp1));

// ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️

// Write a function in TypeScript that takes two numbers as arguments and returns their sum.

// function sum(num1:number,num2:number):number{
//     return num1+num2
// }


// console.log(sum(34,32));


//🟢🟢Define an interface Person with name (string) and age (number) properties. Create an object that implements this interface.

// interface Person{
//     name:string;
//     age:number;
// }

// let p1:Person={
//     name:"aditya",
//     age:23
// }

// let displayPerson =(p:Person):void=>{
//     console.log(`person name is ${p.name} and his age is  ${p.age}`);
    
// }

// displayPerson (p1)

//🟢🟢Write a function that takes an array of numbers and returns a new array with each number doubled

// function doubleArray(arr:number[]):number[]{
//      return arr.map(ele=>ele*2)
    
// }


// let myArr:number[]=[2,3,5,6,2,6,2,7]
// console.log(doubleArray(myArr))

//🟢🟢Create a tuple that holds a person's name (string) and age (number).


// let person:[string,number]=["aditya",22]
// console.log(person);



//🟢🟢Define an enum for different user roles: Admin, Editor, User.

// enum NewEnum{
//     Admin,
//     Editor,
//     User
// }

// console.log(NewEnum[0]);
// console.log(NewEnum["Editor"]);
// console.log(NewEnum.User);



//🟢🟢Implement a function that checks if a given value is of type string


// function checkstr(arg:unknown):void{
//     if(typeof arg=== "string"){
//         console.log("value is string");
        
//     }
//     else{
//         console.log("value is not string");
        
//     }
// }

// checkstr("12345")


//🟢🟢Write a function that reverses an array of any type

// function reverseArr(arr:any[]):any[]{
//     return arr.reverse()
// }


// console.log(reverseArr([2,1,2,3,5,3,5,3,6]))

//🟢🟢Create a class Car with properties brand and year, and a method getDetails() that returns a formatted string.




// class Car{
//     brand:string;
//     year:number

// constructor (brand:string,year:numberar){
//     this.brand=brand;
//     this.year=year;
// }
//      getDetails():string{
//     return `car brand is ${this.brand} and year is ${this.year}`
// }
// }

// let myCar=new Car("tata",2008)

// console.log(myCar.getDetails());



// //🟢🟢Define a type alias Point for an object with x and y coordinates (both numbers)

// type Point={
//     x:number;
//     y:number;
// }

// function writePoint(point:Point):void{
//     console.log(`first point is ${point.x} and second point is ${point.y}`);
    
// }

// writePoint({x:56,y:87})

//👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇

//🟢🟢Implement a function that merges two objects and returns a new object with combined properties


// interface Obj1{
//     name:string;
//     class:number;
// }


// interface Obj2{
//     country:string;
//     mobno:number;
// }
// type MergeObj= Obj1 & Obj2

// function mergeObj(obj1:Obj1,obj2:Obj2):MergeObj{
    
//     return {...obj1,...obj2};
    
    
    
// }

// let o1:Obj1={
//     name:"ganesh",
//     class:8
// }


// let o2:Obj2={
//     country:"india",
//     mobno:91234567
// }

// let result=mergeObj(o1,o2)
// console.log(result);


//🟢🟢Implement an interface for a function that takes a string and returns a boolean

// interface StringtoBool{
//     (str:string):boolean
// }

// const isUpperCase:StringtoBool=(str)=>{
//     return str === str.toUpperCase()
// }

// function upCase(fn:StringtoBool,str:string):boolean{
//     return fn(str)

// }

// console.log(upCase(isUpperCase,"AD"));

//🟢🟢Write a function that takes a number and returns it as a string

// let numtostring=(num:number):string=>{
//     return  num.toString()
// }
// console.log(numtostring(23));



//🟢🟢Create a function that accepts a string and converts it into a number.

// function strtonum(str:string):number|null{
//     return Number(str)

// }
// console.log(strtonum("abc"));



//🟢🟢Write a function that checks if a given value is of type boolean

function boolCheck(val:boolean):void{
    if(typeof val==="boolean"){
        console.log("value is boolean");
        
    }
}


