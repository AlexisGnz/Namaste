$(function() {
	$( "#tabs" ).tabs();	
});
$(document).ready(function(){
	$("h3.acordeon").on("click", function(){
		$(this).toggleClass("accordion-active");
		$(this).next(".acordeon-content").slideToggle();
		$(this).next(".acordeon-content").toggleClass('acordeon-content-active');
		$(this).toggleClass('acordeon-click');
		$(this).find('i').toggleClass('fa-arrow-circle-o-down');
		$(this).find('i').toggleClass('fa-arrow-circle-o-up');
	})
	$("h2.acordeon-madre").on("click", function(){
		$(this).toggleClass("accordion-madre-active");
		$(this).next(".acordeon-madre-content").slideToggle();
		$(this).next(".acordeon-madre-content").toggleClass('acordeon-madre-content-active');	
	})
	$(".icon-menu").on("click", function(){
		$(".menu_nav").toggleClass("mostrar");
		$(".icon-menu").toggleClass("fijo");
	})
	$(".icon-search").on("click", function(){
		$(".top-header").toggleClass("top-header-active");
		$(".top-search").toggleClass("top-search-active");
		$("#search").toggleClass("top-input-active");
		$(".icon-search").toggleClass("search-active");
	})
})
