import { gameSettings } from './gameSettings';

// проверка пользовательского кол-ва цветов
export const validColorQuantity = () => {
	const quantity = gameSettings.titlesColorQuantity;
	const validQuantity = (quantity < 2) ? 2 :
		(quantity > 5) ? 5 :
			quantity;
	return validQuantity;
};
