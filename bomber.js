const { exec } = require('child_process');

console.log('Starting shell script execution');
function executeShellScript() {
  const goto_blockchain_directory = "cd test0001"
  const command = 'test0001d tx bank send cosmos1qac3s3law0n8ck4rmtcezcs5we8des97pg3550 cosmos1nt3afyt8wy78ltc6cj232045pmugttepcgmzrx 10stack -y';
  
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing shell script: ${error.message}`);
      return;
    }
    
    console.log('Shell script executed successfully');
    console.log('Output:', stdout);
    
    setTimeout(executeShellScript, 2000); // Repeat execution every 2 seconds
  });
}

// Start executing the shell script
executeShellScript();
