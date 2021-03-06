// FULL PAGE JS
$(document).ready(function() { 

    $('#fullpage').fullpage({
        sectionsColor: ['#F8F8F8', 'white', 'WhiteSmoke'],
        anchors      : ['Home', 'Info', 'MailChimp'],
        afterLoad    : function(anchorLink, index) {

            if (index === 1) {
                initLostAnimation();

                const target = $('#c');
                target.css("visibility", "hidden");
            }

            if (index === 2) {

                $("#cta-contact").hover(() => {
                    $("#secret-images").css("visibility", "visible");
                    $(".secret-copy-item").css("visibility", "visible");
                });

                $("#cta-contact").mouseleave(() => {
                    $("#secret-images").css("visibility", "hidden");
                    $(".secret-copy-item").css("visibility", "hidden");
                })

                const target = $('#c');
                target.css("visibility", "visible");
            }

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



