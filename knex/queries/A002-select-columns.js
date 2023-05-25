
const knex = require('../config/database');


const insert = knex('users as u')
.select('u.email as email', 'u.id as uid')

insert.then(data => {
    for(const user of data){
        console.log(user)
    };
}).catch(e => {
  console.log('ERRO:', e.message);  
}).finally(() => {
    knex.destroy()
})