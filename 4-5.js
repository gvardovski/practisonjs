let x = 9;
function CheckPrime (number){
    let c=0;
    for (let i=2;i<number;i++){
        if (number % i === 0) {c++;}
    }
    if ( c===0 ) {console.log("Простое число");}
	else {console.log("Составное число");}
}
CheckPrime(x);