/*********************************************PROCESS UPLOAD PROFILE PIC*************************************/

$(document).ready(function(e) {

$('#uploadButton').on('change', function () {

$(".profilephoto"). fadeIn();
})
});

$(document).ready(function(e) {

$uploadCrop = $('#upload-demo').croppie({

    enableExif: true,

    viewport: {

        width: 150,

        height: 150,

        type: 'circle'

    },

    boundary: {

        width: 200,

        height: 200

    }

});

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



/*************************************************************
|  THIS WORKS FOR SIGN UP
| HERE USER IS UPLOADING HIS/HER PROFILE PIC DURING
|  SIGN UP
**************************************************************/


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
        window.location.href=url+"virtual_account/index";
      }


			}

		});

	});

});


/*********************************************************************
|  THIS WORKS FOR EDITING PROFILE PIC FOR ACTIVE USERS
|  HERE, USER HAS SIGNED UP ALREADY
*********************************************************************/


$('.uploadresult').on('click', function (ev) {

	$uploadCrop.croppie('result', {

		type: 'canvas',

		size: 'viewport'

	}).then(function (resp) {


		$.ajax({

			url: url+"profile/profilephotoupload",

			type: "POST",

			data: {"image":resp},//image data passed to $_POST['image'] in controller

			success: function (data) {

				window.location.href= url+"profile/index";

			}

		});

	});

});



/*********************************************************************
|  THIS WORKS FOR EDITING PROFILE PIC FOR VIRTUAL USERS
|  HERE, USER HAS SIGNED UP ALREADY
*********************************************************************/


$('.upload_result').on('click', function (ev) {

	$uploadCrop.croppie('result', {

		type: 'canvas',

		size: 'viewport'

	}).then(function (resp) {


		$.ajax({

			url: url+"virtual_account/profilephotoupload",

			type: "POST",

			data: {"image":resp},//image data passed to $_POST['image'] in controller

			success: function (data) {

				window.location.href= url+"virtual_account/index";

			}

		});

	});

});


});

var url = "http://localhost/Carrado/index.php/";
