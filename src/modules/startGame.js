import { DrawGameField, fieldWrap }  from './DrawGameField';
import { gameSettings } from './gameSettings';
import { setFieldMap }  from './setFieldMap';
import { clearField } from './clearField';

export const gameField = new DrawGameField();

export const startGame = () => {
	const startBtn = document.getElementById('start');
	const { fieldMap } = gameSettings;
		// fieldWrap = document.querySelector('.field-wrap');

	startBtn.addEventListener('click', () => {
		clearField();
		fieldWrap.classList.remove('blocked');
		fieldMap.clear();
		setFieldMap();
		// создание карты игрового поля и добавление в gameSettings
		// gameSettings.fieldMap = setFieldMap(); // создаем карту поля
		gameField.init(); // инициализируем поле
	});
};
