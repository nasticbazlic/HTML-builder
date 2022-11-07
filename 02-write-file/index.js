const fs = require('fs');
const path = require('path');
const { stdin, stdout } = process;
stdin.write('Enter your text: ');

process.on('exit', () => stdout.write('Thanks! Bye '));
stdin.on('data', data => {
	const str = data.toString('utf8').trim();
	if (str == 'exit') {
		process.exit()
	} else {
		fs.appendFile(
			path.join(__dirname, 'text.txt'),
			`${str}`, err => {
				if(err) throw err
			}
		)
	}
})