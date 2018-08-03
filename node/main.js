'use strict;'
var greet = require('./hello');
// var example = require('./example');
var { say, invisible } = require('./example');
var s = 'Shirly';

greet(s);
// example.say();
// example.invisible();
say();
invisible();