
	$(document).ready(function(e) {
    $(".edit_profile").fadeIn();

		if(window.innerWidth <= 768)
		{
			$(".edit_profile").css({"margin-top": '0%' });
		}

});

$(document).ready(function(e) {
    $(".close3").click(function(e) {
		$(".popup-3").fadeOut();

		$("#target").hide();

		$("#target").css({"height": '', "width": '', "margin-top": '', "margin-left": ''});

        e.preventDefault();
    });
});

/******************************************CLOSE POP UP WITH ESCAPE KEY****************************************/
$(document).ready(function(e) {
    window.document.onkeydown = function(e)
	{
		if(!e)e = event;
		if(e.keyCode == 27)
		{
$(".popup-3").fadeOut();

		$("#target").hide();

				$("#target").css({"height": '', "width": '', "margin-top": '', "margin-left": ''});

        e.preventDefault();
		}
	}
});


 $(document).ready(function()
 {
	 if(window.innerWidth >= 1200)
	 {
 $('#edit_display').slimScroll({
     width: '99.5%',
 	height:'540px',
     size: '7px',
     position: 'right',
     color: '#202020',
     start:'top',
 	allowPageScroll: false,
 	 railVisible: true,
 	 wheelStep: 10,
 	 alwaysVisible: false,
 });
 }
 });



 /*
 $(document).ready(function(e) {
	 $(".check").click(function(e) {

    var win = $("#edit_display").scrollTop();
	var win2 = $("#edit_display").height();
	var win3 = $(".edit_profile").height();

	var total = ((win + win2) - win3);

	alert(total);

	 });
});
	*/

	   $("#phone").intlTelInput();



	    $(document).ready(function()
   {
     $("#edit_profile_form").submit(function()
     {

 var name = $('input[name=name]');
 var nation = $('input[name=nation]');
 var state = $('input[name=state]');
 var address = $('input[name=address]');
 var occupation = $('input[name=occupation]');
  var email = $('input[name=email]');
 var mobile = $('input[name=mobile]');

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

if (occupation.val()=='') {
occupation.addClass('highlight');
return false;
} else occupation.removeClass('highlight');

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

if (mobile.val()=='') {
mobile.addClass('highlight');
return false;
} else mobile.removeClass('highlight');


  var reset = function()
  {
	  $(".submit").delay(6500).fadeIn().css('border-color','');
	  $(".submit").css('border-width', 1);
	  $(".message").delay(5000).fadeOut();
  }

       $.ajax({
         method: 'POST',
         url: url+'profile/editprofile',
         data: $(this).serialize(),
         beforeSend: function()
         {
            $(".submit").css('border-color','blue');
			$(".submit").css('border-width', 2);
          },
        success: function(data)
         {
			 $(".submit").fadeOut();
			 $(".message").delay(1500).fadeIn();
			 $(".message").html(data);

			 reset();//reset the submit button and display message span
            }
       })
       return false;
     })
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

	var base_url = "http://localhost/Carrado/";
	var url = "http://localhost/Carrado/index.php/";
