const express = require("express");
const router = express.Router();

const {
  postImage,
} = require("../controllers/image.controllers.js");

router.post("/post", postImage);

module.exports = router;
