import { gameSettings } from './gameSettings';
import { keyGen, imgNumGen } from "./keyGens";

// дорисовка недостающих тайтлов
export const addTitles = () => {
	const { fieldLines, fieldMap, titlesColorQuantity } = gameSettings;

	fieldMap.forEach((item, key) => {
		if (item.size < fieldLines) {
			for (let y = item.size + 1;  y <= fieldLines; y++) {
				const imgNum =  imgNumGen(1, titlesColorQuantity);
				const titleKey = keyGen(7);
				item.set(titleKey, [key, y, imgNum, titleKey]);
			}
		}
	});
};
