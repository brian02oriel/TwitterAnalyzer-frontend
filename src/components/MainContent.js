import React from 'react';
import { Content, Row, Col } from 'rsuite';
import Banner1 from '../assets/img/pic1.jpg';
import Banner2 from '../assets/img/pic2.jpg';

const MainContent = () => {
    const { containerStyle, imageContainerStyle, textContainerStyle,
            textStyle, textContainerStyle2, textStyle2, quoteContainerStyle, 
            quoteContainerContent } = contentStyles
    return (
        <Content style={containerStyle}>
            <Row>
                <Col md={12} sm={24} style={imageContainerStyle}>
                    <img src={Banner1} alt="People together" width="100%" height="auto"/>
                </Col>
                <Col md={12} sm={24} style={textContainerStyle}>
                    <div style={textStyle}>
                        <p> 
                            Twitter  es una de las redes sociales más usadas mundialmente, y más que usarla para chismes,
                            es una herramienta potente que permite medir la percepción que tienen las personas hacia las marcas, 
                            personajes de interés, deportes, entre otros. 
                        </p>
                    </div>
                    
                </Col>
            </Row>
            <Row>
                <Col md={24} style={quoteContainerStyle}>
                    <div style={quoteContainerContent}>
                        <blockquote cite="https://www.sethgodin.com/">
                            <p>“Las conversaciones entre los miembros de tu nicho ocurren, te guste o no. El buen marketing alienta el tipo de conversación correcta.”.</p>
                            <br/>
                            <footer style={{fontSize: '2.1vmax;'}}>—Seth Godin</footer>
                        </blockquote>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={12} sm={24} style={textContainerStyle2}>
                    <div style={textStyle2}>
                        <p> 
                        Si te da curiosidad o sólo quieres perder el tiempo, 
                        te invito a probar este analizador para que sorprendas con 
                        toda la información que se puede encontrar si se sabe buscar bien.
                        </p>
                    </div>
                </Col>
                <Col md={12} sm={24} style={imageContainerStyle}>
                    <img src={Banner2} alt="People liked" width="100%" height="auto"/>
                </Col>
            </Row>
        </Content>
    );
};

const contentStyles = {
    constainerStyle:{
        //border: '1px solid black',
        textAlign: 'center',
    },
    imageContainerStyle:{
        textAlign: 'left',
        //border: '1px solid grey',

    },
    textContainerStyle:{
        paddingTop: '6%',
        paddingBottom:'6%',
        //border: '1px solid grey',
        fontSize: '1em',
        textAlign: 'left',
    },
    textStyle:{
        padding:'3%',
        //border: '1px solid blue',
    },
    textContainerStyle2:{
        paddingTop: '8.85%',
        paddingBottom:'9%',
        //border: '1px solid grey',
        fontSize: '1em',
        textAlign: 'left',
    },
    textStyle2:{
        padding:'3%',
        //border: '1px solid blue',
    },
    quoteContainerStyle:{
        padding: '3%',
        backgroundColor: '#E1E8ED'
    },
    quoteContainerContent:{
        padding: '3%',
        backgroundColor: '#FFFFFF'
    }

}

export default MainContent;