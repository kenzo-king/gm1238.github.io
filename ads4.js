	var bgLandscape = document.getElementById("background-video-landscape");
	var bgPortrait = document.getElementById("background-video-portrait");

	if (window.matchMedia("(orientation: landscape)").matches) {
		bgLandscape.play();
		} else {
		bgPortrait.play();
	}

	$(window).resize(function() {
		if (window.matchMedia("(orientation: landscape)").matches) {
			bgLandscape.play();
			} else {
			bgPortrait.play();
		}
	});