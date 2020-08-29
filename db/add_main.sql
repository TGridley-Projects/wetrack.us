INSERT INTO main_workouts
(workout_type, title, distance, time, steps, heart_rate, user_id)
VALUES
($1, $2, $3, $4, $5, $6, $7);