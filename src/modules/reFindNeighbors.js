import { gameSettings } from './gameSettings';
import { deletedElems, checkList, checkedElem } from './titleSelect';
import { getCheckList } from './getCheckList';
import { showBlast } from './showBlast';

// перепроверка ближайших соседей
export const reFindNeighbors = () => {
	const { minBlastQuantity } = gameSettings;
	// перебор удаляемых
	deletedElems.forEach(item => {
		// если уже в коллекции проверенных - ретурн
		if (checkedElem.has(item)) {
			return;
		} else {
			checkedElem.add(item); // добавить в проверенные
			checkList.clear(); // очистить список проверки
			getCheckList(item); // перезапустить сбор соседей
		}
	});

	(deletedElems.size >= minBlastQuantity) &&	showBlast();
};

