console.log("準備完了");

let text = document.querySelector("#colorText");
let color = document.querySelector("#colorPicker");

function colorBg() {
  document.body.style.backgroundColor = color.value;

  if (color.value === "#ffffff") {
    text.textContent = `${color.value}白です`;
  } else if (color.value === "#000000") {
    text.textContent = `${color.value}黒です`;
  } else {
    text.textContent = `${color.value}その他`;
  }
}

color.addEventListener("input", colorBg);
