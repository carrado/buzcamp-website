// JavaScript Document



/*******************************CATEGORIES SLIDER*************/
$(document).ready(function()
{
	$(".category").excoloSlider({

		interval: 5000,

	});
});



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


$('#uploadfile').on('change', function () {

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

			url: url+"virtual_account/profilephotoupload",

			type: "POST",

			data: {"image":resp},//image data passed to $_POST['image'] in controller

			success: function (data) {

           window.location.href=url+"virtual_account/index";

			}

		});
	}

	});

});
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



				 /*************************************LOAD NOTIFICATIONS COUNT***************************/

$("#notification").ready(function(e) {
var id = $(".notification");
var isDocumentReady = true;//this determines that user refreshed the page
var field = 0; //variable used to check how many times our popup sound may appear from the plugin
var target = url+"carrado_default/notification"; //url to fetch data
new get_approve(field,id,target,isDocumentReady); //API Function to run full program and produce sound
});


				 /***************************************VIEW USER PROFILE*************************************/

				 $(document).ready(function(e) {

				 	$(".myprofile").submit(function(e) {

				         var targeted_popup_class = 'popup-3';
				         $('[data-popup="' + targeted_popup_class + '"]').fadeIn();

				         e.preventDefault();

				         $.ajax({
				 			type: "POST",
				 			url: url+"virtual_account/user_see_profile",
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



				 /***************************************EDIT PROFILE*************************************/

				 $(document).ready(function(e) {

				 	$("#edit").submit(function(e) {

				         var targeted_popup_class = 'popup-3';
				         $('[data-popup="' + targeted_popup_class + '"]').fadeIn();

				         e.preventDefault();

				         $.ajax({
				 			type: "POST",
				 			url: url+"virtual_account/get_editprofile",
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



var url = "http://localhost/Carrado/index.php/";
