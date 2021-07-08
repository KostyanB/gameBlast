// установка размеров поля в зависимости
// от заданных строк/столбцов

const setFieldSize = ({ fieldColumns, fieldLines }) => {

	const width = fieldColumns * 40,
		height = fieldLines * 45;
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
export default setFieldSize;
