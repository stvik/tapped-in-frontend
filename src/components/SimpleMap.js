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
        lat: 37.3630212377705,
        lng: -77.407177
      },
      zoom: 4,
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


    // findCenter = () => {
    //   console.log(this.props.breweries)
    //   const lat = this.props.breweries[0].latitude
    //   const lng = this.props.breweries[0].longitude
      
    //   this.setState(
    //     {center: {
    //       lat: lat,
    //       lng: lng
    //     }}
    //   )
      
    //   }
  
  


  render(){


    const {center, zoom}  = this.state

    return (
        <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          center={center}
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
