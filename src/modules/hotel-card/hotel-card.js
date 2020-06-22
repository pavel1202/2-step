import  'jquery';
import 'bootstrap/js/dist/carousel.js';

let carouselsDOM = document.getElementsByClassName('carousel');
console.log('carouselsDOM');
console.log(carouselsDOM);

// $(carouselsDOM[1]).carousel();
for(let i = 0;i<carouselsDOM.length;i++)
    $(carouselsDOM[i]).carousel();