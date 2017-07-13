
$(document).ready(function()
{
$(window).scrollTop(0);
});



     /********************STYLE SELECT INPUT******************/

$(document).ready(function(e) {

	$('select').selectpicker();

});



$(document).ready(function()
{
	$("#automobileform").submit(function()
	{
		var make = $('input[name=make]');
	  var model = $('input[name=model]');
	  var year = $('input[name=year]');
	  var power = $('input[name=power]');
	  var price = $('input[name=price]');
	  var describe = $('textarea[name=description]');

	  if (make.val()=='') {
	  make.addClass('highlight');
	  return false;
	  } else make.removeClass('highlight');

	  if (model.val()=='') {
	  model.addClass('highlight');
	  return false;
	  } else model.removeClass('highlight');

	  if(year.val()==''){
	    year.addClass('highlight');
	    return false;
	  }else year.removeClass('highlight');

	  if (power.val()=='') {
	  power.addClass('highlight');
	  return false;
	  } else power.removeClass('highlight');

	  if (price.val()=='') {
	  price.addClass('highlight');
	  return false;
	  } else price.removeClass('highlight');

	  if (describe.val()=='') {
	  describe.addClass('highlight');
	  return false;
	  } else describe.removeClass('highlight');

	$.ajax({
	 type: "POST",
	 url: url+"uploadproduct/automobileupload",
	 data: $(this).serialize(),
	 beforeSend: function()
	 {
		$(".center").html("<div class='loading'></div>");
	},
	success: function(data)
	{
		if(data != "")
		{
					 $(".loading").hide();
							$(".center").html(data);
		}
		else if(data == "")
		{
			$(".loading").hide();

 if(window.innerWidth > 768)
 {
				var targeted_popup_class = 'popup-1';
				 $('[data-popup="' + targeted_popup_class + '"]').fadeIn();

				 e.preventDefault();
 }
	}
}
	})
	return false;
	});
})

$(document).ready(function()
{
	if(window.innerWidth >= 1200)
	{
$('#scroller').slimScroll({
	 width: '101%',
height:'570px',
	 size: '8px',
	 position: 'right',
	 color: '#202020',
	 start:'top',
allowPageScroll: false,
 railVisible: true,
 wheelStep: 10,
 alwaysVisible: false,
 })
 }
 else {
	 $('#scroller').slimScroll({
 		 width: '101%',
 	height:'500px',
 		 size: '8px',
 		 position: 'right',
 		 color: '#202020',
 		 start:'top',
 	allowPageScroll: false,
 	 railVisible: true,
 	 wheelStep: 10,
 	 alwaysVisible: false,
})
 }
});


/***************************************PROCESS UPLOAD COVER PHOTO***************************/

$(document).on("ready", function() {
	var cover = 1;
    $("#uploadBtn3").fileinput({
        uploadAsync: false,
	showUpload:false,
        uploadUrl: url+"uploadproduct/automobilephoto/"+cover, // your upload server url
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
        uploadUrl: url+"uploadproduct/automobilephoto/"+cover, // your upload server url
		showBrowse: false,
		showCaption: false,
		browseOnZoneClick: true,
    });
});

$(document).on("ready", function() {
	var cover = 3;
    $("#uploadBtn5").fileinput({
        uploadAsync: false,
	showUpload:false,
        uploadUrl: url+"uploadproduct/automobilephoto/"+cover, // your upload server url
		showBrowse: false,
		showCaption: false,
		browseOnZoneClick: true,
    });
});

$(document).on("ready", function() {
	var cover = 4;
    $("#uploadBtn6").fileinput({
        uploadAsync: false,
	showUpload:false,
        uploadUrl: url+"uploadproduct/automobilephoto/"+cover, // your upload server url
		showBrowse: false,
		showCaption: false,
		browseOnZoneClick: true,
    });
});



$(document).ready(function()
{
   $(".cloc").click(function()
	 {
		 var id = document.querySelector('input[name = "username"]').value;

		 $.ajax({
	 	 type: "POST",
	 	 url: url+"uploadproduct/automobile"+id,
	 	 data: id ,
	 	 beforeSend: function()
	 	 {

	 	},
	 	success: function(data)
	 	{
		  $(".result").html(data);
		}
	});
	return false;
})
})



$(document).ready(function()
{
$(".close1").click(function()
{
	var targeted_popup_class = 'popup-1';
	 $('[data-popup="' + targeted_popup_class + '"]').fadeOut();

	 e.preventDefault();
 })
});


  var url = "http://localhost/Carrado/index.php/";
  var base_url = "http://localhost/Carrado/";
