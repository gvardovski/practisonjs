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
    if (b===0){
        throw new SyntaxError("на ноль делить нельзя");
    } else {let x = a / b;}
}
catch (err)
{
    console.log(err.message);
}