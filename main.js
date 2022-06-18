const now = document.querySelectorAll(".p");

function fun() {
  for (let i = 0; i < now.length; i++) {
    let currentEl = now[i];
    currentEl.style.display = "none";
  }
}

fun();
