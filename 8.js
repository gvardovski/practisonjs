try{
    console.log(a);
    let a = 3;
}
catch (e)
{
    console.log("let перед использованием нужно объявить");
}

try{
    let a=1,b=0;
    if ((a / b) === Infinity ){
        throw new Error("На ноль делить нельзя");
    } else {let x = a / b;}
}
catch (err)
{
    console.log(err.message);
}