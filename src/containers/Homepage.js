    import React, {Component} from 'react'
import SearchBar from '../components/SearchBar'
import {Grid, Image} from 'semantic-ui-react'
import background from '../images/background.jpeg'

export default class Homepage extends Component {
    render(){
        return (
            <Grid verticalAlign='top' centered style ={{ height: '100vh' , backgroundSize: 'cover', backgroundImage:"url(" + background + ")"}}>
                <Grid.Row   style={{height: '100%'}}>
                    <Grid.Column width={6}>
                        <br />
                         <br />
                          <br />
                           <br />

                        <Image src='../../hopLogo3.png' centered/>
                        <SearchBar searchText={this.props.searchText} updateSearchText={this.props.updateSearchText} searchBrew={this.props.searchBrew} updateSearchType={this.props.updateSearchType}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

// style ={{ height: '100vh', backgroundSize: 'cover', backgroundImage:"url(" + background + ")" }}