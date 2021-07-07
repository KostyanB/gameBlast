const keyGen = keyLength => {
	const char = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
	return () => {
		let resKey = '';
		for (let i = 0, n = char.length; i < keyLength; ++i) {
			resKey += char.charAt(Math.floor(Math.random() * n));
		}
		return resKey;
	};
};
export default keyGen;
