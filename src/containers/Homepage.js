    import React, {Component} from 'react'
import SearchBar from '../components/SearchBar'
import GoogleMapReact from 'google-map-react'
import {Grid, GridColumn, Header, Image} from 'semantic-ui-react'
import hoppy from '../images/hoppy.png'

export default class Homepage extends Component {
    render(){
        return (
            <Grid verticalAlign='top' centered style ={{ height: '100vh'}}>
                <Grid.Row   style={{height: '100%'}}>
                    <Grid.Column width={6}>
                        <Image src='../../hopLogo2.png' size ='medium' centered/>
                        <SearchBar searchText={this.props.searchText} updateSearchText={this.props.updateSearchText} searchBrew={this.props.searchBrew} updateSearchType={this.props.updateSearchType}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

// style ={{ height: '100vh', backgroundSize: 'cover', backgroundImage:"url(" + hop + ")" }}