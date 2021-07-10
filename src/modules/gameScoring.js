import { gameSettings } from './gameSettings';

let userCount = 0;
export const gameScoring = () => {
	const { gameCount } = gameSettings;
    // console.log('gameCount: ', gameCount);
    const scoring = document.querySelector('.scoring');
    scoring.value = gameCount;
    // gameSettings.gameCount += deletedElems.size;

	// userCount = elems;
	// console.log(' userCount: ',  userCount);



};
