const express = require('express');
const { exec } = require('child_process');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  exec('ls && nproc', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing command: ${error}`);
      return res.send(`Error: ${error.message}`);
    }

    if (stderr) {
      console.error(`Shell stderr: ${stderr}`);
      return res.send(`Shell stderr: ${stderr}`);
    }

    console.log(`Shell stdout: ${stdout}`);
    res.send(`<pre>${stdout}</pre>`);
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
