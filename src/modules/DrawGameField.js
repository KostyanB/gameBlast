import { DrawTitles } from './DrawTitles';
import { gameSettings } from './gameSettings';

export const fieldWrap = document.querySelector('.field-wrap');

export class DrawGameField {
	constructor() {
		this.titlesColorQuantity = gameSettings.titlesColorQuantity;
		this.fieldMap = gameSettings.fieldMap; // при загрузке пусто
	}
	// на основе Map создаем поле
	createField() {
		// ключи - номера столбцов
		for (const column of this.fieldMap.keys()) this.addColumn(column);
		// value - массивы с влож массивами - парами координат
		for (const cellKeys of this.fieldMap.values()) {
			cellKeys.forEach(posKey => {
				this.addCell(posKey);
			});
		}
	}
	// добавляем столбцы
	addColumn(posY) {
		const column = document.createElement('div');
		column.classList.add(`column-${posY}`);
		column.classList.add(`field-column`);
		column.dataset.column = `${posY}`;
		fieldWrap.append(column);
	}

	createLine() {

	}
	// добавляем ячейки
	addCell(args) {
		const [posX, posY] = args;
		const currentBlock = document.querySelector(`.column-${posX}`);
		const currentCell = document.createElement('div');
		currentCell.classList.add('field-cell');
		currentCell.dataset.cellX = posX;
		currentCell.dataset.cellY = posY;
		currentBlock.append(currentCell);
		const drawTitles = new DrawTitles(currentCell);
		drawTitles.addTitles(args);
	}
	//
	init() {
		this.createField();
	}
}
