import React from 'react'
import '../Marker.css'



const Marker = (props) => {
    const {name, brewery, setActiveMarker} = props
 
    return (
        <div>
            <div    
                className = 'pin bounce'
                style={{backgroundColor: (props.selectedBrewery.name == props.brewery.name)? 'blue' : 'red', cursor: 'pointer'}}
                title={name}
                onClick = {() => setActiveMarker(brewery)}
            />
            {(props.selectedBrewery.name == props.brewery.name) ? <div className='pulse'/> : null}
        </div>
    )
}

export default Marker