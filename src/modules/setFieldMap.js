import { gameSettings } from './gameSettings';
import { keyGen, imgNumGen } from "./keyGens";

// создание начальной карты поля
export const setFieldMap = () => {
	const { fieldColumns, fieldLines, titlesColorQuantity, fieldMap } = gameSettings;
	// const map = new Map();
	for (let x = 1; x <= fieldColumns; x++) {
		const columnKey = x;
		const column = new Map();
		for (let y = 1; y <= fieldLines; y++) {
			const imgNum =  imgNumGen(1, titlesColorQuantity);
			const titleKey = keyGen(7);
			column.set(y, [x, y, imgNum, titleKey]);
		}
		fieldMap.set(columnKey, column);
	}
	console.log(fieldMap);
	// return map;
};
