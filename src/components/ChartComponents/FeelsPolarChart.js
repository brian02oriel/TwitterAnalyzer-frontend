import React from 'react';
import {
    Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip, ResponsiveContainer
  } from 'recharts';

  
const WordPolarChar = ({data}) => {
    let dataset = [{'perception': 'neutral', 'count': data.neutral}, 
    {'perception': 'positiva', 'count': data.positive}, {'perception': 'muy positiva', 'count': data.very_positive},
    {'perception': 'muy negativa', 'count': data.very_negative}, {'perception': 'negativa', 'count': data.negative}]
    const winHeight = window.screen.height
    const winWidth = window.screen.width

    return (
        <div style={{ width: '100%', height: 400, textAlign: 'center',  display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center', padding: '10px'}}>
            <ResponsiveContainer width={(winWidth <= 400 || winHeight <= 860) ? 350: 600} height={(winWidth <= 400 || winHeight <= 860) ? '65%':'80%'}>
                <RadarChart data={dataset} margin={{top: 10, right: 10, bottom: 10, left: 10 }}>
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