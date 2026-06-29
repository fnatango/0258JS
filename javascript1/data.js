//javascriptのデータ型

/* プリミティブ型

プリミティブ型は、数値や文字列などの基本的なデータ型です。

プリミティブ型には以下の種類があります.

- 数値型（Number）=>整数や小数などの数値を表すデータ型。

- 文字列型（String）=>文字の並びを表すデータ型。

- 真偽値型（Boolean）=>trueまたはfalseの値を表すデータ型。

- null =>値がないことを表すデータ型。

- undefined =>値が未定義であることを表すデータ型。

*/

let number = 42; // 数値型

let text = "Hello, World!"; // 文字列型 => "" もしくは '' を使います

let isTrue = true; // 真偽値型

let empty = null; // null型

let notDefined; // undefined型

/* 参照型

参照型は、オブジェクトや配列などの複雑なデータ型です。

参照型には以下の種類があります.

- オブジェクト型（Object）=>プロパティとメソッドを持つデータ型。

- 配列型（Array）=>要素の並びを表すデータ型。

*/

let person = {
  name: "太郎",
  age: 20,
}; // オブジェクト型

let numbers = [1, 2, 3, 4, 5]; // 配列型
