let restaurantData = [
    {
        "name": "Sqirl", 
        "setting": 1, 
        "price": 2, 
        "cuisines": 2, 
        "pet": 2, 
        "seating": 1
    },
    {
        "name": "Apollonia's Pizzeria", 
        "setting": 2, 
        "price": 3, 
        "cuisines": 3, 
        "pet": 2, 
        "seating": 1
    },
    {
        "name": "Sushi Roku", 
        "setting": 3, 
        "price": 1, 
        "cuisines": 4, 
        "pet": 2, 
        "seating": 1
    },
    {
        "name": "Casa Vega", 
        "setting": 1, 
        "price": 1, 
        "cuisines": 5, 
        "pet": 1, 
        "seating": 2
    },
    {
        "name": "Lienzo Charbroiler", 
        "setting": 2, 
        "price": 2, 
        "cuisines": 4, 
        "pet": 2, 
        "seating": 1
    },
    {   
        "name": "The Oinkster", 
        "setting": 3, 
        "price": 3, 
        "cuisines": 6, 
        "pet": 2, 
        "seating": 1
    },
    {
        "name": "Nishi Restaurant", 
        "setting": 1, 
        "price": 1, 
        "cuisines": 2, 
        "pet": 2, 
        "seating": 1
    },
    {
        "name": "Taqueria Los Anaya", 
        "setting": 2, 
        "price": 2, 
        "cuisines": 3, 
        "pet": 2, 
        "seating": 1
    },
    {
        "name": "Prince of Venice", 
        "setting": 3, 
        "price": 3, 
        "cuisines": 4, 
        "pet": 2, 
        "seating": 1
    },
    {
        "name": "Little Jewel of New Orleans", 
        "setting": 1, 
        "price": 2, 
        "cuisines": 5,
        "pet": 2, 
        "seating": 1
    },
    {
        "name": "Bigmista's Barbecue", 
        "setting": 2, 
        "price": 3, 
        "cuisines": 2, 
        "pet": 2, 
        "seating": 1
    },
    {
        "name": "Thai Patio", 
        "setting": 3, 
        "price": 1, 
        "cuisines": 3, 
        "pet": 2, 
        "seating": 1
    },
    {
        "name": "Petros", 
        "setting": 1, 
        "price": 2, 
        "cuisines": 4, 
        "pet": 2, 
        "seating": 1
    },
    {
        "name": "Sonoratown", 
        "setting": 2, 
        "price": 3, 
        "cuisines": 5,
        "pet": 2, 
        "seating": 1
    },
    {
        "name": "Blue Ribbon Sushi", 
        "setting": 3, 
        "price": 1, 
        "cuisines": 6, 
        "pet": 2, 
        "seating": 1
    },
    {
        "name": "Bay Cities Italian Deli", 
        "setting": 1, 
        "price": 1, 
        "cuisines": 2, 
        "pet": 2, 
        "seating": 2
    },
    {
        "name": "Tacos Tu Madre", 
        "setting": 2, 
        "price": 2, 
        "cuisines": 3, 
        "pet": 2, 
        "seating": 2
    },
    {
        "name": "Daichan", 
        "setting": 3, 
        "price": 3, 
        "cuisines": 4, 
        "pet": 2, 
        "seating": 1
    },
    {
        "name": "LudoBird", 
        "setting": 1, 
        "price": 2, 
        "cuisines": 5, 
        "pet": 2, 
        "seating": 1
    },
    {
        "name": "Mariscos Jalisco", 
        "setting": 2, 
        "price": 3, 
        "cuisines": 6, 
        "pet": 2, 
        "seating": 1
    },
    {
         "name": "Sugarfish", 
         "setting": 3, 
         "price": 1, 
         "cuisines": 1, 
         "pet": 2, 
         "seating": 1
    },
    {
      "name": "The Semi-Tropic", 
        "setting": 1, 
        "price": 2, 
        "cuisines": 3, 
        "pet": 2, 
        "seating": 1
    },
    {
        "name": "Pat's King of Steaks", 
        "setting": 2, 
        "price": 3, 
        "cuisines": 4, 
        "pet": 2, 
        "seating": 1
    },
    {
        "name": "Daichan", 
        "setting": 3, 
        "price": 1, 
        "cuisines": 5, 
        "pet": 2, 
        "seating": 1
    },
    {
        "name": "Bottega Louie", 
        "setting": 1, 
        "price": 2, 
        "cuisines": 6, 
        "pet": 2, 
        "seating": 1
    },
    {
        "name": "Langer's Delicatessen", 
        "setting": 2, 
        "price": 3, 
        "cuisines": 2, 
        "pet": 2, 
        "seating": 1
    },
    {
        "name": "Konbi", 
        "setting": 3, 
        "price": 1, 
        "cuisines": 3, 
        "pet": 2, 
        "seating": 1
    },
    {
        "name": "Gjusta", 
        "setting": 1, 
        "price": 2, 
        "cuisines": 4, 
        "pet": 2, 
        "seating": 1
    },
    {
        "name": "Mariscos Jalisco", 
        "setting": 2, 
        "price": 3, 
        "cuisines": 5, 
        "pet": 2, 
        "seating": 1
    },
    {
        "name": "The Boba Boutique", 
        "setting": 3, 
        "price": 1, 
        "cuisines": 6, 
        "pet": 2, 
        "seating": 1
    },
    {
        "name": "Leo's Tacos Truck", 
        "setting": 1, 
        "price": 2, 
        "cuisines": 2, 
        "pet": 2, 
        "seating": 1
    },
    {
        "name": "The Factory Kitchen", 
        "setting": 2, 
        "price": 3, 
        "cuisines": 3, 
        "pet": 2, 
        "seating": 1
    },
    {
        "name": "Lucha Libre Gourmet Taco Shop", 
        "setting": 3, 
        "price": 1, 
        "cuisines": 4, 
        "pet": 2, 
        "seating": 1
    },
    {
        "name": "Baroo Canteen", 
        "setting": 1, 
        "price": 2, 
        "cuisines": 5, 
        "pet": 2, 
        "seating": 1
    },
    {
        "name": "Baco Mercat", 
        "setting": 2, 
        "price": 3, 
        "cuisines": 6, 
        "pet": 2, 
        "seating": 1
    },
    {
        "name": "El Huarache Azteca", 
        "setting": 3, 
        "price": 1, 
        "cuisines": 2, 
        "pet": 2, 
        "seating": 1
    },
    {
        "name": "Tatsu Ramen", 
        "setting": 1, 
        "price": 2, 
        "cuisines": 3, 
        "pet": 2, "seating": 1
    }
]  

export default restaurantData; 
