const express = require("express");
const app = express();
const port = 12345;

app.use(
  express.static("asset", {
    setHeaders: (res, path, stat) => {
      if (path.endsWith(".svg")) {
        res.setHeader("Content-Type", "image/svg+xml");
      }
    },
  })
);

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/homepage.html");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
