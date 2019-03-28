jQuery.loadScript = function (url, callback) {
    jQuery.ajax({
        url:'https://cdn.jsdelivr.net/gh/Bazoogle/live-alert-anim/test-demo-data.js',
        dataType: 'script',
        success: callback,
        async: true
    });
}
var text1 = "Bouncing text";

test_demo_data.layers[1].t.d.k[0].s.t = text1;

var animation = lottie.loadAnimation({
	container: document.getElementById('anim'),
	renderer: 'svg',
	loop: true,
	autoplay: true,
		rendererSettings: {
    	progressiveLoad: false
	},
	animationData: test_demo_data,
});
