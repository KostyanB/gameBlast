import { gameSettings } from './gameSettings';
import { gameScoring } from './gameScoring';
import { gameField } from './startGame';

const fieldWrap = document.querySelector('.field-wrap');

export const showBlast = () => {
    const { gameCount, deletedElems, fieldMap } = gameSettings;
    // console.log(' fieldMap: ', fieldMap);
    console.log('deletedElems: ', deletedElems);

    deletedElems.forEach(item => {
        const blastElem = document.querySelector(`[data-key="${item[3]}"]`);
        // console.log('blastElem: ', blastElem);
        blastElem.classList.add('blasted');
        fieldMap.get(item[0]).delete(item[3]);
        // const column = fieldMap.get(item[0] );
        // console.log('item[0] : ', item[0] );
        // console.log(' column: ',  column);
        // column.delete(item[3]);
        // console.log('newCol: ', newCol);

        console.log('fieldMap: ', fieldMap);


    });
    fieldWrap.textContent = '';
    gameField.init();
    // const gameCount = [];
    // gameCount.push(deletedElems.size);
    // gameScoring(gameCount);
};