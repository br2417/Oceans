/**
 * @author
 */

/*this is an array of all of our images in order*/ 


var images = ["drain_0m.png", "drain_50m.png", "drain_100m.png", "drain_200m.png", "drain_500m.png", "drain_1km.png", 
"drain_2km.png", "drain_3km.png", "drain_5km.png", "drain_ed.png", "drain_nl.png"];

var index = 0

$(document).ready(function() {
	
	
	/* to access images in folder, this shows the path that we have to take
	 ++ means that we are concatenating things together */
	
	$(".image-holder").html(
		"<img src='Images/"+images[index]+"'/>"
		
	);
	
});

console.log(images);




