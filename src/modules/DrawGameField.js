import { DrawTitles } from './DrawTitles';
import { gameSettings } from './gameSettings';

const fieldWrap = document.querySelector('.field-wrap');

export class DrawGameField {
	constructor() {
		this.titlesColorQuantity = gameSettings.titlesColorQuantity;
		this.fieldMap = 0; // при загрузке пусто
	}
	// на основе Map создаем поле
	createField() {
		this.fieldMap = gameSettings.fieldMap;
		// ключи - номера столбцов
		for (const column of this.fieldMap.keys()) this.addColumn(column);
		// value - массивы с влож массивами - парами координат
		for (const cellKeys of this.fieldMap.values()) cellKeys.forEach(posKey => this.addCell(posKey));
	}
	// добавляем столбцы
	addColumn(posY) {
		const column = document.createElement('div');
		column.classList.add(`column-${posY}`);
		column.classList.add(`field-column`);
		column.dataset.column = `${posY}`;
		fieldWrap.append(column);
	}
	// добавляем ячейки
	addCell(args) {
		// console.log('args: ', args);
		const [posX, posY] = args;
		const currentBlock = document.querySelector(`.column-${posX}`);
		const currentCell = document.createElement('div');
		currentCell.classList.add('field-cell');
		currentCell.dataset.x = posX;
		currentCell.dataset.y = posY;
		currentBlock.append(currentCell);
		const drawTitles = new DrawTitles(currentCell);
		drawTitles.addTitles(args);
	}
	//
	init() {
		this.createField();
	}
}
