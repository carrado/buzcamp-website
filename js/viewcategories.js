
/********** GET VALUE OF REMAINING CATEGORIES FOR THEIR PRODUCTS TO BE DISPLAYED***************/

$(document).ready(function()
{
var category = document.querySelector('input[name = "cat"]').value;

if(category != "")
{
  //if category has a value

var box = $(".p1");
get_categories(category,box);//pass the value to function which gets the products
}
else {
  //if category is empty

  $(".p1").hide();
}

});


$(document).ready(function()
{
var category = document.querySelector('input[name = "cat1"]').value;

if(category != "")
{
  //if category has a value

var box = $(".p2");
get_categories(category,box);//pass the value to function which gets the products
}
else {
  //if category is empty

  $(".p2").hide();
}

});


$(document).ready(function()
{

var category = document.querySelector('input[name = "cat2"]').value;

if(category != "")
{
  //if category has a value

var box = $(".p3");
get_categories(category,box);//pass the value to function which gets the products
}
else {
  //if category is empty

  $(".p3").hide();
}

});


$(document).ready(function()
{
var category = document.querySelector('input[name = "cat3"]').value;

if(category != "")
{
  //if category has a value

var box = $(".p4");
get_categories(category,box);//pass the value to function which gets the products
}
else {
  //if category is empty

  $(".p4").hide();
}
});


$(document).ready(function()
{
var category = document.querySelector('input[name = "cat4"]').value;

if(category != "")
{
  //if category has a value

var box = $(".p5");
get_categories(category,box);//pass the value to function which gets the products
}
else {
  //if category is empty

  $(".p5").hide();
}

});


$(document).ready(function()
{
var category = document.querySelector('input[name = "cat5"]').value;

if(category != "")
{
  //if category has a value

var box = $(".p6");
get_categories(category,box);//pass the value to function which gets the products
}
else {
  //if category is empty

  $(".p6").hide();
}

});


$(document).ready(function()
{
var category = document.querySelector('input[name = "cat6"]').value;

if(category != "")
{
  //if category has a value

var box = $(".p7");
get_categories(category,box);//pass the value to function which gets the products
}
else {
  //if category is empty

  $(".p7").hide();
}

});

$(document).ready(function()
{
var category = document.querySelector('input[name = "cat7"]').value;

if(category != "")
{
  //if category has a value

var box = $(".p8");
get_categories(category,box);//pass the value to function which gets the products
}
else {
  //if category is empty

  $(".p8").hide();
}

});


function get_categories(category,box)
{
$.ajax({
  type: "POST",
  url: url+"categories/categoryremainder/"+category,
  data: category,
  beforeSend: function()
  {
    box.html("<div class='catloading' style='margin-top: 8%;'></div>");
  },
  success: function(data)
  {
    $(".catloading").hide();
    box.html(data);
  }
});
return false;
};



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



/***************TO VIEW AND ORDER FOR LISTED PRODUCTS/ACTIVITY************/

$(document).ready(function(e) {

$(".view").click(function(e)
{

 var targeted_popup_class = 'popup-3';
        $('[data-popup="' + targeted_popup_class + '"]').fadeIn();

        e.preventDefault();

    $.ajax({
           type: "POST",
           url: url+"carrado_default/viewproduct",
           data: $(this).parent().parent().parent().serialize(),
		   beforeSend: function()
		   {

							$("#target").html("<div class='loading'></div>");

		   },
		   success: function(data)
           {

	            $(".loading").hide();

				if(window.innerWidth < 1200)
				{
				$("#target").animate({"height": 560, "width": '91.7%', "margin-top": 10, "margin-left": '5%', "overflow-y": 'scroll'});
				}
				else
				if(window.innerWidth >= 1200)
				{
				$("#target").animate({"height": 560, "width": '91.7%', "margin-top": 40, "margin-left": '4%'});
				}
           $("#target").html(data);
		   }
         });

    return false; // avoid to execute the actual submit of the form.
});
});



var url = "http://localhost/Carrado/index.php/";
