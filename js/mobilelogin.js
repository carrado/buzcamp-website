// JavaScript Document


     $(document).ready(function(){
$("#login").submit(function(){

$.post(url+"login_ctrl/index",
{ username: $("#username").val(), password: $("#password").val() },
function(data){
	if(data == 1)
 {
   window.location.href= url+"profile/index";
 }
 else if(data == 2)
 {
   window.location.href= url+"virtual_account/index";
 }
 else 
 {
 $('.login_error').html(data);
 }
 })
return false;
}
)
 }
 )



$(document).ready(function(e) {
    
	$("#passwordrecovery").submit(function(e) {
        
		$.ajax({
			type: 'POST',
			url: url+"home_ctrl/process_change_password",
			data: $(this).serialize(),
			beforeSend: function()
			{
				$(".message").html("<div class='loading'></div>");
			},
			success: function(data)
			{
				$(".loading").hide();
				$(".message").html(data);
			}
		});
		return false
    });
});
 
 

 var url = "http://localhost/Carrado/index.php/";
