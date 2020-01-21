import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker'
import BreweryModal from './BreweryModal';

const API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY

class SimpleMap extends Component {

  constructor(){
    super()
    this.state = {
      center: {
        lat: 38.8716537346939,
        lng: -77.0065830204082
      },
      zoom: 11,
      modal: false,
      activeMarker: {}
    }
  }

  setActiveMarker = (brewery) => {
    this.setState(
      {
        activeMarker: brewery,
        modal: !this.state.modal
      }
    )
  }


  render(){
    const {center, zoom} = this.state
    return (
        <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          {this.props.breweries.map((brewery,index) => 
              <Marker
                key={index}
                lat={brewery.latitude}
                lng={brewery.longitude}
                text="My Marker"
                color='red'
                brewery = {brewery}
                setActiveMarker = {this.setActiveMarker}
                />
                )
              }
          
          <BreweryModal 
            brewery = {this.state.activeMarker} 
            modal={this.state.modal}
            handleClose = {() => {this.setState({modal: false})}}
          /> 
            
        </GoogleMapReact>
      </div>
    )
  }
  
}


export default SimpleMap;
