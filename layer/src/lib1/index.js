const moment = require('moment')

exports.function1 = (value) => {
    return `Lib1, function1, value: ${value}, time: ${moment(new Date(),'YYYY-MM-DD HH:mm:ss')}`
}