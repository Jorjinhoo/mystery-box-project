function getItem(items) {
  let item;
  while (!item) {
    const chance = Math.floor(Math.random() * 100000); // Set chance from 0.001 to 100
    items.forEach((el) => {
      if (el.chance > chance && !item) item = el;
    });
  }
  return item;
}

export default getItem;