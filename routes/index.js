var HomeController = require('../controllers/index')
var userController = require('../controllers/users')
module.exports = function (app) {
    app.use('/', HomeController)
    app.use('/camera', HomeController)
    app.use('/user', userController)
}