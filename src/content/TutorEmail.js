import * as React from 'react';
import { Modal, Header, Button, Icon } from 'semantic-ui-react';
import './content.css';

export class TutorEmail extends React.Component {

    onClose = () => {
        this.props.close();
    }

    onSend = () => {
        window.location.href = "mailto:bgchoi93@gmail.com";
    }

    inlineStyle = {
        modal : {
            marginTop: '0px !important',
            marginLeft: 'auto',
            marginRight: 'auto'
        }
    };

    render () {
        return (
            <div>
                <Modal open={this.props.open} onClose={this.onClose} size="small" style={this.inlineStyle}>
                    <Modal.Content>
                        <Modal.Description>
                            <Header>Default Profile Image</Header>
                            <p>We've found the following gravatar image associated with your e-mail address.</p>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='black' onClick={this.onClose}>
                            Nope
                        </Button>
                        <Button positive icon='checkmark' labelPosition='right' content="Send an E-mail" onClick={this.onSend} />
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }

}