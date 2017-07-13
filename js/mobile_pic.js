/*********************************************PROCESS UPLOAD PROFILE PIC*************************************/

$(document).ready(function(e) {

$('#uploadButton').on('change', function () {

$(".profilephoto"). slideDown();
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


$('.upload-result').on('click', function (ev) {

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
});

var url = "http://localhost/Carrado/index.php/";
