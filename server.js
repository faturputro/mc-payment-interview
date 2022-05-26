const express = require('express')
const path = require('path')
const config = require('./app.config')

const app = express()

app.use(express.static(path.resolve(__dirname, 'src')));
app.get('/*', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, 'src', 'index.html'));
})
app.listen(config.PORT, () => console.log('Listening on port ' + config.PORT))
