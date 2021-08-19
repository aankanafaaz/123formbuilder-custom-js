jQuery(document).ready(function () {
    var hndl = setInterval(function () {
        if (jQuery('[data-role="next-page"]').length > 0) {
            init();
            clearInterval(hndl);
        }
    }, 500);

    function init() {
        // page one inputs
        var $pageOneFirstName          = jQuery('[data-id="98331218"] input').eq(0),
            $pageOneLastName           = jQuery('[data-id="98331218"] input').eq(1),
            $pageOneYear               = jQuery('[data-id="98331225"] input'),
            $pageOneMake               = jQuery('[data-id="98331226"] input'),
            $pageOneModel              = jQuery('[data-id="98331227"] input'),
            $pageOneLength             = jQuery('[data-id="98331228"] input'),
            $pageOneRegNumber          = jQuery('[data-id="98331257"] input'),
            $pageOneWinterizationMonth = jQuery('#date-0000000c-month'),
            $pageOneWinterizationDay   = jQuery('#date-0000000c-day'),
            $pageOneWinterizationYear  = jQuery('#date-0000000c-year'),
            $pageOneEmail              = jQuery('[data-id="98331219"] input'),
            $pageOnePhone              = jQuery('[data-id="98331220"] input'),
            $pageOneAddress1           = jQuery('[data-id="98331221"] input').eq(0),
            $pageOneAddress2           = jQuery('[data-id="98331221"] input').eq(1),
            $pageOneCity               = jQuery('[data-id="98331221"] input').eq(2),
            $pageOneState              = jQuery('[data-id="98331221"] input').eq(3),
            $pageOneZip                = jQuery('[data-id="98331221"] input').eq(4);

        // page four inputs
        var $pageFourFirstName         = jQuery('[data-id="98331246"] input').eq(0),
            $pageFourLastName          = jQuery('[data-id="98331246"] input').eq(1),
            $pageFourYear              = jQuery('[data-id="98331252"] input'),
            $pageFourMake              = jQuery('[data-id="98331253"] input'),
            $pageFourModel             = jQuery('[data-id="98331254"] input'),
            $pageFourLength            = jQuery('[data-id="98331255"] input'),
            $pageFourRegNumber         = jQuery('[data-id="98331257"] input'),
            $pageFourWinterizationDate = jQuery('[data-id="98331251"] input'),
            $pageFourEmail             = jQuery('[data-id="98331248"] input'),
            $pageFourPhone             = jQuery('[data-id="98331250"] input'),
            $pageFourAddress1          = jQuery('[data-id="98331249"] input').eq(0),
            $pageFourAddress2          = jQuery('[data-id="98331249"] input').eq(1),
            $pageFourCity              = jQuery('[data-id="98331249"] input').eq(2),
            $pageFourState             = jQuery('[data-id="98331249"] input').eq(3),
            $pageFourZip               = jQuery('[data-id="98331249"] input').eq(4);

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
