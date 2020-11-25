
exports.up = function(knex) {
  return knex.schema.createTable('pecas', function(table) {
    table.increments();
    table.string('nome').notNullable();
    table.string('quantidade').notNullable();
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('pecas');
};
