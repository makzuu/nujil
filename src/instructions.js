const file = require("./readFile")()
const commandList = require("./commands")

function makeCommand(commandData) {
    const commandName = commandData[0]
    const func = commandList[commandName]
    if (func == undefined) {
        throw `Syntax Error: command ${commandName} does not exist`
    }
    const [, ...args] = commandData

    return () => func(...args)
}

function getInstructions() {
    let instructionsArray = file.split('\n').filter(el => el !== '')
        .map(el => el.split(' ').filter(el => el !== ''))
        .filter(el => el[0] !== '-')

    instructions = []
    subInstructions = []
    for (let i = 0; i < instructionsArray.length; i++) {
        const instructionName = instructionsArray[i][0]
        if (instructionName == "lup") {
            const interations = instructionsArray[i][1]
            i++
            while (i < instructionsArray.length && instructionsArray[i][0] != "end") {
                subInstructions.push(makeCommand(instructionsArray[i]))
                i++
            }
            if (instructionsArray[i][0] == "end") {
                i++
                instructions.push(makeCommand(["lup", interations, subInstructions]))
            } else {
                throw "Syntax Error: end keyword expected at end of lup body"
            }
        } else {
            instructions.push(makeCommand(instructionsArray[i]))
        }
    }
    return instructions
}

module.exports = getInstructions()
