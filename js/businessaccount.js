$(function () { $("[data-toggle='popover']").popover({html : true}); });


$(document).ready(function()
{
 $("#business_signup").submit(function()
 {
   var $this = $(this);
   var $display = $this.parent().parent();
   var $processor = $(this).children('.processor');

var name = $('input[name=name]');
var nation = $('input[name=nation]');
var state = $('input[name=state]');
var address = $('input[name=address]');
var mobile = $('input[name=mobile]');
var mobile1 = $('input[name=mobile1]');
var email = $('input[name=email]');
var services1 = $('input[name=services1]');
var services2 = $('input[name=services2]');
var username = $('input[name=username]');
var password = $('input[name=password]');


 if (name.val()=='') {
name.addClass('highlight');
return false;
} else name.removeClass('highlight');

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

if (mobile1.val()=='') {
mobile1.addClass('highlight');
return false;
} else mobile1.removeClass('highlight');

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
 
 
if (services1.val()=='') {
services1.addClass('highlight');
return false;
} else services1.removeClass('highlight');


if (services2.val()=='') {
services2.addClass('highlight');
return false;
} else services2.removeClass('highlight');


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
     url: url+'signup/process_business_signup',
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
})
   
   

        $("#mobile").intlTelInput();
		$("#mobilex").intlTelInput();


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



$(document).ready(function(e) {
var telInput = $("#mobilex"),
  errorMsg = $("#error-msg1"),
  validMsg = $("#valid-msg1");

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



                     // JAVASCRIPT CODE TO TAKE CARE OF CHARACTERS REMAINING FOR BRIEF HISTORY
					 $(document).ready(function(e) {
                        
 $('.remaining').each(function(){
    // find and store the count readout and the related textarea/input field  
	  var $count = $('.count',this);    
	  var $input = $(this).prev();
    // .text() returns a string, multiply by 1 to make it a number (for math)
	    var maximumCount = $count.text()*1;
    // update function is called on keyup, paste and input events   
	 var update = function(){
        var before = $count.text()*1;        var now = maximumCount - $input.val().length;
		//check if value remaining is less than or equal to 50 and change the colour
		if(now <= 100){ $(".remaining").css('color','red'); }
		//check if value remaining more than or equal to 50 and change the colour
		if(now >= 100){ $(".remaining").css('color','black'); }
        // check to make sure users haven't exceeded their limit    
		    if ( now < 0 ){            var str = $input.val();            $input.val( str.substr(0,maximumCount) );            now = 0;        }
        // only alter the DOM if necessary     
		   if ( before != now ){            $count.text( now );        }    };
    // listen for change (see discussion below)  
	  $input.bind('input keyup paste', function(){setTimeout(update,0)} );
    // call update initially, in case input is pre-filled 
	   update();
}); // close .each() 

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
