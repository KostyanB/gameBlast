import { gameSettings } from './gameSettings';
import { checkList } from './titleSelect';
import { findNeighbors } from './findNeighborns';

// получаем из fieldMap ячейки строки/столбца таргет ячейки
export  const getCheckList = args => {
	const { fieldMap } = gameSettings;
	const [x, y, color] = args;
	// перебираем столбцы
	for (const column of fieldMap.values()) {
		// в столце фильтруем ячейки по x/y и цвету таргет ячейки
		column.forEach(item => {
			// добавляем в проверочную коллекцию
			if ((item[0] === x || item[1] === y) && item[2] === color) checkList.add(item);
		});
	}
	// ищем ближайших соседей
	findNeighbors(args);
};
