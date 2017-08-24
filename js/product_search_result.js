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
           data: $(this).parent().parent().parent().serialize(),
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
