import { gameSettings } from './gameSettings';
import { gameField } from './startGame';
import { reWriteKeys } from './reWriteKeys';
import { addTitles } from './addTitles';
import { moveTitles } from './moveTitles';


export const showBlast = () => {
	const fieldWrap = document.querySelector('.field-wrap');
	const { deletedElems, fieldMap } = gameSettings;

	deletedElems.forEach(delKeys => {
		const blastElem = document.querySelector(`[data-key="${delKeys[3]}"]`);
		blastElem.classList.add('blasted');
		setTimeout(() => {
			const blastParent = blastElem.parentNode;
			blastParent.removeChild(blastElem);
		}, 1000)

		// перебираем столбцы
		const column = fieldMap.get(delKeys[0]);
		// console.log('column: ', column);
		for (const item of column) {
			const [key, elem] = item;
			if (elem[3] === delKeys[3]) column.delete(key);
		}

		// переписываем ключи x/y
		reWriteKeys(column, delKeys);
	});
	setTimeout(() => moveTitles(), 1000);
	// добавляем недостающие тайтлы
	// addTitles();
	// перерисовываем поле
	// setTimeout(() => {
		// fieldWrap.textContent = '';
		// gameField.init();
	// }, 500);
};
