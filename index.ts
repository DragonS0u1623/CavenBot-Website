const express = require('express')
const path = require('path')

const app = express()
const port = process.env.PORT || 3000

app.use(express.static('public'))
app.use('/css', express.static(path.join(__dirname, '/public/css')))
app.use('/img', express.static(path.join(__dirname, '/public/img')))
app.use('/js', express.static(path.join(__dirname, '/public/js')))
app.use(express.json())

app.set('views', './src/views')
app.set('view engine', 'ejs')

const home = require('./src/routes/home')
const about = require('./src/routes/about')
const commands = require('./src/routes/commands')
const suggestions = require('./src/routes/suggestions')

app.use('/', home)
app.use('/about', about)
app.use('/commands', commands)
app.use('/suggestions', suggestions)

app.listen(port, () => console.log(`CavenBot website is now running`))