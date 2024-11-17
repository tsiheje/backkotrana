const express = require("express");
const http = require("http");
const routes = require("./routes/index")
const cors = require("./middlewares/cors")
require("./createTables/createTabls")
const app = express();
const servers = http.createServer(app);
const port = process.env.PORT || 3002;

app.use(express.json());
app.use(cors);
app.use("/api", routes);


servers.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
