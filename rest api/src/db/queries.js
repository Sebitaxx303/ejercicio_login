export const queries = {
    register: 'INSERT INTO users (username, email, userpassword) VALUES (@username, @email, @userpassword) SELECT id FROM users WHERE username = @username',
    login: 'SELECT email,userpassword,id FROM users WHERE email = @email',
    profile: 'SELECT * FROM  users WHERE id = @id'
}