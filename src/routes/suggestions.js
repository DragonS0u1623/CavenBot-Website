const { Router } = require('express')
const suggestionsRouter = Router()

suggestionsRouter.get('/', async (req, res) => {
	res.render('suggestions')
})

module.exports = suggestionsRouter