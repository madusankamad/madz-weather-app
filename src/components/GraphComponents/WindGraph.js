import React,{useState} from 'react';
import {Container,Grid} from 'semantic-ui-react';

import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, LabelList,ComposedChart,Legend,Bar,Line} from 'recharts';
import { Radio } from 'semantic-ui-react';
import DataRangeSelector from '../FilterComponents/DataRangeSelector';

const unitAxis = {
    C: 'tempC',
    F: 'tempF'
};

export const WindGraph = (props) => {
    //const [dataIndex, setDataIndex] = useState(0);
    const {tempUnit,dotClick,graphData,dataRangeSelector} = props;

    const graphColor= 'blue';
    const strokeColor= '#FFE991';
    const xDataKey ='hour';
    const yAreaDataKey = 'wind';
    const chartType = 'monotoneX';
    const data = graphData[dataRangeSelector];


    return (<Container style={{width:'100%'}} className="wind-graph-component">
            <Grid>
            <Grid.Row>
                <Grid.Column floated="right" width={3}>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <ComposedChart width={600} height={200} data={data}>
                        <XAxis dataKey={xDataKey} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <CartesianGrid stroke="#f5f5f5" />
                        <Area type="monotone" dataKey={yAreaDataKey} fill="#8884d8" stroke="#8884d8" activeDot={{onClick: (data) => dotClick(data.payload.date)}} />
                        <Bar dataKey={yAreaDataKey} barSize={20} fill="#413ea0" />
                        <Line type="monotone" dataKey={yAreaDataKey} stroke="#ff7300" />
                    </ComposedChart>
                </Grid.Column>
            </Grid.Row></Grid>
        </Container>)
};

WindGraph.defaultProps = {
    dotClick: (evt, data) => null,
    tempUnit: 'C',
    data: []
};