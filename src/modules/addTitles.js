import { gameSettings } from './gameSettings';
import { keyGen, imgNumGen } from "./keyGens";
import { DrawTitles } from './DrawTitles';

// дорисовка недостающих тайтлов
export const addTitles = () => {
	const { fieldLines, fieldMap, titlesColorQuantity } = gameSettings;

	fieldMap.forEach((column, xKey) => {

		if (column.size < fieldLines) {
			for (let y = column.size + 1;  y <= fieldLines; y++) {
				const imgNum =  imgNumGen(1, titlesColorQuantity);
				const titleKey = keyGen(7);
				const args = [xKey, y, imgNum, titleKey];
				column.set(y, args);
				const currentCell = document.querySelector(`[data-cell-x="${xKey}"][data-cell-y="${y}"]`);
				const drawTitles = new DrawTitles(currentCell);
				drawTitles.addTitles(args);
			}
		}
		fieldMap.set(xKey, column);
	});
};
