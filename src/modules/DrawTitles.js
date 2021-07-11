import { gameSettings } from './gameSettings';

export class DrawTitles {
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
			data-x="${x}" data-y="${y}" data-color="${imgNum}">
        `;
	}
}
