const express       = require('express')
const bodyParser    = require('body-parser')
const cors          = require('cors')
const moment        = require('moment')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use((req, res, next) => {
	((req.headers['x-forwarded-proto'] || '').endsWith('http')) ? res.redirect(`https://${req.hostname}${req.url}`) : next()
})

app.get('/', (req, res) => {
	res.status(200).json({message: 'Teste..'});
})

app.listen(3000, async () => {
	console.log('Server running')
})
