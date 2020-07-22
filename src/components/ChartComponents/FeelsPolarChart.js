import React from 'react';
import {
    Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip, ResponsiveContainer
  } from 'recharts';

  
const WordPolarChar = ({data}) => {
    console.log(data)
    let dataset = [{'perception': 'neutral', 'count': data.neutral}, 
     {'perception': 'muy negativa', 'count': data.very_negative}, {'perception': 'negativa', 'count': data.negative}, 
     {'perception': 'positiva', 'count': data.positive}, {'perception': 'muy positiva', 'count': data.very_positive}]

    return (
        <div style={{ width: '90%', height: 450, textAlign: 'center'}}>
            <ResponsiveContainer  width={450} height="90%">
                <RadarChart data={dataset} margin={{top: 5, right: 5, bottom: 5, left: 5 }}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="perception" />
                    <PolarRadiusAxis />
                    <Tooltip />
                    <Radar name="Percepciones emocionales en tweets" dataKey="count" stroke="#1da1f2" fill="#1da1f2" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
            <h4> Cantidad de emociones percibidas </h4>
        </div>
    );
};

export default WordPolarChar;