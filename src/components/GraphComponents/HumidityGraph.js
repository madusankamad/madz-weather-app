import React, {useState} from "react";
import {Container, Grid} from "semantic-ui-react";

import {Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis} from "recharts";

const unitAxis = {
    C: 'tempC',
    F: 'tempF'
};

export const HumidityGraph = (props) => {
    //const [dataIndex, setDataIndex] = useState(0);
    const {tempUnit, dotClick, graphData, dataRangeSelector} = props;

    const graphColor = 'green';
    const strokeColor = '#FFE991';
    const xDataKey = 'hour';
    const YareaDataKey = 'humidity';
    const chartType = 'monotoneX';
    const data = graphData[dataRangeSelector];


    return (<Container style={{width: '100%', padding: '0px 30px'}} className="humidity-graph-component">
        <Grid>
            <Grid.Row>
                <Grid.Column floated="right" width={3}>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <BarChart width={600} height={200} data={data}>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey={xDataKey}/>
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey={YareaDataKey} fill="#8884d8"/>
                    </BarChart>

                    {/*{{onClick: (data) => dotClick(data.payload.date)}}*/}

                </Grid.Column>
            </Grid.Row></Grid>
    </Container>)
};

HumidityGraph.defaultProps = {
    dotClick: (evt, data) => null,
    tempUnit: 'C',
    data: []
};