var fs = require('fs');


var data = fs.readFileSync("test5.txt", "utf8");

fs.appendFile("test4.txt", data, 'utf8',
    function (err) {
        if (err) console.log(err);
        else if (data.length === 0) {
            console.log("File is empty");
        }
        else {
            console.log("\nFile Contents of file before append:", data);
            console.log("\nFile Contents of file after append:",
                fs.readFileSync("test4.txt", "utf8"));
        }
    });