const crypto = require('crypto');
const fs = require('fs');

function decrypt(source, dest, password) {
	if (fs.statSync(source).isFile()) {
		const decipher = crypto.createDecipher('aes192', password);
		const sourceStream = fs.createReadStream(source);
		const destStream = fs.createWriteStream(dest);

		sourceStream.pipe(decipher).pipe(destStream);
	} else {
		throw new Error('source file do not exist');
	}
}

function encrypt(source, dest, password) {
	if (fs.statSync(source).isFile()) {
		const cipher = crypto.createCipher('aes192', password);
		const sourceStream = fs.createReadStream(source);
		const destStream = fs.createWriteStream(dest);

		sourceStream.pipe(cipher).pipe(destStream);
	} else {
		throw new Error('source file do not exist');
	}
}

module.exports = {
	encrypt: encrypt,
	decrypt: decrypt
};

