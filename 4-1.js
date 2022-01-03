let car = {
    color: "black"
}
car.color = "green";
function showpower(){console.log("160");}
car.power = showpower();
console.log("power" in car);

