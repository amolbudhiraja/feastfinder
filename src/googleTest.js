
const axios = require('axios');

async function getDistance( origin, destination, mode, callback ){


  mode.replace(' ', '+')
  const key = 'AIzaSyAi_5wpoZ8OsOvQiZLPxV3BPeuKQPsNeG4';
  const url = 'https://maps.googleapis.com/maps/api/directions/json?';

  let addr = url+'origin='+origin+'&destination='+destination+'&mode='+mode+'&key='+key;


  let result = {

    'mode':mode,
    'distance':0,
    'duration':0

  }

  const res = await axios.get( addr )
          .then( (response)=>{
              
            let data = response.data.routes[0].legs;            

            result.distance = data[0].distance.text;
            result.duration = data[0].duration.text;

            callback( "err", result);

          }) 
          .catch( (err)=>{

              console.log( 'err' );
              
          }); 
}

// https://maps.googleapis.com/maps/api/directions/json?origin=Disneyland&destination=Universal+Studios+Hollywood&key=AIzaSyAi_5wpoZ8OsOvQiZLPxV3BPeuKQPsNeG4

let origin = 'USC';
let destination = 'La Taqueria';
let mode = {
            'walking':'walking',
            'driving':'driving',
            'bicycling':'bicycling',
            'transit':'transit'
          }

getDistance( origin, destination, mode.driving, (err, res)=>{

  console.log(res);
});