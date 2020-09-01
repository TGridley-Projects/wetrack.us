module.exports = {
  addMain: (req, res) => {
    const db = req.app.get("db");
    const {
      workout_type,
      title,
      distance,
      time,
      steps,
      heart_rate,
      user_id,
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
    const db = req.app.get("db");
    const { title, intensity, time, heart_rate, user_id } = req.body;
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
  profile: (req, res) => {
    const id = req.params
    console.log(id)
    const db = req.app.get("db");
    db.get_profile([id]).then((res) => res.status(200).send(res))
  }
};