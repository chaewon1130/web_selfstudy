function add(){
    let n = 0;
    return ++n;
}

console.log(add());
console.log(add());

function add2(){
    let n = 0;
    return function(){
        return ++n;
    }
}
let increase = add2()
console.log(increase());
console.log(increase());