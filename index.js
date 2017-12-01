// FULL PAGE JS
$(document).ready(function() { 

    $('#fullpage').fullpage({
        sectionsColor: ['#F8F8F8', 'black'],
        anchors      : ['Home', 'Work'],
        afterLoad    : function(anchorLink, index) {

            if(index == 3) {
                $('#work').fadeIn('slow').animate({ 
                    left: '0'
                }, {
                    duration: 'slow', queue:false
                }, function() {

                });

                $('#workinfo').fadeIn('slow').animate({
                    right: '0'
                }, {
                    duration: 'slow', queue:false
                }, function(){

                });
            }

            if(index == 6) { 
                $('#WORK2').FADEIN('SLOW').ANIMATE({
                    left: '0'
                }, {
                    duration: 'slow', queue:false
                }, function() {
                });

                $('#workinfo2').fadeIn('slow').animate({
                    right: '0'
                }, {
                    duration: 'slow', queue:false
                }, function(){
                });
            }
        }
    });
});



