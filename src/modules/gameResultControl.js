import { gameSettings } from './gameSettings';

export const gameResultControl = () => {

	const shotCountOut = document.querySelector('.shot-count'),
		scoringOut = document.querySelector('.scoring'),
		fieldWrap = document.querySelector('.field-wrap'),
		progressShot = document.getElementById('progress-shot'),
		progressScoring = document.getElementById('progress-scoring');

	const { tryCount, maxTryCount, gameCount, winCount } = gameSettings;
    scoringOut.value = gameCount;
	if (tryCount > 0) {
		shotCountOut.value = tryCount;
		progressShot.value = (tryCount / maxTryCount) * 100;
		progressScoring.value = (gameCount / winCount) * 100;
	} else {
		shotCountOut.value = 0;
		fieldWrap.classList.add('blocked');
	}
};
