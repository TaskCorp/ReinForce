const express = require("express");
const app = express();
// const PORT = process.env.PORT || 3000;
const PORT = 3000;
const path = require("path");

console.log('hello world')

app.use(express.json());

// app.get('/',(req: any,res: any)=>{
//   console.log('help')
//   return res.status(308)
// })

// app.get("*",(req: any,res: any)=>{
//   res.sendFile(path.resolve(__dirname, '../../bundle/bundle.html'))
// })

// console.log(path.join(__dirname, "../client"));
app.use(express.static(path.resolve(__dirname, "../../")));
app.use(express.static(path.resolve(__dirname, "../../bundle")));

app.get("*",(req: any,res: any)=>{
  res.sendFile(path.resolve(__dirname, '../../bundle/bundle.html'))
})

// Catch-all handler
app.use((req: any, res: any) => res.sendStatus(404));

app.get("*",(req: any,res: any)=>{
  res.sendFile(path.resolve(__dirname, '../../bundle/bundle.html'))
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
