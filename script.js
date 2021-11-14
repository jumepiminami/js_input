// input要素オブジェクト
const input = document.getElementById("example-id");
// 値を埋め込む先
const currentLength = document.getElementById("current-length");

input.addEventListener('input', (event) => {
  currentLength.innerText = event.target.value.length;
});