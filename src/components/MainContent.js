import React, { Fragment, useRef, useEffect } from 'react';
import { Content, Row, Col, Loader } from 'rsuite';
import WordCloud from './ChartComponents/WordCloudComponent';
import WordBarChart from './ChartComponents/WordBarChart';
import FeelsPolarChart from './ChartComponents/FeelsPolarChart';
import FeelsPieChart from './ChartComponents/FeelsPieChart';
//import Banner1 from '../assets/img/pic1.jpg';
import Banner2 from '../assets/img/pic2.jpg';


const MainContent = ({loading, data, keywords}) => {
    const { imageContainerStyle, textContainerStyle,
            textStyle, textContainerStyle2, textStyle2, quoteContainerStyle, 
            quoteContainerContent, loadingStyle, feelChartsStyle } = contentStyles
    const scrollRef = useRef(null)

    useEffect(() =>{
        console.log('effect executed: ', loading)
        if(loading){
            scrollRef.current.scrollIntoView({ behavior: "smooth" })
        }
    })

    return (
        <Content>
            <div ref={scrollRef}/>
            {/* !loading &&
                <Fragment>
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
                <Col sm={24} style={quoteContainerStyle}>
                    <div style={quoteContainerContent}>
                        <blockquote cite="https://www.sethgodin.com/">
                            <p>“Las conversaciones entre los miembros de tu nicho ocurren, te guste o no. El buen marketing alienta el tipo de conversación correcta.”</p>
                            <br/>
                            <footer style={{fontSize: '2.1vmax'}}>—Seth Godin</footer>
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
            </Fragment>
            */}
            {
                loading &&
                <Row>
                    <Col sm={24} style={loadingStyle}>
                        <Loader size="lg" vertical content="Cargando..." />
                    </Col>
                </Row>

            }

            {   !loading &&
                Object.keys(data).length !== 0 &&
                <Fragment>
                <Row>
                    <Col sm={24} style={{margin: '1%'}}>
                        <h3> Palabra clave: <i> {keywords} </i></h3>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} sm={24}>
                        {<WordCloud data={data.words_freq}/>}
                    </Col>
                    <Col md={12} sm={24} style={textContainerStyle}>
                        <div style={textStyle}>
                            <p> 
                                Twitter nos brinda gran cantidad información sobre el entorno social en que vivimos. 
                                Aquí, las palabras más usadas en forma de <strong style={{color: '#1da1f2'}}>WordCloud</strong> referentes a su búsqueda.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row >
                    <Col md={12} sm={24} style={textContainerStyle}>
                        <div style={textStyle}>
                            <p> 
                                Twitter nos brinda gran cantidad información sobre el entorno social en que vivimos. 
                                Aquí, las palabras más usadas en forma de <strong style={{color: '#1da1f2'}}>WordCloud</strong> referentes a su búsqueda.
                            </p>
                        </div>
                        
                    </Col>
                    <Col md={12} sm={24} style={{ paddingBottom:'3%'}}>
                        {<WordBarChart data={data.words_freq}/>}
                    </Col>
                </Row>
                <Row>
                    <Col md={8} sm={24} style={feelChartsStyle}>
                        <FeelsPolarChart data={data.perception}/>
                    </Col>
                    <Col md={8} sm={24} style={feelChartsStyle}>
                        <FeelsPieChart data={data.perception}/>
                    </Col>
                    <Col md={8} sm={24} style={feelChartsStyle}>
                    
                    </Col>
                    
                </Row>
                <Row>
                    <Col sm={24} style={quoteContainerStyle}>
                        <div style={quoteContainerContent}>
                            <blockquote cite="https://www.sethgodin.com/">
                                <p>“Las conversaciones entre los miembros de tu nicho ocurren, te guste o no. El buen marketing alienta el tipo de conversación correcta.”</p>
                                <br/>
                                <footer style={{fontSize: '2.1vmax'}}>—Seth Godin</footer>
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
            </Fragment>
            }
        </Content>
    );
};

const contentStyles = {
    imageContainerStyle:{
        textAlign: 'left',
        //border: '1px solid grey',

    },
    textContainerStyle:{
        paddingTop: '6%',
        paddingBottom:'6%',
        //border: '1px solid #1da1f2',
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
    },
    loadingStyle:{
        width: '100vw',
        height: '75vh',
        padding: '3%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'

    },
    feelChartsStyle:{
        border: '1px solid black'
    }


}

export default MainContent;