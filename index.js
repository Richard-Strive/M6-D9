const express = require("express");
const cors = require("cors");
require("dotenv").config();
//ROUTE FOR ARTICLE
//ROUTE FOR REVIEWS
//ROUTE FOR AUTHORS
//ROUTE FOR CATEGORIES

const server = express();

server.use(cors());
server.use(express.json());

const PORT = process.env.PORT;

server.listen(process.env.PORT || 3002, () => {
  console.log("server is running on port ", process.env.PORT || 3002);
});
