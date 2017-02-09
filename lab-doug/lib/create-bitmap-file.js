'use strict';
const fs = require('fs');

module.exports = function(bitmapFileBuf){
  var tempBuffer = Buffer.alloc(bitmapFileBuf.byteLength);
  bitmapFileBuf.copy(tempBuffer);
  console.log('byte length of tempBuffer: ', tempBuffer.byteLength);
  console.log('contents of tempBuffer: ', tempBuffer);
  fs.writeFile('./data/new-bitmap.bmp', tempBuffer, callback(tempBuffer));
};

function callback(tempBuffer){
  console.log('test data: ', tempBuffer);
}
