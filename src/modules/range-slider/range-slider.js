import $ from 'jquery';

require('webpack-jquery-ui/slider');

console.log(';;;;;;;;;;;;;;;;;')
console.log($(".range-slider__slider").slider());
$( ()=> {
    $(".range-slider__slider").slider({
      range: true,
      min: 0,
      max: 15000,
      values: [ 5000, 10000 ],
      slide: function( event, ui ) {
        $( ".range-slider__amount" ).html( ui.values[ 0 ] + "₽ - " + ui.values[ 1 ] + "₽");
      }
    });
    $( ".range-slider__amount" ).html($( ".range-slider__slider" ).slider( "values", 0 ) +
      "₽ - " + $( ".range-slider__slider" ).slider( "values", 1 )+'₽' );
  } );