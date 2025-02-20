// 1️⃣ Define an interface for a user object with properties: name (string), age (number), and email (string). Create a variable of that type.
// interface User {
//     name:string,
//     age:number,
//     email:string
// }
// let user1:User={
//     name:"aditya",
//     age:12,
//     email:"adityatodmal56@gmail.com"
// }
// console.log(user1);
//2️⃣ Make a property optional: Modify the above interface so that email becomes optional.
// interface Person{
//     name:string;
//     mob:number;
//     email?:string
// }
// let person1:Person={
//     name:"aditya",
//     mob:23456,
//     // email:"a@gmail.com"
// }
// console.log(person1);
// 3️⃣ Read-only property: Add a readonly id (number) to the user interface so it cannot be changed after assignment.
// interface Car{
//     readonly model:string;
//     year:number
// }
// let car1:Car={
//     model:"Naxon",
//     year:2021
// }
// console.log(car1);
// // car1.model="thar"                     // // ❌ Error: Cannot assign to 'model' because it is a read-only property
// 4️⃣ Function inside an interface: Create an interface Person with properties firstName (string) and lastName (string). Add a method getFullName that returns the full name as a string.
// interface Person{
//     firstname:string;
//     lastname:string;
//     getFullName():string
// }
// let person1 :Person={
//     firstname:"aditya",
//     lastname:"todmal",
//     getFullName() {
//         return `person name is ${this.firstname} ${this.lastname}`
//     },
// }
// person1.getFullName()
// 5️⃣ Interface with an array: Define an interface Product with properties name (string) and price (number). Then, create an array of Product objects.
// interface Product{
//     name:string;
//     price:number;
// }
// let arr1:Product[]=[{name:"laptop",price:23400},{name:"mobile",price:2341}]
// arr1.forEach(product => {
//     console.log(`product name is  ${ product.name} and price is ${ product.price}`);;
// });
// 6️⃣ Extend an interface: Create an interface Employee with name and salary, then create another interface Manager that extends Employee and adds department (string).
// interface Employee{
//     name:string;
//     salary:number;
// }
// interface Manager extends Employee{
//     department:string
// }
// let manager1:Manager={
//     name:"aditya Todmal",
//     salary:50000,
//     department:"webdeveloper"
// }
// console.log(manager1);
// 7️⃣Index Signature: Define an interface UserRoles where keys are usernames (string) and values are roles (admin, user, guest).
// interface UserRoles{
//     [username:string]: 'admin'|'user'|'guest'
// }
// let role:UserRoles={
//     "sangram":"admin",
//     "krushna":"user",
//     "shubham":"guest"
// }
// console.log(role);
// 8️⃣ Interface for a Function Type: Create an interface for a function MultiplyFn that takes two numbers and returns a number.
// interface MultiplyFn{
//     (num1:number,num2:number):number
// }
// const multiply:MultiplyFn=(num1,num2)=>{
//     return num1*num2
// }
// console.log(multiply(1,2));
//🟢🟢🟢make function make all data in string using interfaces
// interface UserData {
//     name:string;
//     age:number;
//     email:string
// }
// function formatUser(user:UserData):string{
//     return `name of user is ${user.name} and age is ${user.age} and email is ${user.email}`
// }
// let user1:UserData={
//     name:"ganesh",
//     age:23,
//     email:"asdada"
// }
// console.log(formatUser(user1));
//🟢🟢calculate array Product price and quantity make total off data
// interface Product {
//     price:number
//     quantity:number
// }
// function totalprice(product:Product[]):number {
//     return product.reduce((acc,curr)=>acc +curr.price *curr.quantity,0)
// }
// let prod1:Product[]=[{price:12,quantity:100}]
// console.log(totalprice(prod1));
// 🟢🟢Create an interface Person with properties: name (string) and age (number)
// interface Person{
//     name:string;
//     age:number
//     isMarried:boolean
// }
// let person:Person={
//     name:"ad",
//     age:4,
//     isMarried:true
// }
// console.log(person);
//🟢🟢Define an interface for a function type that takes two numbers and returns a number
// interface Nums{
//     num1:number;
//     num2:number;
// }
// function add(numbers:Nums):number{
//         return numbers.num1+numbers.num2
// }
// let n1:Nums={num1:12,num2:2}
// console.log(add(n1));
//🟢🟢
