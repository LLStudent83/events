/* eslint-disable no-plusplus */
import GamePlay from './GamePlay';

export default class GameController {
  constructor(gamePlay) {
    this.gamePlay = gamePlay;
    this.arrImgEl = [];
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
    this.gamePlay.missed++;
    // const printMissed = this.gamePlay.printMissed.bind(GamePlay);
    // setTimeout(printMissed, 1000);
    this.gamePlay.checkMissed();
    this.gamePlay.printMissed();
  }

  init() {
    const initGame = this.initGame.bind(this);
    this.gamePlay.intervalId = setInterval(initGame, 1000);
    this.arrSellEl = Array.from(document.querySelectorAll('.contaner_sell'));
    // устанавливаем обработчик события click на ячейки
    for (let i = 0; i < this.arrSellEl.length; i++) {
      this.arrSellEl[i].addEventListener('click', this.gamePlay.click);
    }
  }
}
