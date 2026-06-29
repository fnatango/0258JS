console.log("準備完了");

const text = document.querySelector("#colorText");
const color = document.querySelector("#colorPicker");

function colorBg() {
  document.body.style.backgroundColor = color.value;

  if (color.value === "#ffffff") {
    text.textContent = `${color.value}白色です`;
  } else {
    text.textContent = `${color.value}その他`;
  }
}

color.addEventListener("input", colorBg);
