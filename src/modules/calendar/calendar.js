

export class Calendar{
    constructor(calendar){
        console.log('start calendar');
        this.calendar = calendar;
        this.date = new Date();
        this.datePaint = new Date(this.date.getFullYear(),this.date.getMonth(),1);
        this.selected = [];
        this.monthName = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь',];
        this.visibil = 'visible';

        this.calendarDaysDOM = calendar.getElementsByClassName('calendar__days')[0];

        this.paint();

        console.log('now : '+this.date.getTime()/(1000 * 3600 * 24));


        calendar.getElementsByClassName('calendar__clean')[0].style.visibility = 'hidden';
        calendar.getElementsByClassName('calendar__apply')[0].style.visibility = 'hidden';

        //------------------------------events-------------------------------
        calendar.getElementsByClassName('calendar__arrow-right')[0].onclick =()=>this.next();
        calendar.getElementsByClassName('calendar__arrow-left')[0].onclick = ()=>this.previous();
        calendar.getElementsByClassName('calendar__clean')[0].onclick = ()=>this.clean();
        calendar.getElementsByClassName('calendar__days')[0].onclick =(event)=>{
            calendar.getElementsByClassName('calendar__clean')[0].style.visibility = 'visible';
            calendar.getElementsByClassName('calendar__apply')[0].style.visibility = 'visible';
            if(this.selected.length>1)
                this.selected.pop();
            this.selected.unshift(Number(event.path[1].attributes.name.nodeValue));
            console.log(event.path[1].attributes.name.nodeValue); 
            console.log(this.selected);
            this.paint();
            // .target.getAttribute['name']
        }
    }
    paint(){
        let countDay = 32 - new Date(this.datePaint.getFullYear(), this.datePaint.getMonth(), 32).getDate();
        let countDayLastMonth =32 - new Date(this.datePaint.getFullYear(), this.datePaint.getMonth()-1, 32).getDate();
        let firstDayThisMonth = new Date(this.datePaint.getFullYear(), this.datePaint.getMonth(), 1).getDay();
        if(firstDayThisMonth==0)firstDayThisMonth++;
        


        //---------------------add month-------------------------------------
        this.calendar.getElementsByClassName('calendar__month')[0].innerHTML = this.monthName[this.datePaint.getMonth()]+' '+this.datePaint.getFullYear();
        
        
        
        //-----------------------clean---------------------------------------
            this.calendarDaysDOM.innerHTML = '';



        //------------------paint last month---------------------------------
        for(let i = firstDayThisMonth-1;i>0;i--){
            this.calendarDaysDOM.innerHTML += '<div class="calendar__day calendar__day--not-this-month '+addClass.call(this,(Math.floor(this.datePaint.getTime()/(1000 * 3600 * 24))-i+1))+' " name ="'+(Math.floor(this.datePaint.getTime()/(1000 * 3600 * 24))-i+1)+'"> <p>'+(countDayLastMonth+1-i)+'</p> </div>';
        }



        //--------------------paint this month-------------------------------
        for(let i = countDay;i>0;i--){

            
            this.calendarDaysDOM.innerHTML += '<div class="calendar__day '+addClass.call(this,(Math.floor(this.datePaint.getTime()/(1000 * 3600 * 24))-i+countDay+1))+'" name ="'+(Math.floor(this.datePaint.getTime()/(1000 * 3600 * 24))-i+countDay+1)+'"><p>'+(countDay+1-i)+'</p> </div>';
        }

        //-------------------paint next month--------------------------------
        for(let i = 1;i<=7-(countDay+firstDayThisMonth-1)%7;i++){
            this.calendarDaysDOM.innerHTML += '<div class="calendar__day  calendar__day--not-this-month '+addClass.call(this,(Math.floor(this.datePaint.getTime()/(1000 * 3600 * 24))+i+countDay))+'" name="'+(Math.floor(this.datePaint.getTime()/(1000 * 3600 * 24))+i+countDay)+'"><p>'+i+'</p></div>';
        }



        function addClass(thisDate){
            if(thisDate ==(Math.floor(this.datePaint.getTime()/(1000 * 3600 * 24))+1+countDay))console.log(500);
            console.log()
            let classes = '';
            
            if(thisDate==this.selected[0]||thisDate==this.selected[1]){
                classes += 'calendar__day--selected ';
                console.log(this.selected[0]<this.selected[1]);
                if((thisDate>this.selected[1]||thisDate>this.selected[0])){
                    classes += 'calendar__day--before-left ';
                }
                if((thisDate<this.selected[1]||thisDate<this.selected[0])){
                    classes += 'calendar__day--before-right ';
                } 
            }
                
            if((this.selected[0]>thisDate&&thisDate>this.selected[1])||(this.selected[0]<thisDate)&&(thisDate<this.selected[1])){
                classes += 'calendar__day--active ';
                
                    
            }
                
            if(thisDate == Math.floor(this.date.getTime()/(1000 * 3600 * 24)))
                classes +='calendar__day--now ';


            return classes;
        }
    }
    next(){
        
        if(this.datePaint.getMonth()==11)
            this.datePaint = new Date(this.datePaint.getFullYear()+1,0,this.datePaint.getDate());
        else
            this.datePaint = new Date(this.datePaint.getFullYear(),this.datePaint.getMonth()+1,this.datePaint.getDate());
        this.paint();
        console.log(this.datePaint.getMonth()+' Y: '+this.datePaint.getFullYear())
    }
    previous(){
        if(this.datePaint.getMonth()==0)
            this.datePaint = new Date(this.datePaint.getFullYear()-1,11,this.datePaint.getDate());
        else
            this.datePaint = new Date(this.datePaint.getFullYear(),this.datePaint.getMonth()-1,this.datePaint.getDate());
        this.paint();
    }
    apply(fun){
        let this1 = this;
        this.calendar.getElementsByClassName('calendar__apply')[0].addEventListener("click", function (e) {
            console.log("apply");
            fun(this1.selected);
        });
        // this.calendar.getElementsByClassName('calendar__apply')[0].onclick += ()=>{
        //     console.log("apply");
        //     fun(this.selected);
        // }
    }
    clean(){
        this.calendar.getElementsByClassName('calendar__apply')[0].style.visibility = 'hidden';
        this.calendar.getElementsByClassName('calendar__clean')[0].style.visibility = 'hidden';
        this.selected = [];
        this.paint();
        
    }
    visibility(vis){
        console.log(this.visibil+' - '+vis)
        if(this.visibil != vis){
            if(vis == 'visible')
                this.calendar.style.display = 'block';
            if(vis == 'hidden')
                this.calendar.style.display = 'none';
            this.visibil = vis;
        }
            
    }
}

