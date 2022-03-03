function changeSize() {
  let size = document.getElementById('rangeSize').value;
  console.log(size);
  let txtsize = size + 'pt';
  document.getElementById('txt').style.fontSize = txtsize;
}
