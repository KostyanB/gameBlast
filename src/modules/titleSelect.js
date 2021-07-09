import { getCheckList } from './getCheckList';
// коллекции для проверки
export const checkList = new Set(); // потенциальные соседи
export const deletedElems = new Set(); // на удаление
export const checkedElem = new Set(); // проверенные

// получение ячейки по которой клик
export const titleSelect = () => {
	const gameField = document.querySelector('.game-field');
	let clickedCellKeys = []; // массив ключей клика

	// кликнутый запушили в базу
	const pushTarget = target => {
		// массив ключей клика
		clickedCellKeys = [
			+target.dataset.x,
			+target.dataset.y,
			+target.dataset.colorNum,
			target.dataset.key
		];
		// запуск сбора потенциальных соседей
		getCheckList(clickedCellKeys);
		// console.log('del:', deletedElems1);
	};
	// слушатель на поле
	gameField.addEventListener('click', e => {
		if (!e.target.classList.contains('title-img')) {
			return; // возврат если мимо
		} else {
			deletedElems.clear(); // чистим удаленные
			checkList.clear(); // чистим чек-лист
			clickedCellKeys = []; // чистим массив ключей клика
			pushTarget(e.target);
		}
	});
};
