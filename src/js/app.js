function game() {
  const arrImgEl = Array.from(document.querySelectorAll('.goblin'));
  const visibleElementInd = arrImgEl.findIndex((elem) => !elem.classList.contains('goblin__non'));

  if (visibleElementInd !== -1) {
    arrImgEl[visibleElementInd].classList.add('goblin__non');
  }

  let rendomPosition = Math.floor(Math.random() * 3);

  while ((visibleElementInd) === rendomPosition) {
    rendomPosition = Math.floor(Math.random() * 4);
  }

  const elem = arrImgEl[rendomPosition];
  elem.classList.remove('goblin__non');
}

setInterval(game, 1000);
