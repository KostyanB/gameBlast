import { gameSettings } from './gameSettings';
import { checkArr } from './titleSelect';
import { findNeighbors } from './findNeighborns';

// получаем из fieldMap ячейки строки/столбца кликнутой
export  const getCheckArr = args => {
	const { fieldMap } = gameSettings;
	const [x, y] = args;
	// checkArr = [];
	// перебираем столбцы fieldMap
	for (const keysArr of fieldMap.values()) {
		// в столце фильтруем ячейки по x/y клика
		const filterArr = keysArr.filter(item => {
			if (item[0] === x || item[1] === y) return item;
		});
		// пушим в проверочный массив
		checkArr.push(...filterArr);
	}
	findNeighbors(args); // ищем ближайших соседей
};
