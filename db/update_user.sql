UPDATE users
SET username = $2,
profile_pic = $3,
phone_number = $4,
email = $5
WHERE user_id = $1;

SELECT * FROM users
WHERE user_id = $1;