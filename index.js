const commands = require('./src/commands')
const instructions = require('./src/instructions')
const stk = require('./src/stk')

instructions.forEach(f => {
    f()
})
