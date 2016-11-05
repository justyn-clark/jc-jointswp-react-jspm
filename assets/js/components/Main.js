import React, { Component } from 'react';
import Title from './Title';
import Intro from './Intro';

class Main extends Component {
    render () {
        return (
            <main id="main" className="large-12 medium-12 columns" role="main">
                <Title />
                <Intro/>
            </main>
        );
    }
}

export default Main


