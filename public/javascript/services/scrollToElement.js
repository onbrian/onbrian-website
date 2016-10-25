projectsApp.factory("scrollToElement", ['$anchorScroll', '$location', function($anchorScroll, $location)
{
	return {
		scrollToElement: scrollToElement
	}

	function scrollToElement(elementID)
	{
		// offset for toolbar is 50px
		toolbarOffset = 50;
		// animation speed is 100ms
		animationSpeed = 100;
		$("body").animate({scrollTop: $(elementID).offset().top - toolbarOffset}, animationSpeed);
		/*
		// set offset to handle headerbar
		$anchorScroll.yOffset = 50;

		// set the $location.hash to `newHash` and
	    // $anchorScroll will automatically scroll to it
		if ($location.hash() !== elementID) 
		{
	        $location.hash(elementID);
      	}
      	// call $anchorScroll() explicitly,
	    // since $location.hash hasn't changed 
      	else 
      	{
	        $anchorScroll();
    	}
    	*/
	}
}]);