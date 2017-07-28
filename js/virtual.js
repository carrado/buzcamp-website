// JavaScript Document

          /**********************  MAKE menu_bar div & Display Categories div FIXED  ***********************/

$(document).ready(function()
{
	if(window.innerWidth > 768)
	{
	$(window).scrollTop(0);// this scrolls the page to the top when user refreshes his/her browser

  $(window).scroll(function () {

    var abs = $(window).scrollTop();
		{
			if(abs >= 7)
			{
				$(".figure").hide();
					$(".menu-section").addClass('menu_bar_fixed');
			}
			else if(abs < 7)
			{
				$(".figure").fadeIn();
				$(".menu-section").removeClass('menu_bar_fixed');
			}
		}
	})
	}
});



   $(document).ready(function(e)
	{
		$("#automobile").load(""+url+"virtual_account/automobilecount");
		var refreshId = setInterval(function()
		{
		$("#automobile").load(""+url+"virtual_account/automobilecount");
}, 1000);
$.ajaxSetup({ cache:false });
});

 $(document).ready(function(e)
	{
		$("#fashion").load(""+url+"virtual_account/fashioncount");
		var refreshId = setInterval(function()
		{
		$("#fashion").load(""+url+"virtual_account/fashioncount");
}, 1000);
$.ajaxSetup({ cache:false });
});

 $(document).ready(function(e)
	{
		$("#electronics").load(""+url+"virtual_account/electronicscount");
		var refreshId = setInterval(function()
		{
		$("#electronics").load(""+url+"virtual_account/electronicscount");
}, 1000);
$.ajaxSetup({ cache:false });
});

 $(document).ready(function(e)
	{
		$("#games").load(""+url+"virtual_account/gamescount");
		var refreshId = setInterval(function()
		{
		$("#games").load(""+url+"virtual_account/gamescount");
}, 1000);
$.ajaxSetup({ cache:false });
});

 $(document).ready(function(e)
	{
		$("#sports").load(""+url+"virtual_account/sportscount");
		var refreshId = setInterval(function()
		{
		$("#sports").load(""+url+"virtual_account/sportscount");
}, 1000);
$.ajaxSetup({ cache:false });
});

$(document).ready(function(e)
	{
		$("#phones").load(""+url+"virtual_account/phonescount");
		var refreshId = setInterval(function()
		{
		$("#phones").load(""+url+"virtual_account/phonescount");
}, 1000);
$.ajaxSetup({ cache:false });
});

$(document).ready(function(e)
	{
		$("#computer").load(""+url+"virtual_account/computercount");
		var refreshId = setInterval(function()
		{
		$("#computer").load(""+url+"virtual_account/computercount");
}, 1000);
$.ajaxSetup({ cache:false });
});

$(document).ready(function(e)
	{
		$("#health").load(""+url+"virtual_account/healthcount");
		var refreshId = setInterval(function()
		{
		$("#health").load(""+url+"virtual_account/healthcount");
}, 1000);
$.ajaxSetup({ cache:false });
});

$(document).ready(function(e)
	{
		$("#home").load(""+url+"virtual_account/homecount");
		var refreshId = setInterval(function()
		{
		$("#home").load(""+url+"virtual_account/homecount");
}, 1000);
$.ajaxSetup({ cache:false });
});



/***************Pagination Of Products Ajax function for Computer Device Type ***************/

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
			 url: url+'virtual_account/timeline_sales',
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

					 $(".products_showcase").append(data);
			 }

			 })
			 return false;
		 }
	 }
				 })



var url = "http://localhost/Carrado/index.php/";
