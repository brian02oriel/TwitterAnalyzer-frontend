
import React from 'react';
import { Header, FlexboxGrid } from 'rsuite';
import P5Wrapper from 'react-p5-wrapper'
import P5Background from './Complements/P5Background';
import MainForm from './MainForm';

const MainHeader = () => {
    const { containerStyle, backgroundStyle } = headerStyles
    return (
        <FlexboxGrid justify="center">
            <Header>
                <div style={ backgroundStyle }>
                    <P5Wrapper sketch={P5Background}/>
                </div>
                
                <div style={containerStyle}>
                    <h1> Tweet Analyzer </h1>
                    <p> Búscalo y sorpréndete </p>
                    <br/>
                    
                    <small> alfa 1.0.0 </small>
                    <MainForm />
                </div>
                        
            </Header>
        </FlexboxGrid>
    );
};

const headerStyles = {
    containerStyle: {
        width: '100vw',
        height: '100vh',
        color: '#FFFFFF',
        //border: '1px solid #1DA1F2',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    backgroundStyle:{
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100vw', 
        height: '100vh',  
        zIndex: '-1'
    }

}

export default MainHeader;