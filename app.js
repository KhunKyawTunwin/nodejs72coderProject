// File Handling Asynchronously

// let fs = require("fs");

// fs.writeFile("test.txt", "Hello MrKhun, Are You Busy?", function (erro) {
//   if (erro) console.log(erro);
//   else console.log("File Successfully Written!");
// });  res.send("Home Page");

// fs.readFile("test.txt", "utf-8", function (err, result) {
//   if (err) console.log(err);
//   else console.log(result);
// });

// fs.appendFile("test.txt", " Finally We got this", function (err) {
//   if (err) console.log(err);
//   else console.log("Successfuly!");
// });

// const event = require("events");
// const myEmitter = new event.EventEmitter();

// myEmitter.on("waitEm", function () {
//   console.log(`I'm start Wroking.`);
// });

// myEmitter.emit("waitEm");
// let i = 0;
// setInterval(() => {
//   i++;
//   if (i % 3 === 0) myEmitter.emit("waitEm");
//   else console.log("Waith comming OUt.");
// }, 2000);

// Event Emitter => Events  (on = it is listening ,)

/* const event = require("events");

const myEmitter = new event.EventEmitter();

myEmitter.on("doNow", function (val) {
  console.log(`I'm mrKhun ${val}`);
});

myEmitter.emit("doNow", "Welcome to our Company!");
 */

// Deleting File (Node Js)
// let fs = require("fs");

// fs.mkdir("./text2");

/*  Buffer & Stream( AnyData respond to  Client Device)

Buffer is a temporary data storage
Stream is a  


 */

// let fs = require("fs");

// let myReadStr = fs.createReadStream("test.txt", "utf-8");
// let myWriteStr = fs.createWriteStream("mytext1.txt");

// myReadStr.on("data", function () {
//   // myWriteStr.write(chunk);
//   myReadStr.pipe(myWriteStr);
// A chunk is a fragment of the data that is sent by the client to server all chunks concepts to each other to make a buffer of the stream then the buffer is converted into meaningful data.
// });

// Creating Readable Stream

// let fs = require("fs");

// let myReadableStr = fs.createReadStream("test.txt", "utf-8");

// myReadableStr.on("data", function (chunk) {
//   console.log("It is all Chunk: ", chunk);
// });

// Lesson 20 Writeable Stream

/* let fs = require("fs");

let myReadStr = fs.createReadStream("test.txt", "utf-8");
let myWriteStr = fs.createWriteStream("new.txt");

myReadStr.on("data", function (chunk) {
  myWriteStr.write(chunk);
});
 */

// lesso 21  Clent & Server Technology

//  lesson 22 Creating Server
/* 
let http = require("http");
let port = 3000;

let server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("Hello MrkHun");
});

server.listen(port, function () {
  console.log("Server is running at Port ", port);
}); */

// lesson 23 Piping stream Down to user

/* let http = require("http");
let fs = require("fs");

let myReadStr = fs.createReadStream("test.txt", "utf-8");

let server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });

  myReadStr.pipe(res);
});

server.listen(3000, function () {
  console.log("Server is running at port 3000!");
});
 */

// lesson 24 Serving HTML File
/* 
let http = require("http");

let fs = require("fs");

let myReadStr = fs.createReadStream("index.html", "utf-8");

let server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });

  myReadStr.pipe(res);
});

server.listen(3000, function () {
  console.log("Server is Running in Back!");
});
 */

// lesson 25 Serving Json DATA
/* let http = require("http");

let server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "application/Json" });
  let obj = {
    name: "Mr Khun",
    age: 30,
    family: {
      father: "U One",
      mother: "Daw Nang",
    },
  };
  res.end(JSON.stringify(obj));
});

server.listen(3000, function () {
  console.log("Server is start Running!");
});
 */

/* //  lesson 26 Basic Routing
let http = require("http");
let fs = require("fs");

let server = http.createServer(function (req, res) {
  if (req.url === "/" || req.url === "/home" || req.url === "/index") {
    let myReadStr = fs.createReadStream("index.html");

    res.writeHead(200, { "Content-Type": "text/html" });
    myReadStr.pipe(res);
  } else if (req.url === "/about") {
    let myReadStr = fs.createReadStream("about.html");
    res.writeHead(200, { "Content-Type": "text/html" });
    myReadStr.pipe(res);
  } else if (req.url === "/services") {
    let myReadStr = fs.createReadStream("services.html");
    res.writeHead(200, { "Content-Type": "text/html" });
    myReadStr.pipe(res);
  } else if (req.url === "/api/obj") {
    let obj = {
      name: "Mr Khun",
      age: 30,
    };
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(obj));
  } else {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("No result Found!");
  }
});

server.listen(3000, function () {
  console.log("Server is start Running!");
});
 */

// Nodemon for server auto running

/* let http = require("http");

let server = http.createServer(function (req, res) {
  var obj = {
    name: "Global Villager",
    group: "MrKhunCode",
    age: 30,
  };
  res.writeHead(200, { "Content-Type": "application/json" });

  res.end(JSON.stringify(obj));
});

server.listen(3000, function () {
  console.log("Server is starting Running");
});
 */

// lesson 30 - Using Express

/* let express = require("express");
let app = express();

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/contact", (req, res) => {
  res.send("Contact Page");
});

app.listen(3000);
 */
/* function humName(name) {
  function sayHi() {
    console.log(`Hi i am ${name}`);
  }
  function sayMyName() {
    console.log(`${name} is feeling good!`);
  }
  sayHi();
  sayMyName();
}

humName("mrKhun");
/*  */

// lesson 32 Starting Server

/* let http = require("http");

let server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Hello World! welcome Guy</h1>");
});

server.listen(3000);
 */
