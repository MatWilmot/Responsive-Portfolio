const express = require("express");
const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./client/"));

const clientRoutes = require("./routes/client-routes.js");
const apiRoutes = require("./routes/api-routes.js");

app.use(clientRoutes, apiRoutes);

app.listen(PORT, () => console.log(`Listening at: http://localhost:${PORT}`));
