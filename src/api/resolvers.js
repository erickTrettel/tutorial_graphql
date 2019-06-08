const db = require('../config/database')

module.exports = {
    Query: {
        async getUser(_, { id }) {
            return await db('users').where({ id }).first()
        },
        async getUsers() {
            return await db('users');
        }

        // async getUser(_, params) {
        //     return await db('users').where({ id: params.id })
        // }
    },
    Mutation: {
        async createUser(_, { input }) {
            const result = await db('users').insert({
                name: input.name, 
                email: input.email,
                password: input.password
            })

            const id = result[0]

            return await db('users').where({ id }).first()
        }
    }
}