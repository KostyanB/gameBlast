import { gameSettings } from './gameSettings';

// установка размеров поля в зависимости
// от заданных строк/столбцов
export const setFieldSize = () => {
	const { fieldColumns, fieldLines } = gameSettings;
	const width = fieldColumns * 40,
		height = fieldLines * 45;

	// задаем стиль ширина/высота поля
	let style = document.getElementById('field-style');
	if (!style) {
		style = document.createElement('style');
		style.id = 'field-style';
	}
	style.textContent = `
        .field, .game-field {
            width: ${width}px;
            height: ${height}px;
        }
	`;
	document.head.appendChild(style);
};
