import React from 'react';
import {Select} from 'semantic-ui-react';
import {CITY_DATA} from '../../Const/CONSTANTS';

export const CityList = ({changeHandler}) => {
    return (<Select onChange={changeHandler} placeholder='Select City'
                    options={CITY_DATA.map(city => {
                        return {text: city.name, value: city.id}
                    })}/>);
};


