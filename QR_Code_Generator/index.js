import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      type: "input",
      name: "url",
      message: "Enter your url: ",
    },
  ])
  .then((answers) => {
    const uRL = answers.url;
    var qr_svg = qr.image(uRL);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));
    fs.writeFile("URL.txt", uRL, (err) => {
      if (err) throw err;
      console.log("File has been written successfully");
    });
  });
