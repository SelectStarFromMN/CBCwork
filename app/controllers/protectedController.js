var exports = module.exports = {}

exports.dashboard = function (req, res) {

    res.render('dashboard', {user: JSON.stringify(req.user)});
  
}