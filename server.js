const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const twilio = require("twilio");
const bodyParser = require("body-parser");
const routes = require("./config/routes");
const port = 3030;

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(port, () => {
  console.log(`Escutando na porta ${port}`);
});
