(function (tgt) {
	var target = $(tgt);
	var video = $('<video />', {
		id: 'video',
		src: 'https://theinspectorpress.com/s/5IuvZ2c2veXEkI-Z.mp4',
		type: 'video/mp4',
		controls: false,
		loop : true
	});
	video[0].play();
	video.click(function(){
		window.location = "https://www.dreamscape168.com/?referrer=tip";
	});
	video.css({
		width:"100%"
	})
	target.append(video);
})("#frame")