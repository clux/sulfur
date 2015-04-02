var dye = require('dye');

var info = function (name, msg) {
  console.log(name + ': ' + dye.bold(dye.grey('note: ')) + msg);
};

var warn = function (name, msg) {
  console.warn(dye.bold(name + ': ' + dye.magenta('warning: ') + msg));
};

var error = function (name, msg) {
  console.error(dye.bold(name + ': ' + dye.red('error: ') + msg));
};

exports.absorb = function (smell, name) {
  smell.on('info', info.bind(null, name));
  smell.on('warn', warn.bind(null, name));
  smell.on('err', error.bind(null, name));
};
