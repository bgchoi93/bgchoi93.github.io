import React, { Component } from 'react';
import './App.css';
import { PageMenu, Modal } from "./content/PageMenu";
import { TutorEmail } from "./content/TutorEmail";
import { Content } from './content/Content';
import { Grid, Segment } from 'semantic-ui-react';
import {FilterBar} from "./content/FilterBar";

class App extends Component {
    linkedinUrl = 'https://www.linkedin.com/in/briangchoi/';
    githubUrl = 'https://github.com/bgchoi93';

    state = {
        activeContent : 'highlight',
        tutorModalOpen : false
    };

    onChangeActiveContent = ( activeContent ) =>  {
        if (activeContent === 'linkedin') {
            window.open(this.linkedinUrl, '_blank');
        }
        else if (activeContent === 'github') {
            window.open(this.githubUrl, '_blank');
        }
        else if (activeContent === 'email') {
            window.location.href = "mailto:bgchoi93@gmail.com";
        }
        else if (activeContent === 'tutor') {
            this.setState({ tutorModalOpen : true });
        }
        else {
            this.setState({activeContent : activeContent})
        }
    }

    onTutorModalClose = () => {
        this.setState({ tutorModalOpen : false });
    }

    render() {
        return (
            <div className="App">
                <Grid>
                    <Grid.Column width={3}>
                        <PageMenu activeContent={ this.state.activeContent } onChangeActiveContent={ this.onChangeActiveContent }/>
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <Segment>
                            <Content activeContent={ this.state.activeContent }/>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <FilterBar/>
                    </Grid.Column>
                </Grid>
                <div>
                    <TutorEmail open={ this.state.tutorModalOpen } close={this.onTutorModalClose }/>
                </div>
            </div>
        );
    }
}

export default App;
