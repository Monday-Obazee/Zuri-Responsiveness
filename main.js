const now = document.querySelectorAll(".p");

function fun() {
  for (var i = 0; i < now.length; i++) {
    var currentEl = now[i];
    currentEl.style.display = "none";
  }
}

fun();
