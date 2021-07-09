import { gameSettings } from './gameSettings';
import { deletedElems } from './titleSelect';

export const showBlast = () => {
    const { fieldMap } = gameSettings;
    // console.log('fieldMap: ', fieldMap);
    // console.log('del ', deletedElems);
    deletedElems.forEach(item => {
        const blastElem = document.querySelector(`[data-key="${item[3]}"]`);
        // console.log('blastElem: ', blastElem);
        blastElem.classList.add('blasted');

    });

};