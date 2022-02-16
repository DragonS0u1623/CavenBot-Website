const { Router } = require('express')
const commandsRouter = Router()
const commands = require('../../commands.json')

commandsRouter.get('/', async (req, res) => {
	res.render('commands', { prefix: 'm?', commands })
})

module.exports = commandsRouter