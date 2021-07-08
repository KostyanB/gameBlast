import { gameSettings } from './gameSettings';
import { keyGen, imgNumGen } from "./keyGens";
// ключи для тайтлов 7 знаков
// const titleKey = keyGen(7);

class DrawTitles {
	constructor(currentCell) {
		this.titlesColorQuantity = gameSettings.titlesColorQuantity;
        this.currentCell = currentCell;
		this.titlesColorName = ['blue', 'green', 'violet', 'red', 'yellow'];
	}
	// расстановка тайтлов
	addTitles(keys) {
		const [x, y, imgNum, titleKey] = keys;
		// const imgNum =  imgNumGen(1, this.validColorQuantity());
		this.currentCell.innerHTML = `
			<img src="images/title-img${imgNum}.png"
            alt="${this.titlesColorName[imgNum - 1]}" data-key="${titleKey}"
			data-x="${x}" data-y="${y}">
        `;
	}
	// проверка пользовательского кол-ва цветов
	// validColorQuantity() {
	// 	const validQuantity = (this.titlesColorQuantity < 2) ? 2 :
	// 		(this.titlesColorQuantity > 5) ? 5 :
	// 			this.titlesColorQuantity;
	// 	return validQuantity;
	// }
	// // генератор выбора цвета
	// imgNumGen(min, max) {
	// 	const key = min + Math.floor(Math.random() * (max + 1 - min));
	// 	return key;
	// }
	//
	// init() {
	// 	this.addTitles(this.currentCell);
	// }
}
export default DrawTitles;
