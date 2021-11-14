// input要素オブジェクト
const input = document.getElementById("input");
// 値を埋め込む先
const length = document.getElementById("length");

input.addEventListener('input', (event) => {
  length.innerText = event.target.value.length;
});
