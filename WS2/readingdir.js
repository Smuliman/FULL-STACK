var fs = require("fs");

fs.readdir('/Users/it/FULL STACK/WS2', (err, files) => {
    if(err)
    console.log(err);
    else {
        console.log("\nCurrent directory filenames:");
        files.forEach(file => {
            console.log(file);
        })
    }
})