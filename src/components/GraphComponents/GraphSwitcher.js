import React from "react";
import {connect} from "react-redux";
import {TemperatureGraph} from "./TemperatureGraph";
import {HumidityGraph} from "./HumidityGraph";
import {WindGraph} from "./WindGraph";
import {GRAPH_TYPES} from "../../Const/CONSTANTS";


const GraphSwitcher = (props) => {
    const {graphData, options, dataRangeSelector, selectedGraphType} = props;
    const showTemp = selectedGraphType === GRAPH_TYPES.TEMP.selector;
    const showHum = selectedGraphType === GRAPH_TYPES.HUMI.selector;
    const showWind = selectedGraphType === GRAPH_TYPES.WIND.selector;

    return (<React.Fragment>
        {showTemp &&
        <TemperatureGraph tempUnit={options.tempUnit} graphData={graphData.temperatureGraph}
                          dataRangeSelector={dataRangeSelector}
                          dotClick={options.changeDate}/>
        }
        {showHum &&
        <HumidityGraph tempUnit={options.tempUnit} graphData={graphData.humidityGraph}
                       dataRangeSelector={dataRangeSelector}
                       dotClick={options.changeDate}/>
        }
        {showWind &&
        <WindGraph tempUnit={options.tempUnit} graphData={graphData.windGraph} dataRangeSelector={dataRangeSelector}
                   dotClick={options.changeDate}/>
        }</React.Fragment>)
};


const mapStateToProps = (state) => {
    return {
        graphData: state.graphs,
        dataRangeSelector: state.filters.forcastDataRange,
        selectedGraphType: state.filters.selectedGraphType
    }
};

const mapDispatchToProps = dispatch => {
    return {}
};


export default connect(mapStateToProps, mapDispatchToProps)(GraphSwitcher);