$(document).ready(function() {

     // Dock the header to the top of the window when scrolled past the banner.
     // This is the default behavior.

$('.header_fn').scrollToFixed();



});

/*      Function to disappear and appear left-bar-categories and right-bar-categories     */

$(document).ready(function()
{
  $(window).scrollTop(0);// this scrolls the page to the top when user refreshes his/her browser

  $(window).scroll(function () {

    var abs = $(window).scrollTop();

    if(abs >= 340)
    {
      $("#left-bar-categories").fadeOut("slow");
      $("#right-bar-categories").fadeOut("slow");
    }
    else if(abs < 340)
    {
      $("#left-bar-categories").fadeIn("slow");
      $("#right-bar-categories").fadeIn("slow");
    }
});

})


                 /*  Function for sliders for XS and SM Devices  */

                 $(document).ready(function(){
                  $('.bxslider').bxSlider();
                });




          $(document).ready(function()
          {
            $(".close_login").click(function()
            {
            				var bPopup = $('.login_result').bPopup();
            bPopup.close();
            				$(document).html();
                  })
            			});


     /*    FUNCTION TO PROCESS MY PROFILE WHEN CLICKED, SALES FORUM WHEN CLICKED AND LOGIN         */


     $(document).ready(function(){
$("#login").submit(function(){

$.post(url+"login_ctrl/index",
{ username: $("#username").val(), password: $("#password").val() },
function(data){
	if(data == 1)
 {
   window.location.href= url+"profile/index";
 }
 else if(data == 2)
 {
   window.location.href= url+"virtual_account/index";
 }
 else 
 {
 $('.login_result').modal();
 $('.login_error').html(data);
 }
 })
return false;
}
)
 }
 )

//using ajax in directing user to his/her profile
$(document).ready(function(){
$("#profile_validate").submit(function(){

$.post(url+"verifylogin/profile_login",
function(html){
 if(html == 2)

 { $("[data-toggle='popover']").popover(); }

 else if (html == 1)
 {
   window.location.href=url+"virtual_account/index";
 }
 else if(html == 3)
 {
   window.location.href= url+"profile/index";
 }
 })
return false;
})
 })


 //using ajax in directing user to his/her business forum
$(document).ready(function(){
$("#sales_validate").submit(function(){

 // this tells the server-side process that Ajax was used
  $('input[name="usingAJAX"]',this).val( 'true' );

$.post(url+"verifylogin/sales_login",
function(html){
 if(html ==2)
 {
{ $("[data-toggle='popover']").popover();
}
 }
 else if (html == 1)
 {

   window.location.href= url+"home_ctrl/uploadimage";
 }
 else if(html==3)
 {
   window.location.href= url+"salesforum/index";
 }
 })
return false;
}
)
 }
 )
 
 
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
 
 

 var url = "http://localhost/Carrado/index.php/";
