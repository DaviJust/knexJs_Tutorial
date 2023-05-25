
const knex = require('../config/database');


const select = knex('users').select('id', 'first_name')
    .where('id', '<=', 10)
    .andWhere('first_name', '=', 'Jane')
    .orWhere('id', '>=', 11);

console.log(select.toString()); 

select.then(data => {
    console.log(data);
}).catch(e => {
  console.log('ERRO:', e.message);  
}).finally(() => {
    knex.destroy()
})