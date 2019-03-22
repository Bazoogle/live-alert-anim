var reqAnim = new HXLHttpRequest();
reqAnim.open('GET', 'https://raw.githubusercontent.com/Bazoogle/live-alert-anim/master/animation1.json');
reqAnim.onload = function () {
	var animData = JSON.parse(reqAnim.responseText);
}
reqAnim.send();

var animation = bodymovin.loadAnimation({
	container: document.getElementById('anim'),
	renderer: 'svg',
	loop: false,
	autoplay: true,
	animationData: animData,
})
