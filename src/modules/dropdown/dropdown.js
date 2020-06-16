
export class Dropdown{
    constructor(dropdown){
        this.dropdown = dropdown;
        this.container = dropdown.getElementsByClassName('dropdown__container')[0];

        this.minuses = dropdown.getElementsByClassName('dropdown__choice-minus');
        this.counts = dropdown.getElementsByClassName('dropdown__choice-count');
        this.items = dropdown.getElementsByClassName('dropdown__choice-item');
        this.clear = dropdown.getElementsByClassName('dropdown__clear')[0];


        this.guests_counter = 0;
        itemsCounter(this.items,dropdown);

        console.log(this.items);




        this.clear.onclick =()=>{
        for(let i = 0;i<this.counts.length;i++){
            this.counts[i].innerHTML = 0;
            this.minuses[i].classList.add("dropdown__choice-minus--DEFAULT");
        }
        this.guests_counter = 0;
        }
        function itemsCounter(items, dropdown){
            for(var i = 0;i < items.length;i++){
                counter(items[i],i);
            }
            function counter(item){
                console.log(item);
                var plus = item.getElementsByClassName('dropdown__choice-plus')[0];
                var minus = item.getElementsByClassName('dropdown__choice-minus')[0];
                var count = item.getElementsByClassName('dropdown__choice-count')[0];
                count.innerHTML = 0;
                plus.onclick = function(){
                    count.innerHTML++;
                    this.guests_counter++;
                    minus_state();
                }
                minus.onclick = function(){
                    if(count.innerHTML>0){
                        count.innerHTML--;
                        this.guests_counter--;
                        minus_state();
                        
                    }
                        
                }
                function minus_state(){
                    if(count.innerHTML>0){
                        minus.classList.remove("dropdown__choice-minus--DEFAULT");
                    }else{
                        minus.classList.add("dropdown__choice-minus--DEFAULT");
                    }
                }
        

            }
        }

    }
    hidden(){
        this.dropdown.style.display = 'none';
    }
    show(){
        this.dropdown.style.display = 'block';
    }
    apply(changs){
        this.dropdown.getElementsByClassName('dropdown__apply')[0].onclick =()=> changs([this.counts[0].innerHTML,this.counts[1].innerHTML,this.counts[2].innerHTML]);
    }
}
