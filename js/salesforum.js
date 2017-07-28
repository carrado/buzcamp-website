// JavaScript Document

            /********************************GET CATEGORIES FOR USER TO SELECT AND SELL ON HEADER*************************/

	$(document).ready(function(e) {

		$(".sell").click(function(e) {

			var id = document.querySelector('input[name="categories"]').value;

			$.ajax({
				type: "POST",
				url: url+"salesforum/getcategories/"+id,
				data: id,
				beforeSend: function()
				{
					 $(".dropdown-menu").show();
					$("#tar").html("<div class='loadicon'></div>");
				},
				success: function(data)
				{
					$(".loadicon").hide();
					$("#tar").animate({"min-height": 30});
					$("#tar").html(data);
				}
			});
			return false

        });

    });



	/********************************SCRIPT TO MAKE SOME DIVS FIXED WHILE SCROLLING****************************************/

	$(document).ready(function()
{
	if(window.innerWidth > 768)
	{
	$(window).scrollTop(0);// this scrolls the page to the top when user refreshes his/her browser

  $(window).scroll(function () {

    var abs = $(window).scrollTop();
		{
			if(abs >= 57)
			{
				$(".figure").hide();
					$(".menu-section").addClass('menu_bar_fixed');
			}
			else if(abs < 57)
			{
				$(".figure").fadeIn();
				$(".menu-section").removeClass('menu_bar_fixed');
			}
		}
	})

	}

});



  /*******************************MOBILE BUSINESS PARTNER SLIDER*************/
	$(function()
	{
		$(".mobile_suggested_partners").excoloSlider();
	})

/***************************************GET USER'S FOLLOWERS*************************************/

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
				if(window.innerWidth >= 1200)
				{
				$("#target").animate({"height": 600, "width": '83.3%', "margin-top": 20, "margin-left": '8%'});
        }
				else {
					$("#target").animate({"height": 570, "width": '83.3%', "margin-top": 0, "margin-left": '8%'});
				}
				$("#target").append(data);
			}

		});
		return false
    });

});




/***************************************GET FOLLOWING USER*************************************/

$(document).ready(function(e) {

	$("#followingbtn").submit(function(e) {

		var username = document.querySelector('input[name = "username"]').value;

        var targeted_popup_class = 'popup-3';
        $('[data-popup="' + targeted_popup_class + '"]').fadeIn();

        e.preventDefault();

        $.ajax({
			type: "POST",
			url: url+"carrado_default/following/"+username,
			data: $(this).serialize(),
			beforeSend: function()
				{
				$("#target").html("<div class='loading'></div>");
			},

			success: function(data)
			{
				$(".loading").hide();
				if(window.innerWidth >= 1200)
				{
				$("#target").animate({"height": 600, "width": '83.3%', "margin-top": 20, "margin-left": '8%'});
				}
				else {
					$("#target").animate({"height": 570, "width": '83.3%', "margin-top": 0, "margin-left": '8%'});
				}
				$("#target").html(data);
			}

		});
		return false
    });

});



/***************************************GET PURCHASE REQUEST*************************************/

$(document).ready(function(e) {

	$("#purchase").submit(function(e) {

        var targeted_popup_class = 'popup-3';
        $('[data-popup="' + targeted_popup_class + '"]').fadeIn();

        e.preventDefault();

        $.ajax({
			type: "POST",
			url: url+"carrado_default/see_purchaserequest",
			data: $(this).serialize(),
			beforeSend: function()
				{
				$("#target").html("<div class='loading'></div>");
			},

			success: function(data)
			{
				$(".loading").hide();

				if(window.innerWidth >= 1200)
				{
				$("#target").animate({"height": 600, "width": '50%', "margin-top": 20, "margin-left": '24%'});
				}
				else if(window.innerWidth < 1200)
				{
			$("#target").animate({"height": 570, "width": '75%', "margin-top": 20, "margin-left": '14%'});
				}

				$("#target").html(data);
			}

		});
		return false
    });

});



/***************************************GET NOTIFICATIONS*************************************/

$(document).ready(function(e) {

	$("#notificationbtn").submit(function(e) {

        var targeted_popup_class = 'popup-3';
        $('[data-popup="' + targeted_popup_class + '"]').fadeIn();

        e.preventDefault();

        $.ajax({
			type: "POST",
			url: url+"carrado_default/see_notifications",
			data: $(this).serialize(),
			beforeSend: function()
				{
				$("#target").html("<div class='loading'></div>");
			},

			success: function(data)
			{

				$(".loading").hide();

				if(window.innerWidth >= 1200)
				{
				$("#target").animate({"height": 600, "width": '50%', "margin-top": 20, "margin-left": '24%'});
				}
				else if(window.innerWidth < 1200)
				{
			$("#target").animate({"height": 570, "width": '75%', "margin-top": 20, "margin-left": '14%'});
				}

				$("#target").html(data);
			}

		});
		return false
    });

});


          /******************************************GET SEARCH RESULT**********************************/

		  $(document).ready(function(e) {

			$("#search_query").submit(function(e) {

				var targeted_popup_class = 'popup-3';
				$('[data-popup="' + targeted_popup_class + '"]').fadeIn();

				e.preventDefault();

				$.ajax({
					type: "POST",
					url: url+"carrado_default/search",
					data: $(this).serialize(),
					beforeSend: function()
					{
						$("#target").html("<div class='loading'></div>");
					},

					success: function(data)
					{
						$(".loading").hide();
						$("#target").animate({"height": 570, "width": '75%', "margin-top": 20, "margin-left": '12%'});

						$("#target").html(data);
					}

				});
				return false
            });

        });


				/******************************************POST JOB ADVERT**********************************/

			 $(document).ready(function(e) {

			 $("#post_job").submit(function(e) {

			 var targeted_popup_class = 'popup-3';
			 $('[data-popup="' + targeted_popup_class + '"]').fadeIn();

			 e.preventDefault();

			 $.ajax({
			  type: "POST",
			  url: url+"jobs/getjobform",
			  data: $(this).serialize(),
			  beforeSend: function()
			  {
			 	 $("#target").html("<div class='loading'></div>");
			  },

			  success: function(data)
			  {
			 	 $(".loading").hide();

				 if(window.innerWidth >= 1200)
				 {
				 $("#target").animate({"height": 600, "width": '50%', "margin-top": 20, "margin-left": '24%'});
				 }
				 else if(window.innerWidth < 1200)
				 {
				 $("#target").animate({"height": 570, "width": '75%', "margin-top": 20, "margin-left": '14%'});
				 }

			 	 $("#target").html(data);
			  }

			 });
			 return false
			 	 });

			 });


                       /*************************************LOAD PURCHASE REQUEST NOTIFICATIONS COUNT***************************/

	$("#purchase_request").ready(function(e) {
		 var id = $(".purchase_request");
		 var isDocumentReady = true;//this determines that user refreshed the page
	var field = 0; //variable used to check how many times our popup sound may appear from the plugin
	var target = url+"carrado_default/purchaserequest"; //url to fetch data
   new get_approve(field,id,target,isDocumentReady); //API Function to run full program and produce sound
 });



                      /*************************************LOAD NOTIFICATIONS COUNT***************************/

 $("#notification").ready(function(e) {
		 var id = $(".notification");
		 var isDocumentReady = true;//this determines that user refreshed the page
	var field = 0; //variable used to check how many times our popup sound may appear from the plugin
	var target = url+"carrado_default/notification"; //url to fetch data
   new get_approve(field,id,target,isDocumentReady); //API Function to run full program and produce sound
 });


	  /**********************************LOAD USER FOLLOWING************************************/

		 $(document).ready(function(e)
	{
		$(".following").load(""+url+"carrado_default/following_user");
		var refreshId = setInterval(function()
		{
$(".following").load(""+url+"carrado_default/following_user");
}, 1000);
$.ajaxSetup({ cache:false });
});


	  /**********************************LOAD USER'S FOLLOWERS************************************/

$(document).ready(function(e)
{
	$(".followers").load(""+url+"carrado_default/followers_user");
var refreshId = setInterval(function()
{
	$(".followers").load(""+url+"carrado_default/followers_user");}, 1000);
	$.ajaxSetup({ cache:false });
	});



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



/***************Pagination Ajax function on Computer Device Type for salesforum timeline ***************/

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
			 url: url+'salesforum/sales_timeline/'+track_page,
			 data: track_page,
			 dataType: "html",
			 beforeSend: function()
			 {
				 $(".loadiconer").show();
			 },
			 success: function(data)
			 {
				 loading = false;

				 $(".loadiconer").hide();

					 $(".timeline-cover").append(data);

			 }

			 })
			 return false;
		 }
	 }
				 })




         /************************LOAD CAROUSEL***************************/
$(document).ready(function()
{
    $("#myCarousel").carousel('cycle');
})


	var url = "http://localhost/Carrado/index.php/";
