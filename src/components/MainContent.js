import React, { Fragment,  useRef, useEffect } from 'react';
import { Content, Row, Col, Loader, Icon, Divider, IconButton } from 'rsuite';
import WordCloud from './ChartComponents/WordCloudComponent';
import WordBarChart from './ChartComponents/WordBarChart';
import FeelsPolarChart from './ChartComponents/FeelsPolarChart';
import FeelsPieChart from './ChartComponents/FeelsPieChart';
import GeneralPerception from './ChartComponents/GeneralPerception';
//import Banner1 from '../assets/img/pic1.jpg';
import Banner2 from '../assets/img/pic2.jpg';


const MainContent = ({loading, data, keywords, topScrollRef}) => {
    const { imageContainerStyle, textContainerStyle,
            textStyle, textContainerStyle2, textStyle2, specialTextContainer, 
            specialTextContent, loadingStyle} = contentStyles
    const scrollRef = useRef(null)
    //const [ state, setState ] = useState({ floatingVisible: 'hidden' })
    useEffect(() =>{
        console.log('effect executed: ', loading)
        if(loading){
            scrollRef.current.scrollIntoView({ behavior: "smooth" })
        }

   

    })

    const onFloatingClick = () =>{
        console.log(topScrollRef)
        if(topScrollRef.current != null){
            topScrollRef.current.scrollIntoView({ behavior: "smooth" })
        }
            
    }
        
    

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
                <Col sm={24} style={specialTextContainer}>
                    <div style={specialTextContent}>
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
                    
                      <IconButton 
                        style={{position: 'fixed', boxShadow: '2px 2px 3px #1da1f2', 
                        bottom:40,
                        right:40,
                        zIndex: 1,
                        backgroundColor: '#1da1f2',
                        color: '#e1e8ed'
                        //visibility: floatingVisible
                    }}
                      icon={<Icon icon='angle-up' size='5x' style={{margin:'1%'}}/>} circle size='lg' onClick={onFloatingClick} />
                    

                
                
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
                                También podemos analizarlo desde otro punto de vista. ¿Qué tal este <strong style={{color: '#1da1f2'}}> Bar Chart </strong> de las palabras más utilizadas
                                en los tweets relacionados a su búsqueda?
                            </p>
                        </div>
                    </Col>
                </Row>
                
                
                <Divider> <strong style={{color: '#1da1f2'}}> Percepción emocional </strong> </Divider>
                <Row style={{height: '100%', width: '100%'}}>
                    <Col md={8} sm={24} style={{ textAlign: 'center'}}>
                        <FeelsPolarChart data={data.perception}/>
                        <h4> Cantidad de emociones percibidas </h4>
                    </Col>
                    <Col md={8} sm={24} style={{ textAlign: 'center'}}>
                        <FeelsPieChart data={data.perception}/>
                        <h4> Porcentaje de emociones percibidas </h4>
                    </Col>
                    <Col md={8} sm={24} style={{ textAlign: 'center'}}>
                        <GeneralPerception data={data.perception.general_perception}/>
                        <h4> Percepción general </h4>
                    </Col>
                    
                </Row>
                <Row style={{textAlign: 'center', marginTop: '2%'}}>
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
                                    <h4> {data.random_tweet.user} </h4>
                                    <p>{data.random_tweet.tweet}</p>
                                </div>
                            
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