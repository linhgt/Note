const express = require("express");
const app = express();
const path = require("path");
const port = 12345;

app.use(
  "/asset",
  express.static(path.join(__dirname, "/asset"), {
    dotfiles: "allow",
    setHeaders: (res, path, stat) => {
      if (path.endsWith(".svg")) {
        res.set("Content-Type", "image/svg+xml");
      }
    },
  })
);

app.use(
  "/js",
  express.static(path.join(__dirname, "/js"), {
    dotfiles: "allow",
    setHeaders: (res, path) => {
      if (path.endsWith(".js")) {
        res.set("Content-Type", "text/javascript");
      }
    },
  })
);

app.use("/css", express.static(path.join(__dirname, "/css")));

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/homepage.html");
});

app.get("/add-note", (request, response) => {
  response.sendFile(__dirname + "/add-note.html");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
