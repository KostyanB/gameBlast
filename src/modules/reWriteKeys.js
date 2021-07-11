// перезапись ключей оставшихся элементов
export const reWriteKeys = (column, elemKeys) => {
	column.delete(elemKeys[3]);
	column.forEach(item => {
		if (item[1] > elemKeys[1]) {
			const newY = item[1] - 1;
			item.splice(1, 1, newY);
		}
	});
};
