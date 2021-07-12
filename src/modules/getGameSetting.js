import { gameSettings } from "./gameSettings";

export const getGameSetting = async () => {
  const shotCountOut = document.querySelector('.shot-count');

  // console.log('shotCountOut.placeholder: ', shotCountOut.placeholder);
	const result = await fetch('db/settings.json'); // wait + res
		if (!result.ok) throw `Ошибка БД ${result.status}`;
    const res = await result.json();
    const data = Object.entries(res[0]);
    data.forEach(([key, value]) => gameSettings.[key] = value);
    // console.log('gameSettings: ', gameSettings);
    shotCountOut.placeholder = gameSettings.maxTryCount;
};
