import React from "react";
import styled from "styled-components";
import {Dimmer, Loader} from "semantic-ui-react";
import {loaderFade} from "../../styles/Animations";

export const AppLoader = ({showLoading}) => {
    const Animation = loaderFade;

    return (<DataLoader hide={showLoading} animation={Animation}>
        {<Dimmer active inverted><Loader inverted size='large'>Loading</Loader></Dimmer>}
    </DataLoader>)
};

const DataLoader = styled.div`
  animation:${props => props.animation || ''};
  animation-duration: 2s;
  animation-fill-mode: forwards;
  width: 100%;
  height: 100%;
  background: #ccc;
  position: absolute;
  top:0;
  left:0;
  z-index:3;
  opacity: .2;  
`;


// animation:${props => props.hide?`${loaderFade} 1.5s ease`:''};
