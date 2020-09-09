jQuery(document).ready(function () {
	var hndl = setInterval(function () {
		if (jQuery('[data-role="next-page"]').length > 0) {
			init();
			clearInterval(hndl);
		}
	}, 500);

	function init() {
		// page one inputs
		var $pageOneFirstName          = jQuery('[data-id="67537304"] input').eq(0),
		    $pageOneLastName           = jQuery('[data-id="67537304"] input').eq(1),
		    $pageOneYear               = jQuery('[data-id="67539478"] input'),
		    $pageOneMake               = jQuery('[data-id="67539480"] input'),
		    $pageOneModel              = jQuery('[data-id="67539482"] input'),
		    $pageOneLength             = jQuery('[data-id="67539506"] input'),
		    $pageOneRegNumber          = jQuery('[data-id="67539517"] input'),
		    $pageOneWinterizationMonth = jQuery('#date-0000000c-month'),
		    $pageOneWinterizationDay   = jQuery('#date-0000000c-day'),
		    $pageOneWinterizationYear  = jQuery('#date-0000000c-year'),
		    $pageOneEmail              = jQuery('[data-id="67537305"] input'),
		    $pageOnePhone              = jQuery('[data-id="67537306"] input'),
		    $pageOneAddress1           = jQuery('[data-id="67537391"] input').eq(0),
		    $pageOneAddress2           = jQuery('[data-id="67537391"] input').eq(1),
		    $pageOneCity               = jQuery('[data-id="67537391"] input').eq(2),
		    $pageOneState              = jQuery('[data-id="67537391"] input').eq(3),
		    $pageOneZip                = jQuery('[data-id="67537391"] input').eq(4);

		// page four inputs
		var $pageFourFirstName         = jQuery('[data-id="67587327"] input').eq(0),
		    $pageFourLastName          = jQuery('[data-id="67587327"] input').eq(1),
		    $pageFourYear              = jQuery('[data-id="67636764"] input'),
		    $pageFourMake              = jQuery('[data-id="67636767"] input'),
		    $pageFourModel             = jQuery('[data-id="67636778"] input'),
		    $pageFourLength            = jQuery('[data-id="67636787"] input'),
		    $pageFourRegNumber         = jQuery('[data-id="67587374"] input'),
		    $pageFourWinterizationDate = jQuery('[data-id="67736412"] input'),
		    $pageFourEmail             = jQuery('[data-id="67751494"] input'),
		    $pageFourPhone             = jQuery('[data-id="67751491"] input'),
		    $pageFourAddress1          = jQuery('[data-id="67751577"] input').eq(0),
		    $pageFourAddress2          = jQuery('[data-id="67751577"] input').eq(1),
		    $pageFourCity              = jQuery('[data-id="67751577"] input').eq(2),
		    $pageFourState             = jQuery('[data-id="67751577"] input').eq(3),
		    $pageFourZip               = jQuery('[data-id="67751577"] input').eq(4);

		var $nextPageButtonForPageThree = jQuery('[data-role="next-page"][data-page-target="3"]'),
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
						$pageFourYear
							.val($pageOneYear.val())
							.trigger('change');
						$pageFourMake
							.val($pageOneMake.val())
							.trigger('change');
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

						$pageFourEmail
							.val($pageOneEmail.val())
							.trigger('change');
						$pageFourPhone
							.val($pageOnePhone.val())
							.trigger('change');
						$pageFourAddress1
							.val($pageOneAddress1.val())
							.trigger('change');
						$pageFourAddress2
							.val($pageOneAddress2.val())
							.trigger('change');
						$pageFourCity
							.val($pageOneCity.val())
							.trigger('change');
						$pageFourState
							.val($pageOneState.val())
							.trigger('change');
						$pageFourZip
							.val($pageOneZip.val())
							.trigger('change');
					}, 100);
				}
			}, 100);
		});
	}
});
