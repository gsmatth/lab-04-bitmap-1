'use strict';

module.exports = function(tempBuffer, newColorTable){
  for(let i = 54; i < (newColorTable.byteLength - 3); i += 4) {
    tempBuffer.writeUInt8(1, i);
    tempBuffer.writeUInt8(1, i + 1);
    tempBuffer.writeUInt8(1, i + 2);
    tempBuffer.writeUInt8(1, i + 3);
  }
};
