/* eslint-disable no-plusplus */
export default class GameController {
  constructor(gamePlay) {
    this.gamePlay = gamePlay;
    this.arrImgEl = [];
    //     this.elemContaner = document.querySelector('.contaner');
    // this.arrImgEl = Array.from(document.querySelectorAll('.goblin'));
  }

  initGame() {
    this.arrImgEl = Array.from(document.querySelectorAll('.goblin'));
    const visibleElementInd = this.arrImgEl.findIndex((elem) => !elem.classList.contains('goblin__non'));

    if (visibleElementInd !== -1) {
      this.arrImgEl[visibleElementInd].classList.add('goblin__non');
    }

    let rendomPosition = Math.floor(Math.random() * 3);

    while ((visibleElementInd) === rendomPosition) {
      rendomPosition = Math.floor(Math.random() * 4);
    }

    const elem = this.arrImgEl[rendomPosition];
    elem.classList.remove('goblin__non');
  }

  init() {
    this.intervalId = setInterval(this.initGame, 1000);
    this.arrSellEl = Array.from(document.querySelectorAll('.contaner_sell'));
    for (let i = 0; i < this.arrSellEl.length; i++) {
      this.arrSellEl[i].addEventListener('click', this.gamePlay.click);
    }
  }
}
