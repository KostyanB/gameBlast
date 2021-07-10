import { gameSettings } from './gameSettings';
import { gameScoring } from './gameScoring';

export const showBlast = () => {
    const { gameCount, deletedElems } = gameSettings;
    deletedElems.forEach(item => {
        const blastElem = document.querySelector(`[data-key="${item[3]}"]`);
        // console.log('blastElem: ', blastElem);
        blastElem.classList.add('blasted');

    });
    // const gameCount = [];
    // gameCount.push(deletedElems.size);
    // gameScoring(gameCount);
};