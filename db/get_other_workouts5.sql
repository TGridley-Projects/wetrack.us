SELECT other_workouts.other_workout_id, other_workouts.time, other_workouts.title, users.username 
FROM other_workouts
JOIN users ON other_workouts.user_id=users.user_id
ORDER BY other_workout_id DESC
LIMIT 5;