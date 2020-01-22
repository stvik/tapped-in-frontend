import React from 'react'
import { Header, Image, Modal, Button, Popup } from 'semantic-ui-react'

class BreweryModal extends React.Component {
    
    
    render(){
        
        const {name, image, street, city, state, description, website_url, postal_code} = this.props.brewery
        
        // console.log(this.props)
        
    
        return(
            <Modal 
                open={this.props.modal}
                onClose = {this.props.handleClose}
                
            >
                <Modal.Header>{name}</Modal.Header>
                <Modal.Content image>
                <Image wrapped size='medium' src= {image}/>
                <Modal.Description>
                    <Header>{name}</Header>
                    <p>{street}</p>
                    <p>{city}, {state}, {postal_code} </p>
                    <p>{description}</p>
                {website_url ? 
                    <Button circular basic color='blue'><a href={website_url} target='_blank'> Visit Website </a></Button>
                :
                    <Popup content='This brewery does not have a website yet!' on='click' pinned trigger = {<Button circular basic color='blue'/>} />
                }
                    
                </Modal.Description>
                </Modal.Content>
            </Modal>
    
        )
    }
}


export default BreweryModal