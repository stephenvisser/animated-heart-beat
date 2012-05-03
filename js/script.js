//A variable to keep track of which image is currently selected
var currentImg;

$(function(){
	//When the button is clicked, start or stop the animation
	$('#button').click(function() {
		$('#ball').toggleClass('running');
		$('#imageContainer').toggleClass('running');
	});

	var imgContainer = $('#imageContainer');
	//Create elements for all 20 images
	for (var i=1; i <= 20; i++)
	{
		var newImg = $(document.createElement('img'));
		newImg.attr('src','bg' + i.toString(10) + '.jpg');
		imgContainer.append(newImg);
	}

	//Set the currentImage global variable to be the first child
	currentImg = imgContainer.children(":first");
	currentImg.addClass('selected');
	
	//Whenever the animation iteration has an event, switch the background
	//images
	window.addEventListener('webkitAnimationIteration',function( event ) {
		currentImg.removeClass('selected');
		currentImg = currentImg.next();
		if (currentImg.length === 0)
		{
			//Loop around when we've reached the last img
			currentImg = imgContainer.children(":first");
		}
		currentImg.addClass('selected');
	});
});
