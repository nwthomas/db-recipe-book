const server = require("./server.js");
require("dotenv").config();

const port = process.env.PORT || 8000;
server.listen(port, () => {
  console.log(`
  -------------------------------------------------
      Server Listening on http://localhost:${port}
  -------------------------------------------------
  `);
});
