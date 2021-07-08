import './css/style.css';
import setFieldSize from './modules/setFieldSize';
import setFieldMap  from './modules/setFieldMap';
import DrawGameField  from './modules/DrawGameField';


// начальные установки игры
const gameSetting = {
	fieldColumns: 4, // ширина поля
	fieldLines: 6, // высота поля
	titlesColorQuantity: 3, // количество цветов 2...5 (с валидацией)
};

// установка размеров поля
setFieldSize(gameSetting);
// создание карты игрового поля
export const fieldMap = setFieldMap(gameSetting);
console.log('fieldMap: ', fieldMap);
gameSetting.fieldMap = setFieldMap(gameSetting);

// gameSetting.set('', );
// прорисовка поля
const gameField = new DrawGameField(gameSetting);
gameField.init();
