//論理演算子：　&&(and) ||(or) !(not)

console.log(true &&true);//true
console.log( 5 >3 && 10 > 7);//true

console.log(false && true)//false
console.log( 5 > 3 && 10 < 7)//false


console.log(true || true);//true
console.log( 5 >3 || 10 > 7);//true

console.log(false || true)//true
console.log( 5 > 3 || 10 < 7)//true

console.log(false || false)//false
console.log( 5 < 3 || 10 < 7)//false

console.log(!true);//false
console.log(!false);//true

let age = 18;
let isStudent = false;

if(age >= 18 && isStudent){
    console.log("大学生");
}else if (age >= 18 && !isStudent){
    console.log("学生じゃない");
}else{
    console.log("大学生以下");
}