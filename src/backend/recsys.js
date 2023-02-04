// Reccomendation system to reccomend restaurants to users based on user preferences. 

/** Retaurant Object */
class Restaurant {
    constructor(setting, price, cuisine, petFriendly, seating) {
      this.setting = setting;
      this.price = price;
      this.cuisine = cuisine;
      this.petFriendly = petFriendly;
      this.seating = seating;
    }
  }
  
  /** Define the training restaurant data.  */
  const restaurants = [
    new Restaurant(2, 2, 4, 1, 1),
    new Restaurant(1, 1, 1, 2, 2),
    new Restaurant(3, 3, 2, 1, 1),
    new Restaurant(1, 2, 3, 2, 1),
    new Restaurant(2, 3, 5, 1, 1),
    new Restaurant(3, 3, 6, 2, 2),
    new Restaurant(2, 1, 5, 2, 2),
    new Restaurant(1, 2, 6, 1, 1)
  ];
  
  /** Calculate the Euclidian Distance between the restaurant objects.  */
  function euclideanDistance(a, b) {
    let distance = 0;
    distance += Math.pow(a.setting - b.setting, 2);
    distance += Math.pow(a.price - b.price, 2);
    distance += Math.pow(a.cuisine - b.cuisine, 2);
    distance += Math.pow(a.petFriendly - b.petFriendly, 2);
    distance += Math.pow(a.seating - b.seating, 2);
    return Math.sqrt(distance);
  }
  
  /** Return the k closest restaurants from the training set based on the preferences.  */
  function recommendRestaurant(preferences, k) {
    const distances = [];
    for (let i = 0; i < restaurants.length; i++) {
      const currentRestaurant = restaurants[i];
      const distance = euclideanDistance(preferences, currentRestaurant);
      distances.push({ restaurant: currentRestaurant, distance });
    }
    distances.sort((a, b) => a.distance - b.distance);
    const recommendedRestaurants = distances.slice(0, k).map(d => d.restaurant);
    return recommendedRestaurants;
  }

  function getReccomendation() {
    const userPreferences = new Restaurant(1, 2, 3, 1, 1);
    const k = 3; // Number of reccomendations. (# of neighbors in KNN)
    const recommendations = recommendRestaurant(userPreferences, k);
    console.log(recommendations);
    return recommendations; 
  }
  
  export default getReccomendation; 
  