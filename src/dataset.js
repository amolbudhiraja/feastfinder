let restaurantData = [
    {
        "name": "Sqirl", 
        "setting": 1, 
        "price": 2, 
        "cuisines": 2, 
        "pet": 2, 
        "seating": 1,
        "URL": "https://sqirlla.com/"
        "logo": "https://static.vecteezy.com/system/resources/previews/002/776/039/non_2x/cartoon-illustration-isolated-object-delicious-flour-food-bakery-bread-whole-grain-toast-vector.jpg"
    },
    {
        "name": "Apollonia's Pizzeria", 
        "setting": 2, 
        "price": 3, 
        "cuisines": 3, 
        "pet": 2, 
        "seating": 1,
        "URL": "http://www.apolloniaspizzeria.com/",
        "logo": "http://nebula.wsimg.com/ba3eaa5b5f0eaa32d60f1b7327938baf?AccessKeyId=3DB074E29571BC9B0AE1&disposition=0&alloworigin=1"
    },
    {
        "name": "Sushi Roku", 
        "setting": 3, 
        "price": 1, 
        "cuisines": 4, 
        "pet": 2, 
        "seating": 1,
        "URL": "https://www.sushiroku.com/",
        "logo": "https://uploads-ssl.webflow.com/5ccbf63337a19d1b77da765a/5cce2d7f9639c43d6174fcad_Header%20Logo.png"
    },
    {
        "name": "Casa Vega", 
        "setting": 1, 
        "price": 1, 
        "cuisines": 5, 
        "pet": 1, 
        "seating": 2,
        "URL": "https://www.casavega.com/",
        "logo": "https://lirp.cdn-website.com/8541fbf9/import/clib/casavega_com/dms3rep/multi/opt/CasaVega-Logo-306x205-188w.png"
    },
    {
        "name": "Lienzo Charbroiler", 
        "setting": 2, 
        "price": 2, 
        "cuisines": 4, 
        "pet": 2, 
        "seating": 1,
        "URL": "https://www.facebook.com/lienzocharrotemecula",
        "logo": "https://static.vecteezy.com/system/resources/previews/004/217/776/non_2x/cute-taco-cartoon-design-vector.jpg"
    },
    {   
        "name": "The Oinkster", 
        "setting": 3, 
        "price": 3, 
        "cuisines": 6, 
        "pet": 2, 
        "seating": 1,
        "URL": "https://theoinkster.com/",
        "logo": "https://theoinkster.com/mobile/images/logo.png"
    },
    {
        "name": "Nishi Restaurant", 
        "setting": 1, 
        "price": 1, 
        "cuisines": 2, 
        "pet": 2, 
        "seating": 1,
        "URL": "https://www.trip.com/travel-guide/foods/los-angeles-120518-restaurant/sushi-nishi-17641520/",
        "logo": "https://i.pinimg.com/736x/79/34/03/793403a860f7de0612053e3e8f54d969.jpg"
    },
    {
        "name": "Taqueria Los Anaya", 
        "setting": 2, 
        "price": 2, 
        "cuisines": 3, 
        "pet": 2, 
        "seating": 1,
        "URL": "http://www.taquerialosanaya.com/",
        "logo": "http://images.squarespace-cdn.com/content/v1/588b67d05016e1208225bfe9/1494390748912-0WXYK23PXWZP3WDRBL4L/anayalogo-500.png?format=1500w"
    },
    {
        "name": "Prince of Venice", 
        "setting": 3, 
        "price": 3, 
        "cuisines": 4, 
        "pet": 2, 
        "seating": 1,
        "URL": "https://princeofvenice.us/",
        "logo": "https://princeofvenice.us/wp-content/themes/prince_of_venice/images/logo.png"
    },
    {
        "name": "Little Jewel of New Orleans", 
        "setting": 1, 
        "price": 2, 
        "cuisines": 5,
        "pet": 2, 
        "seating": 1,
        "URL": "https://littlejewel.la/",
        "logo": "https://friendlystock.com/wp-content/uploads/2022/01/3-plate-of-spaghetti-pasta-cartoon-clipart.jpg"
    },
    {
        "name": "Bigmista's Barbecue", 
        "setting": 2, 
        "price": 3, 
        "cuisines": 2, 
        "pet": 2, 
        "seating": 1,
        "URL": "https://www.yelp.com/biz/bigmistas-barbecue-and-sammich-shop-long-beach-6",
        "logo": "https://s3-media0.fl.yelpcdn.com/bphoto/HkgZnb_7UGT2t3C8GU6v1g/348s.jpg"
    },
    {
        "name": "Thai Patio", 
        "setting": 3, 
        "price": 1, 
        "cuisines": 3, 
        "pet": 2, 
        "seating": 1,
        "URL": "http://www.thaipatiorestaurant.com/",
        "logo": "http://www.thaipatiorestaurant.com/images/TP_logo.jpg"
    },
    {
        "name": "Petros", 
        "setting": 1, 
        "price": 2, 
        "cuisines": 4, 
        "pet": 2, 
        "seating": 1,
        "URL": "https://www.petrosbrand.com/locations/petros-manhattan-beach",
        "logo": "https://friendlystock.com/wp-content/uploads/2022/01/3-plate-of-spaghetti-pasta-cartoon-clipart.jpg"
    },
    {
        "name": "Sonoratown", 
        "setting": 2, 
        "price": 3, 
        "cuisines": 5,
        "pet": 2, 
        "seating": 1,
        "URL": "https://www.sonoratown.com/",
        "logo": "https://www.sonoratown.com/uploads/8/0/4/0/80406072/published/1465434944.png?1609109592",
    },
    {
        "name": "Blue Ribbon Sushi", 
        "setting": 3, 
        "price": 1, 
        "cuisines": 6, 
        "pet": 2, 
        "seating": 1,
        "URL": "https://www.brsushigrove.com/",
        "logo": "https://i.pinimg.com/736x/79/34/03/793403a860f7de0612053e3e8f54d969.jpg"
    },
    {
        "name": "Bay Cities Italian Deli", 
        "setting": 1, 
        "price": 1, 
        "cuisines": 2, 
        "pet": 2, 
        "seating": 2,
        "URL": "https://order.bcdeli.com/",
        "logo": "https://order.bcdeli.com/wp-content/themes/storefront-child/assets/images/logo.png"
    },
    {
        "name": "Tacos Tu Madre", 
        "setting": 2, 
        "price": 2, 
        "cuisines": 3, 
        "pet": 2, 
        "seating": 2,
        "URL": "https://tumadre.com/",
        "logo": "https://tumadre.com/wp-content/uploads/2022/01/tumadre-logo.png"
    },
    {
        "name": "Daichan", 
        "setting": 3, 
        "price": 3, 
        "cuisines": 4, 
        "pet": 2, 
        "seating": 1,
        "URL": "https://www.yelp.com/biz/daichan-studio-city",
        "logo": "https://i.pinimg.com/736x/79/34/03/793403a860f7de0612053e3e8f54d969.jpg"
    },
    {
        "name": "LudoBird", 
        "setting": 1, 
        "price": 2, 
        "cuisines": 5, 
        "pet": 2, 
        "seating": 1,
        "URL": "https://www.yelp.com/biz/ludobird-los-angeles",
        "logo": "https://www.shutterstock.com/image-illustration/illustration-bucket-fried-chicken-design-260nw-1541769944.jpg"
    },
    {
        "name": "Mariscos Jalisco", 
        "setting": 2, 
        "price": 3, 
        "cuisines": 6, 
        "pet": 2, 
        "seating": 1,
        "URL": "https://www.yelp.com/biz/mariscos-jalisco-los-angeles-3",
        "logo": "https://static.vecteezy.com/system/resources/previews/004/217/776/non_2x/cute-taco-cartoon-design-vector.jpg"
    },
    {
         "name": "Sugarfish", 
         "setting": 3, 
         "price": 1, 
         "cuisines": 1, 
         "pet": 2, 
         "seating": 1,
        "URL": https://sugarfishsushi.com/,
        "logo": https://sugarfishsushi.com/wp-content/uploads/2019/09/Wht_Fish.png
    },
    {
      "name": "The Semi-Tropic", 
        "setting": 1, 
        "price": 2, 
        "cuisines": 3, 
        "pet": 2, 
        "seating": 1,
        "URL": "https://thesemitropic.com/",
        "logo": "https://static.spotapps.co/web/thesemitropic--com/custom/logo.png"
    },
    {
        "name": "Pat's King of Steaks", 
        "setting": 2, 
        "price": 3, 
        "cuisines": 4, 
        "pet": 2, 
        "seating": 1,
        "URL": "https://www.patskingofsteaks.com/",
        "logo": "https://images.squarespace-cdn.com/content/v1/5b05c01a45776e6aaf4589aa/1528813381762-JL6YBBK14A8YCQT360VR/Pats-Logo.png?format=1500w"
    },
    {
        "name": "Daichan", 
        "setting": 3, 
        "price": 1, 
        "cuisines": 5, 
        "pet": 2, 
        "seating": 1,
        "URL": "https://www.yelp.com/biz/daichan-studio-city",
        "logo": "https://i.pinimg.com/736x/79/34/03/793403a860f7de0612053e3e8f54d969.jpg"
    },
    {
        "name": "Bottega Louie", 
        "setting": 1, 
        "price": 2, 
        "cuisines": 6, 
        "pet": 2, 
        "seating": 1,
        "URL": "https://www.bottegalouie.com/",
        "logo": "https://png.pngtree.com/png-clipart/20190613/original/pngtree-cartoon-hand-painted-dessert-ice-cream-png-image_3592316.jpg"
    },
    {
        "name": "Langer's Delicatessen", 
        "setting": 2, 
        "price": 3, 
        "cuisines": 2, 
        "pet": 2, 
        "seating": 1,
        "URL": "https://www.langersdeli.com/",
        "logo": "https://www.langersdeli.com/wp-content/uploads/2013/04/langers-logo.png"
    },
    {
        "name": "Konbi", 
        "setting": 3, 
        "price": 1, 
        "cuisines": 3, 
        "pet": 2, 
        "seating": 1,
        "URL": "https://konbi.co/",
        "logo": "https://static.vecteezy.com/system/resources/previews/003/473/365/non_2x/bread-sandwich-cartoon-illustration-free-vector.jpg"
    },
    {
        "name": "Gjusta", 
        "setting": 1, 
        "price": 2, 
        "cuisines": 4, 
        "pet": 2, 
        "seating": 1,
        "URL": "https://gjusta.com/",
        "logo": "https://static.vecteezy.com/system/resources/previews/002/776/039/non_2x/cartoon-illustration-isolated-object-delicious-flour-food-bakery-bread-whole-grain-toast-vector.jpg"
    },
    {
        "name": "Mariscos Jalisco", 
        "setting": 2, 
        "price": 3, 
        "cuisines": 5, 
        "pet": 2, 
        "seating": 1,
        "URL": "https://www.yelp.com/biz/mariscos-jalisco-los-angeles-3",
        "logo": "https://static.vecteezy.com/system/resources/previews/004/217/776/non_2x/cute-taco-cartoon-design-vector.jpg"
    },
    {
        "name": "It's Boba Time", 
        "setting": 3, 
        "price": 1, 
        "cuisines": 6, 
        "pet": 2, 
        "seating": 1,
        "URL": "https://itsbobatime.com/",
        "logo": "https://itsbobatime.com/img/logo.png"
    },
    {
        "name": "Leo's Tacos Truck", 
        "setting": 1, 
        "price": 2, 
        "cuisines": 2, 
        "pet": 2, 
        "seating": 1,
        "URL": "https://www.leostacostruck.com/",
        "logo": "https://static.vecteezy.com/system/resources/previews/004/217/776/non_2x/cute-taco-cartoon-design-vector.jpg"
    },
    {
        "name": "The Factory Kitchen", 
        "setting": 2, 
        "price": 3, 
        "cuisines": 3, 
        "pet": 2, 
        "seating": 1,
        "URL": "https://thefactorykitchen.com/",
        "logo": "https://thefactorykitchen.com/wp-content/uploads/2017/08/FK_logo_orange_resize_white.png"
    },
    {
        "name": "Lucha Libre Gourmet Taco Shop", 
        "setting": 3, 
        "price": 1, 
        "cuisines": 4, 
        "pet": 2, 
        "seating": 1,
        "URL": "https://www.luchalibretacoshop.com/",
        "logo": "https://www.luchalibretacoshop.com/wp-content/uploads/2017/10/LOGO.png"
    },
    {
        "name": "Baroo Canteen", 
        "setting": 1, 
        "price": 2, 
        "cuisines": 5, 
        "pet": 2, 
        "seating": 1,
        "URL": "https://www.baroolosangeles.com/",
        "logo": "https://static1.squarespace.com/static/5c59e670ebfc7f423984bbfe/t/5c7684fd0d9297d31966c31c/1551271171340/baroo-logo-white.png"
    },
    {
        "name": "Baco Mercat", 
        "setting": 2, 
        "price": 3, 
        "cuisines": 6, 
        "pet": 2, 
        "seating": 1,
        "URL": "http://www.bacomercat.com/",
        "logo": "https://images.squarespace-cdn.com/content/5769f77037c5817df27d3b61/1596329256884-6U6JBWP7WFXKL4WXJ9D0/baco+years.png?format=300w&content-type=image%2Fpng"
    },
    {
        "name": "El Huarache Azteca", 
        "setting": 3, 
        "price": 1, 
        "cuisines": 2, 
        "pet": 2, 
        "seating": 1,
        "URL": "https://orderelhuaracheazteca.com/",
        "logo": "https://static.vecteezy.com/system/resources/previews/004/217/776/non_2x/cute-taco-cartoon-design-vector.jpg"
    },
    {
        "name": "Tatsu Ramen", 
        "setting": 1, 
        "price": 2, 
        "cuisines": 3, 
        "pet": 2, "seating": 1,
        "URL": "https://tatsuramen.com/",
        "logo": "https://tatsu.softhart.co/wp-content/uploads/2022/02/TatsuRamen_RGB_Secondary_Dragon_Circle_Red.png"
    }
]  

export default restaurantData; 
