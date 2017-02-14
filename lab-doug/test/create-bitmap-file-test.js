'use strict';

const expect = require('chai').expect;
const fs = require('fs');
const createBitmapFile = require('../lib/create-bitmap-file');

describe('create-bitmap-file module', function(){
  describe('creating new buffer', function(){
    it('should create a new file named "new-bitmap.bmp" ', function(done){
      fs.readFile('./data/bitmap.bmp', function(err, data){
        createBitmapFile(data);
        var fileNames = fs.readdir('./data', function (){
          expect(fileNames).to.be.oneOf(['new-bitmap.bmp']);
        });
        done();
      });
    });
    it('should create a new file with the same length as original file ', function(done){
      fs.readFile('./data/bitmap.bmp', function(err, data){
        createBitmapFile(data);
        var fileNames = fs.readdir('./data', function (){
          expect(fileNames['bitmap.bmp'].length).to.equal(fileNames['new-bitmap.bmp'].length);
        });
        done();
      });
    });

  });
});
