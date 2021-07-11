import { gameSettings } from './gameSettings';
import { setFieldSize } from './setFieldSize';
import { clearField } from './clearField';

export const settingValid = () => {
	const columnsInput = document.querySelector('.field-columns'),
		linesInput = document.querySelector('.field-lines'),
		colorsInput = document.querySelector('.color-quantity'),
		gameControl = document.querySelector('.game-control');

	const { minWidth, maxWidth, minHeight, maxHeight, minColor,	maxColor } = gameSettings;

	const validQuantity = (min, max, value) => ((value < min) ? min : (value > max) ? max : value);

	gameControl.addEventListener('change', e => {
		const target = e.target;
		if (target === columnsInput) {
			const columns = validQuantity(minWidth, maxWidth, +target.value);
			gameSettings.fieldColumns = columns;
			columnsInput.value = columns;
		}
		if (target === linesInput) {
			const lines = validQuantity(minHeight, maxHeight, +target.value);
			gameSettings.fieldLines = lines;
			linesInput.value = lines;
		}
		if (target === colorsInput) {
			const colors = validQuantity(minColor, maxColor, +target.value);
			gameSettings.titlesColorQuantity = colors;
			colorsInput.value = colors;
		}
		clearField();
		setFieldSize();
	});
};
