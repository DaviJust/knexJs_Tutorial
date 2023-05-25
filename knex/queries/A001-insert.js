/*
insert into users
(first name, last_name, email, password_hash) values
("Helena", "A.", "1@email.com", "3_hash"),
("Mauro", "E.", "2@email.com", "4_hash"),
("Bruno", "O.", "3@email.com", "5_hash");
*/

const knex = require('../config/database');

const data = [
//     {
//     first_name: 'Helena',
//     last_name:'A.',
//     email:'1@email.com',
//     password_hash:'3_hash',
//     salary: 481.12
// },
{
    first_name: 'Mauro',
    last_name:'E.',
    email:'2@email.com',
    password_hash:'44214232432_hash',
    salary: 4444.12
},
{
    first_name: 'Bruno',
    last_name:'O.',
    email:'3@email.com',
    password_hash:'34142_hash',
    salary: 5353.12
},

];

const insert = knex('users').insert(data);

insert.then(data => {
    console.log(data);
}).catch(e => {
  console.log('ERRO:', e.message);  
}).finally(() => {
    knex.destroy()
})