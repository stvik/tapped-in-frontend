import React, { Component } from 'react'
import {Segment, Card} from 'semantic-ui-react'
import UserCard from '../components/UserCard'
import background from '../images/background.jpeg'

export default class CommunityPage extends Component {
    render(){
        return (
            <Segment style={{overflow: 'auto', maxHeight: 1000, backgroundSize: 'cover', backgroundImage:"url(" + background + ")"}} >
                <Card.Group itemsPerRow={6}>
                    {this.props.users.map((user, i) => <UserCard key ={i} user={user}/> )}
                </Card.Group>
            </Segment>
        )
    }
}