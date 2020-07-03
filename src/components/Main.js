import React, { useRef } from 'react';
import { Container } from 'rsuite';
import MainHeader from './MainHeader';
import MainContent from './MainContent';
import MainFooter from './MainFooter';

const Main = (props) => {
    const { containerStyle } = mainStyles

    const topScrollRef = useRef(null)

    return (
       <Container style={containerStyle}>
            <div ref={topScrollRef} />
           <MainHeader/>
           <MainContent topScrollRef={topScrollRef}/>
           <MainFooter/>
       </Container>
    );
}

const mainStyles = {
    containerStyle: {
        /*width: 'auto',
        height: 'auto',*/
        //border: '1px solid black',
        /*display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start'*/
    }
}

export default Main;