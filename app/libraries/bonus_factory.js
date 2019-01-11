module.exports = {
    creteBonus: function (type, bonus) {
        let payload;
        let id = Date.now();

          if (type == "daily") {
            payload = {
                type: type,
                bonus: bonus,
                id: id
              };
          } else if (type == "gift") {
            payload = {
                type: type,
                bonus: bonus,
                id: 1
              };
          }

        return payload;
    }
}