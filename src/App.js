import React from 'react';
import Navbar from './components/Navbar'
import BreweriesListContainer from './containers/BreweriesListContainer'
import Homepage from './containers/Homepage'

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
      <BreweriesListContainer breweries={this.state.allBreweries}/>
    </div>
  ) }
}

export default App;
