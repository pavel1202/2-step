import {Calendar} from '../calendar/calendar.js';
import { caller } from 'file-loader';

for(let i = 0;i<document.getElementsByClassName('filter-date-dropdown').length;i++){
    filterDateDropdown(document.getElementsByClassName('filter-date-dropdown')[i]);
}
function filterDateDropdown(filterDateDropdownDOM){
    let calendar = new Calendar(filterDateDropdownDOM.getElementsByClassName('calendar')[0]);
    let calendarVis = false;
    calendar.visibility('hidden');
    document.onclick = function(event){
        console.log(event.path);
        console.log(filterDateDropdownDOM)
        if(calendarVis&&event.path.indexOf(calendar.calendar)<0){
            calendar.visibility('hidden');
            calendarVis = false;
        }else if(event.path.indexOf(filterDateDropdownDOM)>-1&&!calendarVis){
            calendar.visibility('visible'); 
            calendarVis = true;
        } 

        
        
    }
    calendar.apply((dates)=>{
        
        setTimeout(()=>{
            console.log('apply');
            calendar.visibility('hidden');
            calendarVis = false;

        },50)
        calendarVis = false;
        let date1;
        let date2;
        if(dates[1]!=undefined){
            if(dates[0]<dates[1]){
                date1 = new Date(dates[0]*(1000 * 3600 * 24));
                date2 = new Date(dates[1]*(1000 * 3600 * 24));
            }else{
                date1 = new Date(dates[1]*(1000 * 3600 * 24));
                date2 = new Date(dates[0]*(1000 * 3600 * 24));
            }
        }else{
            date1 = date2 = new Date(dates[0]*(1000 * 3600 * 24));
        }
        

        filterDateDropdownDOM.getElementsByClassName('filter-date-dropdown__text')[0].innerHTML =`${date1.getDate()} ${calendar.monthName[date1.getMonth()]} - ${date2.getDate()} ${calendar.monthName[date2.getMonth()]}`;
        
    })
}
