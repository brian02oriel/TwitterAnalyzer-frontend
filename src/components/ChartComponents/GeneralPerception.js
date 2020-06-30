import React from 'react';
import { Icon, Row, Col,  } from 'rsuite';


const GeneralPerception = ({data}) => {
    const { iconStyle } = contentStyles
    const perceptions = [{icon:  <Icon icon='smile-o'  size='5x' style={iconStyle}/>, text: 'positiva'},
    {icon:  <Icon icon='meh-o' size='5x' style={iconStyle}/>, text: 'neutral'},
    {icon:  <Icon icon='frown-o' size='5x' style={iconStyle}/>, text: 'negativa'}]

    let currentPreception = {}
    if(data > 0){
        currentPreception = perceptions[0]
    } else if(data < 0){
        currentPreception = perceptions[2]
    } else {
        currentPreception = perceptions[1]
    }

    return (
        <div style={{ width: '100%', height: 400 }}>
            <Row>
                <Col md="24">
                    {currentPreception.icon}
                </Col>
            </Row>
                
            <Row>
                <Col md="24">
                <h4>{currentPreception.text}</h4>
                </Col>
            </Row>
                
            
        </div>
    );
};

const contentStyles = {
    iconStyle:{
        color: '#1da1f2'
    }
}
export default GeneralPerception;