import { gameSettings } from './gameSettings';
import { checkArr, checkArr1, checkedElem } from './titleSelect';
import { findNeighbors } from './findNeighborns';

// получаем из fieldMap ячейки строки/столбца таргет ячейки
export  const getCheckArr = args => {
	const { fieldMap } = gameSettings;
	const [x, y, color] = args;
	// checkArr = [];
	// перебираем столбцы fieldMap
	for (const keysArr of fieldMap.values()) {
		// в столце фильтруем ячейки по x/y и цвету таргет ячейки
		const filterArr = keysArr.filter(item => {
			if ((item[0] === x || item[1] === y) && item[2] === color) return item;
		});
		// console.log('filterArr: ', filterArr);
		// пушим в проверочный массив
		checkArr.push(...filterArr);
	}
	for (const keysArr of fieldMap.values()) {
		// в столце фильтруем ячейки по x/y и цвету таргет ячейки
		keysArr.forEach(item => {
			// добавляем в проверочную коллекцию
			if ((item[0] === x || item[1] === y) && item[2] === color) checkArr1.add(item);
		});
	}
	// console.log('checkArr: ', checkArr);
	console.log('checkArr1: ', checkArr1);
	findNeighbors(args); // ищем ближайших соседей
};
