import { gameSettings } from './gameSettings';
import { gameResultControl } from './gameResultControl';

// очистка перед отрисовкой
export const clearField = () => {
	const fieldWrap = document.querySelector('.field-wrap'),
		titleShot = document.querySelector('.title-shot'),
		titleScoring = document.querySelector('.title-scoring');

	fieldWrap.textContent = ''; // очистка index.
	gameSettings.gameCount = 0; // обнулить счет
	gameSettings.tryCount = gameSettings.maxTryCount;
	titleScoring.classList.remove('winner');
	titleShot.classList.remove('winner');
	titleScoring.classList.remove('looser');
	titleShot.classList.remove('looser');
	gameResultControl();
};
