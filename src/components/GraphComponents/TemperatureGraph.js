import React,{useState} from 'react';

import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, LabelList} from 'recharts';
import { Radio } from 'semantic-ui-react'

const unitAxis = {
    C: 'tempC',
    F: 'tempF'
};

export const TemperatureGraph = (props) => {
    const [dataIndex, setDataIndex] = useState(0);
    const {tempUnit,dotClick,graphData} = props;

    const dataSet = [graphData.temperatureGraph,graphData.temperatureGraphFull];
    const graphColor= '#FFF5CC';
    const strokeColor= '#FFE991';
    const xDataKey ='hour';
    const YareaDataKey = unitAxis[tempUnit];
    const chartType = 'monotoneX';
    //const data = graphData.temperatureGraph;
    const data = dataSet[dataIndex];


    return (<div className="temprature-graph-component">
        <div style={{display: 'inline-block', float:'right'}}> <Radio toggle onChange={(evt)=>{setDataIndex(dataIndex===1?0:1)}} /></div>
        <AreaChart activeDot={true}
                   width={750}
                   height={200}
                   data={data}
                   dot={true}
                   margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
        >

            <XAxis dataKey={xDataKey}
                   padding={{ left: 20 }}
                   axisLine={false}
                   tickSize={3}
                   style={{fontSize:10, fontWeight:'400', fill:'#878787'}}

            />
            <Tooltip/>

            <Area
                type={chartType}
                dataKey={YareaDataKey}
                stroke={strokeColor}
                fill={graphColor}
                dot={{onClick: (data) => dotClick(data.payload.date)}}
                activeDot={{onClick: (data) => dotClick(data.payload.date)}}

            >
                <LabelList dataKey={YareaDataKey} style={{fontSize:10, fontWeight:'400', fill:'#ccc'}} position="top" />

            </Area>

        </AreaChart>

    </div>)
};

TemperatureGraph.defaultProps = {
    dotClick: (evt, data) => console.log('clicked on Dot', data),
    tempUnit: 'C',
    data: []
};