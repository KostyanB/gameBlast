import { gameSettings } from './gameSettings';
import { addTitles } from './addTitles';

export const moveTitles = () => {
	const { fieldMap, fieldLines } = gameSettings;
	// перенос тайтлов
	const moveTitle = title => {
		const moveTitle = document.querySelector(`[data-key="${title[3]}"]`);
		if (moveTitle) {
			moveTitle.dataset.x = title[0];
			moveTitle.dataset.y = title[1];
			const targetCell = document.querySelector(`[data-cell-x="${title[0]}"][data-cell-y="${title[1]}"]`);
			targetCell.appendChild(moveTitle);
		}
	};
	// перебор столбцов
	fieldMap.forEach(item => {
		if (item.size < fieldLines) {
			for (const title of item.values()) moveTitle(title);
		}
	});
	addTitles();
};
