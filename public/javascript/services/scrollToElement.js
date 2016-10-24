projectsApp.factory("scrollToElement", ['$anchorScroll', '$location', function($anchorScroll, $location)
{
	return {
		scrollToElement: scrollToElement
	}

	function scrollToElement(elementID)
	{
		// offset for toolbar
		toolbarOffset = 50;
		$("body").animate({scrollTop: $(elementID).offset().top - toolbarOffset}, "fast");
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