const program = require('commander')
const {
    createProjectAction
} = require('./action')

const createCommands = () => {
    program
        .command('create <project> [others...]')
        .description('clone a repository into a folder')
        .action(createProjectAction)
}

module.exports = createCommands