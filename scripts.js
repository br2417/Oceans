/**
 * @author
 */

/*this is an array of all of our images in order*/ 


var images = ["drain_0m.png", "drain_50m.png", "drain_100m.png", "drain_200m.png", "drain_500m.png", "drain_1km.png", 
"drain_2km.png", "drain_3km.png", "drain_5km.png", "drain_ed.png", "drain_nl.png"];


/* Index ofthe current image in our images array */
var index = 0

/* Set button events here */
function setNav() {
	console.log("setNav");
	
	$(".button").on("click", function() {
		
		var isNext = $(this).hasClass("next");
		
		
		/* The below means: if isNext is clicked on and if index is not equal to (images.length-1)*/
		if (isNext == true && index != (images.length-1)) {
			index = index + 1;
		} else if (isNext == false && index > 0) {
			index = index - 1;
		}
		
		
		if (index == 0) {
			$(".button.prev").addClass("disabled");	
		} else if (index == (images.length-1)) {
			$(".button.next").addClass("disabled");
		} else {
			$(".button").removeClass("disabled");
		}
		updateImage();
		
		
		
		/*
		 * console.log(isNext);
		 * 
		 * 
		
		index = index + 1;
		updateImage();
		*/
			
	});
	
	
	
}




/* change image here */
function updateImage() {
	$(".image-holder").html(
		"<img src='Images/"+images[index]+"'/>"
	);
	
	console.log(images[index]);
}

/* Load the first image into our image holder*/
$(document).ready(function() {
	
	
	/* to access images in folder, this shows the path that we have to take
	 ++ means that we are concatenating things together */
	
	$(".image-holder").html(
		"<img src='Images/"+images[index]+"'/>"
		
	);
	
	/*refers to style of buttons */
	$(".button.prev").addClass("disabled");
	
	setNav();
	
});

console.log(images);




