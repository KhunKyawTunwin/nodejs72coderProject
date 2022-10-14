/* exports.hello = (user) => {
  return "Hell Mr Khun " + user + "." + help.ending();
};

let help = require("./brainTest/helper");
 */

// Lessson 47 password encode
/* 
let encode = (plainPass) => {
  return new Promise((resovle, reject) => {
    require("bcrypt").genSalt(10, (err, salt) => {
      require("bcrypt").hash(plainPass, salt, (err, hash) => {
        if (err) reject(err);
        resovle(hash);
      });
    });
  });
};

let compare = (plainPass, hashpass) => {
  return new Promise((resovle, reject) => {
    require("bcrypt").compare(plainPass, hashpass, (err, bool) => {
      if (err) reject(err);
      resovle(bool);
    });
  });
};

module.exports = {
  encode,
  compare,
};
 */

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

/* let http = require("http");
let url = require("url");
let qs = require("querystring");
let fs = require("fs");
let path = require("path");
const { resolve } = require("path");
const { rejects } = require("assert");
const { Router } = require("express");
require("dotenv").config();

meme = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".gif": "image/git",
};

let checkFileExits = (fpath) => {
  return new Promise((resolve, rejects) => {
    fs.access(fpath, fs.F_OK, (err) => {
      if (err) rejects(err);
      resolve(fpath);
    });
  });
};

let readMyFile = (fpath) => {
  return new Promise((resolve, rejects) => {
    fs.readFile(fpath, (err, data) => {
      if (err) rejects(err);
      resolve(data);
    });
  });
};

let router = (req, res) => {
  let params = url.parse(req.url, true);
  let oriPath = params.pathname == "/" ? "/index.html" : params.pathname;
  let filePath = __dirname + oriPath;

  let ext = path.extname(oriPath);

  checkFileExits(filePath)
    .then(readMyFile)
    .then((data) => {
      res.writeHead(200, { "": "" });
      res.end(data);
    })
    .catch((err) => {
      res.writeHead(404, { "": "" });
      res.end("");
    });
};

let server = http.createServer(router);

server.listen(process.env.PORT, () => {
  console. log(`Server is running at port top${process.env.PORT}`);
});
 */

/* let hashData = require("./tutorials/index");
hashData
  .encode("123")
  .then((encoded) => hashData.compare("123", encoded))
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
 */

// // lesson 31 (REPL)
// /*
// R = Read
// E = Evalurate
// P = Print
// L = Loop

// const bodyParser = require("body-parser");
// const { serialize } = require("v8");

// // Get Or Post Leson33

// let http = require("http");

// let start = (req, res) => {
//   res.writeHead(200, { "Cpntent-Type": "text/html" });
//   if (req.method == "GET") {
//     res.end("<h2>Hello GET World!</h2>");
//   } else {
//     res.end("<h2>Hello POST World</h2>");
//   }
// };

// let server = http.createServer(start);

// server.listen(3000, () => {
//   console.log("Running!");
// });

//  */

// lesson 34 Request Path

// let http = require("http");

// let routes = {
//   GET: () => {
//     console.log("Get Method");
//   },
//   POST: () => {
//     console.log("Post Method");
//   },
// };

// let start = (req, res) => {
//   let reqMethod = req.method;
//   console.log(req.url);
//   // routes[req.method]();
// };

// let server = http.createServer(start);

// server.listen(3000, () => {
//   console.log("Server is Running!");
// });

// let http = require("http");
// let url = require("url");

/*
let routes = {
  GET: {
    "/": () => console.log("Method GET and Path /"),
    "/home": () => console.log("Method GET and Path /home"),
  },
  POST: {
    "/": () => console.log("Method Post and Path /"),
    "/about": () => console.log("Method Post and Path /about"),
  },
};

let start = (req, res) => {
  let reqMethod = req.method;
  let url = req.url;
  routes[reqMethod][url]();
};

let server = http.createServer(start);

server.listen(3000);
*/

// Lesson 35 Custom Router
/* 
let http = require("http");
let url = require("url");

let routes = {
  GET: {
    "/": (req, res) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h3>Get Method =>/ route</h3>");
    },
    "/home": (req, res) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h3>Get Method =>/home route</h3>");
    },
  },

  POST: {
    "/": (req, res) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h3>Post Method =>/ route</h3>");
    },
    "/about": (req, res) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h3>Post Method =>/about route</h3>");
    },
  },
};

let start = (req, res) => {
  let reqMethod = req.method;
  let urlObj = url.parse(req.url, true); //<= second para is for String
  routes[reqMethod][urlObj.pathname](req, res);
};

let server = http.createServer(start);
server.listen(3000, () => {
  console.log("Running port 3000!");
}); */

// lesson 36 Undefined Route Handling (URL path)

/* let http = require("http");
let url = require("url");

let routes = {
  GET: {
    "/": (req, res) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h3>Get Method =>/ route</h3>");
    },
    "/home": (req, res) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h3>Get Method =>/home route</h3>");
    },
  },

  POST: {
    "/": (req, res) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h3>Post Method =>/ route</h3>");
    },
    "/about": (req, res) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h3>Post Method =>/about route</h3>");
    },
  },
  NA: (req, res) => {
    res.writeHead(404);
    res.end("<h1>No Page for that route!</h1>");
  },
};

let start = (req, res) => {
  let reqMethod = req.method;
  let urlObj = url.parse(req.url, true); //<= second para is for String
  let resolveRoute = routes[reqMethod][urlObj.pathname];
  if (resolveRoute != null && resolveRoute != undefined) {
    resolveRoute(req, res);
  } else {
    routes["NA"](req, res);
  }
};

let server = http.createServer(start);
server.listen(3000, () => {
  console.log("Running port 3000!");
}); */

// lesson 37 Dot Env Usage
/* 
let http = require("http");
let url = require("url");
require("dotenv").config();

let routes = {
  GET: {
    "/": (req, res, params) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h3>Get Method =>/ route</h3>");
    },
    "/home": (req, res, params) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(
        `<h3>Get Method =>/home route route with params ${params.query.name} and ${params.query.age}</h3>`
      );
    },
  },

  POST: {
    "/": (req, res, params) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h3>Post Method =>/ route</h3>");
    },
    "/about": (req, res, params) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h3>Post Method =>/about route</h3>");
    },
  },
  NA: (req, res, params) => {
    res.writeHead(404);
    res.end("<h1>No Page for that route!</h1>");
  },
};

let start = (req, res) => {
  let reqMethod = req.method;
  let params = url.parse(req.url, true); //<= second para is for String
  let name = params.query.name;
  let age = params.query.age;
  console.log("Name :", name, "Age :", age);

  let resolveRoute = routes[reqMethod][params.pathname];
  if (resolveRoute != null && resolveRoute != undefined) {
    resolveRoute(req, res, params);
  } else {
    routes["NA"](req, res, params);
  }
};

let server = http.createServer(start);

server.listen(process.env.PORT, () => {
  console.log(`Running new server port ${process.env.PORT}!`);
});
 */
// lesson 38 Ghit hub

// Lesson 39 & 40 Getting post UrlEncoded Values and file size
/* 
let http = require("http");
let url = require("url");
let qsData = require("querystring");
let fs = require("fs");
require("dotenv").config();

let responder = (req, res, params) => {
  res.writeHead(200, { "Content-Type": "Text/html" });
  res.end(params);
};

let filePath = (filePath) => {};

let routes = {
  GET: {
    "/": (req, res) => {
      let filepath = __dirname + "/index.html";
      responder(req, res, filepath);
    },
    "/index.html": (req, res) => {
      let filepath = __dirname + "/index.html";
      responder(req, res, filepath);
    },
    "/about.html": (req, res) => {
      let filepath = __dirname + "/about.html";
      responder(req, res, filepath);
    },
  },

  POST: {
    "/": (req, res) => {
      responder(req, res, `<h3>Post Method =>/ route</h3>`);
    },
    "/api/login": (req, res) => {
      let body = "";
      req.on("data", (data) => {
        body += data;
        if (body.length > 1024) {
          res.writeHead(403, { "Content-Type": "text/html" });
          res.end("<h3>File Size over 1GB!</h3>");
        }
      });
      req.on("end", () => {
        let data = qsData.parse(body);
        console.log(`Email :${data.email} Password:${data.password}`);
        res.end();
      });
    },
  },
  NA: (req, res) => {
    responder(req, res, `<h1>No Page for that route!</h1>`);
  },
};

let start = (req, res) => {
  let reqMethod = req.method;
  let params = url.parse(req.url, true); //<= second para is for String
  // let name = query.name;
  // let age = query.age;
  // console.log("Name :", name, "Age :", age);

  let resolveRoute = routes[reqMethod][params.pathname];
  if (resolveRoute != null && resolveRoute != undefined) {
    resolveRoute(req, res);
  } else {
    routes["NA"](req, res);
  }
};

let server = http.createServer(start);

server.listen(process.env.PORT, () => {
  console.log(`Running new server port ${process.env.PORT}!`);
}); */

// const express = require("express");
// const app = express();

// app.listen(3000);

// lesson 41 (Serving html files)

/* let http = require("http");
let url = require("url");
let qsData = require("querystring");
let fs = require("fs");
require("dotenv").config();

let responder = (req, res, params) => {
  res.writeHead(200, { "Content-Type": "Text/html" });
  res.end(params);
};

let myfileReader = (filePath, res) => {
  fs.access(filePath, fs.F_OK, (err) => {
    if (err) {
      res.writeHead(404, { "Content-type": "text/html" });
      res.end("<h3>File not found</h3>");
    } else {
      fs.readFile(filePath, (err, data) => {
        if (err) throw err;
        res.writeHead(200, { "Content-type": "text.html" });
        res.end(data);
      });
    }
  });
};

let routes = {
  GET: {
    "/": (req, res) => {
      let filepath = __dirname + "/index.html";
      myfileReader(filepath, res);
    },

    "/index.html": (req, res) => {
      let filepath = __dirname + "/index.html";
      myfileReader(filepath, res);
    },

    "/about.html": (req, res) => {
      let filepath = __dirname + "/about.html";
      myfileReader(filepath, res);
    },
  },

  POST: {
    "/": (req, res) => {
      responder(req, res, `<h3>Post Method =>/ route</h3>`);
    },
    "/api/login": (req, res) => {
      let body = "";
      req.on("data", (data) => {
        body += data;
        if (body.length > 1024) {
          res.writeHead(403, { "Content-Type": "text/html" });
          res.end("<h3>File Size over 1GB!</h3>");
        }
      });
      req.on("end", () => {
        let data = qsData.parse(body);
        console.log(`Email :${data.email} Password:${data.password}`);
        res.end();
      });
    },
  },
  NA: (req, res) => {
    responder(req, res, `<h1>No Page for that route!</h1>`);
  },
};

let start = (req, res) => {
  let reqMethod = req.method;
  let params = url.parse(req.url, true); //<= second para is for String
  // let name = query.name;
  // let age = query.age;
  // console.log("Name :", name, "Age :", age);

  let resolveRoute = routes[reqMethod][params.pathname];
  if (resolveRoute != null && resolveRoute != undefined) {
    resolveRoute(req, res);
  } else {
    routes["NA"](req, res);
  }
};

let server = http.createServer(start);

server.listen(process.env.PORT, () => {
  console.log(`Running new server port ${process.env.PORT}!`);
});
 */

// Lesson 42 (Serving All file type)

/* let http = require("http");
let url = require("url");
let qs = require("querystring");
let fs = require("fs");
let path = require("path");
require("dotenv").config();

meme = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".gif": "image/git",
};

let router = (req, res) => {
  let params = url.parse(req.url, true);
  let oriPath = params.pathname == "/" ? "/index.html" : params.pathname;
  let filepath = __dirname + oriPath;

  let ext = path.extname(oriPath);

  fs.access(filepath, fs.F_OK, (err) => {
    if (err) {
      res.writeHead(404, { "Content-type": "text/html" });
      res.end("<h2>File not found!</h2>");
    } else {
      fs.readFile(filepath, (err, data) => {
        if (err) {
          res.writeHead(403, { "Content-type": "text/html" });
          res.end("<h2>File Read Error</h2>");
        } else {
          res.writeHead(200, { "Content-type": meme[ext] });
          res.end(data);
        }
      });
    }
  });
};

let server = http.createServer(router);

server.listen(process.env.PORT, () => {
  console.log(`Server is running at Port ${process.env.PORT}`);
}); */

// Lesson 43 (File  Read_Promise) & (image file and html)

/* let http = require("http");
let url = require("url");
let qs = require("querystring");
let fs = require("fs");
let path = require("path");
const { resolve } = require("path");
const { rejects } = require("assert");
require("dotenv").config();

meme = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".gif": "image/git",
};

let checkFileExits = (filepath) => {
  return new Promise((resolve, rejects) => {
    fs.access(filepath, fs.F_OK, (err) => {
      if (err) rejects(err);
      resolve(filepath);
    });
  });
};

let readMyFile = (filepath) => {
  return new Promise((resolve, rejects) => {
    fs.readFile(filepath, (err, data) => {
      if (err) rejects(err);
      resolve(data);
    });
  });
};

let router = (req, res) => {
  let params = url.parse(req.url, true);
  let oriPath = params.pathname == "/" ? "/index.html" : params.pathname;
  let filepath = __dirname + oriPath;

  let ext = path.extname(oriPath);

  checkFileExits(filepath)
    .then(readMyFile)
    .then((data) => {
      res.writeHead(200, { "Content-type": "text/html" });
      res.end(data);
    })
    .catch((err) => {
      res.writeHead(404, { "Content-type": "text/html" });
      res.end("<h2>File not found</h2>");
    });
};

let server = http.createServer(router);

server.listen(process.env.PORT, () => {
  console.log(`Server is running at Port ${process.env.PORT}`);
});
 */

// Lesson 44 (process env Args(Argument) & Argv (Argument vector)) (env = everoment variable)

// Lesson 45
// qr-image npm (nodemodules) (Generate for images)
/* 
let qr = require("qr-image");

let encodeString = process.argv[2];
let outputImage = process.argv[3];

qr.image(encodeString, { type: "png", size: 30 }).pipe(
  require("fs").createWriteStream(outputImage)
);
 */

// lesson 46

/*
let testTutor ial = require("./tutorials/index");
   
console.log(testTutorial.hello("Kyaw tun win"));
 */

// lesson 47 Password encode decode (npm i bcrypt (Module for ))

// ********Lesson 48 Express serving html file ( One of the most popular Framework ) *********
/* 
require("dotenv").config();

let express = require("express"),
  app = express(),
  path = require("path");

app.use(express.static(path.join("assets")));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/index", (req, res) => {
  res.sendFile(__dirnarme + "/index.html");
});
app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/about.html");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running at port ${process.env.PORT}`);
});
 */

// lesson 49 Resquest Body Parameters

/* require("dotenv").config();

let bodyParsa = require("body-parser");
let express = require("express"),
  app = express(),
  path = require("path");

app.use(bodayParser.json());
app.use(bodayParser.urlencoded({ extended: true }));

// Check and accept params Data

app.get("/api/post/:id", (req, res) => {
  let id = req.params.id;
  res.send(`Param id is ${id}`);
});

// Check with Query params (Query params = ? )

app.get("/api/user", (req, res) => {
  let name = req.query.name;
  let password = req.query.password;
  res.send(`Name ${name} and Password ${password}`);
});

// body-parser (module for catch email & password )
app.post("/api/login", (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  res.send(`Email : ${email} & Password : ${password}`);
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running at Port ${process.env.PORT}`);
});
 */
// lesson 50 hogan express (Hogan is alway looking view folder in projects) Image not running in real work

/* require("dotenv").config();

let bodyParsa = require("body-parser");
let express = require("express"),
  app = express(),
  path = require("path"),
  hogan = require("hogan-express");

app.use(bodyParsa.json());
app.use(bodyParsa.urlencoded({ extended: true }));

app.engine("html", hogan);
app.set("view engine", "html");

// Check and accept params Data

app.get("/api/post/:id", (req, res) => {
  let id = req.params.id;
  res.send(`Param id is ${id}`);
});

// Check with Query params (Query params = ? )

app.get("/api/user", (req, res) => {
  let name = req.query.name;
  let password = req.query.password;
  res.send(`Name ${name} and Password ${password}`);
});

// body-parser (module for catch email & password )
app.post("/api/login", (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  res.send(`Email : ${email} & Password : ${password}`);
});

app.use(express.static(path.join(__dirname, "assets")));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/index", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running at Port ${process.env.PORT}`);
});
 */
// Lesson 51 WSS => ( Web Socket Secure ) Connection for server and client

require("dotenv").config();
let express = require("express"),
  app = express(),
  server = require("http").createServer(app),
  io = require("socket.io").listen(server);

// app.engine("html", hogan);
// app.set("view engine", "html");
// app.use(express.static(path.join(__dirname, "assets")));

// app.get("/", (req, res) => {
//   res.render("index");
// });

server.listen(process.env.PORT, () => {
  console.log(`Server running at client Port ${process.env.PORT}`);
});
