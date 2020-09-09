jQuery(document).ready(function () {
	var hndl = setInterval(function () {
		if (jQuery('[data-role="next-page"]').length > 0) {
			init();
			clearInterval(hndl);
		}
	}, 500);

	function init() {
		// page one inputs
		var $pageOneFirstName = jQuery('[data-id="67537304"] input').eq(0),
			$pageOneLastName = jQuery('[data-id="67537304"] input').eq(1),
			$pageOneYear = jQuery('[data-id="67539478"] input'),
			$pageOneMake = jQuery('[data-id="67539480"] input'),
			$pageOneModel = jQuery('[data-id="67539482"] input'),
			$pageOneLength = jQuery('[data-id="67539506"] input'),
			$pageOneRegNumber = jQuery('[data-id="67539517"] input'),
			$pageOneWinterizationMonth = jQuery('#date-0000000c-month'),
			$pageOneWinterizationDay = jQuery('#date-0000000c-day'),
			$pageOneWinterizationYear = jQuery('#date-0000000c-year');

		// page four inputs
		var $pageFourFirstName = jQuery('[data-id="67587327"] input').eq(0),
			$pageFourLastName = jQuery('[data-id="67587327"] input').eq(1),
			$pageFourYear = jQuery('[data-id="67636764"] input'),
			$pageFourMake = jQuery('[data-id="67636767"] input'),
			$pageFourModel = jQuery('[data-id="67636778"] input'),
			$pageFourLength = jQuery('[data-id="67636787"] input'),
			$pageFourRegNumber = jQuery('[data-id="67587374"] input'),
			$pageFourWinterizationDate = jQuery('[data-id="67736412"] input');

		var $nextPageButtonForPageThree = jQuery(
				'[data-role="next-page"][data-page-target="3"]'
			),
			$pageThree = jQuery('[data-page-index="3"]');

		$nextPageButtonForPageThree.on('click', function () {
			var hndl = setInterval(function () {
				if ($pageThree.attr('data-is-current-page') !== undefined) {
					clearInterval(hndl);

					setTimeout(function () {
						$pageFourFirstName
							.val($pageOneFirstName.val())
							.trigger('change');
						$pageFourLastName
							.val($pageOneLastName.val())
							.trigger('change');
						$pageFourYear.val($pageOneYear.val()).trigger('change');
						$pageFourMake.val($pageOneMake.val()).trigger('change');
						$pageFourModel
							.val($pageOneModel.val())
							.trigger('change');
						$pageFourLength
							.val($pageOneLength.val())
							.trigger('change');
						$pageFourRegNumber
							.val($pageOneRegNumber.val())
							.trigger('change');

						var winterizationDateString =
							$pageOneWinterizationMonth.text() +
							'/' +
							$pageOneWinterizationDay.text() +
							'/' +
							$pageOneWinterizationYear.text();
						$pageFourWinterizationDate
							.val(winterizationDateString)
							.trigger('change');
					}, 100);
				}
			}, 100);
		});
	}
});
