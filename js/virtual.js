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


  $(document).ready(function()
{
	if(window.innerWidth > 768)
	{
	$(window).scrollTop(0);// this scrolls the page to the top when user refreshes his/her browser

  $(window).scroll(function () {

    var abs = $(window).scrollTop();
		{
			if(abs >= 100)
			{
					$(".display_categories").addClass('categories_display_fixed');
			}
			else if(abs < 100)
			{
				$(".display_categories").removeClass('categories_display_fixed');
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

$(document).ready(function(e)
	{
		$("#land_housing").load(""+url+"virtual_account/land_housingcount");
		var refreshId = setInterval(function()
		{
		$("#land_housing").load(""+url+"virtual_account/land_housingcount");
}, 1000);
$.ajaxSetup({ cache:false });
});

$(document).ready(function(e)
	{
		$("#hotel_reservation").load(""+url+"virtual_account/hotel_reservationcount");
		var refreshId = setInterval(function()
		{
		$("#hotel_reservation").load(""+url+"virtual_account/hotel_reservationcount");
}, 1000);
$.ajaxSetup({ cache:false });
});



var url = "http://localhost/Carrado/index.php/";
