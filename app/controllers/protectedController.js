var exports = module.exports = {}

exports.dashboard = function (req, res) {

    res.render('dashboard.hbs', {user: JSON.stringify(req.user)});
  
}