import React from 'react';
import { Footer, Row, Col, Icon } from 'rsuite';
import AvatarPicture from '../assets/avatar/bitmoji.jpeg';

const MainFooter = () => {
    const { footerContainerStyle, avatarContainerStyle, avatarStyle } = footerStyles
    return (
        <Footer style={footerContainerStyle} >
                <Row>
                    <Col md={12} sm={24} style={avatarContainerStyle}>
                        <Row>
                            <Col md={12} sm={12} style={{/*border: '1px solid white'*/}}>
                                <img src={AvatarPicture} alt="Brian Nieto" width="50%" height="auto" style={avatarStyle}/>    
                            </Col>
                            <Col md={12} sm={12} style={{/*border: '1px solid white'*/}}>
                                <h4> Brian Nieto </h4> 
                                <h6> <Icon icon='linkedin-square' size='lg' /> <a href="https://www.linkedin.com/in/brian-nieto-59b431184" style={{textDecoration: 'none', color: '#FFFFFF'}}> Brian Nieto </a></h6>   
                                <h6> <Icon icon='envelope' size='lg' /> brian02oriel@protonmail.com </h6>

                            </Col>
                        
                        </Row>
                        
                    </Col>
                </Row>
        </Footer>
        
        
    );
};

const footerStyles = {
    footerContainerStyle:{
        //width:'100vw',
        color:'#FFFFFF',
        background: '#002E63'
    }, 
    avatarContainerStyle:{
        //border: '1px solid white',
        padding: '3%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatarStyle:{
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: '50%',
    },

}

export default MainFooter;