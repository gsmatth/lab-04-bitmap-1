'use strict';

const fs = require('fs');
const bitmapReader = require('./lib/bitmap-reader');

//read file into buffer
fs.readdir('./data', bitmapReader);
