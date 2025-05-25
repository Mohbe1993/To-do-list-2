const inpuT = document.getElementById("input");
const listCon = document.getElementById("listCon");

function addTask() {
  if (inpuT.value === "") {
    alert("Please enter a task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inpuT.value;
    listCon.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00D7";
    li.appendChild(span);
  }
  inpuT.value = "";

  save();
}

listCon.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");

      save();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      save();
    }
  },
  false
);

function save() {
  localStorage.setItem("data", listCon.innerHTML);
}

function show() {
  listCon.innerHTML = localStorage.getItem("data");
}

show();
