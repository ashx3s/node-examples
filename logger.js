"use strict";

function log(message) {
  if (!message) {
    console.error('there is no input or input is undefined')
    return
  }
  console.log('The message is: ', message);
}

log('testing this function')

module.exports.log = log