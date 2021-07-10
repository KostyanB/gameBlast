import { reFindNeighbors } from './reFindNeighbors';
import { gameSettings } from './gameSettings';

// ищем ближайших соседей
export const findNeighbors = cellKeys => {
	const [ x, y ] = cellKeys;
	const { checkList, deletedElems } = gameSettings;
	checkList.forEach(item => {
		if (deletedElems.has(item))  {
			return;
		} else {
			if ((item[0] === x && Math.abs(item[1] - y) === 1) ||
                (item[1] === y && Math.abs(item[0] - x) === 1))
					deletedElems.add(item);
		}
	});
	// запуск проверки ближайших соседей
	reFindNeighbors();
};
