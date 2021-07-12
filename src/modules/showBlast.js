import { gameSettings } from './gameSettings';
import { reWriteKeys } from './reWriteKeys';
import { moveTitles } from './moveTitles';
import { rewriteFieldMap } from './rewriteFieldMap';

export const showBlast = () => {
	const { deletedElems, fieldMap, blastDelay } = gameSettings;
	// перебор удаляемых тайтлов
	deletedElems.forEach(delKeys => {
		const blastElem = document.querySelector(`[data-key="${delKeys[3]}"]`);
		blastElem.classList.add('blasted');
		setTimeout(() => {
			const blastParent = blastElem.parentNode;
			blastParent.removeChild(blastElem);
		}, blastDelay); // в styles для сжигания 1 сек opasity-> 0

		// получаем столбец
		const column = fieldMap.get(delKeys[0]);
		for (const item of column) {
			const [key, elem] = item;
			if (elem[3] === delKeys[3]) column.delete(key);
		}

		// переписываем ключи x/y
		reWriteKeys(column, delKeys);
	});
	rewriteFieldMap();
	setTimeout(() => moveTitles(), blastDelay); // в styles для сжигания 1 сек opasity-> 0
};
