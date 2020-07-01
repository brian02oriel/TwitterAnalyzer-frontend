import React from 'react';
import {
    Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip, ResponsiveContainer
  } from 'recharts';

  
const WordPolarChar = ({data}) => {
    let dataset = [{'perception': 'positiva', 'count': data.positive}, {'perception': 'negativa', 'count': data.negative}, {'perception': 'neutral', 'count': data.neutral}]

    return (
        <div style={{ width: '100%', height: 400}}>
            <ResponsiveContainer>
                <RadarChart data={dataset} margin={{top: 5, right: 5, bottom: 5, left: 5 }}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="perception" />
                    <PolarRadiusAxis />
                    <Tooltip />
                    <Radar name="Percepciones emocionales en tweets" dataKey="count" stroke="#1da1f2" fill="#1da1f2" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default WordPolarChar;