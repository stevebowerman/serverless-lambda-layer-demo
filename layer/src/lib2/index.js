const moment = require('moment')

exports.function2 = (value) => {
    return `Lib2, function2, value: ${value}, time: ${moment(new Date(),'YYYY-MM-DD HH:mm:ss')}`
}