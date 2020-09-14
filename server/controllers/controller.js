module.exports = {
  addMain: (req, res) => {
    const user_id = req.session.userid
    const db = req.app.get("db");
    const {
      workout_type,
      title,
      distance,
      time,
      steps,
      heart_rate,
    } = req.body;
    db.add_main([
      workout_type,
      title,
      distance,
      time,
      steps,
      heart_rate,
      user_id,
    ])
      .then(() => {
        res.sendStatus(200);
      })
      .catch((err) => console.log(err));
  },
  addOther: (req, res) => {
    const user_id = req.session.userid
    const db = req.app.get("db");
    const { title, intensity, time, heart_rate, } = req.body;
    db.add_other([title, intensity, time, heart_rate, user_id])
      .then(() => {
        res.sendStatus(200);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  mainWorkouts5: (req, res) => {
    const db = req.app.get("db");
    db.get_main_workouts5().then((workouts) => res.status(200).send(workouts))
  },
  otherWorkouts5: (req, res) => {
    const db = req.app.get("db");
    db.get_other_workouts5().then((workouts) => res.status(200).send(workouts))
  },
  publicProfile: (req, res) => {
    const id = req.params.userid
    const db = req.app.get("db");
    db.get_public_profile(id).then((user) => res.status(200).send(user)).catch(err =>console.log(err))
  },
  getOther: (req, res) => {
    const num = req.body.toStart
    const db = req.app.get("db");
    db.get_other_workouts(num).then((workouts) => res.status(200).send(workouts))
  },
  editProfile: async (req, res) => {
    const db = req.app.get("db");
    const { username, profile_pic, phone_number, email } = req.body;
    const { user_id } = req.session.user
    let updatedUser = await db.update_user([
      user_id,
      username,
      profile_pic,
      phone_number,
      email,
    ]);
    console.log(updatedUser);
    req.session.userid = updatedUser.user_id;
    delete updatedUser.user_id;
    delete updatedUser.password;
    req.session.user = updatedUser;
    res.status(200).send(req.session.user);
  }
};