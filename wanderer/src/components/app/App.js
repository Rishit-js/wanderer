import React from 'react';

import './App.css';
import SearchBar from '../searchbar/searchbar'
import SearchResults from '../SearchResults/searchresults'
import openWeather from '../../utils/OpenWeather/OpenWeather'

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      searchresults:[{"coord":{"lon":-0.13,"lat":51.51},"weather":[{"id":300,"main":"Drizzle","description":"light intensity drizzle","icon":"09d"}],"base":"stations",
      "main":{"temp":280.32,"pressure":1012,"humidity":81,"temp_min":279.15,"temp_max":281.15
    },"visibility":10000,"wind":{"speed":4.1,"deg":80},
    "clouds":{"all":90},"dt":1485789600,"sys":{"type":1,"id":5091,"message":0.0103,"country":"GB",
    "sunrise":1485762037,"sunset":1485794875},"id":2643743,"name":"London","cod":200}]
    }
    this.search = this.search.bind(this);
  }

async search(value){

  const data = await openWeather.search(value);
  
 
  this.setState({searchresults:data})

}


  render(){
  return (
    <div className="App">
      <header className="App-header">
       <h1><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-calendar-check-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
       <path fillRule="evenodd" d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-5.146-5.146a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
     </svg>  Wanderer</h1> 
      </header>
      <SearchBar onSearch ={this.search} />

      <SearchResults searchresults ={this.state.searchresults}
                        />
    </div>
  );
}
}

export default App;
