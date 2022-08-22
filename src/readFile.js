const fs = require('node:fs')

const readFile = () => {
    try {
        return fs.readFileSync(process.argv[2], { encoding: 'utf8' })
    } catch (error) {
        console.error('unable to open', error.path)
    }
}

module.exports = readFile
