import React from 'react';
import {Select} from 'semantic-ui-react';

export const CityList = (cityList, changeHandler)=>{
    return(<Select onChange={changeHandler} placeholder='Select Citye'
                   options={[{text: 'city', value: 'id'},{text: 'city1', value: 'id'},{text: 'city2', value: 'id'}]}/>);
};