
import React from 'react';
import { Header, FlexboxGrid, Input, InputGroup, Icon, Row, Col } from 'rsuite';
const MainHeader = () => {
    const { containerStyle, inputContainerStyle, inputStyle, iconStyle } = headerStyles
    return (
        <FlexboxGrid justify="center">
            <Header style={containerStyle}>
                <h1> Header </h1>
                <h2> SubHeader </h2>
                <br/>
                <p> Description </p>
                <Row style={inputContainerStyle}>
                    <Col>
                        <InputGroup inside>
                            <Input size="lg" style={inputStyle}/>
                            <InputGroup.Button style={iconStyle}>
                                <Icon icon="search" />
                            </InputGroup.Button>
                        </InputGroup>
                    </Col>
                </Row>
                        
            </Header>
        </FlexboxGrid>
    );
};

const headerStyles = {
    containerStyle: {
        width: '100vw',
        height: '75vh',
        //border: '1px solid black',
        border: '1px solid #1DA1F2',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },

    inputContainerStyle:{
        padding:'2%',
        margin: '2%'
    },

    inputStyle:{
        borderRadius: '50px'
    },
    iconStyle:{
        borderRadius: '50px',
        display:'block',
        margin: '3px',
        padding: '-2px'
    }

}

export default MainHeader;