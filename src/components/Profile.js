import React, { Component } from 'react'
import {Grid, Image, Header} from 'semantic-ui-react'


class Profile extends Component {
    render(){
        return(
            <Grid >
                <Grid.Row>
                <Grid.Column width={3} >
                    <Image src='https://i0.wp.com/manateeymca.org/wp-content/uploads/2016/03/headshot.png?ssl=1' />
                </Grid.Column>
                <Grid.Column width={13}>
                    <Header as='h1'>Jasur Abdullin</Header>
                    <Header size='small'>This is my bio</Header>
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