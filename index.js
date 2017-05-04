let fs = require("fs");
let path = require("path");
let moment = require("moment");

let page = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Docs</title>
</head>
<body>
  <h1>Last updated: ${ moment().format("MMMM Do YYYY, h:mm:ss a") }</h1>
</body>
</html>
`;

fs.writeFileSync(path.join(__dirname, "docs", "index.html"), page);
