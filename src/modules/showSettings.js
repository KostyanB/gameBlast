import { gameSettings } from './gameSettings';

// отображение настроек игры при старте
export const showSettings = () => {
	const targetHeader = document.querySelector('.target-header'),
		titleColumns = document.querySelector('.title-columns'),
		titleLines = document.querySelector('.title-lines'),
		titleColors = document.querySelector('.title-colors'),
		titleShot = document.querySelector('.title-shot');

	// const shotCountOut = document.querySelector('.shot-count');

	const { minWidth, maxWidth, minHeight, maxHeight, minColor, maxColor, maxTryCount, winCount } = gameSettings;

	// shotCountOut.placeholder = maxTryCount;
	targetHeader.textContent = `Цель: набрать ${winCount} очков за ${maxTryCount} ходов`;
	titleColumns.textContent = `Ширина поля от ${minWidth} до ${maxWidth}`;
	titleLines.textContent = `Высота поля от ${minHeight} до ${maxHeight}`;
	titleColors.textContent = `Количество цветов от ${minColor} до ${maxColor}`;
	titleShot.textContent = `Осталось ходов`;
};
