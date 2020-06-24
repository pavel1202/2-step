import {Dropdown} from '../dropdown/dropdown.js';


for(let i = 0;i<document.getElementsByClassName('dropdown-room-amenities').length;i++){
    DropdownGuests(document.getElementsByClassName('dropdown-room-amenities')[i]);
}
function DropdownGuests(dropdownGuests){
    let dropdown = new Dropdown(dropdownGuests.getElementsByClassName('dropdown')[0]);
    let visible = false;


    dropdown.hidden();


    dropdownGuests.getElementsByClassName('dropdown-room-amenities__container')[0].onclick = ()=>{
        if(visible == false){
        dropdown.show();
            visible = true;  
        }else{
            dropdown.hidden();
            visible = false;
        }
    }
    dropdown.apply(function(mass){
        dropdownGuests.getElementsByClassName('dropdown-room-amenities__text')[0].innerHTML = `${Number(mass[0])+Number(mass[1])} ${Number(mass[0])+Number(mass[1])>1?'гостя':'гость'} - ${mass[2]} ${mass[2]>1?'маденцев':'младенец'} `;
        dropdown.hidden();
        visible = false;
    });
}

