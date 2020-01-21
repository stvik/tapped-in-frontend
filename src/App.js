import React from 'react';
import Navbar from './components/Navbar'
import BreweriesListContainer from './containers/BreweriesListContainer'
import Homepage from './containers/Homepage'
import SimpleMap from './components/SimpleMap';


import './App.css';


class App extends React.Component {

  constructor() {
    super()
    this.state = {
      allBreweries: []
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

  render() {
   return( 
    <div>
      <Navbar />
      <Homepage/>
      <SimpleMap breweries={this.state.allBreweries} />
      <BreweriesListContainer breweries={this.state.allBreweries}/>
    </div>
  ) }
}

export default App;
