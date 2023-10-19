/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('tasks', function (table) {
    table.increments('id');
    table.string('title', 255).notNullable();
    table.string('description', 255).notNullable();
    table.integer('order_id').notNullable();
    table.string('status', 255).notNullable().defaultTo('pending');
    table.integer('story_point').notNullable();
    table.dateTime('created_at');
    table.boolean('soft_delete').defaultTo(false);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('tasks');
};
