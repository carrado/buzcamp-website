// JavaScript Document

function get_approve(field,id,target,isDocumentReady)
		{
	var myAudio = new Audio("http://localhost/Carrado/img/242502__gabrielaraujo__pop-up-notification.wav");//Audio file

	//Fetch result if a new information exist on purchase request,notification and approved transactions
    var feedback = $.ajax({
        type: "POST",
        url: target,
        async: false
    }).complete(function(){
        setTimeout(function(){get_approve(field,id,target,isDocumentReady);}, 5000);//Set Interval to continually fetch result every 5secs
    }).responseText;

	 if(feedback > 0)
		{
			//if a new information exist
			    id.fadeIn();
				id.css({"background-color": '#e88337',});
			    id.html(feedback);
		}
		else
		{
			//if no new information exist
			id.hide();
		}

		if(feedback > field)
		{
			//if feedback is greater than value of field
			 if (isDocumentReady == true)//if user refreshed browser or $(document).ready(function) is initiated
			 {
				 var isDocumentReady = false;//Set to FALSE when continually fetching result every 5secs
			    var field = feedback;
						 }
						 else if(isDocumentReady == false)//this is initiated if data is now fetch through 5secs interval
						 {
							 if(window.innerWidth >= 1200)
							 {
								 myAudio.play();
							 }
			var field = feedback;
									 }
		}

		if(feedback < field)
		{
			//If user begins to attend to the notifications,as they start decreasing in values
			if(feedback > 0)
			{
				//if the value of feedback is still more than zero
				var result = (field - feedback);
				var final = (field - result);
				var field = final;
			}
		}


		 if(feedback == 0)
			{
				if (isDocumentReady == true)//if user refreshed browser or $(document).ready(function) is initiated
			 {
				 var isDocumentReady = false;
			 }
				var field = 0;
			}

		}
