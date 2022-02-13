//import { unlink } from 'fs';
var fs = require("fs");

fs.unlink('/Users/it/FULL STACK/WS2/mynewfile.txt', (err) => {
    if (err) throw err;
    console.log('/Users/it/FULL STACK/WS2/mynewfile.txt was deleted');
  });

  