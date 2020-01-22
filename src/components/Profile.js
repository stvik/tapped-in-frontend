import React, { Component } from 'react'
import {Grid, Image, Header} from 'semantic-ui-react'


class Profile extends Component {
    render(){
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
                </Grid.Column>
                </Grid.Row>
        </Grid>
        )
    }
}

export default Profile