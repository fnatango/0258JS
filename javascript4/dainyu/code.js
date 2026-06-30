//代入演算子　（データを代入して更新する）

//単独代入：　a = b

//複合代入：　（論理型）「&&= ||= ??=」

//複合代入：　（算術型）「+= -= *= /= %= **=」


//複合代入：　（算術型）

//number

let x = 10;

x += 5; //15
x -= 3; //12
x *= 2; //24

console.log(x);

//string

let msg = "hello";

msg += "world";

console.log(msg); //helloworld

//複合代入：　（論理型）

//値が特定の条件を満たすときだけ代入を行う演算子

//truthy値：true、数字の0以外、文字列（空文字以外）、配列、オブジェクト、関数など

//falsy値：false、0、""（空文字）、null, undefined, NaN


//①　&&= (and)
//truthy値だったら条件を満たすので、代入を行う

let z = 0.1;
z &&= 200;

console.log(z);

//② ||= (or)
//falsy値だったら条件を満たすので、代入を行う

let k = 0;
k ||= 300;

console.log(k);

//③ ??= (nullish)
//undefined, null

let j = null;
j ??= 400;

console.log(j);

