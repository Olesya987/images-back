const uuid = require("uuid");
const path = require("path");

module.exports.postImage = async (req, res) => {
  const { files } = req;
  if (files.hasOwnProperty("img") && files.img) {
    const { img } = files;
    let end = img.name.split(".");
    end = end[end.length - 1];
    let fileName = uuid.v4() + "." + end;
    img.mv("/home/user/Desktop/study/images-front/public/images/" + fileName);
    res.send(fileName);
  } else {
    res.status(420).send("Error adding image, image not sent");
  }
};
