document.addEventListener("DOMContentLoaded", () => {
  const cells = document.querySelectorAll(".cell");
  const enemy = document.createElement("div");  //("img") - при создании img в игре отсутствует картинка
  //enemy.src = "./goblin.png";       //"goblin.png" тоже не видит
  enemy.className = "goblin";

  let currentCell = null;

  function getCell() {
    const index = Math.floor(Math.random() * cells.length);
    return cells[index];
  }

  function movieGoblin() {
      const newCell = getCell();
      if (newCell !== currentCell) {
        currentCell = newCell;
        currentCell.appendChild(enemy);
      }
  }

  setInterval(movieGoblin, 1000);
});
