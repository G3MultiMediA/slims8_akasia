$(document).ready(function(){

    // Show or hide placeholder inside Search form
    // ============================================
    $('.s-search').focus(function(){
      $(this).attr('placeholder','e.g. Library and Information');
    })
    $('.s-search').blur(function(){
      $(this).removeAttr('placeholder');
    })

    // Show hide menu
    // ============================================
    $('#show-menu').on('click', function(){
      $('.s-menu-content').removeClass('slideOutRight').addClass('active slideInRight');
      $('.s-menu-content ul a').addClass('animated fadeInRight delay4');
    });

    $('#hide-menu').on('click', function(){
      $('.s-menu-content').removeClass('active slideInRight').addClass('slideOutRight');
      $('.s-menu-content ul a').removeClass('animated fadeInRight delay4');
    });

    // Hide only an empty tag inside biblio detail
    // ============================================
    $('.controls:empty').parent().hide();

    // Show or hide chat
    // ============================================
    $('#pchat-toggle').on('click', function(){
        $('.s-chat').toggle().addClass('animated-fast fadeInUp');      
    });

    $('#pchat-hide').on('click', function(){
        $('.s-chat').toggleClass('s-minimize s-maximize ');
    });

    // Animate background color
    // ============================================
    var bg = $('.gradients');
    function fade() {
      var divs = bg.children();
      $(".current").transition({opacity: 1}, 5000, 'linear', function() {
        $('.current').removeClass('current');
        firstDiv = divs.first();
        firstDiv.addClass('current').css({opacity: 0});
        firstDiv.appendTo(bg);
        fade();
      });
    }
    fade();


});


// Select makeover
// ============================================
(function(){
	var customSelects = document.querySelectorAll(".custom-dropdown__select");
	for(var i=0; i<customSelects.length; i++){
		if (customSelects[i].hasAttribute("disabled")){
			customSelects[i].parentNode.className += " custom-dropdown--disabled";
		}
	}
})()

