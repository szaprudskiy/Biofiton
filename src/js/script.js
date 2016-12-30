
/*$( document ).ready(function() {
  if($('.search input').css('width', '200px')){
		console.log('hello');
		$('.search').css('backgroundColor', '#d3e8f6')
	}else{
		console.log('sad');
		$('.search').css('backgroundColor', '#fff')
	};
});
console.log(1)*/
 
$(function(){
	var burgerItem = $(".burger__upper, .burger__mid, .burger__lower");
 		var menu = $(".mobile-menu");
 		var burger = $('.burger');

	 	burger.on("click", function(){
	  	menu.fadeToggle();
	  	burgerItem.toggleClass('cliked'); 
 		})	



	var $itemFirst = $(".itemfirst");
	var $itemSecond = $(".itemsecond");
	var $itemThird = $(".itemthird");
	var $imgFirst  = $(".firstdescr");
	var $imgSecond  = $(".seconddescr");
	var $imgThird  = $(".thirddescr");

	$itemFirst.mouseover(function(){
		 $imgFirst.css({"top": "-1px", "height": "99%", "margin-top": "1px"});
		 $(".hide-text").css("display", "block");
	})
	$itemFirst.mouseout(function() {
		 $imgFirst.css({"top": "72%", "height" : "26%", "margin-top": "3px"});
		  $(".hide-text").css("display", "none");
	}),

	$itemSecond.mouseover(function(){
		$imgSecond.css({"top": "-1px", "height": "99%", "margin-top": "1px"});
		 $(".hide-text-s").css("display", "block");
	})
	$itemSecond.mouseout(function() {
		$imgSecond.css({"top": "72%", "height" : "26%", "margin-top": "3px"});
		$(".hide-text-s").css("display", "none");
	}),

	$itemThird.mouseover(function(){
		$imgThird.css({"top": "-1px", "height": "99%", "margin-top": "1px"});
		$(".hide-text-t").css("display", "block");
	})
	$itemThird.mouseout(function() {
		$imgThird.css({"top": "72%", "height" : "26%", "margin-top": "3px"});
		$(".hide-text-t").css("display", "none");
	});
$('.header__select').styler();

	/*validation*/
	$("#form").validate({
		rules:{
			firstname: {
				required: true,
				minlength: 6
			},
			surname: {
				required: true,
				minlength: 6
			},
			country: {
				required: true,
				minlength: 2
			},
			city: {
				required: true,
				minlength: 2
			},
			postcode: {
				required: true,
				minlength: 2
			},
			street: {
				required: true,
				minlength: 2
			},
			email: {
				required: true,
				email: true,
				minlength: 2
			}
		},
		messages:{
			firstname: "Please enter a valid your firstname"
		}
	});
	
})
	$(".kind__body").slick({
		responsive: [
		    {
		      breakpoint: 743,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        infinite: true,
		        arrows: true
		      }
    		}
    	]
	})

	$(".choice-slider").slick({
		responsive: [
		    {
		      breakpoint: 743,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        infinite: true,
		        arrows: true,
		        dots: true
		      }
    		}
    	]
	})


		