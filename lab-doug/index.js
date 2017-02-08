'use strict';

const fs = require('fs');

//read file into buffer
//
// get the first x 2 bytes
// convert the 2 bytes to string and see if they are DM
// if they are read buffer portion that says where the pixel data starts.
// read part that states how many bytes long the pixel data is
