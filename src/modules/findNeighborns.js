import { checkArr, deletedElems, checkArr1, deletedElems1, checkedElem } from './titleSelect';
import { gameSettings } from './gameSettings';
import { reFindNeighbors } from './reFindNeighbors';

// ищем ближайших соседей
export const findNeighbors = cellKeys => {
	const [ x, y, key ] = cellKeys;
	const { fieldColumns, fieldLines } = gameSettings;
	// checkArr.forEach(item => {
	// 	if (item[3] !== key) {
	// 		if ((item[0] === x && Math.abs(item[1] - y) === 1) ||
    //             (item[1] === y && Math.abs(item[0] - x) === 1)) {
	// 			deletedElems.push(item);
	// 		} else {
	// 			return;
	// 		}
	// 	}
	// });
	// console.log('deletedElems: ', deletedElems);
	checkArr1.forEach(item => {
			if ((item[0] === x && Math.abs(item[1] - y) === 1) ||
                (item[1] === y && Math.abs(item[0] - x) === 1)) {
				deletedElems1.add(item);
			} else {
				return;
			}
	});

	// for (let yPlus = y; yPlus <= fieldLines; yPlus++) {
	// 	checkArr1.forEach(item => {
	// 		console.log('del ', deletedElems1);
	// 		console.log('item: ', item);
	// 		if (deletedElems1.has(item)) {
	// 			console.log('return');
	// 			return;
	// 		} else if (item[0] === x && item[1] === yPlus) {
	// 			console.log('item[1]: ', item[1]);

	// 			console.log('item[0]: ', item[0]);
	// 			// console.log('xPlus: ', xPlus);

	// 				deletedElems1.add(item);

	// 				return;
	// 		}
	// 	});
	// }
	console.log('deletedElems1: ', deletedElems1);
	reFindNeighbors();
};
