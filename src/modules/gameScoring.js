import { gameSettings } from './gameSettings';

export const gameScoring = () => {
	const { gameCount } = gameSettings;
	// console.log('gameCount: ', gameCount);
	const scoring = document.querySelector('.scoring');
	scoring.value = gameCount;
	// gameSettings.gameCount += deletedElems.size;




};
