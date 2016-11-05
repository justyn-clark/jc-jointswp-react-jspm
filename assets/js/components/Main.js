import React, { Component } from 'react';
import Title from './Title';
import Intro from './Intro';
import Form from './Form';

class Main extends Component {
    render () {
        return (
            <section>
                <Title />
                <Intro/>
                <Form />
            </section>
        );
    }
}

export default Main


