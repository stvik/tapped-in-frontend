import React from 'react'
import '../Marker.css'



const Marker = (props) => {
    const {color, name, brewery, setActiveMarker} = props
    // console.log(props)
    return (
        <div>
            <div    
                className = 'pin bounce'
                style={{backgroundColor: 'red', cursor: 'pointer'}}
                title={name}
                onClick = {() => setActiveMarker(brewery)}
            />
            <div className='pulse'/>
        </div>
    )
}

export default Marker