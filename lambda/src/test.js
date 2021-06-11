'use strict'

const {function1} = require('lib1');
const {function2} = require('lib2');

exports.handler = async (event) => {
    console.info(function1("test"))
    console.info(function2("test"))
    return event
}