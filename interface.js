// 1️⃣ Define an interface for a user object with properties: name (string), age (number), and email (string). Create a variable of that type.
function strmake(car) {
    return "car name is ".concat(car.name, " and engine is ").concat(car.specs.engine);
}
var c1 = {
    name: "naxon",
    specs: {
        engine: "electric",
        horcepower: 2000
    }
};
console.log(strmake(c1));
