'use strict';
const fs = require('fs');
const createBitmapFile = require('./create-bitmap-file');

module.exports = function (err, filePaths){
  if(err) return new Error(err);
  console.log('data passed from #readdir: ', filePaths);
  //[ 'bitmap.bmp', 'finger-print.bmp', 'house.bmp' ]
  fs.readFile('./data/' + filePaths[0], function(err, data){
    if(err) console.log('error in #fs.readFile', err);
    console.log('file passed to #readFile: ', filePaths[0]);
    var headerField = data.toString('utf8', 0, 2);
    console.log('headerfield: ', headerField);
    if(headerField === 'BM'){
      // console.log('inside if statement: ', headerField);
      var fileSize = data.readUInt32LE(2);
      console.log('the size of the file in bytes: ', fileSize);
      var pixelArrayOffset = data.readUInt32LE(10);
      console.log('pixelArrayOffset: ', pixelArrayOffset);
      //14 is offset in bytes to start of BITMAPINFOHEADER
      var infoHeaderSize = data.readUInt32LE(14);
      console.log('the size of the DIB header in bytes: ', infoHeaderSize);
      var bitmapPixelWidth = data.readInt32LE(18);
      console.log('bitmap width in pixels: ', bitmapPixelWidth);
      var bitmapPixelHeight = data.readInt32LE(22);
      console.log('bitmap height in pixels: ', bitmapPixelHeight);
      var colorPlanesNumber = data.readUInt16LE(26);
      console.log('number of color planes, should be 1: ', colorPlanesNumber);
      var bitsPerPixel = data.readUInt16LE(28);
      console.log('number of bits per pixel: ', bitsPerPixel);
      var numberOfColors = data.readUInt32LE(46);
      console.log('number of colors in the color palette: ', numberOfColors);
      var typeCompression = data.readUInt32LE(30);
      console.log('compression method used (0 = none): ', typeCompression);
      var colorTable = data.slice(55, 1077);
      console.log('color table content: ', colorTable);
      createBitmapFile(data);
    }
  });
};
