import { gameSettings } from './gameSettings';
import { keyGen, imgNumGen } from "./keyGens";
import { validColorQuantity }  from './validColorQuantity';

// создание начальной карты поля
export const setFieldMap = () => {
	const { fieldColumns, fieldLines } = gameSettings;
	const map = new Map();
	for (let x = 1; x <= fieldColumns; x++) {
		const columnKey = x;
		const column = new Map();
		for (let y = 1; y <= fieldLines; y++) {
			const imgNum =  imgNumGen(1, validColorQuantity());
			const titleKey = keyGen(7);
			column.set(titleKey, [x, y, imgNum, titleKey]);
		}
		map.set(columnKey, column);
	}
	console.log(map);
	return map;
};
