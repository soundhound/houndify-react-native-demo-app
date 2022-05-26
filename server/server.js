// Basic Express setup
const express = require("express");
const app = express();

// WebSocket setup
const expressWs = require("express-ws")(app);

// Houndify React Native setup
const { createReactNativeProxy } = require("houndify").HoundifyExpress;

const clientId = "";
const clientSecret = "";

if (!clientId || !clientSecret) {
  console.log("No ClientId or ClientSecret provided!!");
  process.exit();
}

app.use(
  "/houndifyReactNativeProxy",
  createReactNativeProxy(express, clientId, clientSecret)
);

app.listen(3000);
console.log("Server is listening.");
