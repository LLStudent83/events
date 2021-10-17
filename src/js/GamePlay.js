/* eslint-disable no-plusplus */
export default class GamePlay {
  constructor() {
    this.click = (event) => this.onCellClick(event);
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
      this.missed--;
      this.printScore();
      this.printMissed();
    }

    if (event.currentTarget.firstElementChild // если промазал по гоблину
      .classList.contains('goblin__non')
            && event.currentTarget.firstElementChild
              .classList.contains('goblin')) {
      this.printMissed();
    }
    this.checkMissed();
  }

  checkMissed() {
    if (this.missed >= 5) { // если промазал или не успел более 5 раз
      this.arrSellEl = Array.from(document.querySelectorAll('.contaner_sell'));
      for (let i = 0; i < this.arrSellEl.length; i++) {
        this.arrSellEl[i].removeEventListener('click', this.click);
      }
      const divEnd = document.createElement('div');
      divEnd.textContent = 'Вы проиграли, надо быть резче';
      divEnd.classList.add('end-message');
      document.body.append(divEnd);
      clearInterval(this.intervalId);
    }
  }

  // onMutationObserver() {
  //   // const miss = this.missed;
  //   // const printMissed = this.printMissed.bind(this);
  //   let click = true;
  //   const config = {
  //     attributes: true,
  //     childList: true,
  //     subtree: true,
  //   };

  //   this.elemContaner.addEventListener('click', () => { click = false; });
  //   const callback = function (observer) { // 1 аргумент mutationList,
  //     if (click) {
  //       let miss = document.querySelector('.info__game-missed-text')
  //         .textContent;
  //       miss++;
  //       GamePlay.printMissed(miss);
  //       this.missed = miss;
  //     }
  //     click = true;
  //     this.checkMissed();
  //     // console.log(`mutation.type ${mutation.type}`);
  //     // console.log(`mutation.attributeNamespace ${mutation.attributeNamespace}`);
  //     // console.log(`mutation.target ${mutation.target}`);
  //     // console.log(`mutation.addedNodes ${mutation.addedNodes}`);
  //   };
  //   const observer = new MutationObserver(callback);
  //   observer.observe(this.elemContaner, config);
  // }
}
