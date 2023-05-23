exports.up = function(knex) {  
    return knex.schema.createTable('profiles', (table) => {
        table.increments('id').primary();
        table.text('bio');
        table.text('description');
        table.integer('user_id').unique().unsigned();
        table.foregin('user_id')
        .references('user_id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    });

};


exports.down = function(knex) {
    return knex.schema.dropTable('profiles')

};
