$(function(){
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
})