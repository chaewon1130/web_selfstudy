const add = (s1, s2) => s1 + s2;

console.log(add(1,2));

const add02 = (s1, s2) => {
    let avg = (s1 + s2) / 2;
    return avg;
}

console.log(add02(2,3));

function showMessage(message, from="UNKNOWN"){
    console.log(message + from);
}

showMessage();

function changeName(obj){
    obj.name = "김동호";
}

const change = {name: "그램"};

console.log(change.name);
changeName(change);
console.log(change.name);

