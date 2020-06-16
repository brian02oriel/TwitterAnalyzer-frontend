import React from 'react';
import { Content, Row, Col, Divider } from 'rsuite';
import Banner1 from '../assets/pic1.jpg';
import Banner2 from '../assets/pic2.jpg';

const MainContent = () => {
    const { containerStyle, firstContainerStyle, secondContainerStyle,
            secondContainerP, thirdContainerStyle, thirdContainerContent } = contentStyles
    return (
        <Content style={containerStyle}>
            <Row>
                <Col md={12} sm={24} style={firstContainerStyle}>
                    <img src={Banner1} alt="People together" width="100%" height="auto"/>
                </Col>
                <Col md={12} sm={24} style={secondContainerStyle}>
                    <div style={secondContainerP}>
                        <p> 
                            Twitter  es una de las redes sociales más usadas mundialmente, y más que usarla para chismes,
                            es una herramienta potente que permite medir la percepción que tienen las personas hacia las marcas, 
                            personajes de interés, deportes, entre otros. 
                        </p>
                    </div>
                    
                </Col>
            </Row>
            <Row>
                <Col md={24} style={thirdContainerStyle}>
                    <div style={thirdContainerContent}>
                        <blockquote cite="https://www.sethgodin.com/">
                            <p>“Las conversaciones entre los miembros de tu nicho ocurren, te guste o no. El buen marketing alienta el tipo de conversación correcta.”.</p>
                            <br/>
                            <footer style={{fontSize: '2em'}}>—Seth Godin</footer>
                        </blockquote>
                    </div>
                </Col>
            </Row>
        </Content>
    );
};

const contentStyles = {
    constainerStyle:{
        border: '1px solid black',
        textAlign: 'center',
    },
    firstContainerStyle:{
        textAlign: 'left',
        border: '1px solid grey',

    },
    secondContainerStyle:{
        paddingTop: '6%',
        paddingBottom:'6%',
        border: '1px solid grey',
        fontSize: '1em',
        textAlign: 'left',
    },
    secondContainerP:{
        padding:'3%',
        border: '1px solid blue',
    },
    thirdContainerStyle:{
        padding: '3%',
        backgroundColor: '#E1E8ED'
    },
    thirdContainerContent:{
        padding: '3%',
        backgroundColor: '#FFFFFF'
    }

}

export default MainContent;