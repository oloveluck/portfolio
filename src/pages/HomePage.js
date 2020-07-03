import React from 'react';

import HeaderText from '../components/HeaderText';
import Projects from '../components/Projects';

function HomePage(props) {
    return (
        <div>
            <HeaderText title={props.title} subTitle={props.subTitle} text={props.text}/>
            <Projects></Projects>
        </div>
        
    )
}

export default HomePage;