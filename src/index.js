import './css/style.css';
import { gameSettings } from './modules/gameSettings';
import setFieldSize from './modules/setFieldSize';
import setFieldMap  from './modules/setFieldMap';
import DrawGameField  from './modules/DrawGameField';
import titleSelect  from './modules/titleSelect';


// начальные установки игры
// const gameSetting = {
// 	fieldColumns: 4, // ширина поля
// 	fieldLines: 6, // высота поля
// 	titlesColorQuantity: 3, // количество цветов 2...5 (с валидацией)
// };
// установка размеров поля
setFieldSize(gameSettings);
// создание карты игрового поля и добавление в gameSettings
gameSettings.fieldMap = setFieldMap();

// прорисовка поля
const gameField = new DrawGameField();
gameField.init();
titleSelect(gameSettings);
