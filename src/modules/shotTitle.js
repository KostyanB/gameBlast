import { getCheckList } from './getCheckList';
import { gameSettings } from './gameSettings';
import { showBlast } from './showBlast';
import { gameResultControl } from './gameResultControl';

// получение ячейки по которой клик
export const shotTitle = () => {
	const gameField = document.querySelector('.game-field');
	let clickedKeys = []; // массив ключей клика
	const { minBlastQuantity, checkList, deletedElems } = gameSettings;

	// запуск процесса игры
	const checkBlastQuantity = () => {
		gameSettings.gameCount += deletedElems.size;
		if (deletedElems.size >= minBlastQuantity) {
			showBlast();
			gameSettings.tryCount--;
			gameResultControl();
		}
	};
	// исключаем двойной клик по удаляемому
	const doubleClickCheck = () => {
		if (![...deletedElems].some(item => item[3] === clickedKeys[3])) {
			deletedElems.clear(); // чистим удаленные
			checkList.clear(); // чистим чек-лист
			getCheckList(clickedKeys);
			checkBlastQuantity();
		}
	};
	// получаем ключи клика
	const getTargetKeys = target => {
		clickedKeys = [
			+target.dataset.x,
			+target.dataset.y,
			+target.dataset.color,
			target.dataset.key
		];
		doubleClickCheck();
	};
	// слушатель на поле
	gameField.addEventListener('click', e => {
		if (!e.target.classList.contains('title-img')) {
			return; // возврат если мимо
		} else {
			clickedKeys = [];
			getTargetKeys(e.target);
		}
	});
};
