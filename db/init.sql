CREATE TABLE users (
user_id SERIAL PRIMARY KEY,
username VARCHAR(30),
password TEXT,
profile_pic TEXT,
phone_number INT,
email VARCHAR(50)
);

CREATE TABLE main_workouts(
main_workout_id SERIAL PRIMARY KEY,
workout_type INT,
title VARCHAR(30),
distance NUMERIC,
time TIME,
steps INT,
heart_rate INT,
user_id INT REFERENCES users(user_id)
);

CREATE TABLE other_workouts(
other_workout_id SERIAL PRIMARY KEY,
title VARCHAR(30),
intensity INT,
time TIME,
heart_rate INT,
user_id INT REFERENCES users(user_id)
);

CREATE TABLE main_comments(
main_comment_id SERIAL PRIMARY KEY,
comment VARCHAR(100),
user_id INT REFERENCES users(user_id),
post_id INT REFERENCES main_workouts(main_workout_id)
);

CREATE TABLE other_comments(
other_comment_id SERIAL PRIMARY KEY,
comment VARCHAR(100),
user_id INT REFERENCES users(user_id),
post_id INT REFERENCES other_workouts(other_workout_id)
);