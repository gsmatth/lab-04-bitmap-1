'use strict';

module.exports = function(tempBuffer, newColorTable){
  var tempPixelValue = [];

  for(let i = 54; i < (newColorTable.byteLength - 3); i += 4) {

    var bluePixelValue = tempBuffer.readUInt8(i);
    var greenPixelValue = tempBuffer.readUInt8(i + 1);
    var redPixelValue = tempBuffer.readUInt8(i + 2);



    tempPixelValue.splice(0, 1, bluePixelValue);
    tempPixelValue.splice(1, 1, greenPixelValue);
    tempPixelValue.splice(2, 1, redPixelValue);
    console.log('tempPixelValue after each loop: ', tempPixelValue);

    for(let ii = 0; ii < 3; ii++){
      tempPixelValue[ii] += 128;
      console.log('changed pixel values: ', tempPixelValue[ii]);
      if(tempPixelValue[ii] > 256){
        tempPixelValue[ii] -= 256;
      }
    }
    tempBuffer.writeUInt8(tempPixelValue[0], i);
    tempBuffer.writeUInt8(tempPixelValue[1], i + 1);
    tempBuffer.writeUInt8(tempPixelValue[2], i + 2);
  }
};
