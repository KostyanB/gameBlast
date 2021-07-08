import { checkArr, deletedElems } from './titleSelect';

// ищем ближайших соседей
export const findNeighbors = cellKeys => {
	const [x, y, color, key] = cellKeys;
	checkArr.forEach(item => {
		if (item[3] !== key && item[2] === color) {
			if ((item[0] === x && Math.abs(item[1] - y) === 1) ||
                (item[1] === y && Math.abs(item[0] - x) === 1)) {
				deletedElems.push(item);
			} else {
				return;
			}
		}
	});
};
