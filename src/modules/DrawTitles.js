import { gameSettings } from './gameSettings';

export class DrawTitles {
	constructor(currentCell) {
		this.currentCell = currentCell;
		this.titlesColorQuantity = gameSettings.titlesColorQuantity;
		this.titlesColorName = gameSettings.titlesColorName;
	}
	// установка тайтла в ячейку
	pushTitles(title) {
		this.currentCell.innerHTML = title;
	}
	// создание тайтла
	addTitles(keys) {
		const [x, y, imgNum, titleKey] = keys;
		const title = `
		<img src="images/title-img${imgNum}.png" class="title-img"
		alt="${this.titlesColorName[imgNum - 1]}" data-key="${titleKey}"
		data-x="${x}" data-y="${y}" data-color="${imgNum}">
	`;
		this.pushTitles(title);
	}
}
