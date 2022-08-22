const commands = require('./commands')
const file = require('./readFile')()

let ii = file.split('\n').filter(el => el !== '')
    .map(el => el.split(' ').filter(el => el !== ''))
    .filter(el => el[0] !== '-')

// () => command(...args)
// [command, arg, arg]
const simpleCommand = array => {
    return () => commands[array[0]](...array.slice(1))
}

let func
const args = []
const simplentCommand = array => {
    return (args) => () => {
        commands[array[0]](array[1], args)
    }
}

ii = ii.map(c => {
    const command = c[0]
    if (command === 'end') {
        return func(args)
    }else if (command !== 'lup' && command !== 'end' && func !== undefined) {
        args.push(simpleCommand(c))
        return ''
    } else if (command !== 'lup' && command !== 'end') {
        return simpleCommand(c)
    } else if (command === 'lup') {
        func = simplentCommand(c) 
        return ''
    }
})

ii = ii.filter(el => el !== '')

// psh 1 1
// add
// prt
// psh 1 2
// add
// prt
// lup 10
//     mov 0 1
//     add
//     prt
// end

// ii = [
//     () => _.psh(1, 1),
//     () => _.add(),
//     () => _.prt(),
//     () => _.psh(1, 2),
//     () => _.add(),
//     () => _.prt(),
//     () => _.lup(10, [
//         () => _.mov(0, 1),
//         () => _.add(),
//         () => _.prt(),
//     ])
// ]

module.exports = ii
