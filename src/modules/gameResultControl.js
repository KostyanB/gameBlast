import { gameSettings } from './gameSettings';
import { declOfNum } from './declOfNum';

export const gameResultControl = () => {

	const scoringOut = document.querySelector('.scoring'),
		fieldWrap = document.querySelector('.field-wrap'),
		progressShot = document.getElementById('progress-shot'),
		progressScoring = document.getElementById('progress-scoring'),
		titleShot = document.querySelector('.title-shot'),
		titleScoring = document.querySelector('.title-scoring');

	const { tryCount, maxTryCount, gameCount, winCount } = gameSettings;
	scoringOut.value = gameCount;

	const showWin = () => {
		titleScoring.textContent = 'Это Победа!!!';
		titleScoring.classList.add('winner');
		titleShot.classList.add('winner');
	};
	const showLoose = () => {
		titleScoring.textContent = 'Вы проиграли!';
		titleScoring.classList.add('looser');
		titleShot.classList.add('looser');
	};

	if (tryCount >= 0) {
		const tryCountName = declOfNum(tryCount, ['ход', 'хода', 'ходов']),
			tryCountRemain = declOfNum(tryCount, ['Остался', 'Осталось', 'Осталось']);

		progressShot.value = (tryCount / maxTryCount) * 100;
		progressScoring.value = (gameCount / winCount) * 100;
		titleShot.textContent = `${tryCountRemain} ${tryCount} ${tryCountName}`;

		(gameCount < winCount) ? titleScoring.textContent = 'Счет игры' : showWin();
	}
	if (tryCount === 0) {
		fieldWrap.classList.add('blocked');
		titleShot.textContent = 'Ходов больше нет';

		(gameCount < winCount) ? showLoose() : showWin();
	}
};
