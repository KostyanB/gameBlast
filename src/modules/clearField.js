import { gameSettings } from './gameSettings';
import { gameResultControl } from './gameResultControl';

// очистка перед отрисовкой
export const clearField = () => {
	const fieldWrap = document.querySelector('.field-wrap');

	fieldWrap.textContent = ''; // очистка index.
	gameSettings.gameCount = 0; // обнулить счет
	gameSettings.tryCount = gameSettings.maxTryCount;
	gameResultControl();
};
