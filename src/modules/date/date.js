import {Calendar} from '../calendar/calendar.js';
    


let calendar = new Calendar(document.getElementsByClassName('calendar')[0]);
let dates = document.getElementsByClassName('date');
for(let i=0;i<dates.length;i++){
    console.log(dates[i])
    date(dates[i]);
}



function date(dateDOM){
    calendar.apply(function(dates){
        
        let date1 = new Date(dates[0]);
        let date2 = new Date(dates[1]);
        console.log(date1);
        dateDOM.getElementsByClassName('date__input-datepicker')[0].innerHTML = `${date1.getDate()} ${calendar.monthName[date1.getMonth()]} - ${date2.getDate()} ${calendar.monthName[date2.getMonth()]}`;
    });

    calendar.visibility('hidden');

    document.onclick = function(event){
        console.log(event.path)
        // console.log(event.path.reduce(function(old,n){
        //     if(old!=true)
        //         return n.classList == dateDOM;
        // }));
        calendar.visibility('hidden');
        for(let i in event.path){
            if(event.path[i].classList!=undefined&&event.path[i].classList[0]=='date'){
                console.log(event.path[i].classList[0]=='date');
                 calendar.visibility('visible');
            }
            
        }
        if(event.path.indexOf(calendar.calendar)>-1){
            calendar.visibility('visible');
        }
    }
}
