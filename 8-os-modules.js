const { log } = require('console')
const os = require('os')


//info about the user by os modules
const user = os.userInfo()

//method returns the systems uptime in seconds
console.log(`The System uptime is : ${os.uptime} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS)