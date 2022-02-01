const arr = [1,6,7,8,3,4,5,6] ;
function SearchId(arr,x){
    return arr.findIndex(item=>item==x);
}
console.log(SearchId(arr,3));

