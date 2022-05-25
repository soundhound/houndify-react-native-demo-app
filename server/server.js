// Basic Express setup
const express = require("express");
const app = express();

// WebSocket setup
const expressWs = require("express-ws")(app);

// Houndify React Native setup
const { createReactNativeProxy } = require("houndify").HoundifyExpress;

app.use(
  "/houndifyReactNativeProxy",
  createReactNativeProxy(
    express,
    "RWPEZrnPdYC0M20gRMapBg==",
    "lLbIS0Sk4IkKC2xfcMX_7ERqFiyzBGMvV8ycYNTIf00U3jDBLwSLhtJhLdsirB3TwXO8M1MPfQN4ycgo48tKpA=="
  )
);

app.listen(3000);
console.log("Server is listening.");
