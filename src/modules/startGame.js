import { DrawGameField }  from './DrawGameField';
import { gameSettings } from './gameSettings';
import { setFieldMap }  from './setFieldMap';

export const gameField = new DrawGameField();

export const startGame = () => {
	const startBtn = document.getElementById('start'),
		fieldWrap = document.querySelector('.field-wrap');

	startBtn.addEventListener('click', () => {
		fieldWrap.textContent = ''; // очистка перед отрисовкой
		// создание карты игрового поля и добавление в gameSettings
		gameSettings.fieldMap = setFieldMap();
		gameField.init();
	});
};
