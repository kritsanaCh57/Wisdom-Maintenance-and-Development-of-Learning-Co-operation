const fs = require('fs');

const path = "assets/images/โครงการสืบสานภูมิปัญญา_5/"
fs.readdir(path, (err, files) => {
  files.forEach(file => {
    console.log(`"${path}${file}",`);
  });
})