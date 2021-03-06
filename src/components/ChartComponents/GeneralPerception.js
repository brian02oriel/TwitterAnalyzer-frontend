import React from 'react';
import { Row, Col,  } from 'rsuite';
import PositivePerception from './P5Components/PositivePerception';
import NegativePerception from './P5Components/NegativePerception';
import NeutralPerception from './P5Components/NeutralPerception';

const GeneralPerception = ({data}) => {
    const perceptions = [{icon:  <PositivePerception />, text: 'positiva'},
    {icon:  <NeutralPerception />, text: 'neutral'},
    {icon:  <NegativePerception />, text: 'negativa'}]

    let currentPreception = {}
    if(data.very_negative < data.neutral && data.very_positive < data.neutral){
        currentPreception = perceptions[1]
    } else if((data.positive + data.very_positive) > (data.negative + data.very_negative)){
        currentPreception = perceptions[0]
    } else if((data.positive + data.very_positive) < (data.negative + data.very_negative)){
        currentPreception = perceptions[2]
    } else {
        currentPreception = perceptions[1]
    }

    return (
        <div style={{ width: '100%', height: 400, textAlign: 'center'}}>
            <Row>
                <Col md={24}>
                    {currentPreception.icon}
                </Col>
            </Row>
                
            <Row>
                <Col md={24}>
                <h4>{currentPreception.text}</h4>
                </Col>
            </Row>
            <h4> Percepción general </h4>
        </div>
    );
};

export default GeneralPerception;