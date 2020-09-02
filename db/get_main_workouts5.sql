SELECT main_workouts.main_workout_id, main_workouts.workout_type, main_workouts.title, main_workouts.distance, users.username 
FROM main_workouts
JOIN users ON main_workouts.user_id=users.user_id
ORDER BY main_workout_id DESC
LIMIT 5;