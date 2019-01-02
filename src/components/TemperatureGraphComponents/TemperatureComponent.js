import React from 'react';
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,ResponsiveContainer} from 'recharts';
const graphData  ={data: [
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
    {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
    {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
    {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
    {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},

],
    activeIndex: 0,
};

export const TemperatureComponent = () => {
    return (<div className="temprature-component">

        <AreaChart activeDot={true} width={800} height={200} data={graphData.data} margin={{top: 10, right: 30, left: 0, bottom: 0}}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name"/>
            <YAxis/>
            <Area type='natural' dataKey='uv' stroke='#8884d8' fill='red' dot={{onClick: ()=>alert('dddd')}} />
        </AreaChart>
        </div>)
};