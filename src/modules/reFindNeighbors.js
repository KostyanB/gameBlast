import { getCheckList } from './getCheckList';
import { gameSettings } from './gameSettings';

// перепроверка ближайших соседей
export const reFindNeighbors = () => {
	const { checkList, deletedElems, checkedElem } = gameSettings;
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
};
