import React from 'react'
import './searchbar.css'

class SearchBar extends React.Component {

constructor(props){
    super(props)

    this.state = {value:''}
    this.search = this.search.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
}


search(){
    this.props.onSearch(this.state.value)
}

handleSearch(event){
    this.setState({value:event.target.value});
}

    render(){

        return(
            <div className="SearchBar">
            <input placeholder="Enter A City or Country Name" onChange={this.handleSearch} />
            <button className="SearchButton" onClick ={this.search} >SEARCH</button>
          </div>
        )
    }
}


export default SearchBar;