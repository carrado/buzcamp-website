$(document).ready(function() {

     // Dock the header to the top of the window when scrolled past the banner.
     // This is the default behavior.

$('.header_fn').scrollToFixed();



});


                 /*  Function for sliders for XS and SM Devices */

                 $(document).ready(function(){
                  $('.bxslider').bxSlider();
                });



               /***************************FADE IN AND OUT CATEGORIES *********************/

               $(document).ready(function()
               {
                 if(window.innerWidth > 768)
                 {
                   $(window).scrollTop(0);
                 }
                 $(window).scroll(function() {
               var abs = $(window).scrollTop();

            if(abs >= 250)
            {
              $("#left-bar-categories").fadeOut('slow');
              $("#right-bar-categories").fadeOut('slow');
            }
            else if(abs < 250)
            {
              $("#left-bar-categories").fadeIn('slow');
              $("#right-bar-categories").fadeIn('slow');
            }
                 })
               })



                /*********************FADE IN PRODUCTS***************/

                $(document).ready(function() {

                    /* Every time the window is scrolled ... */
                    $(window).scroll( function(){

                        /* Check the location of each desired element */
                        $('.display-box').each( function(i){

                            var bottom_of_object = $(this).position().top + $(this).outerHeight();
                            var bottom_of_window = $(window).scrollTop() + $(window).height();

                            /* If the object is completely visible in the window, fade it it */
                            if( bottom_of_window > bottom_of_object ){

                                $(this).animate({'opacity':'1'},2500);

                            }

                        });

                    });

                });

     /*    FUNCTION TO PROCESS MY PROFILE WHEN CLICKED, SALES FORUM WHEN CLICKED AND LOGIN         */


         //THIS PROCESSES LOGIN BY USER
     $(document).ready(function(){
$("#login").submit(function(e){

$.ajax({
 type: 'POST',
 url: url+"login_ctrl/index",
 data: $(this).serialize(),
 beforeSend: function()
 {
   $(".login_error").show();
   $('.login_error').html("<div class='loading'></div>");
 },
 success: function(data)
 {
   if(data == 1)
   {
     window.location.href=url+"profile/index";
   }
   else if(data == 2)
   {
     window.location.href=url+"virtual_account/index";
   }
   else if((data != 1) && (data != 2))
   {
   $(".login_error").html(data);
   $(".login_error").delay(7000).fadeOut();
 }
 }
})
return false;
});
});

 $(document).ready(function(e) {

	$("#passwordrecovery").submit(function(e) {

		$.ajax({
			type: 'POST',
			url: url+"home_ctrl/process_change_password",
			data: $(this).serialize(),
			beforeSend: function()
			{
				$(".message").html("<div class='loading'></div>");
			},
			success: function(data)
			{
				$(".loading").hide();
				$(".message").html(data);
			}
		});
		return false
    });
});




/*****************************INITIALIZE POP UP BOXES**************************/

$(document).ready(function()
{
//----- OPEN
$('[data-popup-open]').on('click', function(e)  {
 var targeted_popup_class = jQuery(this).attr('data-popup-open');
 $('[data-popup="' + targeted_popup_class + '"]').fadeIn();

 e.preventDefault();
});

//----- CLOSE
$('[data-popup-close]').on('click', function(e)  {
 var targeted_popup_class = jQuery(this).attr('data-popup-close');
 $('[data-popup="' + targeted_popup_class + '"]').fadeOut();

 e.preventDefault();
});
});



/***************TO VIEW AND ORDER FOR LISTED PRODUCTS/ACTIVITY************/

$(document).ready(function(e) {

$(".view").click(function(e)
{

 var targeted_popup_class = 'popup-3';
        $('[data-popup="' + targeted_popup_class + '"]').fadeIn();

        e.preventDefault();

    $.ajax({
           type: "POST",
           url: url+"carrado_default/viewproduct",
           data: $(this).parent().parent().serialize(),
		   beforeSend: function()
		   {

							$("#target").html("<div class='loading'></div>");

		   },
		   success: function(data)
           {

	            $(".loading").hide();

				if(window.innerWidth < 1200)
				{
				$("#target").animate({"height": 560, "width": '91.7%', "margin-top": 10, "margin-left": '5%', "overflow-y": 'scroll'});
				}
				else
				if(window.innerWidth >= 1200)
				{
				$("#target").animate({"height": 560, "width": '91.7%', "margin-top": 40, "margin-left": '4%'});
				}
           $("#target").html(data);
		   }
         });

    return false; // avoid to execute the actual submit of the form.
});
});



 var url = "http://localhost/Carrado/index.php/";
