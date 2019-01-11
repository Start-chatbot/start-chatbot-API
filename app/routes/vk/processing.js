const send = require("./send");

module.exports = async ({ user_id: userId, body: message, payload }) => {
  let button;

  try {
    button = +JSON.parse(payload).button;
  } catch (error) {}

  if (button) {
    await send(userId, message, button);
  } else {
    await send(userId, message, 0);
  }
};
