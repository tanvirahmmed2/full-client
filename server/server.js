const app = require("./src/app");
const connectDB = require("./src/database/db");
const {serverPort}= require("./src/database/secret")

app.listen(serverPort, async() => {
  console.log(`🚀 Server running at http://localhost:${serverPort}`);
  await connectDB()
});
