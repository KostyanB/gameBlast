import { deletedElems1, checkArr1, checkedElem } from './titleSelect';
import { getCheckArr } from './getCheckArr';

// перепроверка ближайших соседей
export const reFindNeighbors = () => {
	deletedElems1.forEach(item => {

		if (checkedElem.has(item)) {
			return;
		} else {
			checkedElem.add(item);
			getCheckArr(item);
		}
		// getCheckArr(item);
	});
};

