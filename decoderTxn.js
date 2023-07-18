const crypto = require('crypto');

function computeTransactionHash(base64Tx) {
    // Step 1: Decode the base64 transaction data
    let txBytes = Buffer.from(base64Tx, 'base64');

    // Step 2: Compute the SHA-256 hash
    let hash = crypto.createHash('sha256');
    hash.update(txBytes);

    // Step 3: Convert the hash to a hexadecimal string
    let txHash = hash.digest('hex');

    return txHash;
}

let base64Tx = "Co0BCooBChwvY29zbW9zLmJhbmsudjFiZXRhMS5Nc2dTZW5kEmoKLWNvc21vczFsd3pjcmY5NWVqZjV5MHVoZmRhMzdkcnJlZ3d1eTlsbDJ2OHRudhItY29zbW9zMW56dzh2NzA1c3h2cWNkMzQ5bnczcDgzMHNsdHRxbWp4ZmY1ZjR1GgoKBXN0YWNrEgExElkKUQpGCh8vY29zbW9zLmNyeXB0by5zZWNwMjU2azEuUHViS2V5EiMKIQOePIw5ZTDJpuU+++f9yuevH6dYVFqwIyWkHHaVZW1mbBIECgIIARjJARIEEMCaDBpA8L7r9XK0tFC/yX0y+tFkwgk7AYSPQQ2M9ZWLevJkYvdt9iawn4S9/hGsnwRe/m8osfVlvD6zf5RDCElFrUR9qw==";

console.log(computeTransactionHash(base64Tx));

