import './css/style.css';
import { DrawGameField }  from './modules/DrawGameField';


const gameFieldSetting = {
    fieldColumns: 10, // ширина поля
    fieldLines: 15, // высота поля
    titlesColorQuantity: 5, // количество цветов 2...5 (с валидацией)
};

const gameField = new DrawGameField(gameFieldSetting);
gameField.init();