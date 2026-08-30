module.exports = {
    use: function(app) {
        app.post('/router/login', require('postlogin'));
        app.post('/router/loginafter', require('postloginafter'));
    }
}