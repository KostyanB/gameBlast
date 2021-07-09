import { gameSettings } from './gameSettings';


class DrawTitles {
	constructor(currentCell) {
		this.titlesColorQuantity = gameSettings.titlesColorQuantity;
        this.currentCell = currentCell;
		this.titlesColorName = ['blue', 'green', 'violet', 'red', 'yellow'];
	}
	// расстановка тайтлов
	addTitles(keys) {
		const [x, y, imgNum, titleKey] = keys;

		this.currentCell.innerHTML = `
			<img src="images/title-img${imgNum}.png" class="title-img"
            alt="${this.titlesColorName[imgNum - 1]}" data-key="${titleKey}"
			data-x="${x}" data-y="${y}" data-color-num="${imgNum}">
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
