for (
  var currentIndex,
    imgs = Array.from(document.querySelectorAll(".info img")),
    lightBox = document.querySelector(".lightBox"),
    exit = document.querySelector("#close"),
    box = document.querySelector(".Box"),
    next = document.querySelector("#next"),
    pref = document.querySelector("#pref"),
    i = 0;
  i < imgs.length;
  i++
)
  imgs[i].addEventListener("click", function (e) {
    lightBox.classList.replace("d-none", "d-flex");
    var t = e.target.getAttribute("src");
    (box.style.backgroundImage = `url(${t})`),
      (currentIndex = imgs.indexOf(e.target));
  });
function slider(e) {
  (currentIndex += e) == imgs.length && (currentIndex = 0),
    currentIndex < 0 && (currentIndex = imgs.length - 1);
  var t = imgs[currentIndex].getAttribute("src");
  box.style.backgroundImage = `url(${t})`;
}
next.addEventListener("click", function () {
  slider(1);
}),
  pref.addEventListener("click", function () {
    slider(-1);
  }),
  exit.addEventListener("click", function () {
    lightBox.classList.replace("d-flex", "d-none");
  }),
  document.addEventListener("keydown", function (e) {
    "ArrowRight" == e.key
      ? slider(1)
      : "ArrowLeft" == e.key
      ? slider(-1)
      : "Escape" == e.key && lightBox.classList.replace("d-flex", "d-none");
  }),
  document.addEventListener("click", function (e) {
    e.target == lightBox && lightBox.classList.replace("d-flex", "d-none");
  });
