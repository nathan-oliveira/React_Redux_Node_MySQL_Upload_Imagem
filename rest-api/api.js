'use strict'

const app = require('./bin/index');

app.listen(process.env.port || 4000, (err) => {
  if(err) {
    console.log('==> [-] APP "OFF"')
  } else {
    console.log('==> [+] APP "ON"');
  }
})