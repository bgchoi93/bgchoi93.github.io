import * as React from 'react';
import {  } from 'semantic-ui-react';
import './content.css';

export class Content extends React.Component {
    render () {
        return this.props.activeContent;
    }
}