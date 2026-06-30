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

//number

a = 2 > 10; //false
b = 1 < 20; //true

c = 18;
d = 21;
console.log(c <= 20); // true 20以下の数字がtrue
console.log(d <= 20); // false 

e = 18;
f = 21;
console.log(e >= 20); // false 20以上の数字がfalse
console.log(f >= 20); // true 20以下の数字がtrue


//string (文字列)
//文字のunicodeの規格で判断する
//頭文字だけを読込　2：50　1：49

let num = "2" > "1000";
console.log(num); //true 