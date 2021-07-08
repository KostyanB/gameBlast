
const setFieldMap = ({ fieldColumns, fieldLines }) => {
    const map = new Map();
    for (let x = 1; x <= fieldColumns; x++) {
        const columnKey = x;
        const line = [];
        for (let y = 1; y <= fieldLines; y++) {
            line.push([x, y]);
        }
        map.set(columnKey, line);
    }
    return map;
}
export default setFieldMap;
