
for(let i = 0;i<document.getElementsByClassName('dropdown').length;i++){
        dropdown(document.getElementsByClassName('dropdown')[i]);
}

function dropdown(dropdown,output){
    console.log(dropdown);
    var choice = dropdown.getElementsByClassName('dropdown__choice')[0];
    var container = dropdown.getElementsByClassName('dropdown__container')[0];

    var minuses = dropdown.getElementsByClassName('dropdown__choice-minus');
    var counts = dropdown.getElementsByClassName('dropdown__choice-count');
    var items = dropdown.getElementsByClassName('dropdown__choice-item');
    var clear = dropdown.getElementsByClassName('dropdown__clear')[0];
    
    
    var guests_counter = 0;
    itemsCounter(items,dropdown);
    
    console.log(items);
    choice.style.display = 'none';
    clear.style.visibility = 'hidden';
    container.getElementsByTagName('p')[0].innerHTML!='Сколько гостей';
    
    dropdown.getElementsByClassName('dropdown__choice')[0].onclick = function(){
        
        
        if(guests_counter>0){
            clear.style.visibility = 'visible';
            if(guests_counter == 1)
                container.getElementsByTagName('p')[0].innerHTML = guests_counter + ' гость';
            else
                container.getElementsByTagName('p')[0].innerHTML = guests_counter + ' гостя';
        }
        else{
            clear.style.visibility = 'hidden';
            container.getElementsByTagName('p')[0].innerHTML = 'Сколько гостей';
        }
            

    }
    container.onclick = function(){
        if(choice.style.display == 'block')
            choice.style.display = 'none';
        else
            choice.style.display = 'block';
    }

    clear.onclick = function(){
       for(i = 0;i<counts.length;i++){
           counts[i].innerHTML = 0;
           minuses[i].classList.add("dropdown__choice-minus--DEFAULT");
       }
       guests_counter = 0;
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
                guests_counter++;
                minus_state();
            }
            minus.onclick = function(){
                if(count.innerHTML>0){
                    count.innerHTML--;
                    guests_counter--;
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

