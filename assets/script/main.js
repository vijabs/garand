var feed = new Instafeed({
		get: 'user',
		userId: 4152793054,
		accessToken: '4054629837.0efbe26.bc142395f83a452f8ae03fe28345789f',
		target: 'instagram',
		resolution: 'standard_resolution',
		after: function() {
			var el = document.getElementById('instagram');
			if (el.classList)
				el.classList.add('show');
			else
				el.className += ' ' + 'show';
		}
});

feed.run();
