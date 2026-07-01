// if文

/*if (条件式) {
  条件式がtrueのときに実行される処理
} else {
  条件式がfalseのときに実行される処理
}

*/

let x = 9;

if(x >=10) {
    console.log("10以上です");
} else {
    console.log("10未満です");

}

// else if文
// 条件が複数ある場合に使用する

let score = 89;

if(score >= 90) {
    console.log("Aです");
} else if(score >= 80) {
    console.log("Bです");
} else if(score >= 70) {
    console.log("Cです");
} else {
    console.log("Dです");
}

// 終わりは「else」で締める
// エラーは発生しないが、何も実行されない。書いておくのが推奨される

//基本的に比較演算子を使うことが多いが、論理演算子を使うこともある。ただし、代入演算子は使えないので注意すること。

if( x = 5) {
    console.log("xは5です");
} //NG 常にtrueになる 代入演算子は条件式として使用できない
//(x === 5) //OK


