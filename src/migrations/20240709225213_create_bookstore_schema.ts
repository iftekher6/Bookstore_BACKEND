import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('authors', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.text('bio').nullable();
    table.date('birthdate').notNullable();
  });

  await knex.schema.createTable('books', (table) => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.text('description').nullable();
    table.date('published_date').notNullable();
    table.integer('author_id').unsigned().references('id').inTable('authors').onDelete('CASCADE').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('books');
  await knex.schema.dropTableIfExists('authors');
}
