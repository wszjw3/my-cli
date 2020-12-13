
const { promisify } = require('util')

const download = promisify(require('download-git-repo'))
const open = require('open')

const { vueRepo } = require('../config/repo-config')


const { commandSpawn } = require('../utils/terminal')
const createProjectAction = async project => {
    console.log('why helps you create your project~' + project)
    // 1、 clnoe 项目
    await download(vueRepo, project, {clone: true})
    // 2、执行npm install
    const command = process.platform === 'win32' ? 'npm.cmd' : 'npm'
    await commandSpawn(command, ['install'], {
        cwd: `./${project}`
    })
    // 3、运行 npm run server
    commandSpawn(command, ['run', 'serve'], {cwd : `./${project}`})

    // 4、打开浏览器
    open('http://localhost:8080/')
}

const addCpnAction = (name, dest) => {

}

module.exports = {
    createProjectAction,
    addCpnAction
}