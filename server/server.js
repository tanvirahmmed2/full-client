const app = require("./src/app");
const {serverPort}= require("./src/database/secret")

app.listen(serverPort, () => {
  console.log(`🚀 Server running at http://localhost:${serverPort}`);
});
