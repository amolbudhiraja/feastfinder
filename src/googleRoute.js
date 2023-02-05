
const axios = require('axios');


class GoogleRoute {
  async getDistance( origin, destination, mode, callback ) {

    let des = destination.replace(' ', '+');
    const key = 'AIzaSyAi_5wpoZ8OsOvQiZLPxV3BPeuKQPsNeG4';
    const url = 'https://maps.googleapis.com/maps/api/directions/json?';
  
    let addr = url+'origin='+origin+'&destination='+des+'&mode='+mode+'&key='+key;
  
    console.log(addr);
  
    const res = await axios.get( addr )
            .then( (response)=>{
                
              let data = response.data.routes[0].legs;   
              let result = {

                'desination':destination,
                'mode':mode,
                'distance':0,
                'duration':0

              }


              result.distance = data[0].distance.text;
              result.duration = data[0].duration.text;
  
              callback( "err", result);
  
            }) 
            .catch( (err)=>{
  
                console.log( 'err' );
                
    }); 
  }

}
 

  function getRouteInformation(restaurantName) {
    let route = new GoogleRoute();
    let routeObject = null; 
    route.getDistance( 'USC', restaurantName, 'driving', (err, res)=>{ 
      
      console.log( res );
      routeObject = res;
    
    });
    return routeObject; 
  }

export default getRouteInformation; 



