const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./client/"));

const clientRoutes = require("./routes/client-routes.js");

app.use(clientRoutes);

app.listen(PORT, () => console.log(`Listening at: http://localhost:${PORT}`));
