import React, { Component } from 'react'
import {Modal, Button, Form, Header, Image, Icon} from 'semantic-ui-react'

class Login extends Component {
    render(){
        return (
            <Modal 
                basic size='mini'
                open = {this.props.loginModalOpen}
                onClose = {this.props.closeModal}
            >
                <Image centered size = 'medium' src="http://static.showit.co/800/KtnOrZ53RuOmaWr0IInTEg/73125/just_hop.png" circular />
                <Header as='h2' icon textAlign='center'>
                    <Header.Content>Login</Header.Content>
                </Header>

                <Modal.Content>
                    <Form style={{textAlign: 'center'}} inverted onSubmit={this.props.handleLogin}>
                        {this.props.error ? <Form.Input name='username' label="Username" placeholder='Username'  error /> : <Form.Input name='username' label="Username" placeholder='Username'  />}
                        {this.props.error ? <Form.Input name='password' label="Password" type='password' error='Incorrect username or password' /> : <Form.Input name='password' label="Password" type='password' />}

                        
                            
                        
                        <Button circular
                            color='green' inverted 
                            type='submit'
                            onClick={this.props.closeModal}
                        > 
                            <Icon name = 'checkmark' /> Login
                        </Button>
                        
                    </Form>
                </Modal.Content>
        </Modal>
        )
    }
}

export default Login