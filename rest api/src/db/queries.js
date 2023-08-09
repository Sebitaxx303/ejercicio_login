export const queries = {
    register: 'INSERT INTO users (username, email, userpassword) VALUES (@username, @email, @userpassword) SELECT id FROM users WHERE username = @username',
}