const inpuT = document.getElementById("input");
const listCon = document.getElementById("listCon");

function addTask() {
  if (inpuT.value === "") {
    alert("Please enter a task");
  } else {
    let li = document.createElement("li");
    let p = document.createElement("p");
    p.textContent = inpuT.value;
    p.setAttribute("contenteditable", "true");
    li.appendChild(p);

    let span = document.createElement("span");
    span.innerHTML = "\u00D7";
    li.appendChild(span);

    listCon.appendChild(li);
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
    } else {
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

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});
