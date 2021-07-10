import './css/style.css';
import { gameSettings } from './modules/gameSettings';
import { setFieldSize } from './modules/setFieldSize';
import { startGame } from './modules/startGame';
// import { DrawGameField }  from './modules/DrawGameField';
import { selectTitle }  from './modules/selectTitle';


// *************************************************
//начальные установки игры
gameSettings.fieldColumns = 4; // ширина поля
gameSettings.fieldLines = 6; // высота поля
gameSettings.titlesColorQuantity = 3;  // количество цветов 2...5 (с валидацией)
gameSettings.minBlastQuantity = 3; // min количество сжигаемых тайтлов

// установка размеров поля
setFieldSize();
// старт игры
startGame();
// прорисовка поля
// const gameField = new DrawGameField();
// gameField.init();
// выбор тайтла
selectTitle();

