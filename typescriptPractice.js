//🟢🟢 Declare a variable with type string and assign a value.
var a = "aditya";
console.log(a);
//🟢🟢Create an array of numbers and find the sum of its elements using TypeScript
var arr = [16, 22, 33, 44, 35];
var result = arr.reduce(function (acc, curr) { return acc = +curr; });
console.log(result);
function printEmployeeInfo(emp) {
    return "Employee ".concat(emp.name, " is ").concat(emp.position);
}
var emp1 = {
    name: "aditya",
    age: 23,
    position: "developer"
};
console.log(printEmployeeInfo(emp1));
