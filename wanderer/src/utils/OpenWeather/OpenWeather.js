let apiKey = `871093fc5b36e14803649341211b6144`


  


let openWeather = {

async search(value){

  
 let url =`http://api.openweathermap.org/
 data/2.5/weather?q=${value}&appid=${apiKey}`;
 let proxyUrl = 'https://cors-anywhere.herokuapp.com/ ';
 
 try {
   const response = await fetch (proxyUrl+ url,{headers:{
     "Accept":"application/json",
     "Content-Type":"application/json"
   }})
   if(!response && response.statusText !== 'OK'){
     console.error({Error: response.status})
   
    }
     
    
    
   const jsonResponse = await response.json()
   if(jsonResponse){
     return jsonResponse
   } 


 } catch (error) {
   console.error({error})
 }


}

}

export default openWeather;

