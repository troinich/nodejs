var fs = require('fs');

var firstName = "Natalia";
fs.writeFile('./firstName.txt', firstName, err => {
    if (err) throw err
    console.log("Create first name")
});

var lastName = "Troinich";
fs.writeFile('./lastName.txt', lastName, err => {
    if (err) throw err
    console.log("Create last name")

});

fs.readFile('./firstName.txt', (err, data) => {
    if (err) throw err;
    var data = firstName + ' ';
    fs.writeFile("wholeName.txt", data, (err) => {
        if (err) throw err;
        console.log('We add first name');
    });
});

fs.readFile('./lastName.txt', (err, data1) => {
    if (err) throw err;
    fs.writeFile("wholeName.txt", data1, {flag: 'a+'}, (err) => {
        if (err) throw err;
        console.log('We add last name');
    });
});
