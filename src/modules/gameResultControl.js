import { gameSettings } from './gameSettings';

export const gameResultControl = () => {

	const scoringOut = document.querySelector('.scoring'),
		fieldWrap = document.querySelector('.field-wrap'),
		progressShot = document.getElementById('progress-shot'),
		progressScoring = document.getElementById('progress-scoring'),
		titleShot = document.querySelector('.title-shot'),
		titleScoring = document.querySelector('.title-scoring');

	// const shotCountOut = document.querySelector('.shot-count');

	const { tryCount, maxTryCount, gameCount, winCount } = gameSettings;
	scoringOut.value = gameCount;
	if (tryCount >= 0) {
		// shotCountOut.value = tryCount;
		progressShot.value = (tryCount / maxTryCount) * 100;
		progressScoring.value = (gameCount / winCount) * 100;
		titleShot.textContent = 'Осталось ходов';
		titleScoring.textContent = (gameCount < winCount) ? 'Счет игры' : 'Это Победа!!!';
	}
	if (tryCount === 0) {
		fieldWrap.classList.add('blocked');
		titleShot.textContent = 'Ходов больше нет';
		titleScoring.textContent = (gameCount < winCount) ? 'Вы проиграли!' : 'Это Победа!!!';
	}


};
