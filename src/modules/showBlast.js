import { gameSettings } from './gameSettings';
import { gameField } from './startGame';
import { reWriteKeys } from './reWriteKeys';
import { addTitles } from './addTitles';

export const showBlast = () => {
	const fieldWrap = document.querySelector('.field-wrap');
	const { deletedElems, fieldMap } = gameSettings;

	deletedElems.forEach(item => {
		const blastElem = document.querySelector(`[data-key="${item[3]}"]`);
		blastElem.classList.add('blasted');
		// перебираем столбцы
		const column = fieldMap.get(item[0]);
		// переписываем ключи x/y
		reWriteKeys(column, item);
	});
	// добавляем недостающие тайтлы
	addTitles();
	// перерисовываем поле
	setTimeout(() => {
		fieldWrap.textContent = '';
		gameField.init();
	}, 500);
};
