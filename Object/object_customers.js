const customers = [
    {
        customer_name : 'Negan',
        customer_age : 45,
        customer_weapon :'Bat',
        customer_email : 'negan@sanctuary.com',
        customer_city : 'Washington',
    },
    {
        customer_name : 'Daryl',
        customer_age : 41,
        customer_weapon :'Crossbow',
        customer_email : 'dary1.dixon@kickass.com',
        customer_city : 'Washington',
    },
    {
        customer_name : 'Rick',
        customer_age : 45,
        customer_weapon :'Magnum 357',
        customer_email : 'rick@alexandria.com',
        customer_city : 'King County',
    }
]


customers.forEach(customer => {
    console.log(customer);
});
const filteredCustomers = customers.filter(customer => customer.customer_age < 42);
const emails = filteredCustomers.map(customer => customer.customer_email);
console.log(emails);
const totalAge = customers.reduce((total, customer) => total + customer.customer_age, 0);
console.log(totalAge);


