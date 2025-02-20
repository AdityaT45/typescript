// 1️⃣ Create a type alias for a Person with name (string) and age (number). Then, declare a variable of that type.
function vehicleDetails(details) {
    if (details.type === "car") {
        console.log("model is ".concat(details.model, " and relese year is ").concat(details.year));
    }
    else if (details.type === "bike") {
        console.log("model is ".concat(details.brand, " and cc is ").concat(details.cc));
    }
}
var info = {
    type: 'car',
    model: "sads",
    year: 234
};
vehicleDetails(info);
