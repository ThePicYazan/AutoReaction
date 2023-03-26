const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express app!')
  console.log('Syno Uptime Working..');
});

app.listen(3000, () => {
  console.log('server started');
});

//use bot Syno Uptime 
// https://discord.com/api/oauth2/authorize?client_id=944945838038351922&permissions=2147608640&scope=applications.commands%20bot