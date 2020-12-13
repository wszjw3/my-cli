const program = require('commander')
const {
    createProjectAction,
    addCpnAction
} = require('./action')

const createCommands = () => {
    program
        .command('create <project> [others...]')
        .description('clone a repository into a folder')
        .action(createProjectAction)
    program
        .command('addcpn <name>')
        .description('add vue component, 例如： why addcpn HelloWord -d src/cpmponents')
        .action(addCpnAction)
}

module.exports = createCommands