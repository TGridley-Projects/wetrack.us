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
};
