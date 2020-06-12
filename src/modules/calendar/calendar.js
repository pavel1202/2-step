

class Calendar{
    constructor(calendar){
        this.calendar = calendar;
        this.date = new Date();
        this.datePain = new Date(this.date.getFullYear(),this.date.getMonth(),1);
        this.selected = [Math.floor(this.date.getTime()/(1000 * 3600 * 24)),Math.floor(this.date.getTime()/(1000 * 3600 * 24))];


        this.calendarDaysDOM = calendar.getElementsByClassName('calendar__days')[0];

        this.pain();

        console.log('now : '+this.date.getTime()/(1000 * 3600 * 24));


        //------------------------------events-------------------------------
        calendar.getElementsByClassName('calendar__arrow-right')[0].onclick =()=>this.next();
        calendar.getElementsByClassName('calendar__arrow-left')[0].onclick = ()=>this.previous();
        calendar.getElementsByClassName('calendar__days')[0].onclick =(event)=>{
            console.log(event)
            this.selected.shift(event);
            this.selected.push(event.target.attributes.name.nodeValue)
            console.log(event.target.attributes.name.nodeValue); 
            console.log(this.selected);
            this.pain();
            // .target.getAttribute['name']
        }
    }
    pain(){
        let countDay = 32 - new Date(this.datePain.getFullYear(), this.datePain.getMonth(), 32).getDate();
        let countDayLastMonth =32 - new Date(this.datePain.getFullYear(), this.datePain.getMonth()-1, 32).getDate();
        let firstDayThisMonth = new Date(this.datePain.getFullYear(), this.datePain.getMonth(), 1).getDay();
        if(firstDayThisMonth==0)firstDayThisMonth++;
        


        //---------------------add month-------------------------------------
        this.calendar.getElementsByClassName('calendar__month')[0].innerHTML = this.datePain.getMonth()+1;
        
        
        
        //-----------------------clean---------------------------------------
            this.calendarDaysDOM.innerHTML = '';



        //------------------paint last month---------------------------------
        console.log(firstDayThisMonth)
        for(let i = firstDayThisMonth-1;i>0;i--){
            this.calendarDaysDOM.innerHTML += '<div class="calendar__day" name ="'+(Math.floor(this.datePain.getTime()/(1000 * 3600 * 24))-i+1)+'">'+(countDayLastMonth+1-i)+'</div>';
        }



        //--------------------paint this month-------------------------------
        for(let i = countDay;i>0;i--){
            console.log((Math.floor(this.datePain.getTime()/(1000 * 3600 * 24))-i+countDay+1)==Math.floor(this.date.getTime()/(1000 * 3600 * 24)))
            console.log(Math.floor(this.date.getTime()/(1000 * 3600 * 24)))
            
            this.calendarDaysDOM.innerHTML += '<div class="calendar__day '+addClass.call(this,(Math.floor(this.datePain.getTime()/(1000 * 3600 * 24))-i+countDay+1))+'" name ="'+(Math.floor(this.datePain.getTime()/(1000 * 3600 * 24))-i+countDay+1)+'">'+(countDay+1-i)+'</div>';
        }

        //-------------------paint next month--------------------------------
        for(let i = 1;i<=7-(countDay+firstDayThisMonth-1)%7;i++){
            this.calendarDaysDOM.innerHTML += '<div class=calendar__day name="'+(Math.floor(this.datePain.getTime()/(1000 * 3600 * 24))+i+countDay)+'">'+i+'</div>';
        }



        function addClass(thisDate){
            console.log('thisDate: '+thisDate)
            let classes = '';

            if(thisDate == Math.floor(this.date.getTime()/(1000 * 3600 * 24)))
                classes +='calendar__day--now ';
            if(thisDate==this.selected[0]||thisDate==this.selected[1])
                classes += 'calendar__day--selected ';
            if((this.selected[0]>thisDate&&thisDate>this.selected[1])||(this.selected[0]<thisDate)&&(thisDate<this.selected[1]))
                classes += 'calendar__day--active ';
            return classes;
        }
    }
    next(){
        
        if(this.datePain.getMonth()==11)
            this.datePain = new Date(this.datePain.getFullYear()+1,0,this.datePain.getDate());
        else
            this.datePain = new Date(this.datePain.getFullYear(),this.datePain.getMonth()+1,this.datePain.getDate());
        this.pain();
        console.log(this.datePain.getMonth()+' Y: '+this.datePain.getFullYear())
    }
    previous(){
        if(this.datePain.getMonth()==0)
            this.datePain = new Date(this.datePain.getFullYear()-1,11,this.datePain.getDate());
        else
            this.datePain = new Date(this.datePain.getFullYear(),this.datePain.getMonth()-1,this.datePain.getDate());
        this.pain();
    }
}

let calendar = new Calendar(document.getElementsByClassName('calendar')[0]);