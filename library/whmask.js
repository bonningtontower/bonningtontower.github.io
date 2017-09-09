jQuery(document).ready(function(){
   // Code for World Hotels QuickRes Mask
   
   var today = new Date();
	var yesterday = new Date();
	yesterday.setDate(today.getDate()-1);

	jQuery('#in_day').datepicker({ showOn: "both", buttonImageOnly: true, buttonImage: 'gfx/calendar1.png', dateFormat: 'yy-mm-dd', minDate: yesterday });
  

	jQuery('#out_day').datepicker({ showOn: "both", buttonImageOnly: true, buttonImage: 'gfx/calendar1.png', dateFormat: 'yy-mm-dd', minDate: yesterday });
  

   
   jQuery('#booking').click(function() {
	 // alert('Handler for .submit() called.');
	 
	 var arrivaldate = jQuery("#in_day").val();
	 //alert("Arrival Date: " + arrivaldate);
	 var departuredate = jQuery("#out_day").val();
	 var rooms = jQuery("#rooms").val();
	 var adults = jQuery("#adults").val();
	 var children = jQuery("#children").val();
	 var occupancy = parseInt(adults) + parseInt(children);
	 var error = true;
	 
	 //alert ("Rooms: " + rooms + " Adults: " + adult + " Children: " + children + " Occupancy: " + occupancy);

	 //var url = "https://www.yourreservation.net/tb3/index.cfm?bf=HADXBBON&arrivalDate=" + arrivaldate + "&departuredate=" + departuredate + "&language=en";
	 var url = "https://www.yourreservation.net/tb3/index.cfm?bf=HADXBBON&arrivaldate=" + arrivaldate + "&departuredate=" + departuredate + "&language=en" + "&rooms=" + rooms + "&adults=" + adults + "&children=" + children;
	
	 if (jQuery("#in_day").val() == "select"){
		 alert("Please select a check in date");
		 error = false;
	 }
	 
	 if (jQuery("#out_day").val() == "select"){
		 alert("Please select a check out date");
		 error = false;
	 } 
	// alert(url);
	 
	 if (error == true){
	   window.location = url;
	 }
	
	});
    

});
