const db = require('../data/db-config');

function find() {
    return db("schemes")
}

function findById(id) {
    return db("schemes")
      .where({ id })
}

function findSteps(id) {
    return db('steps')
    //need scheme id instead of just id 
        .where( {scheme_id: id})
}


function add(newScheme){
    return db('schemes')
    .insert(
        newScheme
    )
}

async function update(changes, id){
    await db('schemes')
        .where({ id })
        .update( changes )
    const updatatedScheme = findById(id)
    return updatatedScheme
}


function remove(id) {
    return db('schemes')
      .where({ id })
      .del()
}

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}