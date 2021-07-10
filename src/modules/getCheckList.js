import { gameSettings } from './gameSettings';
import { findNeighbors } from './findNeighborns';

// получаем из fieldMap ячейки строки/столбца таргет ячейки
export  const getCheckList = args => {
	const { fieldMap, checkList } = gameSettings;
	const [x, y, color, key] = args;
	// перебираем столбцы
	for (const column of fieldMap.values()) {
		// в столце фильтруем ячейки по x/y и цвету таргет ячейки
		column.forEach(item => {
			// добавляем в проверочную коллекцию
			if (item[3] !== key && (item[0] === x || item[1] === y) && item[2] === color)
				checkList.add(item);
		});
	}
	// ищем ближайших соседей
	findNeighbors(args);
};
