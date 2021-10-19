const Config = require('./config');
const fs = require('fs');
const chalk = require('chalk');
if (Config.SWITCH == 'julie') {
if (fs.existsSync('./language/' + Config.LANG + '.json')) {
    console.log(
        chalk.green.bold('Loading ' + Config.LANG + ' language...')
    );

    var json = JSON.parse(fs.readFileSync('./language/' + Config.LANG + '.json'));
} else {
    console.log(
        chalk.red.bold('You entered an invalid language. English language was chosen.')
    );

    var json = JSON.parse(fs.readFileSync('./language/EN.json'));
}
}
else if (Config.SWITCH == 'test') {
    if (fs.existsSync('./test/language/' + Config.LANG + '.json')) {
        console.log(
            chalk.green.bold('Loading ' + Config.LANG + ' language...')
        );
    
        var json = JSON.parse(fs.readFileSync('./test/language/' + Config.LANG + '.json'));
    } else {
        console.log(
            chalk.red.bold('You entered an invalid language. English language was chosen.')
        );
    
        var json = JSON.parse(fs.readFileSync('./test/language/EN.json'));
    }
    }

function getString(file) {
    return json['STRINGS'][file];
}

module.exports = {
    language: json,
    getString: getString
}