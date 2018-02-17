$( ".portfolio-item" ).hover(
	function() {
  $( this ).find(".portfolio-title-main").addClass("portfolio-title-main-active").removeClass("portfolio-title-main");
  $( this ).find(".portfolio-title-divider").addClass("portfolio-title-divider-active").removeClass("portfolio-title-divider");
  $( this ).find(".portfolio-title-sub").addClass("portfolio-title-sub-active").removeClass("portfolio-title-sub");
}, function() {
	$( this ).find(".portfolio-title-main-active").addClass("portfolio-title-main").removeClass("portfolio-title-main-active");
	$( this ).find(".portfolio-title-divider-active").addClass("portfolio-title-divider").removeClass("portfolio-title-divider-active");
	$( this ).find(".portfolio-title-sub-active").addClass("portfolio-title-sub").removeClass("portfolio-title-sub-active");
});

