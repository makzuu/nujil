const stack = []

const push = v => stack.push(v)
const drop = () => stack.pop()
const print = () => console.log(stack[stack.length - 1])

const add = () => {
    const [ a, b ]  = [ +drop(), +drop()]
    push(a + b)
}

const printall = () => console.log(stack.reduce((a, el) => a.concat(String.fromCharCode(+el)), ''))

const loop = (i, f, v) => {
    let count = 0
    while (count < i) {
        f(v)
        count++
    }
}

module.exports = {
    push, drop, print, add, printall, loop
}
