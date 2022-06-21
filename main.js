const now = document.querySelectorAll(".p");
const button = document.querySelector(".btn1");
let firstForm = document.querySelectorAll("#firstForm");
const formNow = document.querySelector("#form1");
function fun() {
  for (let i = 0; i < now.length; i++) {
    let currentEl = now[i];
    currentEl.style.display = "none";
  }
}

fun();

formNow.addEventListener("submit", (e) => {
  if (firstForm.value === "" || firstForm == null) {
    now.style.display = "block";
  }
  return false;
});
