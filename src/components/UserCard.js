import React, { Component } from 'react'
import {Card} from 'semantic-ui-react'


export default class UserCard extends Component {
    render(){
        const {username, firstname, lastname, image, bio} = this.props.user
        
        return(
            <Card 
                image={image}
                header= {`${firstname} ${lastname}`}
                meta= { '@' + username}
                description={bio}
            />
        )
    }
}