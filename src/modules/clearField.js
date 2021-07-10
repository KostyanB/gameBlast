import { gameSettings } from './gameSettings';
import { gameScoring } from './gameScoring';

// очистка перед отрисовкой
export const clearField = () => {
	const fieldWrap = document.querySelector('.field-wrap');

	fieldWrap.textContent = ''; // очистка index.html
	gameSettings.gameCount = 0; // обнулить счет
	gameScoring();
};
