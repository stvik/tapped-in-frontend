import React from 'react';
import Navbar from './components/Navbar'
import Homepage from './containers/Homepage'
import BrowseBreweryPage from './containers/BrowseBreweryPage'

import './App.css';


class App extends React.Component {

  constructor() {
    super()
    this.state = {
      allBreweries: [],
      searchText: '',
      page: 0,
    }
  }

  componentDidMount() {
    fetch(`http://localhost:3000/breweries?state=virginia&page=${this.state.page}`)
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

  }

  searchBrew = () => {
    const lowerSearchT = this.state.searchText.toLowerCase()
    fetch(`http://localhost:3000/breweries?name=${lowerSearchT}&page=${this.state.page}`)
    .then(resp => resp.json())
    .then(data => 
      this.setState({
        allBreweries: data
      })
      )  

    // const searchedBreweries = this.state.allBreweries.filter(brewery => (brewery.name.toLowerCase().includes(lowerSearchT) || brewery.street.toLowerCase().includes(lowerSearchT)))
    
  

    // this.setState({
    //   searched: searchedBreweries
    // })
  }

  pickState = (e) => {

   const value =e.currentTarget.firstElementChild.innerText.toLowerCase()

    fetch(`http://localhost:3000/breweries?state=${value}&page=${this.state.page}`)
    .then(resp => resp.json())
    .then(data => 
      this.setState({
        allBreweries: data
      })
      )  

  }


  render() {
   return( 
    <div>
      <Navbar />
      <Homepage searchText={this.state.searchText} updateSearchText={this.updateSearchText} searchBrew={this.searchBrew}/>
      <BrowseBreweryPage breweries={this.state.allBreweries} pickState={this.pickState}/>
    </div>
  ) }
}

export default App;

//this.state.searchText ? this.state.searched : 
