//比較演算子

//評価型「===, !==, ==, !=」

/**
 * == 大体同じ
 * === 完全に同じ　実務で使う
 * 
 * != 大体違う
 * !== 完全に違う　実務で使う
 */

let x = 0 == false; //式が成り立つとtrue
console.log(x); //trueになる

let y = 0 === false; //データ型を判断する。ブリアン型とナンバー型でデータ型が違うので、式が成り立たないのでfalse
console.log(y); //falseになる


let j = 0 != false;
console.log(j); //falseになる

let k = 0 !== false;
console.log(k); //trueになる



//大小型「<, >, <=, >=」
