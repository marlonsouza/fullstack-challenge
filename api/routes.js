var palindrome = require('./palindrome.js');

var appRouter = (app) => {
	app.get('/', (req, res) => res.status(200).send({message: 'Fullstack challenge - Souza, Márlon'}));
	
	app.get('/palindrome/:word', (req, res) => {
		let word = req.params.word;
		let success = () => res.status(200).send({message: 'IS A PALINDROME'});
		let error = () => res.status(400).send({message: 'IS NOT A PALINDROME'});

		palindrome(word) ? success() : error();
	});
};

module.exports = appRouter;
