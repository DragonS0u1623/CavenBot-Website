const { Router } = require('express')
const aboutRouter = Router()

aboutRouter.get('/', async (req, res) => {
	res.render('about')
})

module.exports = aboutRouter