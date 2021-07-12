import { gameSettings } from './gameSettings';
import { addTitles } from './addTitles';

export const moveTitles = () => {
    const { fieldMap, fieldLines } = gameSettings;
    console.log('fieldMap: ', fieldMap);
    // перенос тайтлов
    const moveTitle = (title) => {
        // console.log('title: ', title);
        const [x, y, , key] = title;
        const moveTitle = document.querySelector(`[data-key="${title[3]}"]`);
        moveTitle.dataset.x = title[0];
        moveTitle.dataset.y = title[1];
            // console.log('moveTitle: ', moveTitle);
        const targetCell = document.querySelector(`[data-cell-x="${title[0]}"][data-cell-y="${title[1]}"]`);
            // console.log('targetCell: ', targetCell);
        targetCell.appendChild(moveTitle);

    }
    // перебор столбцов
    fieldMap.forEach(item => {
        if (item.size < fieldLines) {
            for(const title of item.values()) moveTitle(title);
        }
    });
    addTitles();

}