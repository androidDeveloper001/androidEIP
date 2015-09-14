 $(document).ready(function($) {
      $("#owl-example").owlCarousel({
			  
			 itemsDesktop : [600,3],
			  itemsDesktopSmall : [600,3]
		 
		  });
		     $("#owl-example-a").owlCarousel({
			 
			 itemsDesktop : [600,3],
			  itemsDesktopSmall : [600,3]
		 
		  });
		     $("#owl-example-b").owlCarousel({
			  
			 itemsDesktop : [600,3],
			  itemsDesktopSmall : [600,3]
		 
		  });
		  $("#owl-demo-month").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
		  $('a').css("text-decoration","none !important");
		  $('a').css("color","#fff !important");
		  var winWidth=$(window).width(); 
		  if(winWidth<321){
		  $('.form-box').css('width','120%');
	}
	$('.tabs-b,.tabs-c,.tabs-d,.tabs-e').hide();
	$('.tabs-a').show();
	$('#my-request').click(function(){
		$('.tabs-a,.tabs-b,.tabs-d,.tabs-e').hide();
		$('.tabs-c').show();
		
	});
	$('#upcoming-holidays').click(function(){
		$('.tabs-a,.tabs-b,.tabs-c,.tabs-e').hide();
		$('.tabs-d').show();
	});
		$('#leave-balance').click(function(){
		$('.tabs-a,.tabs-b,.tabs-c,.tabs-d').hide();
		$('.tabs-e').show();
	});
		$('#pending-approvals').click(function(){
		$('.tabs-d,.tabs-a,tabs-c,.tabs-e').hide();
		$('.tabs-b').show();
	});
			$('.pageTitle').click(function(){
		$('.tabs-d,.tabs-b,tabs-c,.tabs-e').hide();
		$('.tabs-a').show();
	});
	


	
 });
 $('#tab-my-bookings').hide();
 $('.show-notifications').click(function(){
	$('#tab-my-bookings').show();
	$('.room-list').hide()	
 });
  $('.show-rooms').click(function(){
		$('.room-list').show();
	$('#tab-my-bookings').hide()	
 })
 	$('#changeLocation-popup,#triangle-up').hide();
 $('#changeLocation').click(function(){
	$('#changeLocation-popup,#triangle-up').show();
 });
 $('.book-room-form-inner').click(function(){
	 	$('#changeLocation-popup,#triangle-up').hide();
 })
 $('.filter-section').hide();
  $('.show-results').hide();
 $('.search-room').click(function(){
 $('.book-room-form-inner').slideUp();
 $('.show-results').show();
	$('.filter-section').show();
 })
 
 //filter-section
$('.filter-search').click(function(){
alert()
 $('.show-results').show();
	 $('.book-room-form-inner').slideUp();


})
 
  	$('body').on('click','#search-room',function(){
	$('.book-room-form-inner').slideToggle();
	 $('#search-room i').toggleClass('fa-angle-down','fa-angle-up');
	}) ;
 	$('.read-more-arrow').click(function(){
		$(this).siblings('.alert-list-inner').slideToggle();
		
		$(this).children('i').toggleClass('fa-minus-circle','fa-plus-circle');
 
	}) ;
	$('#show-itinerary').click(function(){

	$('.show-created-itinerary').slideToggle();
	 $('#show-itinerary i').toggleClass('fa-angle-down','fa-angle-up');
	});
		$('#add-itinerary').click(function(){

	$('#toggle-add-itinerary').slideToggle();
	 $('#add-itinerary i').toggleClass('fa-angle-down','fa-angle-up');
	});
	
	 //travel-requests-details
	 	$('.travel h4').click(function(){
	$('#travelList').slideToggle();
	 $('.travel h4 i').toggleClass('fa-angle-down','fa-angle-up');
	});
		 	$('.accommodation h4').click(function(){
	$('.accommodation-details ').slideToggle();
	 $('.accommodation h4 i').toggleClass('fa-angle-down','fa-angle-up');
	});
		 	$('.advanced h4').click(function(){
	$('.advancedList').slideToggle();
	 $('.advanced h4 i').toggleClass('fa-angle-down','fa-angle-up');
	});
		 	$('.itinerary h4').click(function(){
	$('.itinerary-details').slideToggle();
	 $('.itinerary h4 i').toggleClass('fa-angle-down','fa-angle-up');
	});
	 
	
		 //travel-raise-requests
		 if($('.show-remarks').length>0){
			$('.show-remarks').hide();
		 }
		 $('body').on('change', '#select-room',function(){
			var val=$('#select-room').val();
			if(val=='others'){
				$('.show-remarks').show();
			}
			else{
				$('.show-remarks').hide();
			}
		 });
		  if($('.return-on').length>0){
			$('.return-on').hide();
		 }
		 	 $('body').on('change', '#flip-min',function(){
			var val=$('#flip-min').val();
			if(val=='on'){
				$('.return-on').show();
			}
			else{
				$('.return-on').hide();
			}
		 });
	

var slidingduration = 300;
var count=0;
				$('.setting-panel-btn').click(function () {
					if($(this).hasClass('setting-panel-btn-show')) {
					 $('.setting-panel').animate({left:'-3px'},slidingduration);   
						$('.setting-panel-btn').css('left','60px');				 
					 $(this).removeClass('setting-panel-btn-show');
					 $('.top-tools-slider .carousel-control').css("z-index" , "300");
					}
					
				});
				
				$('.setting-panel-btn').click(function(){
					count=count+1;
					$('.Leave-actions').hide();
					$('.Leave-actions-icons').show();
					$('.setting-panel-inner').css('width','60px');
					$('.setting-panel-btn').css('left','60px');
					if(count==2){
					$('.Leave-actions').show();
					$('.Leave-actions-icons').hide();
						$('.setting-panel-btn').css('left','204px'); 
						$('.setting-panel-inner').css('width','108%');
						 $('.side-bar-nav i').removeClass('fa-angle-right');
					  $('.side-bar-nav i').addClass('fa-angle-left');
					}
					if(count==3){
						$(this).addClass('setting-panel-btn-show');
						$('.setting-panel').css('left','-195px'); ;
						$('.setting-panel-btn').css('left','189px'); 
						 $('.side-bar-nav i').removeClass('fa-angle-left');
					  $('.side-bar-nav i').addClass('fa-angle-right');
						count=0;
					}
				})