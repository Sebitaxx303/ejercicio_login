export const queries = {
    //user
    register: 'INSERT INTO users (username, email, userpassword) VALUES (@username, @email, @userpassword) SELECT id FROM users WHERE username = @username',
    login: 'SELECT email,userpassword,id FROM users WHERE email = @email',
    profile: 'SELECT * FROM  users WHERE id = @id',
    //task
    getTasks: 'SELECT * FROM task',
    getTask: 'SELECT * FROM task WHERE id = @id',
    createtasks: 'INSERT INTO task (title, descrp, tdate) VALUES (@title, @descrp, GETDATE())',
    updateTasks: 'UPDATE task SET title = @title, descrp = @descrp WHERE id = @id',
    deleteTasks: 'DELETE FROM task WHERE id = @id'
}