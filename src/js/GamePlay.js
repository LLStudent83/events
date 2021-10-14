export default class GamePlay {
    constructor() {
    this.click = (event) => this.onCellClick(event);
    this.elemContaner = document.querySelector('.contaner');
    
    }
    onCellClick(event) {
        event.preventDefault();
        let score = document.querySelector('.info__game-score-text')
        .textContent;
        let missed = document.querySelector('.info__game-missed-text')
        .textContent;
        console.log('сработал клик', event);
        if (!event.currentTarget.firstElementChild
            .classList.contains('goblin__non')) { // если попал по гоблину
            score ++;
            document.querySelector('.info__game-score-text')
            .textContent = score;
        };
        
        if (event.currentTarget.firstElementChild
            .classList.contains('goblin__non')
            && event.currentTarget.firstElementChild
            .classList.contains('goblin')) { // если промазал по гоблину
                missed ++;
            document.querySelector('.info__game-missed-text')
            .textContent = missed;
        };
        if (missed === 5) {
            this.arrSellEl = Array.from(document.querySelectorAll('.contaner_sell'));
            for (let i = 0; i < this.arrSellEl.length; i++) {
                this.arrSellEl[i].removeEventListener('click', this.click);
              };
              // clearInterval(GameController.intervalId)
        }
    }

}