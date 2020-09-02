import React from 'react';
import './searchresults.css'


class SearchResults extends React.Component {

render(){

 
    
        


return(
<div className= "searchresults">

<h2>Weather</h2>
<h3>Temprature:{this.props.searchresults[0].main.temp} </h3>
<h3>Temperature minimum:{this.props.searchresults[0].main.temp_min} </h3>
<h3>Temperature maximum:{this.props.searchresults[0].main.temp_max} </h3>
<h3>Humidity: {this.props.searchresults[0].main.humidity} </h3>
</div>

)

}

}

export default SearchResults;