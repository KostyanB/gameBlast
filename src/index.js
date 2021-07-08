import './css/style.css';
import setFieldSize from './modules/setFieldSize';
import setFieldMap  from './modules/setFieldMap';
import DrawGameField  from './modules/DrawGameField';


// начальные установки игры
const gameFieldSetting = {
	fieldColumns: 4, // ширина поля
	fieldLines: 6, // высота поля
	titlesColorQuantity: 3, // количество цветов 2...5 (с валидацией)
};
// установка размеров поля
setFieldSize(gameFieldSetting);
// создание карты игрового поля
const fieldMap = setFieldMap(gameFieldSetting);
console.log('fieldMap: ', fieldMap);
// прорисовка поля
const gameField = new DrawGameField(gameFieldSetting);
gameField.init();
