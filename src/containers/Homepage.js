    import React, {Component} from 'react'
import SearchBar from '../components/SearchBar'
import {Grid} from 'semantic-ui-react'
import background from '../images/background.jpeg'

export default class Homepage extends Component {
    render(){
        return (
            <Grid verticalAlign='middle' centered style ={{ height: '100vh', backgroundSize: 'cover', backgroundImage:"url(" + background + ")"}}>
                <Grid.Row   style={{height: '100%'}}>
                    <Grid.Column width={6}>
                        <SearchBar searchText={this.props.searchText} updateSearchText={this.props.updateSearchText} searchBrew={this.props.searchBrew} updateSearchType={this.props.updateSearchType}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

// style ={{ height: '100vh', backgroundSize: 'cover', backgroundImage:"url(" + hop + ")" }}