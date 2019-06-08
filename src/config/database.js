const knexfile = require('../knexfile')
const knex = require('knex')(knexfile)

module.exports = knex

// knex('users').insert({
//     name: 'Teste',
//     email: 'test@teste.com',
//     password: 'teste'
// }).then(data => console.log(data))

// knex('users').first()
// knex('users').where({id: 2})
// knex('users').select('*').then(resultado => console.log(resultado))