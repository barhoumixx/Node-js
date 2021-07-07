var mymodule = require('./mymodule.js')
var dir = process.argv[2];
var ext = process.argv[3];

mymodule(dir, ext, function(err, files) {
  for (i = 0; i < files.length; i++) {
    console.log(files[i]);
  }
});