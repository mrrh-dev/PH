function topRatedRestaurant(restaurants) {
  // Write your code here

  if (!Array.isArray(restaurants) || restaurants.length === 0) return 'Invalid';

  let maxrating = restaurants[0].rating;

  let maxind = 0;

  for (let i = 0; i < restaurants.length; i++) {
    if (restaurants[i].rating > maxrating) {
      maxrating = restaurants[i].rating;

      maxind = i;
    }
  }

  return restaurants[maxind].name.toUpperCase();
}

let ans = topRatedRestaurant([
  { name: 'KFC', rating: 4.2 },
  { name: 'Pizza Hut', rating: 4.6 },
]);
console.log(ans);
