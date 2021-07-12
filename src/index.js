import './css/style.css';
import { getGameSetting } from './modules/getGameSetting';
import { setFieldSize } from './modules/setFieldSize';
import { settingValid } from './modules/settingValid';
import { startGame } from './modules/startGame';
import { shotTitle }  from './modules/shotTitle';

// получение настроек
getGameSetting();
// валидация пользовательских установок
settingValid();
// установка размеров поля
setFieldSize();
// старт игры
startGame();
// выбор тайтла
shotTitle();

/* *******************************************************
**************** установки default*****************
fieldColumns = 4 ширина поля
fieldLines = 6 высота поля
titlesColorQuantity = 3 количество цветов

*********** настройки в bd/db.json *************************
minWidth = 4 тайтлов по горизонтали
maxWidth = 15
minHeight = 4 тайтлов по вертикали
maxHeight = 15
minColor = 2 цветов
maxColor = 5
blastDelay = 1000 задержка ms blast-эффекта
minBlastQuantity = 3 количество сжигаемых тайтлов
maxTryCount = 20 максимальное количество ходов
winCount = 100 набрать очков для победы
*/
