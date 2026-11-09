const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();
const Port = process.env.PORT || 3000;