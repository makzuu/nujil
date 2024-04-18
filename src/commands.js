const stk = [0, 0, 0, 0, 0, 0, 0, 0]

function psh(value, address) {
    stk[address] = value
}

function add() {
    let sum = 0
    for (let i = 1; i < stk.length; i++) {
        sum += Number(stk[i])
    }
    psh(sum, 0)
}

function mov(address, to) {
    stk[to] = stk[address]
    stk[address] = 0
}

function prt() {
    console.log(stk[0])
}

function lup(iterations, subCommands) {
    let i = 0
    while (i < iterations) {
        for (command of subCommands) {
            command()
        }
        i++
    }
}

module.exports = { psh, add, mov, prt, lup }
