setTimeout(fade_out, 8000);

function fade_out() {
  $("anim").fadeOut().empty();
}

var animation = bodymovin.loadAnimation({
	container: document.getElementById('anim'),
	renderer: 'svg',
	loop: false,
	autoplay: true,
	path: 'https://cdn.jsdelivr.net/gh/Bazoogle/live-alert-anim/animation1.json',
});
