SELECT
    *
FROM
    other_workouts
ORDER BY
    other_workout_id DESC
OFFSET $1 ROWS 
FETCH FIRST 5 ROW ONLY;