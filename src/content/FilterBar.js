import * as React from 'react';
import { Menu, Checkbox, Grid, Divider } from 'semantic-ui-react';
import './content.css';

export class FilterBar extends React.Component {
    render () {
        return (
            <Menu fluid vertical>
                <div>
                    <h3>Filter by</h3>
                </div>
                <Menu.Item>
                    <Menu.Header>Programming Languages</Menu.Header>
                    <Divider/>
                    <Menu.Menu>
                        <Menu.Item>
                            <Grid>
                                <Grid.Column width={8}>
                                    <Checkbox compact label='Java' />
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <Checkbox compact label='Python' />
                                </Grid.Column>
                            </Grid>
                        </Menu.Item>
                        <Menu.Item>
                            <Grid>
                                <Grid.Column width={8}>
                                    <Checkbox compact label='Javascript' />
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <Checkbox compact label='R' />
                                </Grid.Column>
                            </Grid>
                        </Menu.Item>
                    </Menu.Menu>
                    <Divider/>
                    <Menu.Header>Software Engineering</Menu.Header>
                    <Divider/>
                    <Menu.Menu>
                        <Menu.Item>
                            <Grid>
                                <Grid.Column width={8}>
                                    <Checkbox compact label='SQL' />
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <Checkbox compact label='OOP' />
                                </Grid.Column>
                            </Grid>
                        </Menu.Item>
                        <Menu.Item>
                            <Grid>
                                <Grid.Column width={8}>
                                    <Checkbox compact label='Backend' />
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <Checkbox compact label='Frontend' />
                                </Grid.Column>
                            </Grid>
                        </Menu.Item>
                        <Menu.Item>
                            <Grid>
                                <Grid.Column width={8}>
                                    <Checkbox compact label='DevOps' />
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <Checkbox compact label='Cloud' />
                                </Grid.Column>
                            </Grid>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu.Item>
            </Menu>
        )
    }
}
