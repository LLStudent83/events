import GameController from './GameController';
import GamePlay from './GamePlay';

const gamePlay = new GamePlay();
const gameController = new GameController(gamePlay);
gameController.init();
