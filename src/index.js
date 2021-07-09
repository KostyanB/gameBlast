import './css/style.css';
import { gameSettings } from './modules/gameSettings';
import { setFieldSize } from './modules/setFieldSize';
import { DrawGameField }  from './modules/DrawGameField';
import { titleSelect }  from './modules/titleSelect';
import { startGame } from './modules/startGame';

// *************************************************
//начальные установки игры
gameSettings.fieldColumns = 4; // ширина поля
gameSettings.fieldLines = 6; // высота поля
gameSettings.titlesColorQuantity = 3;  // количество цветов 2...5 (с валидацией)
gameSettings.minBlastQuantity = 3; // min количество сжигаемых тайтлов

// установка размеров поля
setFieldSize();
// прорисовка поля
// const gameField = new DrawGameField();
// gameField.init();
titleSelect();
startGame();
