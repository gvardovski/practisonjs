let car = {
    color: "black"
}
car.color = "green";
car.power = 150;
function showpower(enpower){console.log(enpower);}
showpower(car.power);
console.log("power" in car);

