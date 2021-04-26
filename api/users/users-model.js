const db = require('../../database/dbConfig');

function findByFilter (filter)  {
    return db('users')
    .select('name', 'email', 'phone')
    .where(filter)
    .first();
}

function update (id, changes) {
    return db('users')
    .select('name', 'email', 'phone')
    .where('user_id', id)
    .update(changes)
}

module.exports = {
    findByFilter,
    update
};
