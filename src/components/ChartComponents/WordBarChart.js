import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  } from 'recharts';

const WordBarChar = ({data}) => {
    const TopTen = (data) =>{
        let topten = []
        for(let i = 0; i <= 9; i++){
            topten[i] = data[i]
        }
        return topten
    }
    return (
        <div style={{ width: '100%', height: 400 }}>
            <ResponsiveContainer>
            <BarChart
                width={500}
                height={400}
                data={TopTen(data)}
                margin={{
                top: 5, right: 30, left: 20, bottom: 20,
                }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="text" label={{ value: 'Palabras', angle: 0, position: 'bottom' }}/>
            <YAxis dataKey="value" label={{ value: 'Cantidad', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Bar dataKey="value" fill="#1da1f2" />
        </BarChart>
        </ResponsiveContainer>
        </div>
    );
};

export default WordBarChar;