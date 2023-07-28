import getItem from "./get-item";


function generateTapeItems(items, cellsCount){
  const list = document.querySelector(".scope__list");

  const cells = cellsCount;
  
  if (list) {
    list.remove();
  }

  const newUl = document.createElement("ul");
  newUl.classList.add("scope__list");
  document.querySelector(".scope").appendChild(newUl);

  for (let i = 0; i < cells; i++) {
    const item = getItem(items);

    const li = document.createElement("li");
    li.setAttribute("data-item", JSON.stringify(item)); // Item id
    li.classList.add("scope-list__item");
    li.innerHTML = `<img src="${item.img}" alt="" />`;

    newUl.appendChild(li);
  }
}

export default generateTapeItems;