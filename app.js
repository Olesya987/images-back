const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const apiRoutes = require("./src/modules/routes/routes");
const app = express();

app.use(express.json());
app.use(cors());
app.use(fileUpload());
app.use("/", apiRoutes);

app.listen(7000, () => {
  console.log("Example app listening on port 7000!");
});
