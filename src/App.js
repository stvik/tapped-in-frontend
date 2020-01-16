import React from 'react';
import Navbar from './components/Navbar'
import BreweriesListContainer from './containers/BreweriesListContainer'
import Homepage from './containers/Homepage'

import './App.css';


class App extends React.Component {

  constructor() {
    super()
    this.state = {
      allBreweries: [],
      searchText: '',
      searched: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/breweries')
    .then(resp => resp.json())
    .then(data => 
      this.setState({
        allBreweries: data
      })
      )  
  }

  updateSearchText = (e) => {
    this.setState({
      searchText: e.currentTarget.value
    })
    console.log(this.state.searchText)

    this.searchBrew()
  }

  searchBrew = () => {
    const lowerSearchT = this.state.searchText.toLowerCase()
    const searchedBreweries = this.state.allBreweries.filter(brewery => (brewery.name.toLowerCase().includes(lowerSearchT) || brewery.street.toLowerCase().includes(lowerSearchT)))
    
  

    this.setState({
      searched: searchedBreweries
    })
  }

  render() {
   return( 
    <div>
      <Navbar />
      <Homepage searchText={this.state.searchText} updateSearchText={this.updateSearchText} searchBrew={this.searchBrew}/>
      <BreweriesListContainer breweries={this.state.searchText ? this.state.searched : this.state.allBreweries}/>
    </div>
  ) }
}

export default App;
