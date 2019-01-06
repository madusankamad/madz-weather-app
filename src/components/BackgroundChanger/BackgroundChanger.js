import React from "react";
import {connect} from "react-redux";
import {WEATHER_TYPES} from "../../Const/CONSTANTS";
import _ from "lodash";
import styled from "styled-components";
import {fadeIn} from "../../styles/Animations";

const BackgroundChanger = ({weatherType}) => {
    const image = _.find(WEATHER_TYPES.list, ['value', weatherType]);
    const url = '/images/' + image.image;

    return (<BackgroundDiv key={url} bgImage={url}/>)
};


const mapStateToProps = (state) => {
    return {
        weatherType: state.filters.selectedWeatherType
    }
};


export default connect(mapStateToProps)(BackgroundChanger);

const BackgroundDiv = styled.div`
  animation: ${fadeIn} 1.5s ease;
  position: fixed;
  width: 100vw;
  height:100vh;
  display: block;
  z-index: 0;
  top: 0;
  left: 0;
  opacity: 1;   
  background-color: ${props => props.bgColor || '#F1F1F2'};
  background-image: URL(${props => props.bgImage});
  background-repeat: no-repeat;
  background-size: cover;  
`;
