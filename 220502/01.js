function process(){
    let kor = 90;
    let eng = 88;
    let math = 90;

    let avg = (kor + eng + math) / 3;
    return avg;
}

const avgResult = process();
console.log(`avgResult = ${avgResult}`);

function isPass(name, java, oracle, web){
    let comment = name + " 학생은 ";

    if(java >= 60 && oracle >= 60 && web >= 60){
        comment += "PASS !!";
    }else{
        if(java < 60){
            comment += " JAVA 재시험 "
        }
        if(oracle < 60){
            comment += " ORACLE 재시험 "
        }
        if(web < 60){
            comment += " WEB 재시험 "
        }
    }
    return comment;
}

console.log(isPass("김동호", 57, 55, 58));

function showSkill(){
    for(let i = 0; i < arguments.length; i++){
        console.log(arguments[i]);
    }
}

showSkill('java', 'oracle', 'web', 'jsp', 'spring');