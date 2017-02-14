'use strict';

const expect = require('chai').expect;
const fs = require('fs');
// const bitmapReader = require('../lib/bitmap-reader');

describe('bitmap-reader module', function(){
  describe('verify reading of header field', () => {
    it('should return a string of "BM" ', (done) => {
      var filePaths = [ 'bitmap.bmp', 'finger-print.bmp', 'house.bmp' ];
      fs.readFile('./data/' + filePaths[0], (err, data) => {
        var headerField = data.toString('utf8', 0, 2);
        expect(headerField).to.equal('BM');
        done();
      });
    });

    it('should match one of the 6 headerfield identies ', function(done) {
      var filePaths = [ 'bitmap.bmp', 'finger-print.bmp', 'house.bmp' ];
      fs.readFile('./data/' + filePaths[0], (err, data) => {
        var headerField = data.toString('utf8', 0, 2);
        expect(headerField).to.be.oneOf(['BM', 'BA', 'CI', 'CP', 'IC', 'PT']);
        done();
      });
    });
    it('should have no compression ', function(done) {
      var filePaths = [ 'bitmap.bmp', 'finger-print.bmp', 'house.bmp' ];
      fs.readFile('./data/' + filePaths[0], (err, data) => {
        var typeCompression = data.readUInt32LE(30);
        expect(typeCompression).to.eql(0);
        done();
      });
    });
    it('should have a DIB header length of 40 ', function(done) {
      var filePaths = [ 'bitmap.bmp', 'finger-print.bmp', 'house.bmp' ];
      fs.readFile('./data/' + filePaths[0], (err, data) => {
        var infoHeaderSize = data.readUInt32LE(14);
        expect(infoHeaderSize).to.eql(40);
        done();
      });
    });
  });
});
