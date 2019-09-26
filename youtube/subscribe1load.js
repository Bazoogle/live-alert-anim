 var name =  document.getElementById('name').innerHTML
 var text1 = name.toUpperCase();

			subscribe1.layers[2].t.d.k[0].s.t = text1;
      subscribe1L.layers[2].t.d.k[0].s.t = text1;
			if (name.length <= 17) {
				var animation = lottie.loadAnimation({
				container: document.getElementById('anim'),
				renderer: 'svg',
				loop: false,
				autoplay: true,
				rendererSettings: {
   			 	progressiveLoad: false
				},
        animationData: subscribe1,
        });
			} else { 
				var animation = lottie.loadAnimation({
				container: document.getElementById('anim'),
				renderer: 'svg',
				loop: false,
				autoplay: true,
				rendererSettings: {
   			 	progressiveLoad: false
				},
        animationData: subscribe1L,
        });
			}
