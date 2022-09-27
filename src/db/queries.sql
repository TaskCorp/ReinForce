-- query to get list of tasks from a given username
SELECT "users_id", "name", "start_time", "revisit_interval" 
FROM users 
INNER JOIN tasks on tasks.users_id = users._id 
WHERE username = 'pleb';
-- change 'pleb' to any username
