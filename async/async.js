'use strict'
// async & await
// clear style of using promise :)

// 1. async
async function fetchUser() {
  // do network reqeust in 10 secs....
  return 'kombucha';
}

const user = fetchUser();
user.then(console.log);
console.log(user); 

// 2. await ✨
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function orderTea() {
  await delay(2000);
  return '🍵';  
}

async function orderCoffee() {
  await delay(1000);
  return '☕'; 

}

async function pickupBeverages() {
  const teaPromise = orderTea();
  const coffeePromise = orderCoffee();
  const tea = await teaPromise;
  const coffee = await coffeePromise;
  return `${tea} + ${coffee}`;
}

pickupBeverages().then(console.log);

// 3. useful APIs ✨
function pickupAllBeverages() {
  return Promise.all([orderTea(), orderCoffee()]).then(beverages =>
    beverages.join(' + ')
  );
}
pickupAllBeverages().then(console.log);

function pickupOnlyOne() {
  return Promise.race([orderTea(), orderCoffee()]);
}

pickupOnlyOne().then(console.log);