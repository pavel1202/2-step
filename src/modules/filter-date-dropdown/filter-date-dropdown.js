import {Calendar} from '../calendar/calendar.js';

let filterDateDropdownDOM = document.getElementsByClassName('filter-date-dropdown')[0];
let calendar = new Calendar(filterDateDropdownDOM.getElementsByClassName('calendar')[0]);
let calendarVis = false;
calendar.visibility('hidden');
filterDateDropdownDOM.onclick = function(event){
    console.log(event);
    if(calendarVis){
        calendar.visibility('hidden');
        calendarVis = false;
    }else{
       calendar.visibility('visible'); 
       calendarVis = true;
    }
    
}
calendar.apply(function(dates){
    let date1;
    let date2;
    if(dates[0]<dates[1]){
        date1 = new Date(dates[0]*(1000 * 3600 * 24));
        date2 = new Date(dates[1]*(1000 * 3600 * 24));
    }else{
        date1 = new Date(dates[1]*(1000 * 3600 * 24));
        date2 = new Date(dates[0]*(1000 * 3600 * 24));
    }

    filterDateDropdownDOM.getElementsByClassName('filter-date-dropdown__text')[0].innerHTML =`${date1.getDate()} ${calendar.monthName[date1.getMonth()]} - ${date2.getDate()} ${calendar.monthName[date2.getMonth()]}`;
    
    // console.log(filterDateDropdownDOM.getElementsByClassName('filter-date-dropdown__text')[0]);
})