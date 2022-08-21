const stk = require('./stk')

module.exports = {
    psh: (value, addr) => {
        stk[addr] = value
    },

    add: () => {
        stk[0] = stk.slice(1).reduce((a, el) => a + el)
    },

    mov: (addr, to) => {
        stk[to] = stk[addr]
        stk[addr] = 0
    },

    prt: () => {
        console.log(stk[0])
    },

    lup: (i, cc) => {
        let z = 0
        while (z < i) {
            cc.forEach(command => {
               command() 
            })
            z++
        }
    }
}
