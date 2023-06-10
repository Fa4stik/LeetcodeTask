const fs = require('fs');
const path = require('path');

const directoryPath = __dirname;

fs.readdir(directoryPath, function(err, files) {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }

    const taskFiles = files.filter(file => file.startsWith('task_') && file.endsWith('.js'));

    const latestTaskFile = taskFiles.sort().pop();

    console.log('Latest task file is: ' + latestTaskFile);

    const latestTask = require(path.join(directoryPath, latestTaskFile));

    console.log(latestTask());
});