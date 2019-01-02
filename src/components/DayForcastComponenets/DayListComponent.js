import React from 'react';
import {DayComponent} from "./DayComponent";

export const DayListComponent = () => {
    return (<div className="day-list">
        <DayComponent day={'Wed'} icon={'dd'} temperature={'31'}/>
    </div>)
}