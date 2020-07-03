
import React from 'react';
import { Header, FlexboxGrid } from 'rsuite';
import MainForm from './MainForm';

const MainHeader = () => {
    const { containerStyle} = headerStyles
    return (
        <FlexboxGrid justify="center">
            <Header style={containerStyle}>
                <h1> Header </h1>
                <h2> SubHeader </h2>
                <br/>
                <p> Description </p>
                <MainForm />        
            </Header>
        </FlexboxGrid>
    );
};

const headerStyles = {
    containerStyle: {
        width: '100vw',
        height: '100vh',
        //border: '1px solid #1DA1F2',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }

}

export default MainHeader;