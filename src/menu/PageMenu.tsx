import * as React from 'react';
import {  Menu } from 'semantic-ui-react';

export class PageMenu extends React.Component {
    state = { activeItem: 'bio' };

    handleContextRef = contextRef => this.setState({ contextRef });
    handleItemClick = (e, { name }) => {
            this.setState({ activeItem: name });
    }

    render() {
        const { activeItem } = this.state;

        return (
            <Menu vertical={true}>
                <Menu.Item>
                    <Menu.Header>About Me</Menu.Header>
                    <Menu.Menu>
                        <Menu.Item name="highlight" active={activeItem === 'highlight'} onClick={this.handleItemClick}>Highlight</Menu.Item>
                        <Menu.Item name="intro" active={activeItem === 'intro'} onClick={this.handleItemClick}>Introduction</Menu.Item>
                    </Menu.Menu>
                </Menu.Item>
                <Menu.Item>
                    <Menu.Header>Experience and Projects</Menu.Header>
                    <Menu.Menu>
                        <Menu.Item name="work" active={activeItem === 'work'} onClick={this.handleItemClick}>Work Experience</Menu.Item>
                        <Menu.Item name="project" active={activeItem === 'project'} onClick={this.handleItemClick}>Projects</Menu.Item>
                    </Menu.Menu>
                </Menu.Item>
                <Menu.Item>
                    <Menu.Header>Contact Me</Menu.Header>
                    <Menu.Menu>
                        <Menu.Item name="email" active={activeItem === 'email'} onClick={this.handleItemClick}>Email</Menu.Item>
                        <Menu.Item name="github" active={activeItem === 'github'} onClick={this.handleItemClick}>GitHub</Menu.Item>
                        <Menu.Item name="linkedin" active={activeItem === 'linkedin'} onClick={this.handleItemClick}>LinkedIn</Menu.Item>
                    </Menu.Menu>
                </Menu.Item>
            </Menu>
        );
    }
}
