// path: controllers/loginController.js

module.exports.login = (req, res) => {
    res.render('login');
};

module.exports.handleLogin = (req, res) => {
    const { email, password } = req.body;
    // Implement your login logic here
    // For example, check the database for the user and validate the password
    // If successful, redirect to the dashboard or another page
    // If unsuccessful, render the login page with an error message

    // Example:
    if (email === 'test@example.com' && password === 'password') {
        res.redirect('/dashboard');
    } else {
        res.render('login', { error: 'Invalid email or password' });
    }
};

