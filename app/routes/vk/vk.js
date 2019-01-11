const processing = require("./processing");

module.exports = function(app, db) {
  app.post("/vk", (req, res) => {
    const body = req.body;

    switch (body.type) {
      case "confirmation":
        res.end("6394ab9e");
        break;

      case "message_new":
        res.end("ok");
        processing(body.object);
        break;

      default:
        res.end("ok");
        break;
    }
  });
};
