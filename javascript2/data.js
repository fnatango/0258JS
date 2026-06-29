//データ型に関しての注意

// ストリング型・ナンバー型を計算するときに注意
let num = "abc" * 3;
console.log(num); // NaN (Not a Number) となる 文字列と数字を一緒に計算できません。

//ストリング型に関しての注意

name = "\"luigi\""; //シングルクォーテーションの中にシングルクォーテーション使えない
console.log(name); //ダブルクォーテーションの中にダブルクォーテーション使えない
//もしどうしても使いたい場合は、バックスラッシュを使ってエスケープする必要があります。

//バッククォーテーションについて

let code = 123456789;

let word = `code:${code}`; //テンプレート文字列。バッククォーテーションを使うと、変数を文字列の中に埋め込むことができます。

console.log(typeof word); //string
console.log(typeof code); //number

console.log("java" + "script"); //文字列の結合
console.log("java" + 10); //文字列と数字の結合

let a = "java";
let b = 10;

console.log(typeof a + typeof b); //stringnumber

console.log(10 + 10 +"java" + 10 + 10); //20java1010 事実上はjava+10+10が文字列として扱われる

//配列に関しての補足

//配列は順番にデータを管理する箱です。

let fruit = ["apple", "banana", "orange"];//インデックス番号 箱に入ったものには整理番号のようなものがついている。
//インデックス番号は0から始まる。

console.log(fruit);
console.log(fruit[0]); //apple
console.log(fruit[1]); //banana
console.log(fruit[2]); //orange

//配列のネスト （注意 2段階まで書くことが基本です。それ以上書くと解読性が下がります。）

let user = [

    ["taro", 20],//0番目のデータ。箱ごと0。

    ["hanako", 25],

]

console.log(user[0]);
console.log(user[0][0]);//0番目の箱の中の0番目のデータを取り出す
console.log(user[0][0], user[1][0]); //taro hanako 2つの箱の中の0番目のデータを取り出す

//オブジェクトに関しての補足

let person = {
    //キー 値
    name: "taro",
    age: 20
};

console.log(person.name); //taro
console.log(person.age); //20

// オブジェクトのネスト （注意 2段階まで書くことが基本です。それ以上書くと解読性が下がります。）

let person2 = {
    name: "hanako",
    age: 25,
    address: {
        city: "Tokyo",
        district: "Shinjuku"
    }
};

console.log(person2.address.city); //Tokyo

//関数に関しての補足

// 関数

// 関数は処理のかたまりです。つまりデータを処理する処理機です。

//宣言式関数

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
*/
sayHello();

// ↑ここまで前回のコピペ

//関数式関数

let hello = function() {
    console.log("データ");
}

hello(); //関数の呼び出し
//先に関数名を書いて、あとに関数の中身を書くこともできる。これを関数式関数と呼ぶ。

//アロー関数

let Aisatsu = () => {
    console.log("こんにちは");
}

Aisatsu();
//AIがよく使う。記述が短いので読込が速い。

//戻り値

function add(a, b) {
    return a + b;
}

console.log(add(10, 20)); //30

//引数

let naming = "kojiro";

function greet(naming){
    console.log("こんにちは" + naming + "さん");
}

greet(naming);

//