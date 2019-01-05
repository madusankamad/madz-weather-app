import React,{useState} from 'react';
import {Container,Grid} from 'semantic-ui-react';

import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, LabelList} from 'recharts';
import { Radio } from 'semantic-ui-react';
import DataRangeSelector from '../FilterComponents/DataRangeSelector';

const unitAxis = {
    C: 'tempC',
    F: 'tempF'
};

export const TemperatureGraph = (props) => {
    //const [dataIndex, setDataIndex] = useState(0);
    const {tempUnit,dotClick,graphData,dataRangeSelector} = props;

    const graphColor= '#FFF5CC';
    const strokeColor= '#FFE991';
    const xDataKey ='hour';
    const YareaDataKey = unitAxis[tempUnit];
    const chartType = 'monotoneX';
    const data = graphData[dataRangeSelector];


    return (<Container style={{width:'100%'}} className="temprature-graph-component">
            <Grid>
            <Grid.Row>
                <Grid.Column floated="right" width={3}>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <AreaChart activeDot={true}
                               width={630}
                               height={200}
                               data={data}
                               dot={true}
                               margin={{ top: 5, right: 30, left: 0, bottom: 0 }}
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
                </Grid.Column>
            </Grid.Row></Grid>
        </Container>)
};

TemperatureGraph.defaultProps = {
    dotClick: (evt, data) => null,
    tempUnit: 'C',
    data: []
};