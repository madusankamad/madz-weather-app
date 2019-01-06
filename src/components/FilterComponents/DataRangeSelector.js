import React from "react";
import {connect} from "react-redux";
import {Radio} from "semantic-ui-react";
import {changeForcastDataRange} from "../../_actions/filterActions";
import {FORCAST_DATA_RANGE} from "../../Const/CONSTANTS";

const DataRangeSelector = (props) => {
    const {dataRange} = props;
    const isChecked = FORCAST_DATA_RANGE.allDays.value === dataRange;


    return (<Radio toggle checked={isChecked} onChange={props.updateDataRange}
                   label={FORCAST_DATA_RANGE[dataRange].lable}/>)
};


const mapStateToProps = (state) => {
    return {
        dataRange: state.filters.forcastDataRange
    }
};

const mapDispatchToProps = dispatch => {
    return {
        updateDataRange: (evt, data) => {
            const value = FORCAST_DATA_RANGE[data.checked ? 'allDays' : 'oneDay'].value;
            dispatch(changeForcastDataRange(value))
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(DataRangeSelector);