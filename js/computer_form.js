angular.module('staticSelect', [])
 .controller('SelectController', ['$scope', function($scope) {
   $scope.data = {
    class: null,
    option1: 'option-1'
   };

   $scope.forceUnknownOption = function() {
     $scope.data.class = 'nonsense';
   };
}]);

// JAVASCRIPT CODE TO TAKE CARE OF CHARACTERS REMAINING FOR PRODUCT DESCRIPTION
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




          $(document).ready(function()
          {
            $("#computerform").submit(function()
            {
            var name = $('input[name=name]');
            var brand = $('input[name=brand]');
            var price = $('input[name=price]');
            var describe = $('textarea[name=description]');

            if (name.val()=='') {
            name.addClass('highlight');
            return false;
          } else name.removeClass('highlight');

          if(brand.val()==''){
            brand.addClass('highlight');
            return false;
          }else brand.removeClass('highlight');

          if(price.val()==''){
            price.addClass('highlight');
            return false;
          }else price.removeClass("highlight");

            if (describe.val()=='') {
            describe.addClass('highlight');
            return false;
            } else describe.removeClass('highlight');

            $.ajax({
             type: "POST",
             url: url+"computerproduct/computerupload",
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

                        if((data == '#categoryselect') || (data == '#salesselect'))
                        {
                          $(data).fadeIn();
                        }
                       else if((data != '#categoryselect') || (data != '#salesselect'))
                         {
                          $(data).addClass("highlight");
                        }
                         if(data != '#categoryselect')
                        {
                          $("#categoryselect").fadeOut();
                        }
                        if(data != '#salesselect')
                        {
                          $("#salesselect").fadeOut();
                        }
              }
              else if(data == "")
              {
                $(".loading").hide();

         $('input.highlight').removeClass("highlight");
         $("#categoryselect").fadeOut();
         $("#salesselect").fadeOut();

            if(window.innerWidth > 768)
            {
                  var targeted_popup_class = 'popup-1';
                   $('[data-popup="' + targeted_popup_class + '"]').fadeIn();

                   e.preventDefault();
            }
            else {
             $(".next").fadeOut();
            $(".product_photoxs").slideDown();
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
            height:'550px',
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


            /***************************************PROCESS UPLOAD PRODUCT PHOTO***************************/

            $(document).on("ready", function() {
              var cover = 1;
                $("#uploadBtn3").fileinput({
                    uploadAsync: false,
                   showUpload:false,
                    uploadUrl: url+"computerproduct/computerphoto", // this is actually not important
                showBrowse: false,
                showCaption: false,
                browseOnZoneClick: true,
                dropZoneClickTitle: "<img src="+base_url+"img/laptop_318-75257.jpg>",
                });
            });

            $(document).on("ready", function() {
              var cover = 1;
                $("#uploadBtn4").fileinput({
                  uploadAsync: false,
                 showUpload:false,
                  uploadUrl: url+"computerproduct/computerphoto", // this is actually not important
              showBrowse: false,
              showCaption: false,
              browseOnZoneClick: true,
              dropZoneClickTitle: "<img src="+base_url+"img/laptop_318-75257.jpg>",
                });
            });

            $(document).on("ready", function() {
                $("#uploadBtn5").fileinput({
                  uploadAsync: false,
                 showUpload:false,
                  uploadUrl: url+"computerproduct/computerphoto", // this is actually not important
              showBrowse: false,
              showCaption: false,
              browseOnZoneClick: true,
              dropZoneClickTitle: "<img src="+base_url+"img/laptop_318-75257.jpg>",
                });
            });

            $(document).on("ready", function() {
                $("#uploadBtn6").fileinput({
                  uploadAsync: false,
                 showUpload:false,
                  uploadUrl: url+"computerproduct/computerphoto", // this is actually not important
                 showBrowse: false,
                 showCaption: false,
                 browseOnZoneClick: true,
                 dropZoneClickTitle: "<img src="+base_url+"img/laptop_318-75257.jpg>",
                });
            });

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
