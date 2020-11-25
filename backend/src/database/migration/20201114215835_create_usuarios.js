
exports.up = function(knex) {
    return knex.schema.createTable('usuarios', function(table) {
        table.increments();
        table.string('matricula').notNullable();
        table.string('nome').notNullable();
        table.string('sobrenome').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();

    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('usuarios');
};
