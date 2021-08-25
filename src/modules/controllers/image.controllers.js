const uuid = require("uuid");
const path = require("path");

module.exports.postImage = async (req, res) => {
  const { files } = req;
  if (files.hasOwnProperty("img") && files.img) {
    const { img } = files;
    let fileName = uuid.v4() + ".png";
    // const way = path.resolve(__dirname, "../..", "source", fileName);
    const way="/home/user/Desktop/study/images-front/public/images/"+fileName;
    img.mv(way);
    res.send(fileName);
  } else {
    res.status(420).send("Error adding image, image not sent");
  }
};
