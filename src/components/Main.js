import React from 'react';
import { Container } from 'rsuite';
import MainHeader from './MainHeader';
import MainContent from './MainContent';
import MainFooter from './MainFooter';

const Main = (props) => {
    const { containerStyle } = mainStyles
    return (
       <Container style={containerStyle}>
           <MainHeader/>
           <MainContent/>
           <MainFooter/>
       </Container>
    );
}

const mainStyles = {
    containerStyle: {
        width: 'auto',
        height: 'auto',
        border: '1px solid black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
}

export default Main;