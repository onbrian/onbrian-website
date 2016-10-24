projectsApp.directive('projectsThumbnail', function() 
{ 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    },
    link: function(scope, element, attrs)
    {
    	scope.showCaption = function()
    	{
        element.find('.hover-thumbnail-caption').slideDown(250);
    	};

      scope.hideCaption = function()
      {
        element.find('.hover-thumbnail-caption').slideUp(250);
      };
    },
    templateUrl: '/views/partials/projectsThumbnail.ejs' 
  }; 
});