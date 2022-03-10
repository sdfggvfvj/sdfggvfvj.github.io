function showText() {
  var x = document.getElementById("mytext");
      y = document.getElementById("test");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "flex";
  }
}
