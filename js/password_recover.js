
$(document).ready(function(e) {
 
  $("#change_password").submit(function(e) {
    
	var pswrd1 = $('input[name=password1]');
	var pswrd2 = $('input[name=password2]');
	
	if(pswrd1.val() == '')
	{
		pswrd1.css('border-color','red');
		return false;
	}
	else pswrd1.css('border-color','');
	
	if(pswrd2.val() == '')
	{
		pswrd2.css('border-color','red');
		return false;
	}
	else pswrd2.css('border-color','');
	
		$.ajax({
			type: 'POST',
			url: url+'home_ctrl/changepassword',
			data: $(this).serialize(),
			beforeSend: function()
			{
			},
			success: function(data)
			{
				if(data != '')
				{
				$(".alert").html(data);
				}
				else
				{
					window.location.href= url+"profile/index";
				}
			}
		});
		return false
});
 
});


 var url = "http://localhost/Carrado/index.php/";
