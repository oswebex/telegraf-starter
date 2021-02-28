const [ , , taskName ] = process.argv

const task = require('./' + taskName)

task.default()
