const { exec } = require('child_process');

console.log('Starting shell script execution');

let chainname = "airhub"
let address1 = "air1ve2e0ae8lzqn0a0upukwtujzdkt599p5rhl26j" // alice
let address2 = "air1tgttczj6fsda2l02kkm5hl8wagyspzqlukr9sd" // bob
let count = 0
let transaction_to_do=1*1000*1000 // 1 million

function executeShellScript() {
  const command = `cd ${chainname}; ${chainname}d tx bank send ${address1} ${address2} 1stack -y`;
  
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing shell script: ${error.message}`); 
      return;
    }
    
    count++
    console.log('Output:', stdout);
    console.log(`Transaction number ${count} done`)

    if(count<transaction_to_do)
      setTimeout(executeShellScript, 2000); // Repeat execution every 2 seconds
  });
}

// Start executing the shell script
executeShellScript();
