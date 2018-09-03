const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const { exec } = require('child_process');
const notifier = require('node-notifier');

const app = express()


app.use(cors())
app.use(bodyParser.json())
// no dependency mode
// app.post('/notification', (req,res)=>{

//   const message = req.body.message.toString()
//   const title = req.body.title.toString()

//   exec(`osascript -e 'display notification "${message}" with title "${title}"'`);
//   res.json("running successfully")
// })
app.post('/notification', (req,res)=>{
  const message = req.body.message.toString()
  const title = req.body.title.toString()
  // Object
  notifier.notify({
    title: `Lab Machine: "${title}"`,
    message: `${message}`
  });


  res.json("running successfully")
})
app.get('/', (req,res)=>{
})

app.listen(25297, ()=> console.log("Api is listening on port 25297"))