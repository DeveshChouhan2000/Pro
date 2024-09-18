const fs = require('fs');

// Writing to a File
fs.writeFile('example.txt', 'I AM DEVESH.', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Write: File has been written.');

    // Appending to a File
    fs.appendFile('example.txt', ' I AM FROM RAJASTHAN.', (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Append: Data has been appended to file.');

        // Reading from a File
        fs.readFile('example.txt', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('Read:');
            console.log(data);

            // Checking if a File Exists
            fs.access('example.txt', fs.constants.F_OK, (err) => {
                if (err) {
                    console.error('Checking if file exists: File does not exist');
                    return;
                }
                console.log('Checking if file exists: File exists');
            });
        });
    });
});
