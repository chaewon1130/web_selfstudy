function life(){
    console.log("즉시 실행 함수!");
}

(function(){
    life();
})();

(function(){
    console.log("즉시 실행함수2")
})();