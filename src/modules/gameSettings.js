// игровые переменные
export const gameSettings = {
	fieldColumns: 4, // ширина поля
	fieldLines: 6, // высота поля
	titlesColorQuantity: 3, // количество цветов
	minBlastQuantity: 3, // минимальное сжигание
	gameCount: 0, // счет игровой сессии
	tryCount: 0, // количество "выстрелов"
	checkList: new Set(), // потенциальные соседи
	deletedElems: new Set(), // на удаление
	checkedElem: new Set(), // проверенные
};
