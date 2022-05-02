let kor = 90;
function getScore(){
    eng = 100;
    console.log(kor);
    console.log(eng);
}

getScore();

console.log(kor);
console.log(eng);

var num = 11;
{
    var num = 20;
    console.log(num);
}
console.log(num);

let num01 = 11;
{
    let num01 = 20;
    console.log(num01);
}
console.log(num01);

function factorial(n){
    if(n == 0){
        console.log("호출 끝!");
    }else{
        console.log(n);
        factorial(n-1);
    }
}
factorial(10);