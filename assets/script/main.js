var feed = new Instafeed({
		get: 'user',
		userId: 4152793054,
		accessToken: '1822919008.8c76584.723126dc85974c4eb4196ed945be51bc',
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
