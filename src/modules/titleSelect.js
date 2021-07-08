// import { findNeighbors } from './findNeighborns';
import { getCheckArr } from './getCheckArr';

export let checkArr = []; // проверочный массив
export let deletedElems = []; // массив удаляемых ячеек

// получение ячейки по которой клик
export const titleSelect = () => {
	const gameField = document.querySelector('.game-field');
	let clickedCellKeys = []; // массив ключей клика

	// перепроверка ближайших соседей
	const reFindNeighbors = () => {
		deletedElems.forEach(item => {
			console.log('item: ', item);
			getCheckArr(item);
		});
	};

	// кликнутый запушили в базу
	const pushTarget = target => {
		console.log('target: ', target);
		clickedCellKeys = [
			+target.dataset.x,
			+target.dataset.y,
			+target.dataset.colorNum,
			target.dataset.key
		];
		// deletedElems.push(clickedCellKeys);
		// findNeighbors(targetKeyArr);
		console.log(deletedElems);
		checkArr = [];
		getCheckArr(clickedCellKeys);

	};
	// слушатель на поле
	gameField.addEventListener('click', e => {
		if (!e.target.classList.contains('title-img')) {
			return;
		} else {
			deletedElems = [];
			clickedCellKeys = [];
			pushTarget(e.target);
		}
	});
};
