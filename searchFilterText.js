$('#searchBrands').on('keyup', function () {
	$('.button-search').hide('500');
	var self = $(this);
	var searchString = self.val();
	var advertisersCats = $('.ss_advertisers_cats');
	advertisersCats.each(function () {
		var self = $(this);
		var title = self.find('.advertiser-title').first().text();
		if (!title.match(new RegExp(searchString, 'gi'))) {
			self.hide();
		} else {
			self.show();
		}
		if (searchString.length === 0) {
			self.show();
			$('.button-search').show('500');
		}
	});
});