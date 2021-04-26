const db = require('../../database/dbConfig');

function findByFilter(filter) {
    return db('users')
        .select('user_id', 'name', 'email', 'phone', 'password')
        .where(filter)
        .first();
}
//Double check that we want one object or array returned 

function update(id, changes) {
    return db('users')
        .select('name', 'email', 'phone')
        .where('user_id', id)
        .update(changes);
}
//Double check what we want returned for update function for users

async function add(user) {
    const [user_id] = await db("users").insert(user, "user_id");
    return findByFilter({ user_id });
}

module.exports = {
    findByFilter,
    update,
    add
};
