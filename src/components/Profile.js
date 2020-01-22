import React, { Component } from 'react'
import {Grid, Image, Header} from 'semantic-ui-react'
import BreweriesListContainer from '../containers/BreweriesListContainer'


class Profile extends Component {


    constructor() {
        super()
        this.state = {
            favoriteBrews: [],
            selectedBrewery: null
        }
    }

    componentDidMount() {
        fetch(`http://localhost:3000/user_brews?user_id=${this.props.user}`)
        .then(resp => resp.json())
        .then(data => {
            const breweries = data.map(fav => fav.brewery)
            this.setState({favoriteBrews: breweries})

        })

    }

    selectedBrewery = (brewery) => {
        this.setState({selectedBrewery: brewery})
    }



    render(){
        console.log(this.state.favoriteBrews)
        const {firstname, lastname, image, bio} = this.props.user
        return(
            <Grid >
                <Grid.Row>
                <Grid.Column width={3} >
                    <Image src={image} />
                </Grid.Column>
                <Grid.Column width={13}>
                    <Header as='h1'>{firstname} {lastname}</Header>
                    <Header size='small'>{bio}</Header>
                </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                <Grid.Column width={3}>
                   
                </Grid.Column>
                <Grid.Column width={10}>
                <Header size='large'>Favorite Breweries</Header>
                {this.state.favoriteBrews.length ? <BreweriesListContainer user={this.props.user} selectedBrewery={this.selectedBrewery} breweries={this.state.favoriteBrews} /> : null}
                </Grid.Column>
                </Grid.Row>
        </Grid>
        )
    }
}

export default Profile