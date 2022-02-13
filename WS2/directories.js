var fs = require("fs");

// Creates /tmp/a/apple, regardless of whether `/tmp` and /tmp/a exist.
fs.mkdir('/Users/it/FULL STACK/WS2/newdata', { recursive: true }, (err) => {
    if (err) throw err;
  });