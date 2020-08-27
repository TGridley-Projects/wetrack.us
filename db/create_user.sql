INSERT INTO users
(username, password, profile_pic, phone_number, email)
VALUES
($1, $2, $3, $4, $5)
RETURNING *;