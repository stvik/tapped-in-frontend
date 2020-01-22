import React from 'react'
import '../Marker.css'



const Marker = (props) => {
    const {name, brewery, setActiveMarker} = props
    // console.log(props)
    return (
        <div>
            <div    
                className = 'pin bounce'
                style={{backgroundColor: (props.selectedBrewery.id == props.brewery.id)? 'blue' : 'red', cursor: 'pointer'}}
                title={name}
                onClick = {() => setActiveMarker(brewery)}
            />
            {(props.selectedBrewery.id == props.brewery.id) ? <div className='pulse'/> : null}
        </div>
    )
}

export default Marker