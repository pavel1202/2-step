import $ from 'jquery';

import '../../plugins/px-pagination.js';
// require('../../px-jquery-pagination');

console.log('pagination')
$(document).ready(()=>{
    for(let i = 0;i<document.getElementsByClassName('pagination').length;i++){
        Pagination(document.getElementsByClassName('pagination')[i]);

    }
});

function Pagination(paginationDOM){
    
        if(paginationDOM.getElementsByClassName('tableItem')[0])
            $(paginationDOM).find(".output").html( document.getElementsByClassName('tableItem')[0].innerHTML + "</span>");

            $(paginationDOM).find(".output").html(document.getElementsByClassName('tableItem')[0].innerHTML + "</span>");
            $(paginationDOM).find(".myPages").pxpaginate({
        currentpage: 1,
        totalPageCount: document.getElementsByClassName('tableItem').length,
        maxBtnCount: 3,
        align: 'center',
        nextPrevBtnShow: true,
        firstLastBtnShow: true,
        prevPageName: '',
        nextPageName: '',
        lastPageName: '<<',
        firstPageName: '>>',
        callback: (pagenumber)=> {
            console.log(pagenumber)
            if(pagenumber>15-1){
                $(paginationDOM).find('.px-btn-next').css( "display", "none" );
            }else{
                $(paginationDOM).find('.px-btn-next').css( "display", "block" );
            }
            if(document.getElementsByClassName('tableItem')[pagenumber-1])
            $(paginationDOM).find(".output").html(document.getElementsByClassName('tableItem')[pagenumber-1].innerHTML + "</span>");
        }
    });

    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-36251023-1']);
    _gaq.push(['_setDomainName', 'jqueryscript.net']);
    _gaq.push(['_trackPageview']);

    (function () {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})
}
