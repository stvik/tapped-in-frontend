import React, {Component} from 'react'
import SearchBar from '../components/SearchBar'
import GoogleMapReact from 'google-map-react'

export default class Homepage extends Component {
    render(){
        return (
            <div>
                <SearchBar searchText={this.props.searchText} updateSearchText={this.props.updateSearchText} searchBrew={this.props.searchBrew}/>
            </div>
        )
    }
}