import express from "express";
const app = express();
app.use(express.json());

app.get("/", (req, res) => res.send("home"));
app.post("/create", (req, res) => {
  const { num1, num2 } = req.body;
  const add = num1 + num2;
  res.send(String(add));
});

const PORT = 9999;
app.listen(PORT, console.log(`server is running at ${PORT} no.`));

// const http = require("http");
// const server = http.createServer(function (req, res) {
//   if (req.url === "/") {
//     res.end("Home page");
//   } else if (req.url === "/about") {
//     res.end("About page");
//   } else if (req.url === "/contact") {
//     res.end("Contact page");
//   } else {
//     res.end("Not found");
//   }
// });
// const PORT = 9999;
// server.listen(PORT, console.log(`server is running at ${PORT} no.`));
// // res.send,res.json,res.end

/*
CURD
post -
route = localhost/api/v1/todo/create
{
    title:"",
    body:""
}

for id use uuid package

push post data in this array
data = []

{
    id:"",
    title:"",
    body:"",
    isCompleted:"",
    createdAt:"""

}



get -
route = localhost/api/v1/todo/all
{
    count:no of todo,
    todos:[{}]
}


*/
