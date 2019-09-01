  		  		console.log("Should be second");
            var name =  document.getElementById('name').innerHTML;
						var text1 = name.toUpperCase();
            var amount = document.getElementById('amount').innerHTML;
            var text2 = amount.replace("$", "");
            
			donation1.layers[0].t.d.k[0].s.t = "\r"+text2;
			donation1.layers[2].t.d.k[0].s.t = text1;

			var animation = lottie.loadAnimation({
				container: document.getElementById('anim'),
				renderer: 'svg',
				loop: false,
				autoplay: true,
					rendererSettings: {
   			 	progressiveLoad: false
				},
				animationData: donation1,
			});
