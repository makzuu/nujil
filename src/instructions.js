const commands = require('./commands')
commands.psh(1, 1)
commands.add()
commands.prt()

commands.lup(10, [
    () => commands.psh(1,1),
    () => commands.add(),
    () => commands.prt()
])
