const { Router } = require('express')
const homeRouter = Router()

homeRouter.get('/', async (req, res) => {
	res.render('store')
})

module.exports = homeRouter