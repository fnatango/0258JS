// 変数
// 変数はデータの入れ物です。
// 変わる可能性があるデータを取り扱う。

// 変数はletで始まる。

//特徴：再宣言できないが、再代入できる。

let name1 = "太郎";
let age1 = 20;

console.log(name1);

//再宣言、再代入

let a = 17;
// let a = 11; 再代入

// console.log(a); //エラーになる

a = 11; //再代入

console.log(a);

// 定数

/*
定数もデータの入れ物です。
変わらないデータを取り扱う。

定数はconstで始まる。

*/

const name2 = "御影小次郎";
const age2 = 28;
//const name2 = "卒業後御影小次郎"; //再宣言できない
//age2 = 30; //再代入できない

console.log(name2);
console.log(age2);

// 関数

// 関数は処理のかたまりです。つまりデータを処理する処理機です。

let name3 = "alice";

function sayHello() {
  console.log("Hello " + name3);
}

// 関数の呼び出し
sayHello();

/*
functionの後に変数名を付ける。
function sayHello(引数（ひきすう) ⇒ 関数に渡すデータ) {

処理したい内容を書く

}

関数の呼び出しを書く
sayHello();

*/
/*javascriptの記述方法

1.キャメルケール ＝＞ lastName => 変数名もしくは関数名に使われる

2.スネークケース => last_name => 定数名に使われる

3.パスカルケース => LastName => クラス名に使われる (classはオブジェクト指向プログラミングで使われるものです。今回は扱いません)

4.ケバブケース => last-name => HTMLのidやclassに使われる


*/
