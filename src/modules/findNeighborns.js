import { checkList, deletedElems } from './titleSelect';
import { reFindNeighbors } from './reFindNeighbors';

// ищем ближайших соседей
export const findNeighbors = cellKeys => {
	const [ x, y ] = cellKeys;

	checkList.forEach(item => {
		if ((item[0] === x && Math.abs(item[1] - y) === 1) ||
                (item[1] === y && Math.abs(item[0] - x) === 1)) {
			if (!deletedElems.has(item)) {
				deletedElems.add(item);
			}
		} else {
			return;
		}
	});
	// console.log('deletedElems1: ', deletedElems1);
	// запуск проверки ближайших соседей
	reFindNeighbors();
};
