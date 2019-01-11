module.exports = { 
    addPlayerToDb: function (db,myCollection,psid, time) {
        const player = { psid: psid, time: time };

        db.collection(myCollection).insert(player, (err, result) => {
            if (err) {
                //res.send({ 'error': 'An error has occurred' });
            } else {
                console.log("игрок добавлен в базу");
            }
        });
    },
    updatePlayerInDb: function (db,myCollection ,itemId, psid, newTime) {
        db.collection(myCollection).update({ _id: itemId }, { psid: psid, time: newTime }, (err, result) => {
            if (err) {
                console.log({ 'error': 'An error has occurred' });
            } else {
                console.log("игрок обновлён");
            }
        });
    }
}