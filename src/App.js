import React from 'react';
import Navbar from './components/Navbar'
import Homepage from './containers/Homepage'
import BrowseBreweryPage from './containers/BrowseBreweryPage'
import SimpleMap from './components/SimpleMap';
import CommunityPage from './containers/CommunityPage'
import Profile from './components/Profile'
import { BrowserRouter as Router, Route, Redirect}  from 'react-router-dom'



import './App.css';


class App extends React.Component {

  constructor() {
    super()
    this.state = {
      allBreweries: [],
      searchText: '',
      page: 1,
      selectedState: 'virginia',
      users: [],
      loggedInUser: null

    }
  }

  componentDidMount() {
    fetch(`http://localhost:3000/breweries?state=${this.state.selectedState}&page=${this.state.page}`)
    .then(resp => resp.json())
    .then(data => 
      this.setState({
        allBreweries: data
      })
      )  
  }

  componentDidMount(){
    fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(users => this.setState({users: users}))
  }

  updateSearchText = (e) => {
    console.log(e.currentTarget.value)
    this.setState({
      searchText: e.currentTarget.value
    })

  }

  searchBrew = () => {
    const lowerSearchT = this.state.searchText.toLowerCase()
    fetch(`http://localhost:3000/breweries?name=${lowerSearchT}&page=1`)
    .then(resp => resp.json())
    .then(data =>  {
      this.setState({
        allBreweries: data,
        page: 1
      })

    }
      ) 
  }

  pickState = (e) => {

   const value =e.currentTarget.firstElementChild.innerText.toLowerCase()

    fetch(`http://localhost:3000/breweries?state=${value}&page=1`)
    .then(resp => resp.json())
    .then(data => 
      this.setState({
        selectedState: value,
        allBreweries: data,
        page: 1
      })
      )  

  }

  getStateBrews = (page) => {
    fetch(`http://localhost:3000/breweries?state=${this.state.selectedState}&page=${page}`)
    .then(resp => resp.json())
    .then(data => 
      this.setState({
        allBreweries: data
      })
      )  

  }

  getMoreBrews = () => {
    if (this.state.allBreweries.length) {
    this.getStateBrews(this.state.page + 1)

    this.setState({
      page: this.state.page + 1,
    })
  }

  }

  getPreviousBrews = () => {
    if (this.state.page > 1) {
    this.getStateBrews(this.state.page - 1)

    this.setState({
      page: this.state.page - 1,
    })
  }
  }

  createUser = (e) => {
    const userData = {
      firstname: e.currentTarget.firstname.value,
      lastname: e.currentTarget.lastname.value,
      username: e.currentTarget.username.value,
      bio: e.currentTarget.bio.value,
      password: e.currentTarget.password.value
    }

    const configObj = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept' : 'application/json'
      },
      body: JSON.stringify(userData)
      
    }

    fetch('http://localhost:3000/users', configObj)
    .then(resp => resp.json())
    .then(newUser => this.setState({loggedInUser: newUser}))
    // console.log(this.state.loggedInUser)

  }

  handleLogin = (e) => {
    console.log(e.currentTarget.password.value)
      fetch(`http://localhost:3000/users/login?username=${e.currentTarget.username.value}&password=${e.currentTarget.password.value}`)
      .then(resp => resp.json())
      .then(data => this.setState({loggedInUser: data}))
  }


  render() {
    // console.log(this.state.allBreweries)
  
  
   return( 
    <Router>
      <div >
        <Navbar createUser={this.createUser} handleLogin={this.handleLogin} loggedInUser = {this.state.loggedInUser}/>
        <Route exact path='/' render={() => <Homepage searchText={this.state.searchText} updateSearchText={this.updateSearchText} searchBrew={this.searchBrew}/>} />
        <Route exact path='/breweries' render={() => <BrowseBreweryPage 
                                                      breweries={this.state.allBreweries}
                                                       pickState={this.pickState} 
                                                       getPreviousBrews={this.getPreviousBrews} 
                                                       getMoreBrews={this.getMoreBrews} 
                                                       page={this.state.page} />} 
        />
        <Route exact path='/community' render={() => <CommunityPage users = {this.state.users} />}/>
        <Route exact path = '/profile' render={() => <Profile user = {this.state.loggedInUser} />} />

      </div>
    </Router>


  ) }
}

export default App;

 { /*   <div>
      <Navbar />
      <Homepage searchText={this.state.searchText} updateSearchText={this.updateSearchText} searchBrew={this.searchBrew}/>
      
      <BrowseBreweryPage breweries={this.state.allBreweries}
       pickState={this.pickState} 
       getPreviousBrews={this.getPreviousBrews} 
       getMoreBrews={this.getMoreBrews} 
       page={this.state.page}/>
      
      <SimpleMap breweries={this.state.allBreweries} />
      
    </div> */ }
