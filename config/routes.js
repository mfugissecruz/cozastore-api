const express = require("express");
const routes = express.Router();
const produtodata = require("../data/produtoData");
const bodyParser = require("body-parser");
require("dotenv").config();
const WA = require("./twilio/whatsapp-send-message");

routes.get("/product/:slug", produtodata.findById);

routes.get("/", produtodata.findProducts);

routes.post("/whatsapp", async (req, res) => {
  let message = req.body.Body;
  let senderID = req.body.From;
  await WA.sendMessage(`Olá`, senderID);
});

module.exports = routes;
