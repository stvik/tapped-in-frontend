    import React, {Component} from 'react'
import SearchBar from '../components/SearchBar'
import GoogleMapReact from 'google-map-react'
import {Grid, GridColumn} from 'semantic-ui-react'
import hop from '../images/hop.jpg'

export default class Homepage extends Component {
    render(){
        return (
            <Grid verticalAlign='middle' centered style ={{ height: '100vh'}}>
                <Grid.Row   style={{height: '100%'}}>
                    <Grid.Column width={6}>
                        <SearchBar searchText={this.props.searchText} updateSearchText={this.props.updateSearchText} searchBrew={this.props.searchBrew}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

// style ={{ height: '100vh', backgroundSize: 'cover', backgroundImage:"url(" + hop + ")" }}