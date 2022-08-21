const fs = require('fs');

const getIns = () => {
    try {
        const instructions = fs.readFileSync(process.argv[2], 'utf8');
        return instructions.split('\n').filter(str => str !== '').map(str => str.split(' '))
    } catch (err) {
        console.error(err);
    }
}

module.exports = getIns()
