'use strict'

const {function1} = require('lib1');
const {function2} = require('lib2');

exports.handler = async (event) => {
    return {
        function1: function1("test"),
        function2: function2("test")
    }
}