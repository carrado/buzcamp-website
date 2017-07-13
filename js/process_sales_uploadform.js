// JavaScript Document

/*                                      Functions to validate and submit forms (AUTOMOBILE)                */

$(document).ready(function()
{
$('#automobileform').ajaxForm({
        dataType: 'json',
        beforeSend : processbefore,
        success: processJson


});

function processbefore()
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

$(".loading").show();

if((make.val()!='') && (model.val !='') && (year.val()!='') && (power.val()!='') && (price.val()!='') && (describe.val()!=''))
{
  var photo = document.getElementById("uploadBtn");
  var photo1 = document.getElementById("uploadBtn1");
  var photo2 = document.getElementById("uploadBtn2");
  var photo3 = document.getElementById("uploadBtn3");

  if((photo.value.length < 1) || (photo1.value.length < 1) || (photo2.value.length < 1) || (photo3.value.length < 1))
  {
    $(".loading").hide();

$('.results').html("<h5 align='center' style='color:#e88337; font-weight:bold;'> Please insert images for this product </h5>");
  }
}
}

function processJson(data) {
  
window.location.href="http://localhost/Carrado/index.php/salesforum/index";

}
})
