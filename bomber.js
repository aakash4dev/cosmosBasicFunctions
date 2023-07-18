const { exec } = require('child_process');

console.log('Starting shell script execution');

let chainname = "noob"
let address1 = "cosmos1lwzcrf95ejf5y0uhfda37drregwuy9ll2v8tnv" // alice
let address2 = "cosmos1nzw8v705sxvqcd349nw3p830slttqmjxff5f4u" // bob
let count = 0
let transaction_to_do=1*100 // 1 million

function executeShellScript() {
  const command = ` ${chainname}d tx bank send ${address1} ${address2} 1stack -y`;
  
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing shell script: ${error.message}`); 
      return;
    }
    
    count++
    console.log('Output:', stdout);
    console.log(`Transaction number ${count} done`)

    if(count<transaction_to_do)
      setTimeout(executeShellScript, 2000); // Repeat execution every 0.1 seconds
  });
}

// Start executing the shell script
executeShellScript();
