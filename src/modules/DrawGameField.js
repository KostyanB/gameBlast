import keyGen from "./keyGen";
// ключи для тайтлов 7 знаков
const titleKey = keyGen(7);

const startBtn = document.getElementById('start');
const fieldWrap = document.querySelector('.field-wrap');
// const gameField = document.querySelector('.game-field');


class DrawGameField {
	constructor({ fieldColumns, fieldLines, titlesColorQuantity }) {
		this.fieldColumns = fieldColumns;
		this.fieldLines = fieldLines;
		this.titlesColorQuantity = titlesColorQuantity;
		this.fieldPosKeys = [];
		this.titlesColorName = ['dlue', 'green', 'violet', 'red', 'yellow'];
	}

	//создание поля для тайтлов
	createFieldArr(...args) {
		const [xStart, xStop, yStart, yStop, arr] = args;
		for (let y = yStart; y <= yStop; y++) {
			this.addLine(y);
			for (let x = xStart; x <= xStop; x++) {
				this.addCell(x, y);
				arr.push([x, y]);
			}
		}
console.log('arr: ', arr);
		return arr;

	}
	// отрисовка линий
	addLine(posY) {
		const line = document.createElement('div');
		line.classList.add(`line-${posY}`);
		line.classList.add(`field-line`);
		line.dataset.linePos = `${posY}`;
		fieldWrap.append(line);
	}
	// отрисовка ячеек
	addCell(posX, posY) {
		const currentLine = document.querySelector(`.line-${posY}`);
		const currentCell = document.createElement('div');
		currentCell.classList.add('field-cell');
		currentCell.dataset.xPos = posX;
		currentCell.dataset.yPos = posY;
		this.addTitles(currentCell);
		currentLine.append(currentCell);
	}
	// расстановка тайтлов
	addTitles(cell) {
		const imgNum =  this.imgNumGen(1, this.validColorQuantity());
		cell.innerHTML = `
			<img src="images/title-img${imgNum}.png"
            alt="${this.titlesColorName[imgNum - 1]}" data-title-key="${titleKey()}">
        `;
	}
	// проверка пользовательского кол-ва цветов
	validColorQuantity() {
		const currentQuantity = (this.titlesColorQuantity < 2) ? 2 :
			(this.titlesColorQuantity > 5) ? 5 :
				this.titlesColorQuantity;
		return currentQuantity;
	}
	// генератор выбора цвета
	imgNumGen(min, max) {
		const key = min + Math.floor(Math.random() * (max + 1 - min));
		return key;
	}
	init() {
		startBtn.addEventListener('click', () => {
			fieldWrap.textContent = '';
			this.createFieldArr(1, this.fieldColumns, 1, this.fieldLines, this.fieldPosKeys);
		});
	}
}
export default DrawGameField;
