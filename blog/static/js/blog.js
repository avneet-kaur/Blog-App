var bgImageArray = ['https://unsplash.it/2000/1200?image=40', 'https://unsplash.it/2000/1200?image=1074'],
timer = 4;

bgImageArray.forEach(function(img){
    new Image().src =  img;
});

function backgroundSequence() {
	window.clearTimeout();
	var k = 0;
	for (i = 0; i < bgImageArray.length; i++) {
		setTimeout(function(){
			document.documentElement.style.background = "url(" + bgImageArray[k] + ") no-repeat center center fixed";
			document.documentElement.style.backgroundSize ="cover";
		if ((k + 1) === bgImageArray.length) {
			setTimeout(function() {
				backgroundSequence()
			}, (timer * 1000))
		}
		else {
			k++;
			}
		}, (timer * 1000) * i)
	}
}
backgroundSequence();
