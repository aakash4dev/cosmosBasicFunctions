const { exec } = require('child_process');

console.log('Starting shell script execution');

chainname = "test0001"
address1 = "cosmos1qac3s3law0n8ck4rmtcezcs5we8des97pg3550" // alice
address2 = "cosmos1nt3afyt8wy78ltc6cj232045pmugttepcgmzrx" // bob

function executeShellScript() {
  const command = `cd ${chainname}; ${chainname}d tx bank send ${address1} ${address2} 10stack -y`;
  
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
