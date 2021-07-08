// генераторы
// генератор уникальных ключей
export const keyGen = keyLength => {
	const char = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
	// return () => {
		let resKey = '';
		for (let i = 0, n = char.length; i < keyLength; ++i) {
			resKey += char.charAt(Math.floor(Math.random() * n));
		}
		return resKey;
	// };
};
// генератор выбора цвета
export const imgNumGen = (min, max) => (min + Math.floor(Math.random() * (max + 1 - min)));
