let str = 'ahb acb aeb aeeb adcb axeb';
let rez = str.match(/a\w{1}b/g);
for (let i=0;i<rez.length;i++){
    console.log(rez[i]);
}
