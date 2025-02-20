// 1️⃣ Create a type alias for a Person with name (string) and age (number). Then, declare a variable of that type.

// type Person={
//     name:string;
//     age:number;
// }

// let p1:Person={
//     name:"adi",
//     age:22
// }

// console.log(p1);



// 2️⃣Define a type alias called Point for an object with x and y as numbers. Write a function that takes a Point as an argument and returns the sum of x and y.

// type Point={
//     x:number;
//     y:number
// }

// function sum(point:Point):number {
//         return point.x+point.y
        
//     }

// let p1: Point = { x: 2, y: 3 };
// console.log(sum(p1));


// 3️⃣ Create a type alias UserID that can be either a string or number. Write a function that takes UserID as a parameter and logs it.


// type UserID=number | string


// function logUserId(id:UserID):void{
//     console.log(`user id is  ${id}`);

// }

// let user1:UserID=101
// logUserId(user1)

// let user2:UserID="asdq23"
// logUserId(user2)



// 4️⃣ Define a type alias Car with brand (string) and year (number). Then, create an array of Car objects.


// type Car={
//     brand:string;
//     year:number
// }

// let cararr:Car []=[{brand:"tata",year:2021},{brand:"toyota",year:2022},{brand:"suzuki",year:2023}]
// console.log(cararr);



// 5️⃣ Create a type alias MathOperation for a function type that takes two numbers and returns a number. Implement addition and subtraction using this alias.

// type MathOperation={
//     n1:number;
//     n2:number
// }


// function operation(para:MathOperation):number{
//     return para.n1 +para.n2
    
    
// }

// let fun1:MathOperation={n1:12,n2:12}

// console.log(operation(fun1));





// 6️⃣ Use intersection (&) to create a new type Employee that combines Person (from Q1) and Job (which has position: string and salary: number). Create an Employee object.

// type Person={
//     name:string;
//     age:number
// }

// type Job={
//     position:string;
//     salary:number
// }

// type Employee=Person &Job

// let emp1:Employee={
//     name:"ad",
//     age:23,
//     position:"dev",
//     salary:23452
// }

// console.log(emp1);


// 7️⃣ Use union (|) to create a type Shape that can be either "circle", "square", or "rectangle". Write a function that takes a Shape and prints a message based on its type.

// type Shape ="circle" | "square" | "rectangle"


// function printMessege(shape:Shape):void{

//     if(shape==="circle"){
//         console.log("this is circle");
        
//     }
//     else if(shape==="square"){
//         console.log("this is square");
        
//     }
//     else if(shape==="rectangle"){
//         console.log("this is rectangle");
        
//     }
//     else{
//         console.log("unknown shape");
        
//     }

// }

// printMessege("circle")



// 8️⃣ Create a type alias ResponseData for an object that has status (boolean) and data (either a string or number). Write a function that takes ResponseData and prints a message based on status.


// type ResponseData={
//     status:boolean;
//     data:string | number
// }

// function printMessege(dataa:ResponseData):void{
//     if(dataa.status===true){
//         console.log(` you are online and your data is ${dataa.data}`);
        
//     }
//     else{
//         console.log("first come online then you will see your data ");
        
//     }
// }

// printMessege({status:false,data:345})

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


//calculate array Product price and quantity make total off data

// interface Product {
//     price:number
//     quantity:number
// }



// function totalprice(product:Product[]):number {
//     return product.reduce((acc,curr)=>acc +curr.price *curr.quantity,0)

// }

// let prod1:Product[]=[{price:12,quantity:100}]

// console.log(totalprice(prod1));



type Car={
    type:'car'
    model:string;
    year:number
}

type Bike={
    type:'bike'
    brand:string;
    cc:number

}

type VehicleData= Car | Bike

function vehicleDetails(details:VehicleData):void{
    if(details.type==="car"){
        console.log(`model is ${details.model} and relese year is ${details.year}`);
    }
    else  if(details.type==="bike"){
        console.log(`model is ${details.brand} and cc is ${details.cc}`);
    }
}

let info:Car={
    
    type:'car',
    model:"sads",
    year:234
}

vehicleDetails(info)