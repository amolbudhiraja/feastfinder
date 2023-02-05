
const axios = require('axios');


class GoogleRoute{

  constructor() {
    
  }

  async getDistance( origin, destination, mode, callback ){

    let des = destination.replace(' ', '+');
    const key = 'AIzaSyAi_5wpoZ8OsOvQiZLPxV3BPeuKQPsNeG4';
    const url = 'https://maps.googleapis.com/maps/api/directions/json?';
  
    let addr = url+'origin='+origin+'&destination='+des+'&mode='+mode+'&key='+key;
  
    console.log(addr);
  
    const res = await axios.get( addr )
            .then( (response)=>{
                
              let data = response.data.routes[0].legs;   
              let result = {

                'origin':origin,
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



// https://maps.googleapis.com/maps/api/directions/json?origin=Disneyland&destination=Universal+Studios+Hollywood&key=AIzaSyAi_5wpoZ8OsOvQiZLPxV3BPeuKQPsNeG4


exports.GoogleRoute = GoogleRoute;

let origin = 'USC';
let destination = 'La Taqueria';
let mode = {
            'walking':'walking',
            'driving':'driving',
            'bicycling':'bicycling',
            'transit':'transit'
          }

let route = new GoogleRoute();

route.getDistance( origin, destination, mode.driving, (err, res)=>{

  console.log(res);
});


