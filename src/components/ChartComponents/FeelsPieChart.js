import React, { useState } from 'react';
import {
    PieChart, Pie, Sector, Cell, ResponsiveContainer
  } from 'recharts';

  const renderActiveShape = (props) => {
    //const RADIAN = Math.PI / 180;
    //const midAngle
    const {
      cx, cy, innerRadius, outerRadius, startAngle, endAngle,
      fill, payload//, percent, value,
    } = props;
    //const sin = Math.sin(-RADIAN * midAngle);
    //const cos = Math.cos(-RADIAN * midAngle);
    //const sx = cx + (outerRadius + 10) * cos;
    //const sy = cy + (outerRadius + 10) * sin;
    //const mx = cx + (outerRadius + 30) * cos;
    //const my = cy + (outerRadius + 30) * sin;
    //const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    //const ey = my;
    //const textAnchor = cos >= 0 ? 'start' : 'end';
    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.perception}</text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
       <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
         {/*<path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
          {`(Rate ${(percent * 100).toFixed(2)}%)`}
        </text>*/}
      </g>
    );
  };
  

const FeelsPieChart = ({data}) => {
    const [state, setState] = useState({activeIndex: 0})

    const onPieEnter = (data, index) => {
        setState({
          activeIndex: index,
        });
      };

    const COLORS = ['#002e63', '#1da1f2', '#aab8c2'];
    let dataset = [{'perception': 'positiva', 'count': data.positive + data.very_positive}, {'perception': 'negativa', 'count': data.negative + data.very_negative}, {'perception': 'neutral', 'count': data.neutral}]
    const winHeight = window.screen.height
    const winWidth = window.screen.width
    //console.log({winWidth, winHeight})
    return (
        <div style={{ width: '100%', height: 400, textAlign: 'center',  display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center', padding: '10px'}}>
            <ResponsiveContainer width={600} height="80%">
                <PieChart margin={{top: 10, right: 10, bottom: 10, left: 10 }}>
                <Pie isAnimationActive={true} 
                activeIndex={state.activeIndex}
                activeShape={renderActiveShape}
                onMouseEnter={onPieEnter}
                paddingAngle={5}
                data={dataset}
                dataKey='count'
                nameKey='perception'
                cx="50%" 
                cy="50%" 
                outerRadius={80}  
                innerRadius={60}
                fill="#1da1f2" label> 
                    {
                      dataset.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                    }
                </Pie>
                </PieChart>
            </ResponsiveContainer>
            <h4> Porcentaje de emociones percibidas </h4>
        </div>
    );
};

export default FeelsPieChart;