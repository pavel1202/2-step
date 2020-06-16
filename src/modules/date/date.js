import {Calendar} from '../calendar/calendar.js';
    



let dates = document.getElementsByClassName('date');
for(let i=0;i<dates.length;i++){
    console.log(dates[i])
    date(dates[i]);
}



function date(dateDOM){
    console.log(dateDOM)
    let calendar = new Calendar(dateDOM.getElementsByClassName('calendar')[0]);
    calendar.visibility('hidden');
    calendar.apply(function(dates){
        console.log('date apply') 
        let date1;
        let date2;
        if(dates.length == 1){
            date1 = date2 = new Date(dates[0]*(1000 * 3600 * 24));
        }else{
            if(dates[0]<dates[1]){
                date1 = new Date(dates[0]*(1000 * 3600 * 24));
                date2 = new Date(dates[1]*(1000 * 3600 * 24));
            }else{
                date1 = new Date(dates[1]*(1000 * 3600 * 24));
                date2 = new Date(dates[0]*(1000 * 3600 * 24));
            }
        }
        
       
        console.log(dateDOM)
        console.log(calendar.visibil);
        if(calendar.visibil == 'visible')
            dateDOM.getElementsByClassName('date__input-datepicker')[0].innerHTML = `${date1.getDate()} - ${calendar.monthName[date1.getMonth()]}`;
            dateDOM.getElementsByClassName('date__input-datepicker')[1].innerHTML = `${date2.getDate()} - ${calendar.monthName[date2.getMonth()]}`;
    });

    

    document.addEventListener("click", function (event) {
  
        console.log(event.path)
        console.log(event.path.indexOf(dateDOM)>-1);

        if(event.path.indexOf(dateDOM)>-1&&calendar.visibil == 'hidden'){
            calendar.visibility('visible');
        }else{
            if(event.path.indexOf(calendar.calendar)==-1){
                  calendar.visibility('hidden');      
            }
        }

        
    });
}
