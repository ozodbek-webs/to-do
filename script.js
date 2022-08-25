const formEle = document.querySelector("form");
const input = document.querySelector("input");
const content_to_app = document.querySelector(".content_todo_app");
let content = [];

function submitForm(e) {
  e.preventDefault();

  content.push({
    name: input.value,
    id: Math.random(),
  });

  writeContent();
}

function writeContent() {
  const div = document.createElement("div");
  //   const p1 = document.createElement("p");
  //   const p2 = document.createElement("p");
  //   p1.textContent = content[0].id;
  //   p2.textContent = content[0].name;
  //   div.appendChild(p1);
  //   div.appendChild(p2);

  let newElement = "";
  for (let i = 0; i < content.length; i++) {
    newElement += `<div class="todo_element" onClick="removeTodoElement(${content[i].id})">
                 <p class="p1">${content[i].id.toFixed(2)}</p>
                 <p class="p2">${content[i].name}</p>
                 <button class="btn">X</button>
             </div>`;
  }

  content_to_app.innerHTML = newElement;
}
function xxx(){
    newElement=""
}
function removeTodoElement(id) {
    content = content.filter((item) => item.id !== id);
  
    writeContent();
  }
  
  formEle.addEventListener("submit", submitForm);