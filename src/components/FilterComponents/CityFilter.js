import React from 'react';
import {Select} from 'semantic-ui-react';
import {cityData} from '../../Const/CONSTANTS';

export const CityList = ({changeHandler}) => {
    return (<Select onChange={changeHandler} placeholder='Select City'
                    options={cityData.map(city => {
                        return {text: city.name, value: city.id}
                    })}/>);
};


