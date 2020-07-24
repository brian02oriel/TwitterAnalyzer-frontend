import React, { Fragment, useContext, useRef, useEffect } from 'react';
import { stateContext } from '../reducer/reducer'
import { Content, Row, Col, Loader, Icon, Divider, IconButton } from 'rsuite';
import WordCloud from './ChartComponents/WordCloudComponent';
import WordBarChart from './ChartComponents/WordBarChart';
import FeelsPolarChart from './ChartComponents/FeelsPolarChart';
import FeelsPieChart from './ChartComponents/FeelsPieChart';
import GeneralPerception from './ChartComponents/GeneralPerception';
import PhrasesLoader from './Complements/PhrasesLoader'
//import Banner1 from '../assets/img/pic1.jpg';
import Banner2 from '../assets/img/pic2.jpg';


const MainContent = ({topScrollRef}) => {
    const { imageContainerStyle, textContainerStyle,
            textStyle, textContainerStyle2, textStyle2, specialTextContainer, 
            specialTextContent, loadingStyle} = contentStyles
    const scrollRef = useRef(null)
    
    const state = useContext(stateContext)

    const { loading, keywords, data } = state

    useEffect(() =>{
        if(loading){
            scrollRef.current.scrollIntoView({ behavior: "smooth" })
        }
        
    })

    const onFloatingClick = () =>{
        if(topScrollRef.current != null){
            topScrollRef.current.scrollIntoView({ behavior: "smooth" })
            
        }      
    }

    //console.log('state: ', state)
    //console.log('inner height: ', window.innerHeight)
    return (
        <Content  style={{border: '1px solid black'}} >
            <div ref={scrollRef}/>
            <IconButton 
                        style={{position: 'fixed', 
                        bottom:40,
                        right:40,
                        zIndex: 1,
                        backgroundColor: '#4390c7',
                        color: '#e1e8ed',
                    }}
            icon={<Icon icon='angle-up' size='5x' style={{margin:'1%'}}/>} circle size='lg' onClick={onFloatingClick} />
            
            {
                loading &&
                <Row style={{marginTop: '9%'}}>
                    <Col sm={24} style={loadingStyle}>
                        <Loader size="lg" vertical content="Buscando tweets..." />
                        <br/>
                        <PhrasesLoader />
                    </Col>
                </Row>

            }

            {   !loading &&
                Object.keys(data).length !== 0 &&
                <Fragment>
                <div style={{ padding: '2%', marginTop: '9%'}}>
                <Row>
                    <Col sm={24} style={{margin: '1%'}}>
                        <h3> Palabra clave: <i> {keywords} </i></h3>
                    </Col>
                </Row>
                <Divider> <strong style={{color: '#1da1f2'}}>Palabras más usadas</strong>  </Divider>
                <Row>
                    <Col md={12} sm={24}>
                        <WordCloud data={data.words_freq}/>
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
                    <Col md={12} sm={24} style={{ paddingBottom:'3%'}}>
                        <WordBarChart data={data.words_freq}/>
                    </Col>
                    <Col md={12} sm={24} style={textContainerStyle}>
                        <div style={textStyle}>
                            <p> 
                                También podemos visualizarlo de otra manera. ¿Qué tal este <strong style={{color: '#1da1f2'}}> Bar Chart </strong> de las palabras más utilizadas
                                en los tweets relacionados a su búsqueda?
                            </p>
                        </div>
                    </Col>
                </Row>
                
                
                <Divider> <strong style={{color: '#1da1f2'}}> Percepción emocional </strong> </Divider>
                <Row style={{height: '100%', width: '100%', marginBottom: '3%'}}>
                    <Col md={12} sm={24} style={{ textAlign: 'center', padding: '3%', marginBottom: '3%'}}>
                        <FeelsPolarChart data={data.perception}/>
                    </Col>
                    <Col md={12} sm={24} style={{ textAlign: 'center', padding: '3%', marginBottom: '3%'}}>
                        <FeelsPieChart data={data.perception}/>
                    </Col>
                </Row>
                <Row style={{height: '100%', width: '100%', marginTop: '3%', marginBottom: '3%'}}>
                    <Col md={12} mdOffset={6} sm={24} style={{ textAlign: 'center'}}>   
                        <GeneralPerception data={data.perception}/>
                    </Col>
                </Row>

                <Row style={{textAlign: 'center', marginTop: '5%', marginBottom: '5%'}}>
                    <Col md={24}>
                        <p> Estas gráficas representan las <strong style={{color: '#1da1f2'}}> emociones </strong> percibidas en cada tweet 
                            con la intención de entender qué representa la palabra clave introducida
                            para los usuarios de la plataforma. Sin embargo, por la naturaleza de Twitter, 
                            existirán en su mayoría comentarios negativos más que positivos.
                        </p>
                    </Col>
                </Row>
                <Divider> <strong style={{color: '#1da1f2'}}> Tweet aleatorio </strong> </Divider>
                <Row>
                    <Col sm={24} style={specialTextContainer}>
                        <div style={specialTextContent}>
                                <div>
                                    <Icon size='5x' icon='user-circle' />   
                                </div>
                                <div style={{padding: '3%'}}>
                                    <h4> @{data.random_tweet.user} </h4>
                                    <p>{data.random_tweet.tweet}</p>
                                </div>
                            
                        </div>
                    </Col>
                </Row>
                </div>
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
        textAlign: 'left'
    },
    textContainerStyle:{
        paddingTop: '6%',
        paddingBottom:'6%',
        fontSize: '1em',
        textAlign: 'left',
    },
    textStyle:{
        padding:'3%',
    },
    textContainerStyle2:{
        paddingTop: '8.85%',
        paddingBottom:'9%',
        fontSize: '1em',
        textAlign: 'left',
    },
    textStyle2:{
        padding:'3%',
    },
    specialTextContainer:{
        padding: '3%',
        backgroundColor: '#E1E8ED'
    },
    specialTextContent:{
        padding: '3%',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loadingStyle:{
        width: '100vw',
        height: '75vh',
        padding: '3%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'

    }

}

export default MainContent;