import React from 'react';
import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';
import { Header } from '../components';

const Calendar = ( {title , data}) => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Calender" title={title} />
      <ScheduleComponent
      height="550px"
      eventSettings={{ dataSource: data }}>
        <ViewsDirective>
          { ['Day', 'Week', 'Month', 'Agenda'].map((item) => 
            <ViewDirective key={item} option={item} />)}
        </ViewsDirective>
        <Inject services={[Day, Week, Month, Agenda, Resize, DragAndDrop]} />
      </ScheduleComponent> 
  </div>
);
};

export default Calendar;