var exec =  require('child_process').exec;

exec('ls -la', (err, stdout, stderr) => {
	console.log(stdout);
});
