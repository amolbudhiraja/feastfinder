// Reccomendation system to reccomend restaurants to users based on user preferences. 

import restaurantData from "../dataset.js";

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
    let restaurantObject = new Restaurant(restaurantDataObject.name, restaurantDataObject.setting, restaurantDataObject.price, restaurantDataObject.cuisines, restaurantDataObject.pet, restaurantDataObject.seating);
    restaurants.push(restaurantObject);
  }
  
  /** Calculate the Euclidian Distance between the restaurant objects.  */
  function euclideanDistance(a, b) {
    let distance = 0;
    distance += Math.pow(Math.abs(a.setting - b.setting), 2);
    distance += Math.pow(Math.abs(a.price - b.price), 2);
    distance += Math.pow(Math.abs(a.cuisine - b.cuisine), 2);
    distance += Math.pow(Math.abs(a.petFriendly - b.petFriendly), 2);
    distance += Math.pow(Math.abs(a.seating - b.seating), 2);
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
    console.log(distances);
    //top three distances
    let topThree = [];
    console.log(distances[0].distance);
    topThree[1] = distances[1].distance;
    topThree[2] = distances[2].distance;
    
    const recommendedRestaurants = distances.slice(0, k).map(d => [d.restaurant.name, d.restaurant.distance]);
    recommendedRestaurants[0][1] = distances[0].distance;
    recommendedRestaurants[1][1] = distances[1].distance;
    recommendedRestaurants[2][1] = distances[2].distance;
    return recommendedRestaurants;
  }

  /** Given the userPreferences, give a reccomendation.  */
  function getReccomendation(dict) {
    const userPreferences = new Restaurant("", dict["setting"], dict["price"], dict["cuisine"], dict["petFriendly"], 2);
    const k = 3; // Number of reccomendations. (# of neighbors in KNN)
    const recommendations = recommendRestaurant(userPreferences, k);
    return recommendations; 
  }
  
  export {getReccomendation}; 
  
