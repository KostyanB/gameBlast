import { gameSettings } from "./gameSettings";
import { showSettings } from "./showSettings";

export const getGameSetting = async () => {

	const result = await fetch('db/settings.json'); // wait + res
		if (!result.ok) throw `Ошибка БД ${result.status}`;
    const res = await result.json();
    const data = Object.entries(res[0]);
    data.forEach(([key, value]) => gameSettings.[key] = value);

    showSettings();
};
