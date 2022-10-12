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

// Lesson 43 (File Read_Promise)

let http = require("http");
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
  return new Promise((resolve, rejects) => {});
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
