const bcrypt = require("bcrypt");

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
      delete newUser.phone_number;
      delete newUser.email;
      delete newUser.user_id;
      res.status(200).send(newUser);
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
        delete foundUser.phone_number;
        delete foundUser.email;
        delete foundUser.user_id;
        console.log (req.session.userid)
        res.status(202).send(foundUser);
      } else {
        res.status(401).send("Email or Password incorrect");
      }
    } else {
      res.status(401).send("Email or Password incorrect");
    }
  },
  keepLogged: (req, res) => {
    const db = req.app.get("db");
    db.get_public_profile(req.session.userid).then((user) => res.status(200).send(user))
},
  logout: (req, res) => {
    req.session.destroy()
  }
};
