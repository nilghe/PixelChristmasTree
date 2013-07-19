//  Creator Chris Nilghe 
//  http://nilghe.com
//  https://github.com/nilghe
//
//  <summary>
//    Spread holiday joy with a pixelated blinking Christmas tree
//  </summary>
//
//
//  <options>
//    numRows: Default is 16. Number of rows you want the tree to have. 
//    lightFlickerSpeed: Default speed is 500. Speed at which the lights on the tree flicker.
//  </options>

(function ($) {
	$.fn.pixelxmas = function (options){

		var settings = $.extend({
			numRows: 16,
			lightFlickerSpeed: 500
		}, options);

		var numRows = settings.numRows;
		var lightSpeed = settings.lightFlickerSpeed;

		/* Create rows for the pixelated tree */
		for (var i = 0; i < numRows; i++){
			$(this).append("<div class='tree-row'></div>");
		}

		/* Create the pixels in each row of the tree */
		var numPixels = 1;
		$('.tree-row').each(function(i) {
			for (var x = 0; x < numPixels; x++){
				$(this).append("<div class='tree-pixel'></div>");
			}
			numPixels++;
		});

		/* Create rows for trunk to be drawn in along with the trunk pixels */
		for (var i = 0; i < 3; i++){
			$('#tree-canvas').append("<div class='trunk-row'><div class='trunk-pixel'></div><div class='trunk-pixel'></div><div class='trunk-pixel'></div></div>");
		}

		/* Flicker the pretty lights! */
		christmasLights();
		window.setInterval(christmasLights, 500);

		/* Helper Methods */

		/* Flickering Christmas Lights Effect */
		function christmasLights() {
			$('.tree-pixel').removeClass("red-light blue-light yellow-light purple-light");
			$(shuffle($('.tree-pixel')).slice(0, 5)).addClass("red-light");
			$(shuffle($('.tree-pixel')).slice(0, 5)).addClass("blue-light");
			$(shuffle($('.tree-pixel')).slice(0, 5)).addClass("yellow-light");
			$(shuffle($('.tree-pixel')).slice(0, 5)).addClass("purple-light");
		}

		/* Shuffle the pixels of the tree using Fisher-Yates shuffle
		 * http://stackoverflow.com/questions/11186631/jquery-select-random-elements-with-same-class
		 */
		function shuffle(elements) {
			var m = elements.length, t, i;
			
			while (m) {
				i = Math.floor(Math.random() * m--); //Choose remaining elements
				
				//Swap elements around
				t = elements[m];
				elements[m] = elements[i];
				elements[i] = t;
			}
			
			return elements;
		}
	};
})(jQuery);