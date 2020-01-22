    import React, {Component} from 'react'
import SearchBar from '../components/SearchBar'
import GoogleMapReact from 'google-map-react'
import {Grid, GridColumn, Header, Image} from 'semantic-ui-react'
import hoppy from '../images/hoppy.png'

export default class Homepage extends Component {
    render(){
        return (
            <Grid verticalAlign='middle' centered style ={{ height: '100vh'}}>
                <Grid.Row   style={{height: '100%'}}>
                    <Grid.Column width={6}>
                        <Image centered size ='medium' src="http://static.showit.co/800/KtnOrZ53RuOmaWr0IInTEg/73125/just_hop.png"></Image>
                        <Header textAlign='center' as='h1'>TappedIn</Header>
                        <SearchBar searchText={this.props.searchText} updateSearchText={this.props.updateSearchText} searchBrew={this.props.searchBrew}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

// style ={{ height: '100vh', backgroundSize: 'cover', backgroundImage:"url(" + hop + ")" }}