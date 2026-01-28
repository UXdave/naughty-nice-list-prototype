// Simple server that bypasses gulp build process
// Use when node-sass has compatibility issues

const path = require('path')
const fs = require('fs')

// Create .env file if it doesn't exist
const envExists = fs.existsSync(path.join(__dirname, '/.env'))
if (!envExists) {
  fs.createReadStream(path.join(__dirname, '/lib/template.env'))
    .pipe(fs.createWriteStream(path.join(__dirname, '/.env')))
}

// Create session data defaults if it doesn't exist
const dataDirectory = path.join(__dirname, '/app/data')
const sessionDataDefaultsFile = path.join(dataDirectory, '/session-data-defaults.js')
if (!fs.existsSync(sessionDataDefaultsFile)) {
  if (!fs.existsSync(dataDirectory)) {
    fs.mkdirSync(dataDirectory)
  }
  fs.createReadStream(path.join(__dirname, '/lib/template.session-data-defaults.js'))
    .pipe(fs.createWriteStream(sessionDataDefaultsFile))
}

// Load the server
const app = require('./server.js')
const config = require('./app/config.js')

// Start the server
const port = process.env.PORT || config.port || 3000

app.listen(port, () => {
  console.log('')
  console.log('Listening on port ' + port)
  console.log('Visit http://localhost:' + port + ' in your browser')
  console.log('')
})
