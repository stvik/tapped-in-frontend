    import React, {Component} from 'react'
import SearchBar from '../components/SearchBar'
import GoogleMapReact from 'google-map-react'
import {Grid} from 'semantic-ui-react'

export default class Homepage extends Component {
    render(){
        return (
            <Grid centered>
                <Grid.Row  verticalAlign='middle'>
                    <SearchBar searchText={this.props.searchText} updateSearchText={this.props.updateSearchText} searchBrew={this.props.searchBrew}/>
                </Grid.Row>
            </Grid>
        )
    }
}