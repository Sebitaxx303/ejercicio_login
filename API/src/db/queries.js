export const queries = {
    //user
    register: 'INSERT INTO users (username, email, userpassword) VALUES (@username, @email, @userpassword) SELECT id FROM users WHERE username = @username',
    login: 'SELECT email,userpassword,id FROM users WHERE email = @email',
    profile: 'SELECT id, username, email FROM  users WHERE id = @id',
    //task
    getTasks: 'SELECT * FROM task where tuser = @tuser ',
    getTask: 'SELECT * FROM task WHERE id = @id and tuser = @tuser',
    createtasks: 'INSERT INTO task (tuser, title, descrp, tdate) VALUES (@tuser, @title, @descrp, GETDATE())',
    updateTasks: 'UPDATE task SET title = @title, descrp = @descrp WHERE id = @id and tuser = @tuser',
    deleteTasks: 'DELETE FROM task WHERE id = @id AND tuser = @tuser'
}