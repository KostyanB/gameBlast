import './css/style.css';
import setFieldSize from './modules/setFieldSize';
import DrawGameField  from './modules/DrawGameField';


// начальные установки игры
const gameFieldSetting = {
	fieldColumns: 4, // ширина поля
	fieldLines: 6, // высота поля
	titlesColorQuantity: 3, // количество цветов 2...5 (с валидацией)
};
// установка размеров поля
setFieldSize(gameFieldSetting);
// прорисовка поля
const gameField = new DrawGameField(gameFieldSetting);
gameField.init();
