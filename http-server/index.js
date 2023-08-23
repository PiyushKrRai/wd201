// CREATING THE HTTP SERVER THERE
let http = require("http");






// USING MINIMIST FOR ROUTING PURPOSES
let bashInput = require("minimist")(process.argv.slice(2));
let file = require("fs");






const datacontrol = (req, res) => {
  let url = req.url;







  //  A BASIC SWITCH CASE FOR ROUTING TO THE RIGHT PROJECT URL
  switch (url) {
    // THIS IS CASE 1 WHERE WE REDIRECT TO THE PROJECT.HTML FILE
    case "/project":
      stram = file.createReadStream("project.html");
      stram.pipe(res);
      break;
    // THIS IS CASE 2 WHERE WE REDIRECT TO THE REGISTRATION.HTML FILE
    case "/registration":
      stram = file.createReadStream("registration.html");
      stram.pipe(res);
      break;
    // THIS IS CASE 3 WHERE WE REDIRECT TO THE HOME.HTML FILE
    default:
      stram = file.createReadStream("home.html");
      stram.pipe(res);
      break;
  }
};






http.createServer(datacontrol).listen(bashInput.port);
