import * as React from 'react';
import { Menu } from 'semantic-ui-react'

export class PageMenu extends React.Component {

    handleItemClick = (e, { name }) => {
        this.props.onChangeActiveContent( name );
    }

    render() {

        return (
            <Menu fluid vertical>
                <Menu.Item>
                    <Menu.Header>About Me</Menu.Header>
                    <Menu.Menu>
                        <Menu.Item name="highlight" active={this.props.activeContent === 'highlight'} onClick={this.handleItemClick}>Highlight</Menu.Item>
                        <Menu.Item name="intro" active={this.props.activeContent === 'intro'} onClick={this.handleItemClick}>Introduction</Menu.Item>
                    </Menu.Menu>
                </Menu.Item>
                <Menu.Item>
                    <Menu.Header>Experience and Projects</Menu.Header>
                    <Menu.Menu>
                        <Menu.Item name="work" active={this.props.activeContent === 'work'} onClick={this.handleItemClick}>Work Experience</Menu.Item>
                        <Menu.Item name="project" active={this.props.activeContent === 'project'} onClick={this.handleItemClick}>Projects</Menu.Item>
                    </Menu.Menu>
                </Menu.Item>
                <Menu.Item>
                    <Menu.Header>Contact Me</Menu.Header>
                    <Menu.Menu>
                        <Menu.Item name="email" active={this.props.activeContent === 'email'} onClick={this.handleItemClick}>Email</Menu.Item>
                        <Menu.Item name="github" active={this.props.activeContent === 'github'} onClick={this.handleItemClick}>GitHub</Menu.Item>
                        <Menu.Item name="linkedin" active={this.props.activeContent === 'linkedin'} onClick={this.handleItemClick}>LinkedIn</Menu.Item>
                        <Menu.Item name="tutor" active={this.props.activeContent === 'tutor'} onClick={this.handleItemClick}>Looking For A Tutor?</Menu.Item>
                    </Menu.Menu>
                </Menu.Item>
            </Menu>
        );
    }
}
