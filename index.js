const instructions = require('./src/instructions')
const commands = require('./src/commands')

instructions.forEach(([i, ...args]) => {
    args = args.map(el => {
        if (!commands[el]) return el
        return commands[el]
    }) 
    commands[i](...args)
})
