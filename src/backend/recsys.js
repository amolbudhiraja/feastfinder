// Reccomendation system to reccomend restaurants to users based on user preferences. 

import restaurantData from "../dataset";

/** Retaurant Object */
class Restaurant {
    constructor(name, setting, price, cuisine, petFriendly, seating) {
      this.name = name; 
      this.setting = setting;
      this.price = price;
      this.cuisine = cuisine;
      this.petFriendly = petFriendly;
      this.seating = seating;
    }
  }
  
  /** Define and seed the training restaurant data. */
  var restaurants = [];
  for (let i = 0; i < restaurantData.length; i++) {
    let restaurantDataObject = restaurantData[i];
    let restaurantObject = new Restaurant(restaurantDataObject.name, restaurantDataObject.setting, restaurantDataObject.price, restaurantDataObject.cuisines, restaurantDataObject.petFriendly, restaurantDataObject.seating);
    restaurants.push(restaurantObject);
  }
  
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
  
  /** Return the k closest restaurants from the training set based on the preferences. */
  function recommendRestaurant(preferences, k) {
    const distances = [];
    for (let i = 0; i < restaurants.length; i++) {
      const currentRestaurant = restaurants[i];
      const distance = euclideanDistance(preferences, currentRestaurant);
      distances.push({ restaurant: currentRestaurant, distance });
    }
    distances.sort((a, b) => a.distance - b.distance);
    const recommendedRestaurants = distances.slice(0, k).map(d => d.restaurant.name);
    return recommendedRestaurants;
  }

  /** Given the userPreferences, give a reccomendation.  */
  function getReccomendation() {
    const userPreferences = new Restaurant(1, 2, 3, 1, 1);
    const k = 3; // Number of reccomendations. (# of neighbors in KNN)
    const recommendations = recommendRestaurant(userPreferences, k);
    console.log(recommendations);
    return recommendations; 
  }
  
  export default getReccomendation; 
  