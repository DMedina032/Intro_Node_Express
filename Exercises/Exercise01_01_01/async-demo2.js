var fs = require('fs');
fs.readdir('../', function(err, data)
{
    console.log('data: ', data)
});
console.log("This code will be last");