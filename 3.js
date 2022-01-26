let str=prompt("Введите строку","Строка");
let bool1,bool2;
if (str === ""){bool1 = false;} else {bool1 = true;}
let num=prompt("Введите число","3");
if (num === ""){bool2 = false;} else {bool2 = true;}
let rez = str + bool1; alert("Сложение сроки и логического значеия : "+rez);
let rez1 = str + +num; alert("Сложение сроки и числа : "+rez1);
let rez2 = +num + bool1; alert("Сложение числа и логического зачения : "+rez2);
let rez3 = str * bool1; alert("Умножение сроки и логического значеия : "+rez3);
let rez4 = str * +num; alert("Умножение сроки и числа : "+rez4);
let rez5 = +num * bool1; alert("Умножение числа и логического зачения : "+rez5);
let rez6 = str / bool1; alert("Деление сроки и логического значеия : "+rez6);
let rez7 = str / +num; alert("Деление сроки и числа : "+rez7);
let rez8 = +num / bool1; alert("Деление числа и логического зачения : "+rez8);