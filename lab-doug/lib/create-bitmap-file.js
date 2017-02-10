'use strict';
const fs = require('fs');
// const transformImageToWhite = require('./transform-image-to-white');
const transformImageToBlack = require('./transform-image-to-black');

module.exports = function(bitmapFileBuf){
  var tempBuffer = Buffer.alloc(bitmapFileBuf.byteLength);
  bitmapFileBuf.copy(tempBuffer);
  // console.log('byte length of tempBuffer: ', tempBuffer.byteLength);
  // console.log('contents of tempBuffer: ', tempBuffer);
  var infoHeaderSize = bitmapFileBuf.readUInt32LE(14);
  // console.log('the size of the new DIB header in the tempBuffer, in bytes: ', infoHeaderSize);
  var newColorTable = bitmapFileBuf.slice(`${infoHeaderSize + 14}`, 1077);
  // console.log('tempBuffer color table content: ', newColorTable);

  // transformImageToWhite(tempBuffer, newColorTable);
  transformImageToBlack(tempBuffer, newColorTable);

  // for(let i = 54; i < (newColorTable.byteLength - 3); i += 4) {
  //   tempBuffer.writeUInt8(255, i);
  //   tempBuffer.writeUInt8(255, i + 1);
  //   tempBuffer.writeUInt8(255, i + 2);
  //   tempBuffer.writeUInt8(255, i + 3);
  // }
  writeNewFile(tempBuffer);
};

function writeNewFile(tempBuffer){
  fs.writeFile('./data/new-bitmap.bmp', tempBuffer);
  console.log('tempBuffer.slice for color table in callback: ', tempBuffer.slice(54, 1077));
  // console.log('newColorTable content passed into callback: ', newColorTable);
}
