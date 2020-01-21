import React, { Component } from 'react'
import {Modal, Button, Form, Header, Icon} from 'semantic-ui-react'

class Login extends Component {
    render(){
        return (
            <Modal 
                basic size='mini'
                open = {this.props.loginModalOpen}
                onClose = {this.props.closeModal}
            >
                <Header as='h2' icon textAlign='center'>
                    <Icon name='user' circular />
                    <Header.Content>Login</Header.Content>
                </Header>

                <Modal.Content>
                    <Form style={{textAlign: 'center'}}>
                        <Form.Input placeholder='Username'/>
                    
                        <Form.Input placeholder='joe@flatironschool.com' />
                            
                        
                        <Button circular
                            color='green' inverted 
                            type='submit'
                        > 
                            <Icon name = 'checkmark' /> Login
                        </Button>
                        
                        
                        <Button circular
                            color='red' inverted 
                        >
                            <Icon name='remove'/> Cancel 
                        </Button>
                    </Form>
                </Modal.Content>
        </Modal>
        )
    }
}

export default Login