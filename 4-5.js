let x = 5;
function checkprost (x){
    let c=0;
    for (let i=2;i<x;i++){
        if (x % i == 0) {c++;}
    }
    if ( c==0 ) {console.log("Простое число");}
}
checkprost(x);