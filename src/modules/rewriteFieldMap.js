import { gameSettings } from './gameSettings';

export const rewriteFieldMap = () => {
	const { fieldLines, fieldMap } = gameSettings;

	for (const column of fieldMap.values()) {
		let count = 1;
		if (column.size < fieldLines) {
			for (const elem of column) {
				const [key, val] = elem;
				// проверяем соответствие ключа и коорд y
				if (key !== val[1]) {
					// перезаписываем с правильным ключом
					const template = val;
					column.delete(key);
					column.set(count, template);
				}
				count++;
			}
		}
	}
};
