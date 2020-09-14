require("dotenv").config();
const bcrypt = require("bcrypt");
const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
const { v4: uuidv4 } = require("uuid");
const { region, accessKeyId, secretAccessKey } = process.env;

const s3 = new aws.S3({ accessKeyId, secretAccessKey });

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "wetrackus",
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(null, req.s3Key);
    },
  }),
});
const singleFileUpload = upload.single("image");

function uploadToS3(req, res) {
  req.s3Key = uuidv4();
  let downloadUrl = `https://s3-${region}.amazonaws.com/wetrackus/${req.s3Key}`;
  return new Promise((resolve, reject) => {
    return singleFileUpload(req, res, (err) => {
      if (err) return reject(err);
      return resolve(downloadUrl);
    });
  });
}

module.exports = {
  register: async (req, res) => {
    const db = req.app.get("db");
    const { username, password, profile_pic, phone_number, email } = req.body;
    const existingUser = await db.check_user(username);
    if (existingUser[0]) {
      return res.sendStatus(409);
    } else {
      const salt = bcrypt.genSaltSync(15);
      const hash = bcrypt.hashSync(password, salt);
      let newUser = await db.create_user([
        username,
        hash,
        profile_pic,
        phone_number,
        email,
      ]);
      newUser = newUser[0];
      req.session.userid = newUser.user_id;
      delete newUser.password;      
      req.session.user = newUser;
      res.status(200).send(req.session.user);
    }
  },
  login: async (req, res) => {
    const db = req.app.get("db");
    const { username, password } = req.body;
    let foundUser = await db.check_user(username);
    foundUser = foundUser[0];
    if (foundUser) {
      const compareHash = foundUser.password;
      const authenticated = bcrypt.compareSync(password, compareHash);
      if (authenticated) {
        req.session.userid = foundUser.user_id;
        delete foundUser.password;        
        req.session.user = foundUser;
        res.status(202).send(req.session.user);
      } else {
        res.status(401).send("Email or Password incorrect");
      }
    } else {
      res.status(401).send("Email or Password incorrect");
    }
  },

  logout: (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
  },
  getUser: async (req, res) => {
    const db = req.app.get("db");
    let newUser= await db.check_user(req.session.user.username)
       newUser = newUser[0];
        delete newUser.password;
        res.status(200).send(newUser);   
  },
  uploadImageToS3: (req, res) => {
    uploadToS3(req, res)
      .then((downLoadUrl) => {
        return res.status(200).send(downLoadUrl);
      })
      .catch((err) => console.log(err));
  },
};
