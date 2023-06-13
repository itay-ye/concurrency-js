const { exec } = require('child_process');

exec('node ' + __dirname + '/mySlowFunction.js', (error, stdout, stderr) => {
    console.log(`${stdout}`);
});
exec('node ' + __dirname + '/mySlowFunction.js', (error, stdout, stderr) => {
    console.log(`${stdout}`);
});

console.log('This is the next task')

