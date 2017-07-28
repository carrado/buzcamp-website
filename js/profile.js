
/*********************************************PROCESS UPLOAD PROFILE PIC*************************************/

$(document).ready(function(e) {

$uploadCrop = $('#upload-demo').croppie({

    enableExif: true,

    viewport: {

        width: 150,

        height: 150,

        type: 'circle'

    },

    boundary: {

        width: 300,

        height: 300

    }

});


/**********************FOR SM, MD DEVICES******************/

$('.uploadButton').on('change', function () {

	var reader = new FileReader();

    reader.onload = function (e) {

    	$uploadCrop.croppie('bind', {

    		url: e.target.result

    	}).then(function(){

    		console.log('jQuery bind complete');

    	});

    }

    reader.readAsDataURL(this.files[0]);

});


 /************************FOR LG DEVICES******************/

$('#uploadButton').on('change', function () {

	var reader = new FileReader();

    reader.onload = function (e) {

    	$uploadCrop.croppie('bind', {

    		url: e.target.result

    	}).then(function(){

    		console.log('jQuery bind complete');

    	});

    }

    reader.readAsDataURL(this.files[0]);

});



/****************Remove Image On close**************/
$('.dismiss-profilepic').on('click', function(ev)
{
  $(".resulterror").html('');

  $uploadCrop.croppie('bind', {

    url: ''

  }).then(function(){

    console.log('jQuery unbind complete');

  });

})


$('.upload-result').on('click', function (ev) {

	$uploadCrop.croppie('result', {

		type: 'canvas',

		size: 'viewport'

	}).then(function (resp) {


    if(resp == "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAYAAAA8AXHiAAAAbklEQVR4nO3BMQEAAADCoPVPbQsvoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPgZYDUAAaMExRQAAAAASUVORK5CYII=")
		{
			//IF NO IMAGE WAS SELECTED

      $(".resulterror").html("No image was selected");

		}

else
{

  //IF AN IMAGE WAS SELECTED

		$.ajax({

			url: url+"profile/profilephotoupload",

			type: "POST",

			data: {"image":resp},//image data passed to $_POST['image'] in controller

			success: function (data) {

				window.location.href= url+"profile/index";
			}

		});

  }

	});

});
});


/*             MAKE menu_bar, friends,navigation-links div FIXED            */

$(document).ready(function()
{
	$(window).scrollTop(0);// this scrolls the page to the top when user refreshes his/her browser

  $(window).scroll(function () {

    var abs = $(window).scrollTop();
		{
      if(window.innerWidth > 992)
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
		}
	})
});


$(document).ready(function()
{
	if(window.innerWidth > 768)
	{
	$(window).scrollTop(0);// this scrolls the page to the top when user refreshes his/her browser

  $(window).scroll(function () {

    var abs = $(window).scrollTop();
		{
			if(abs >= 197)
			{
				$(".figure").hide();
					$(".menu-section").addClass('menu_bar_fixed');
			}
			else if(abs < 197)
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



/****************************************Handles Transaction Id Collapse Toggle*******************************/
$(function () { $('#collapseOne').collapse('toggle')});
  $(function () { $('#collapseTwo').collapse('toggle')});

/********************************************Top Carrado Sellers Scroll Function**********************************/
  $(document).ready(function()
 {
 $('#top_sellers_scrollbar').slimScroll({
     width: '101%',
 	height:'300px',
     size: '6px',
     position: 'right',
     color: '#202020',
     start:'top',
 	allowPageScroll: false,
 	 railVisible: true,
 	 wheelStep: 10,
 	 alwaysVisible: false,
 });
 });


 /*            enable bootstrap tooltips            */

  $(function () { $("[data-toggle='tooltip']").tooltip({html:true,trigger:'hover'}); });


  $(document).ready(function(e) {
    $(".open_house").click(function(e) {
			 $(".preload").show('slow');
		$(".open_house").hide();
		$(".close_house").show();
    });
	$(".close_house").click(function(e) {
		 $(".preload").hide('slow');
		$(".close_house").hide();
		$(".open_house").show();
    });
});


$(document).ready(function(e) {
    $(".btn-transaction").click(function(e) {
        $(".display_transaction").show('slow');
		$(".btn-transaction").hide();
		$(".btn-transaction_close").show();
    });
	$(".btn-transaction_close").click(function(e) {
        $(".display_transaction").hide('slow');
		$(".btn-transaction_close").hide();
		$(".btn-transaction").show();
    });
});




  /*              load values for purchaserequest, notification, following and followers alert icons (LG,MD,SM Devices)          */



                       /*************************************LOAD PURCHASE REQUEST NOTIFICATIONS***************************/

	$("#purchase_request").ready(function(e) {
		 var id = $(".purchase_request");
		 var isDocumentReady = true;//this determines that user refreshed the page
	var field = 0; //variable used to check how many times our popup sound may appear from the plugin
	var target = url+"carrado_default/purchaserequest"; //url to fetch data
   new get_approve(field,id,target,isDocumentReady); //API Function to run full program and produce sound
 });



                      /*************************************LOAD PURCHASE REQUEST NOTIFICATIONS***************************/

 $("#notification").ready(function(e) {
		 var id = $(".notification");
		 var isDocumentReady = true;//this determines that user refreshed the page
	var field = 0; //variable used to check how many times our popup sound may appear from the plugin
	var target = url+"carrado_default/notification"; //url to fetch data
   new get_approve(field,id,target,isDocumentReady); //API Function to run full program and produce sound
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
          url: url+'profile/timeline_sales',
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

              $(".display-user-timeline").append(data);
          }

          })
          return false;
        }
      }
            })



    $(document).ready(function(e)
	{
		$(".following").load(""+url+"carrado_default/following_user");
		var refreshId = setInterval(function()
		{
$(".following").load(""+url+"carrado_default/following_user");
}, 1000);
$.ajaxSetup({ cache:false });
});

$(document).ready(function(e)
{
	$(".followers").load(""+url+"carrado_default/followers_user");
var refreshId = setInterval(function()
{
	$(".followers").load(""+url+"carrado_default/followers_user");}, 1000);
	$.ajaxSetup({ cache:false });
	});


  /*              load values for messages, purchaserequest, notification alert icons (XS Devices)          */

  	$(document).ready(function(e)
  	{
  		$("#following_count").load(""+url+"carrado_default/following_user");
  		var refreshId = setInterval(function()
  		{
  $("#following_count").load(""+url+"carrado_default/following_user");
  }, 8000);
  $.ajaxSetup({ cache:false });
  });

  $(document).ready(function(e)
  {
  	$("#followers_count").load(""+url+"carrado_default/followers_user");
  var refreshId = setInterval(function()
  {
  	$("#followers_count").load(""+url+"carrado_default/followers_user");}, 8000);
  	$.ajaxSetup({ cache:false });
  	});

  	$(document).ready(function(e)
   {
  	 $("#purchase_requestmobile").load(""+url+"carrado_default/purchaserequest");
  	 var refreshId = setInterval(function()
  {
  	$("#purchase_requestmobile").load(""+url+"carrado_default/purchaserequest");}, 1000);
  	$.ajaxSetup({ cache:false });
  	});

  	$(document).ready(function(e)
   {
  	 $("#notificationmobile").load(""+url+"carrado_default/notification");
  	 var refreshId = setInterval(function()
  {
  	$("#notificationmobile").load(""+url+"carrado_default/notification");}, 1000);
  	$.ajaxSetup({ cache:false });
  	});


  /*                          GET UPLOADED PRODUCTS OVERVIEW FROM DIV (SALES PRELOAD CLASS)        */

  	$(document).ready(function(e)
   {
  	 $(".salespreload").load(""+url+"profile/sales_preview");
  	 var refreshId = setInterval(function()
  {
  	$(".salespreload").load(""+url+"profile/sales_preview");
  	}, 8000);
  	$.ajaxSetup({ cache:false });
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


$(document).ready(function() {
    profilepics = $('.profile-pic');
    profilepics.mouseenter(OnEnter).mouseleave(OnLeave);
    function OnEnter(){$(".overlay").show();}
    function OnLeave(){$(".overlay").hide();}
});


$(function () {
					 $("#sliderA").excoloSlider();
			 });


/*************************************LOAD COVER PHOTO***************************/

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
	$("#cycle").load(""+url+"carrado_default/load_cover/"+username);}, 17000);
	$.ajaxSetup({ cache:false });
});


/*************************************LOAD PREVIEW COVER PHOTO***************************/

$(document).ready(function()
{
	 $(".load_view_cover").load(""+url+"profile/preview_coverphoto");
	 var refreshId = setInterval(function()
{
	$(".load_view_cover").load(""+url+"profile/preview_coverphoto");}, 15000);
	$.ajaxSetup({ cache:false });

	$(".load_view_cover").mouseover(function(e) {
  clearInterval(refreshId);
}).mouseout(function()
{
refreshId = setInterval(function()
{
$(".load_view_cover").load(""+url+"profile/preview_coverphoto");
}, 1000);
$.ajaxSetup({ cache:false });
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


/*******************************************CLOSE POP UP BOXES THROUGH ESCAPE KEY*************************************/
$(document).ready(function(e) {
    window.document.onkeydown = function(e)
	{
		if(!e)e = event;
		if(e.keyCode == 27)
		{
			$(".popup-3").fadeOut();
		}
	}
});

/***************************************PROCESS UPLOAD COVER PHOTO***************************/

$(document).on("ready", function() {
	var cover = 1;
    $("#uploadBtn3").fileinput({
        uploadAsync: false,
	showUpload:false,
        uploadUrl: url+"profile/coverphotoupload/"+cover, // your upload server url
		showBrowse: false,
		showCaption: false,
		browseOnZoneClick: true,
    });
});

$(document).on("ready", function() {
	var cover = 2;
    $("#uploadBtn4").fileinput({
        uploadAsync: false,
	showUpload:false,
        uploadUrl: url+"profile/coverphotoupload/"+cover, // your upload server url
		showBrowse: false,
		showCaption: false,
		browseOnZoneClick: true,
    });
});


/***************************************VIEW USER PROFILE*************************************/

$(document).ready(function(e) {

	$(".myprofile").submit(function(e) {

        var targeted_popup_class = 'popup-3';
        $('[data-popup="' + targeted_popup_class + '"]').fadeIn();

        e.preventDefault();

        $.ajax({
			type: "POST",
			url: url+"profile/user_see_profile",
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
			    $("#target").animate({"height": 550, "width": '50%', "margin-top": 30, "margin-left": '24%'});
        }
        else if(window.innerWidth <= 1200)
        {
          $("#target").animate({"height": 550, "width": '60%', "margin-top": 10, "margin-left": '20%'});
        }
        $("#target").append(data);
			}
		});

		return false
    });

});


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
				$("#target").html(data);
			}

		});
		return false
    });

});



/***************************************EDIT PROFILE*************************************/

$(document).ready(function(e) {

	$("#edit").submit(function(e) {

        var targeted_popup_class = 'popup-3';
        $('[data-popup="' + targeted_popup_class + '"]').fadeIn();

        e.preventDefault();

        $.ajax({
			type: "POST",
			url: url+"profile/get_editprofile",
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
				$("#target").animate({"height": 600, "width": '62%', "margin-top": 20, "margin-left": '19%'});
				}
				else if(window.innerWidth < 1200)
				{
			$("#target").animate({"height": 590, "width": '75%', "margin-top": 0, "margin-left": '14%'});
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
				$("#target").animate({"height": 600, "width": '60%', "margin-top": 20, "margin-left": '20%'});
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
				$("#target").animate({"height": 600, "width": '60%', "margin-top": 20, "margin-left": '20%'});
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



/*********************************************TRANSACTION ID QUERY****************************************/
$(document).ready(function(e)
{
   $(".transaction_form").submit(function(e)
   {
     var targeted_popup_class = 'popup-3';
     $('[data-popup="' + targeted_popup_class + '"]').fadeIn();

     e.preventDefault();

  $.ajax({
    type: "POST",
    url: url+"profile/transaction_idquery",
    data: $(this).serialize(),
    beforeSend: function()
    {
      $("#target").html("<div class='loading'></div>");
    },
    success: function(data)
    {
      $(".loading").hide();

      if(data == '1')
      {
        $("#target").html("<h6 align='center'> No Transaction ID specified </h6>");
        $(".popup-3").delay(2000).fadeOut();
      }
      else if(data == '2')
      {
        $("#target").html("<h6 align='center'> No transaction was made with this ID number </h6>");
        $(".popup-3").delay(2000).fadeOut();
      }
      else
      {
        if(window.innerWidth >= 1200)
        {
      $("#target").animate({"height" : 570, "width" : "50%", "margin-top" : 20, "margin-left" : "24%"});
      $("#target").html(data);
    }
    else
    {
      $("#target").animate({"height" : 570, "width" : "50%", "margin-top" : 0, "margin-left" : "24%"});
      $("#target").html(data);
    }
    }
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
						$("#target").animate({"height": 570, "width": '80%', "margin-top": 20, "margin-left": '10%'});

						$("#target").html(data);
					}

				});
				return false
            });

        });


var url = "http://localhost/Carrado/index.php/";
