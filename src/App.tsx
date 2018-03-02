import * as React from 'react';
import './App.css';
import { PageMenu } from './menu/PageMenu';
import { Grid, Segment } from 'semantic-ui-react';

class App extends React.Component {
    render() {
        return (
            <div className="app-container">
                <Grid>
                    <Grid.Column width={2}>
                        <PageMenu/>
                    </Grid.Column>

                    <Grid.Column stretched={true} width={14}>
                        <Segment>
                            This is an stretched grid column. This segment will always match the tab height
                        </Segment>
                    </Grid.Column>
                </Grid>

            </div>
        );
    }
}

export default App;
