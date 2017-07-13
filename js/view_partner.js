
/*************************************LOAD COVER PHOTO FOR LG,MD,SM***************************/

$(document).ready(function()
{
  var username = document.querySelector('input[name="username"]').value;

	 $("#cover-cycler").load(""+url+"carrado_default/load_cover/"+username);
	 var refreshId = setInterval(function()
{
	$("#cover-cycler").load(""+url+"carrado_default/load_cover/"+username);}, 16000);
	$.ajaxSetup({ cache:false });
});



/*************************************LOAD COVER PHOTO FOR XS***************************/


$(document).ready(function()
{
  var username = document.querySelector('input[name="username"]').value;

	 $("#cycle").load(""+url+"carrado_default/load_cover/"+username);
	 var refreshId = setInterval(function()
{
	$("#cycle").load(""+url+"carrado_default/load_cover/"+username);}, 16000);
	$.ajaxSetup({ cache:false });
});



/*             MAKE navigation-links div FIXED            */

$(document).ready(function()
{
	$(window).scrollTop(0);// this scrolls the page to the top when user refreshes his/her browser

  $(window).scroll(function () {

    var abs = $(window).scrollTop();
		{
			if(abs >= 197)
			{
					$(".navigation-links").addClass('navfix');
			}
			else if(abs < 197)
			{
				$(".navigation-links").removeClass('navfix');
			}
		}
	})
});


/***************Pagination Ajax function for Computer Device Type ***************/

   $(document).ready(function(e)
  {
    $(window).scrollTop(0);

   var track_page = 1;
   var loading = false;


  load_content(track_page);

  $(window).scroll(function () {

    if($(window).scrollTop() + $(window).height() >= $(document).height()) { //if user scrolled to bottom of the page

  track_page++;
 load_content(track_page);
 }
   });

function load_content(track_page)
   {
     if(loading == false)
     {
       loading = true;

       $.ajax({
         type: 'POST',
       url: url+'carrado_default/partner_sales/',
       data: {'page': track_page},
       dataType: "html",
       beforeSend: function()
       {
         $(".loadiconer").show();
       },
       success: function(data)
       {
         loading = false;

        $(".loadiconer").hide();

           $(".display-timeline").append(data);
       }

       })
       return false;
     }
   }
         })



/***************FUNCTION TO FOLLOW PARTNER**************/

$(document).ready(function()
{
	 $(".follow").click(function(e)
	 {
		 var partnerid = document.querySelector('input[name="partnerid"]').value;
		 var username = document.querySelector('input[name="username"]').value;

$.ajax({
	type: "POST",
	url: url+"carrado_default/follow_partner/"+partnerid,
	data: partnerid,
	beforeSend: function()
	{
    $(".follow").css({"border-color": '#66afe9'});
	},
	success: function(data)
	{
$(".follow").css({"border-color": ''});
window.location.href= url+"carrado_default/viewpartner/"+username;
	}
});
return false
	 })
})


/***************FUNCTION TO UN FOLLOW PARTNER**************/

$(document).ready(function()
{
	 $(".unfollow").click(function(e)
	 {
		 var partnerid = document.querySelector('input[name="partnerid"]').value;
     var username = document.querySelector('input[name="username"]').value;
$.ajax({
	type: "POST",
	url: url+"carrado_default/unfollow_partner/"+partnerid,
	data: partnerid,
	beforeSend: function()
	{
    $(".unfollow").css({"border-color": '#66afe9'});
	},
	success: function(data)
	{
$(".unfollow").css({"border-color": ''});
window.location.href= url+"carrado_default/viewpartner/"+username;
	}
});
return false
	 })
})


/***************************************GET PARTNER'S FOLLOWERS*************************************/

$(document).ready(function(e) {

	$("#followersbtn").submit(function(e) {

var username = document.querySelector('input[name = "username"]').value;

        var targeted_popup_class = 'popup-3';
        $('[data-popup="' + targeted_popup_class + '"]').fadeIn();

        e.preventDefault();

        $.ajax({
			type: "POST",
			url: url+"carrado_default/followers/"+username,
			data: username,
			beforeSend: function()
				{
				$("#target").html("<div class='loading'></div>");
			},

			success: function(data)
			{
				$(".loading").hide();
				$("#target").animate({"height": 600, "width": '83.3%', "margin-top": 20, "margin-left": '8%'});
				$("#target").append(data);
			}

		});
		return false
    });

});




/***************************************GET FOLLOWING PARTNER*************************************/

$(document).ready(function(e) {

	$("#followingbtn").submit(function(e) {

    var username = document.querySelector('input[name = "username"]').value;

        var targeted_popup_class = 'popup-3';
        $('[data-popup="' + targeted_popup_class + '"]').fadeIn();

        e.preventDefault();

        $.ajax({
			type: "POST",
			url: url+"carrado_default/following/"+username,
			data: username,
			beforeSend: function()
				{
				$("#target").html("<div class='loading'></div>");
			},

			success: function(data)
			{

				$(".loading").hide();
				$("#target").animate({"height": 600, "width": '83.3%', "margin-top": 20, "margin-left": '8%'});
				$("#target").html(data);
			}

		});
		return false
    });

});


/*           GET LOADING ICON DISPLAYED WHILE PAGE IS LOADED    */

$(document).ready(function(e) {
$(".add_friends").load(function(e) {
	$(".loader").fadeOut("slow");
});
});

/*             Load suggested partners for user to follow   */

$(document).ready(function(e)
{
$(".add_friends").load(""+url+"carrado_default/business_partners");
var refreshId = setInterval(function()
{
$(".add_friends").load(""+url+"carrado_default/business_partners");
}, 8000);
$.ajaxSetup({ cache:false });

$(".add_friends").mouseover(function(e) {
clearInterval(refreshId);
}).mouseout(function()
{
refreshId = setInterval(function()
{
$(".add_friends").load(""+url+"carrado_default/business_partners");
}, 8000);
$.ajaxSetup({ cache:false });
});
});

var url = "http://localhost/Carrado/index.php/";
