const fs = require('fs')
const path = require('path')


fs.readdir('03-files-in-folder/secret-folder', (err, files) => {
  if (err)
    console.log(err);
  else {
    files.forEach(async file => {
      let name = path.basename(file).split('.')[0];
      let ext = path.extname(file).replace(/[\.]/g, '');
      console.log(`${name} - ${ext}`);
    })
  }
})
