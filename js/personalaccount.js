$(function () { $("[data-toggle='popover']").popover({html : true}); });

   $(document).ready(function()
   {
     $("#personal_signup").submit(function()
     {
       var $this = $(this);
       var $display = $this.parent().parent();
       var $processor = $(this).children('.processor');

 var name = $('input[name=first]');
 var last = $('input[name=last]');
 var nation = $('input[name=nation]');
 var state = $('input[name=state]');
 var address = $('input[name=address]');
 var mobile = $('input[name=mobile]');
 var email = $('input[name=email]');
 var occupation = $('input[name=occupation]');
 var username = $('input[name=username]');
 var password = $('input[name=password]');

if (name.val()=='') {
name.addClass('highlight');
return false;
} else name.removeClass('highlight');

if (last.val()=='') {
last.addClass('highlight');
return false;
} else last.removeClass('highlight');

 if (nation.val()=='') {
nation.addClass('highlight');
return false;
} else nation.removeClass('highlight');

 if (state.val()=='') {
state.addClass('highlight');
return false;
} else state.removeClass('highlight');

if (address.val()=='') {
address.addClass('highlight');
return false;
} else address.removeClass('highlight');

if (mobile.val()=='') {
mobile.addClass('highlight');
return false;
} else mobile.removeClass('highlight');

if (email.val()=='') {
email.addClass('highlight');
return false;
} else if(email.val() != '')
 {
	 var emailx = document.getElementById('email');
 var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!emailx.value.match(mailformat))
    {
	        email.addClass('highlight');
			   $(".error1").html("Invalid Email Address");
			   $(".error1").css('color','red');
			   $(".error1").show();
			   return false;
    }
    else
   {
	      email.removeClass('highlight');
			   $(".error1").hide();
   }
 }

if (occupation.val()=='') {
occupation.addClass('highlight');
return false;
} else occupation.removeClass('highlight');

if (username.val()=='') {
username.addClass('highlight');
return false;
} else username.removeClass('highlight');

if (password.val()=='') {
password.addClass('highlight');
return false;
} else password.removeClass('highlight');

       $.ajax({
         method: 'POST',
         url: url+'signup/process_personal_signup',
         data: $this.serialize(),
         beforeSend: function()
         {
          // $display.html("<img src='<?php echo base_url(); ?>img/loader.gif' class='loader'>");
          $processor.html("<div class='loader'></div>");

 },
        success: function(data)
         {
   if(data != "")
   {
          $(".loader").hide();
             $processor.html(data);
   }
   else if(data == "")
   {
     $(".loader").hide();

if(window.innerWidth > 768)
{
       var targeted_popup_class = 'popup-3';
        $('[data-popup="' + targeted_popup_class + '"]').fadeIn();

        e.preventDefault();
}
else {
  window.location.href=url+'signup/mobile_imageupload';
}
   }
       }
       })
       return false;
     })
   });




        $("#mobile").intlTelInput();


$(document).ready(function(e) {
var telInput = $("#mobile"),
  errorMsg = $("#error-msg"),
  validMsg = $("#valid-msg");

// initialise plugin
telInput.intlTelInput({
  utilsScript: base_url+"js/utils.js"
});

var reset = function() {
  telInput.removeClass("error");
  errorMsg.addClass("hide");
  validMsg.addClass("hide");
};

// on blur: validate
telInput.blur(function() {
  reset();
  if ($.trim(telInput.val())) {
    if (telInput.intlTelInput("isValidNumber")) {
      validMsg.removeClass("hide");
    } else {
      telInput.addClass("error");
      errorMsg.removeClass("hide");
    }
  }
});

// on keyup / change flag: reset
telInput.on("keyup change", reset);
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

$('#uploadBtn').on('change', function () {

  $(".display_photo").fadeIn();

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


$('.upload-result').on('click', function (ev) {

	$uploadCrop.croppie('result', {

		type: 'canvas',

		size: 'viewport'

	}).then(function (resp) {


        if(resp == "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAYAAAA8AXHiAAAAbklEQVR4nO3BMQEAAADCoPVPbQsvoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPgZYDUAAaMExRQAAAAASUVORK5CYII=")
    		{
    			//IF NO IMAGE WAS SELECTED

    			window.location.href=url+"signup/personalaccount";

    		}

    else
    {

      //IF AN IMAGE WAS SELECTED


		$.ajax({

			url: url+"signup/profilephotoupload",

			type: "POST",

			data: {"image":resp},//image data passed to $_POST['image'] in controller

			success: function (response) {

          if(response == 1)
		  {
				window.location.href= url+"profile/index";
		  }
		  else if(response == 2)
		  {
			  				window.location.href= url+"virtual_account/index";
		  }

			}

		});

  }

	});

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





   var url = "http://localhost/Carrado/index.php/";
   var base_url = "http://localhost/Carrado/";
