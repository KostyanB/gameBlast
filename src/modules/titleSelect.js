// import { findNeighbors } from './findNeighborns';
import { getCheckArr } from './getCheckArr';

export let checkArr = []; // проверочный массив
export let deletedElems = []; // массив удаляемых ячеек
export const checkArr1 = new Set();
export const deletedElems1 = new Set();
export const checkedElem = new Set();

// получение ячейки по которой клик
export const titleSelect = () => {
	const gameField = document.querySelector('.game-field');
	let clickedCellKeys = []; // массив ключей клика

	// кликнутый запушили в базу
	const pushTarget = target => {
		console.log('target: ', target);
		clickedCellKeys = [
			+target.dataset.x,
			+target.dataset.y,
			+target.dataset.colorNum,
			target.dataset.key
		];
		// deletedElems1.add(clickedCellKeys);
		// checkedElem.add(clickedCellKeys);
		console.log('deletedElems1-0: ', deletedElems1);
		deletedElems.push(clickedCellKeys);
		// findNeighbors(targetKeyArr);

		// checkArr = [];
		// checkArr1.clear();
		getCheckArr(clickedCellKeys);
		// console.log('del:', deletedElems1);
	};
	// слушатель на поле
	gameField.addEventListener('click', e => {
		if (!e.target.classList.contains('title-img')) {
			return;
		} else {
			deletedElems1.clear();
			deletedElems = [];
			checkArr = [];
			checkArr1.clear();
			clickedCellKeys = [];
			pushTarget(e.target);
		}
	});
};
