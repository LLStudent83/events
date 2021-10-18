/* eslint-disable no-plusplus */
export default class GamePlay {
  constructor() {
    this.speed = 600;
    this.elemContaner = document.querySelector('.contaner');
    this.score = document.querySelector('.info__game-score-text')
      .textContent;
    this.missed = document.querySelector('.info__game-missed-text')
      .textContent;
  }

  printScore() {
    document.querySelector('.info__game-score-text')
      .textContent = this.score;
  }

  printMissed() {
    document.querySelector('.info__game-missed-text')
      .textContent = this.missed;
  }

  onCellClick(event) {
    event.preventDefault();
    if (!event.currentTarget.firstElementChild
      .classList.contains('goblin__non')) { // если попал по гоблину
      this.score++;
      this.printScore();
    }

    if (event.currentTarget.firstElementChild // если промазал по гоблину
      .classList.contains('goblin__non')
            && event.currentTarget.firstElementChild
              .classList.contains('goblin')) {
      this.missed++;
      this.printMissed();
    }
    this.checkMissed();
  }

  checkMissed() {
    if (this.missed >= 5) { // если промазал или не успел более 5 раз
      this.arrSellEl = Array.from(document.querySelectorAll('.contaner_sell'));
      const divEnd = document.createElement('div');
      divEnd.textContent = 'Вы проиграли, надо быть резче';
      divEnd.classList.add('end-message');
      document.body.append(divEnd);
      clearInterval(this.intervalId);
    }
  }

  async waitClick() {
    const printMissed = this.printMissed.bind(this);
    const checkMissed = this.checkMissed.bind(this);
    this.arrSellEl = Array.from(document.querySelectorAll('.contaner_sell'));

    const promise = new Promise((resolve, reject) => {
      // устанавливаем обработчик события click на ячейки
      for (let i = 0; i < this.arrSellEl.length; i++) {
        this.arrSellEl[i].addEventListener('click', (event) => {
          resolve(event);
        });
      }
      this.elemContaner.addEventListener('click', (event) => {
        resolve(event);
      });
      this.timeoutId = setTimeout(() => { reject(); }, this.speed - 10);
    });

    promise.then((event) => {
      this.onCellClick(event);
    });

    promise.then(null, () => {
      this.missed++;
      printMissed(); checkMissed();
    });
  }
}
