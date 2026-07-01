// switch文

/*

switch (引数) {
    case 値1:
        // 引数の値が値1と一致した場合に実行される処理
        break;
    case 値2:
        // 引数の値が値2と一致した場合に実行される処理
        break;
    default:
        // どのcaseとも一致しなかった場合に実行される処理

}
*/

let rank = "S";

switch (rank) {
  case "S":
    console.log("Sランクです");
    break;
  case "A":
    console.log("Aランクです");
    break;
  case "B":
    console.log("Bランクです");
    break;
  default:
    console.log("ランク外です");
}

// fall through(フォールスルー)
// caseの処理を続けて実行することができる、breakを省略することで実現できる

let rank2 = "A";

switch (rank2) {
  case "S":
    console.log("Sランクです");
    break;
  case "A":
    console.log("Aランクです");
  case "B":
    console.log("Bランクです");
  default:
    console.log("ランク外です");
}
// 上記のコードでは、rank2が"A"の場合、"Aランクです"と"Bランクです"、そして"ランク外です"がすべて出力される
