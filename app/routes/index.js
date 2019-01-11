const secure = require('../../config/secure');

module.exports = function(app) {
  // Тут, позже, будут и другие обработчики маршрутов 

  app.post('/', (req, res) => {
    let body = req.body;
    if (body.fishPass == secure.passwords.fish) {
      res.redirect('/vk?'+secure.tokens.fish.query+"="+secure.tokens.fish.value);
    } else {
      res.redirect('/');
    }
  });
};