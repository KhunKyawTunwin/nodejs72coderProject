// // lesson 31 (REPL)
// /*
// R = Read
// E = Evalurate
// P = Print
// L = Loop

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
  console.log(`Running new port ${process.env.PORT}!`);
});

// lesson 38 Ghit hub

// Lesson 39 Getting post UrlEncoded Values

// const express = require("express");
// const app = express();

// app.listen(3000);
